import {
  AnimateDiv,
  AnimateSpan,
  AnimateTr,
} from "@/components/common/Animate";
import { CompactApp } from "@/components/common/Compact";
import { TickIcon } from "@/components/icons";
import PricingList from "@/modules/pricing/PricingCard";

import React from "react";

const ComparisonRow: React.FC<{
  label: string;
  items: (boolean | string)[];
}> = ({ label, items }) => {
  return (
    <AnimateTr
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-border/30 hover:bg-primary/5 transition-colors"
    >
      <td className="py-4 px-6 font-semibold text-foreground">{label}</td>
      {items.map((item, idx) => (
        <td key={idx} className="py-4 px-6 text-center">
          {typeof item === "boolean" ? (
            <AnimateDiv
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`w-5 h-5 rounded-full flex items-center justify-center mx-auto ${
                item ? "" : "bg-muted border-2 border-border"
              }`}
            >
              {item && <TickIcon className="text-primary size-6" />}
            </AnimateDiv>
          ) : (
            <span className="text-sm text-foreground/70">{item}</span>
          )}
        </td>
      ))}
    </AnimateTr>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section className="relative w-full py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-background via-primary/2 to-background">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-primary/5 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
            Transparent Pricing Plans
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {`Choose the cleaning service that's right for you and get discounts
            when you book a regular cleaning service.`}
            <AnimateSpan
              className="font-semibold text-primary"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Join 2,000+ happy customers!
            </AnimateSpan>
          </p>
        </AnimateDiv>

        {/* Pricing Cards Grid */}
        <PricingList />
        {/* Comparison Table */}
        <AnimateDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Service Comparison
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-border/50 bg-gradient-to-b from-card/70 to-card/30 backdrop-blur-sm shadow-xl shadow-primary/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-primary/5">
                  <th className="py-4 px-6 text-left font-bold text-foreground">
                    Features
                  </th>
                  {[
                    "End of Lease",
                    "Deep Cleaning",
                    "Regular",
                    "Mould",
                    "Restaurant",
                    "Airbnb",
                  ].map((name, idx) => (
                    <th
                      key={idx}
                      className="py-4 px-6 text-center font-bold text-foreground"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  label="Online Booking"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Customizable Service"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Guaranteed Results"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Free Cancellation 24hrs"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Consistent Cleaners"
                  items={[false, false, true, false, false, false]}
                />
                <ComparisonRow
                  label="All Supplies Included"
                  items={[false, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Savings/Discounts"
                  items={[false, false, true, true, false, true]}
                />
                <ComparisonRow
                  label="Express Service (2-4hrs)"
                  items={[false, false, false, false, false, true]}
                />
              </tbody>
            </table>
          </div>
        </AnimateDiv>

        <AnimateDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CompactApp
            title="Ready to get started?"
            subtitle="Pick the perfect cleaning plan for your needs and experience the N&T
            Spotless Cleaning difference today."
            textButton="Get Your Free Quote"
            className="rounded-3xl"
          />
        </AnimateDiv>
      </div>
    </section>
  );
};

export default Pricing;
