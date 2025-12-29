"use client";

import { TextGradient } from "@/components/common/TextGradient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components/ui";
import { RHFDatePicker } from "@/components/ui/DatePicker";
import { generateEmailHTML } from "@/lib/utils/email";
import { bookingFormSchema } from "@/modules/booking/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Bed,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Droplets,
  Home,
  MapPin,
  Phone,
  Sparkles,
  User,
  UtensilsCrossed,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useForm, UseFormSetValue } from "react-hook-form";
import { toast as message } from "sonner";

export interface FormData {
  // Step 1
  cleanType: string;
  bedrooms: number;
  bathrooms: number;
  storeys: number;
  laundries: number;

  // Step 2
  customServices: { id: string; count: number }[];

  // Step 3
  frequency: string;

  // Step 4
  date: Date;
  time: string;
  address: string;
  fullName: string;
  email: string;
  phone: string;
}

interface StepProps {
  data: FormData;
  setData: UseFormSetValue<FormData>;
  onNext: () => void;
  onBack: () => void;
  form: any;
}

const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <React.Fragment key={idx}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
              idx < currentStep
                ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/50"
                : idx === currentStep
                  ? "bg-primary/20 border-2 border-primary text-primary"
                  : "bg-background border-2 border-border text-foreground"
            }`}
          >
            {idx < currentStep ? <Check size={24} /> : <span>{idx + 1}</span>}
          </motion.div>

          {idx < totalSteps - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              className={`flex-1 h-1  mx-2 origin-left rounded ${
                idx < currentStep
                  ? "bg-gradient-to-r from-primary to-blue-600"
                  : "bg-border"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Step1: React.FC<StepProps> = ({ data, setData, onNext }) => {
  const cleanTypes = [
    {
      id: "endoflease",
      name: "End of Lease",
      description: "Perfect for move in/out",
      icon: Home,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "regular",
      name: "Regular Cleaning",
      description: "Best for weekly or fortnightly services",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "deep",
      name: "Deep Cleaning",
      description: "More thorough and comprehensive",
      icon: Wind,
      color: "from-purple-500 to-pink-500",
    },

    {
      id: "restaurant",
      name: "Restaurant Cleaning",
      description: "Specialized for restaurants",
      icon: UtensilsCrossed,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "airbnb",
      name: "Airbnb Cleaning",
      description: "Specialized for Airbnb rental properties",
      icon: Building2,
      color: "from-red-500 to-rose-500",
    },
    {
      id: "mould",
      name: "Mould Cleaning",
      description: "Specialized for mould removal",
      icon: Droplets,
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          What Kind of Clean Do You Need?
        </h2>
        <p className="text-muted-foreground">
          Select the type of cleaning service that best suits your needs
        </p>
      </div>

      {/* Clean Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {cleanTypes.map((type, idx) => {
          const Icon = type.icon;
          return (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              type="button"
              onClick={() => setData("cleanType", type.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all bg-card  ${
                data.cleanType === type.id
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center text-white mb-4 mx-auto`}
              >
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{type.name}</h3>
              <p className="text-sm text-muted-foreground">
                {type.description}
              </p>

              {data.cleanType === type.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                  transition={{ duration: 0.2 }}
                >
                  <Check size={16} className="text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Property Details */}
      <div className="bg-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
        <h3 className="font-bold text-lg">Tell Us About Your Home</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              label: "Bedrooms",
              icon: Bed,
              key: "bedrooms",
            },
            {
              label: "Bathrooms",
              icon: Bath,
              key: "bathrooms",
            },
            {
              label: "Storeys",
              icon: Home,
              key: "storeys",
            },
            {
              label: "Laundries",
              icon: Wind,
              key: "laundries",
            },
          ].map((field, idx) => {
            const Icon = field.icon;
            return (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 font-semibold text-sm">
                  <Icon size={16} className="text-primary" />
                  {field.label}
                </label>
                <div className="flex items-center gap-2 bg-background border border-border rounded-lg">
                  <button
                    type="button"
                    onClick={() =>
                      setData(
                        field.key as keyof FormData,
                        Math.max(0, (data[field.key] as number) - 1),
                      )
                    }
                    className="p-2 hover:bg-primary/10 transition"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-bold">
                    {(data[field.key as keyof FormData] as number) || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setData(
                        field.key as keyof FormData,
                        (data[field.key] as number) + 1,
                      )
                    }
                    className="p-2 hover:bg-primary/10 transition"
                  >
                    +
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        type="button"
        disabled={!data.cleanType}
        className="w-full py-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/40 transition-all"
      >
        Continue to Customization
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
};

const Step2: React.FC<StepProps> = ({ data, setData, onNext, onBack }) => {
  const services = [
    { id: "carpet-steam", name: "Carpet Steam Cleaning", icon: Wind },
    { id: "oven", name: "Oven Cleaning", icon: Sparkles },
    { id: "stains", name: "Stains on wall", icon: Wind },
    { id: "balcony", name: "Balcony/Patio Cleaning", icon: Home },
    { id: "windows", name: "Window Interior Cleaning", icon: Sparkles },
    { id: "mould", name: "Mould Cleaning", icon: Sparkles },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Customise Your Service
        </h2>
        <p className="text-muted-foreground">
          {`Select any extra options you'd like to add`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isSelected = data.customServices.some(
            (current) => current.id === service.id && !!current.count,
          );

          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              type="button"
              onClick={() => {
                if (isSelected) {
                  setData(`customServices.${idx}.count` as keyof FormData, 0);
                } else {
                  setData(`customServices.${idx}.count` as keyof FormData, 1);
                }
              }}
              className={`relative bg-card p-5 rounded-xl border-2 transition-all flex items-center gap-3 ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white flex-shrink-0`}
              >
                <Icon size={20} />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-foreground">{service.name}</p>
              </div>

              {isSelected && (
                <>
                  <div className="flex items-center gap-2 bg-background border border-border rounded-lg">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setData(
                          `customServices.${idx}.count` as keyof FormData,
                          Math.max(
                            1,
                            (data.customServices[idx]?.count as number) - 1,
                          ),
                        );
                      }}
                      className="p-2 hover:bg-primary/10 transition"
                    >
                      −
                    </div>
                    <span className="flex-1 text-center font-bold">
                      {data.customServices[idx]?.count || 0}
                    </span>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setData(
                          `customServices.${idx}.count` as keyof FormData,
                          (data.customServices[idx]?.count as number) + 1,
                        );
                      }}
                      className="p-2 hover:bg-primary/10 transition"
                    >
                      +
                    </div>
                  </div>

                  <motion.div
                    layoutId="check"
                    className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <Check size={16} className="text-white" />
                  </motion.div>
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          type="button"
          className="flex-1 py-4 px-6 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onNext}
          className="flex-1 py-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/40 transition-all"
        >
          Continue
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step3: React.FC<StepProps> = ({ data, setData, onNext, onBack }) => {
  const frequencies = [
    {
      id: "weekly",
      name: "Weekly",
      description: "Every week",
      savings: "20% Savings",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "fortnightly",
      name: "Fortnightly",
      description: "Every 2 weeks",
      savings: "15% Savings",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "monthly",
      name: "Monthly",
      description: "Once a month",
      savings: "10% Savings",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "oneoff",
      name: "One-Off",
      description: "Just this time",
      savings: "No discount",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          How Often Do You Need Cleaning?
        </h2>
        <p className="text-muted-foreground">
          Choose your recurring service frequency
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {frequencies.map((freq, idx) => (
          <motion.button
            key={freq.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setData("frequency", freq.id)}
            className={`relative p-6 bg-card rounded-2xl border-2 transition-all text-left ${
              data.frequency === freq.id
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {freq.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {freq.description}
                </p>
              </div>
              {data.frequency === freq.id && (
                <motion.div
                  layoutId="active-freq"
                  className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                >
                  <Check size={16} className="text-white" />
                </motion.div>
              )}
            </div>

            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${freq.color} text-white`}
            >
              {freq.savings}
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onBack}
          className="flex-1 py-4 px-6 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={onNext}
          disabled={!data.frequency}
          className="flex-1 py-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/40 transition-all"
        >
          Continue to Booking
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step4: React.FC<StepProps> = ({ data, setData, onBack, form }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Booking Details
        </h2>
        <p className="text-muted-foreground">
          Provide your information to complete the booking
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="space-y-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <Clock size={18} className="text-primary" />
            Preferred Date
          </label>
          <RHFDatePicker
            name="date"
            placeholder="dd/mm/yyyy"
            formatString="dd/MM/yyyy"
            clearable={false}
          />
        </motion.div>

        {/* Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="space-y-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <Clock size={18} className="text-primary" />
            Preferred Time
          </label>
          <input
            type="time"
            value={data.time}
            onChange={(e) => setData("time", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition hover:text-primary hover:border-primary"
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <User size={18} className="text-primary" />
            Full Name
          </label>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-lg shadow-none  "
                    placeholder="Your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <Sparkles size={18} className="text-primary" />
            Email
          </label>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-lg shadow-none"
                    placeholder="your@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <Phone size={18} className="text-primary" />
            Phone
          </label>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-lg shadow-none "
                    placeholder="Your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* Address - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-2 sm:col-span-2"
        >
          <label className="flex items-center gap-2 font-semibold">
            <MapPin size={18} className="text-primary" />
            Address
          </label>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-lg shadow-none"
                    placeholder="Your full address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
      </div>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex-1 py-4 px-6 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={
            !data.date ||
            !data.time ||
            !data.fullName ||
            !data.email ||
            !data.phone ||
            !data.address
          }
          type="submit"
          className="flex-1 py-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/40 transition-all"
        >
          Complete Booking
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step5: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-8 py-12"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
      >
        <CheckCircle2 size={48} className="text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-black text-foreground">
          Booking Confirmed!
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {`Thank you for choosing N&T Spotless Cleaning. We've received your
          booking and our team will contact you shortly to confirm the details.`}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-primary/10 border border-primary/50 rounded-2xl p-8 space-y-4 max-w-2xl mx-auto"
      >
        <h3 className="font-bold text-lg text-foreground">{`What's Next?`}</h3>
        <ul className="space-y-3 text-left">
          {[
            "We'll call you within 24 hours to confirm your booking",
            "You'll receive a confirmation email with all details",
            "Our team will arrive on your scheduled date and time",
            "Enjoy your spotless clean!",
          ].map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={20}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => (window.location.href = "/")}
        className="inline-flex px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all"
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
};

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<FormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      cleanType: "",
      bedrooms: 0,
      bathrooms: 0,
      storeys: 1,
      laundries: 0,
      customServices: [
        {
          id: "carpet-steam",
          count: 0,
        },
        {
          id: "oven",
          count: 0,
        },
        {
          id: "stains",
          count: 0,
        },
        {
          id: "balcony",
          count: 0,
        },
        {
          id: "windows",
          count: 0,
        },
        {
          id: "mould",
          count: 0,
        },
      ],
      frequency: "",
      time: "",
      address: "",
      email: "",
      phone: "",
      fullName: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const steps = [
    { title: "Service Type", component: Step1 },
    { title: "Customization", component: Step2 },
    { title: "Frequency", component: Step3 },
    { title: "Details", component: Step4 },
    { title: "Confirmation", component: Step5 },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  async function onSubmit(values: FormData) {
    try {
      const content = generateEmailHTML(values);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: values.email,
          subject: `Boss, we have a New Cleaning Order – ${values.fullName}`,
          message: content,
        }),
      });

      const data = await res.json();
      if (data?.success) {
        message.success(
          "Your cleaning service booking has been successfully created!",
        );
        setCurrentStep(currentStep + 1);
        form.reset();
      } else {
        message.error(
          "Something went wrong. Please try again or contact support.",
        );
      }
    } catch (error: any) {
      message.error("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-primary/2 to-background py-12 lg:py-20">
      {/* Background shapes */}
      <motion.div
        className="fixed top-20 -right-40 w-400 h-400 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-40 -left-32 w-350 h-350 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <TextGradient className="text-4xl lg:text-5xl font-black mb-4 leading-20">
            Book Your Cleaning Service
          </TextGradient>
          <p className="text-lg text-foreground">
            Complete steps 1-4 to book your service. Step 5 shows your
            confirmation.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <ProgressBar currentStep={currentStep} totalSteps={5} />
        </motion.div>

        {/* Step Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary/10"
            >
              {currentStep < 4 ? (
                <CurrentStepComponent
                  data={form.watch()}
                  setData={form.setValue}
                  onNext={() => setCurrentStep(currentStep + 1)}
                  onBack={() => setCurrentStep(currentStep - 1)}
                  form={form}
                />
              ) : (
                <Step5 />
              )}
            </motion.div>
          </form>
        </Form>

        {/* Footer Info */}
        {currentStep < 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8 text-muted-foreground"
          >
            <p>Need help? Call us on 0451-210-238</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BookingWizard;
