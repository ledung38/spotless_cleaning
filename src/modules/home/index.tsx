"use client";
import { Button } from "@/components/ui";
import Card, { CardContent } from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { Row } from "@/components/ui/Row";
import { Col } from "@/components/ui/Col";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// Service data
const services = [
  {
    id: 1,
    title: "End of Lease Cleaning",
    description:
      "Complete cleaning service for property handover. We ensure your property meets all lease requirements.",
    icon: "🏠",
    link: "/service/end-of-lease-cleaning",
  },
  {
    id: 2,
    title: "Regular Cleaning",
    description:
      "Consistent weekly or bi-weekly cleaning to keep your home fresh and organized.",
    icon: "✨",
    link: "/service/regular-cleaning",
  },
  {
    id: 3,
    title: "Deep Cleaning",
    description:
      "Thorough cleaning service that covers every corner of your space with professional attention.",
    icon: "🔍",
    link: "/service/deep-cleaning",
  },
  {
    id: 4,
    title: "Restaurant Cleaning",
    description:
      "Specialized commercial cleaning for restaurants ensuring hygiene and compliance standards.",
    icon: "🍽️",
    link: "/service/restaurant-cleaning",
  },
  {
    id: 5,
    title: "Airbnb Cleaning",
    description:
      "Quick turnaround cleaning between guests. Professional service for short-term rental properties.",
    icon: "🏡",
    link: "/service/airbnb-cleaning",
  },
  {
    id: 6,
    title: "Office Cleaning",
    description:
      "Professional office cleaning to maintain a productive and hygienic workspace for your team.",
    icon: "🏢",
    link: "/service/office-cleaning",
  },
];

// Why Choose Us data
const whyChooseUs = [
  {
    title: "Professional Team",
    description: "Trained and experienced cleaning specialists",
    value: "15+",
    metric: "Years Experience",
  },
  {
    title: "Eco-Friendly",
    description: "Safe and sustainable cleaning products",
    value: "100%",
    metric: "Eco Products",
  },
  {
    title: "On-Time Service",
    description: "Always arrive on schedule and deliver on promise",
    value: "98%",
    metric: "On-Time Rate",
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates with transparent pricing",
    value: "$25",
    metric: "Starting Price",
  },
];

// Customer Reviews
const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely fantastic service! The team was professional, thorough, and left my home spotless.",
    service: "Regular Cleaning",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment:
      "Best deep cleaning service I've used. Highly recommend for anyone needing quality cleaning.",
    service: "Deep Cleaning",
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment:
      "Perfect for Airbnb turnovers! Quick, efficient, and my guests always compliment the cleanliness.",
    service: "Airbnb Cleaning",
  },
];

// Areas We Service
const areas = [
  "Downtown",
  "Uptown",
  "Westside",
  "Eastside",
  "North District",
  "South District",
  "Central Area",
  "Riverside",
];

