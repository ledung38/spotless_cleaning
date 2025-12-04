"use client";
import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Container } from "@/components/ui";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import PageFlip from "@/components/common/PageFlip";

const LayoutComponents = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="min-h-screen -mt-10">
        {/* <SideBar /> */}
        {children}
      </div>
      <Footer />
      <PageFlip />
    </div>
  );
};

export default LayoutComponents;