const Home = () => {
  return (
    <div className="w-full">
      {/* THEME & BANNER SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 text-white pt-24 pb-12 overflow-hidden">
        {/* Animated gradient background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)] relative z-10">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4 animate-in fade-in slide-in-from-left-12 duration-700">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                  Spotless Cleaning{" "}
                  <span className="text-yellow-300">Excellence</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 drop-shadow leading-relaxed">
                  Professional cleaning services that transform your space.
                  Trusted by 5,000+ customers across Sydney with 99.8%
                  satisfaction rate.
                </p>
              </div>

              <div
                className="space-y-4 animate-in fade-in slide-in-from-left-12 duration-700"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex gap-6 pt-2">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 hover:bg-white/30 transition-all">
                    <p className="text-3xl lg:text-4xl font-bold">5000+</p>
                    <p className="text-sm text-blue-100">Happy Customers</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 hover:bg-white/30 transition-all">
                    <p className="text-3xl lg:text-4xl font-bold">99.8%</p>
                    <p className="text-sm text-blue-100">Satisfaction Rate</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 hover:bg-white/30 transition-all">
                    <p className="text-3xl lg:text-4xl font-bold">15+</p>
                    <p className="text-sm text-blue-100">Years Experience</p>
                  </div>
                </div>
              </div>

              <div
                className="flex gap-4 pt-4 animate-in fade-in slide-in-from-left-12 duration-700"
                style={{ animationDelay: "0.4s" }}
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  📅 Book Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-96 lg:h-[500px] hidden lg:block animate-in fade-in slide-in-from-right-12 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <div
                    className="text-9xl animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    ✨
                  </div>
                  <h3 className="text-3xl font-bold mt-8">Crystal Clean</h3>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-300 rounded-full opacity-10 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gradient-to-b from-white dark:from-slate-950 to-gray-50 dark:to-slate-900">
        <Container>
          <div className="text-center mb-20 animate-in fade-in zoom-in duration-700">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized cleaning solutions tailored to meet your unique needs
              with professional expertise
            </p>
          </div>

          <Row gutter={[24, 24]} cols={3}>
            {services.map((service, idx) => (
              <Col
                key={service.id}
                span={8}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link href={service.link}>
                  <Card className="h-full cursor-pointer group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <CardContent className="p-8 space-y-4 h-full flex flex-col relative z-10">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold dark:text-white group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 flex-grow leading-relaxed">
                        {service.description}
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 justify-start p-0 h-auto font-semibold"
                      >
                        View Details →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <Container>
          <div className="text-center mb-20 relative z-10 animate-in fade-in duration-700">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine expertise, innovation, and customer care to deliver
              exceptional results
            </p>
          </div>

          <Row gutter={[24, 24]} cols={4}>
            {whyChooseUs.map((item, index) => (
              <Col
                key={index}
                span={6}
                className="animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <p className="text-5xl lg:text-6xl font-bold mb-3 text-yellow-300">
                      {item.value}
                    </p>
                    <p className="text-lg font-semibold mb-3 text-white">
                      {item.metric}
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm group-hover:text-white/90 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-gradient-to-b from-white dark:from-slate-950 to-gray-50 dark:to-slate-900">
        <Container>
          <div className="text-center mb-20 animate-in fade-in duration-700">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              ⭐ Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear directly from our satisfied customers across Sydney
            </p>
          </div>

          <Row gutter={[24, 24]} cols={3}>
            {reviews.map((review, index) => (
              <Col
                key={index}
                span={8}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  <CardContent className="p-8 space-y-4 relative z-10 flex flex-col h-full">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic flex-grow leading-relaxed">
                      &quot;{review.comment}&quot;
                    </p>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="font-bold dark:text-white">{review.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {review.service}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* AREAS WE SERVICE SECTION */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="text-center mb-20 animate-in fade-in duration-700">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              🗺️ Areas We Service
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Available throughout the greater Sydney metropolitan area with
              expanding coverage
            </p>
          </div>

          <Row gutter={[16, 16]} cols={4}>
            {areas.map((area, index) => (
              <Col
                key={index}
                span={6}
                className="animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-center border border-transparent group-hover:border-white/30 transition-all duration-300 transform group-hover:scale-105 cursor-pointer h-full flex flex-col items-center justify-center min-h-[150px]">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {area}
                      </p>
                      <div className="flex items-center gap-2 justify-center">
                        <div className="w-12 h-1 bg-yellow-300 rounded-full"></div>
                        <span className="text-sm font-semibold text-yellow-300">
                          100% Coverage
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Service expansion info */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 text-center border-2 border-blue-200 dark:border-slate-600 shadow-xl animate-in fade-in zoom-in duration-700">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4 dark:text-white">
              Expanding Service Areas
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              We&apos;re continuously expanding our service areas. Contact us to
              check if your location is covered or to arrange a special booking.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              📞 Contact Us for More Info
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA SECTION - FINAL PUSH */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="animate-in fade-in slide-in-from-left-12 duration-700">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Ready for a{" "}
                <span className="text-yellow-300">Spotless Space?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Schedule your cleaning service today and experience the
                difference professional care makes. Get 20% OFF your first
                booking!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  📅 Book Now
                </Button>
                <Button className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/20 font-semibold rounded-lg backdrop-blur-sm transition-all">
                  💬 Get Free Quote
                </Button>
              </div>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-right-12 duration-700">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="text-7xl mb-4 animate-bounce">🎉</div>
                <p className="text-2xl font-bold mb-2">First-time Customers</p>
                <p className="text-4xl font-bold text-yellow-300 mb-4">
                  20% OFF
                </p>
                <p className="text-white/80">
                  Use code: <span className="font-bold">SPOTLESS20</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
