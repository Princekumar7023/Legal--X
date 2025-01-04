"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Briefcase, Shield, Users } from "lucide-react";
import { FeaturedLawyers } from "@/components/featured-lawyers";
import { PracticeAreas } from "@/components/practice-areas";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";
import laywer from "@/assets/lawyer1.png";
import { ServicesSection } from "@/components/Services";
import Chatbot from "@/components/Chatbot";
import { PricingSections } from "@/components/Pricing";
import { useEffect, useState } from "react";
import { getLawyers } from "@/actions/lawyer";
import { lawyerDetails } from "@prisma/client";
import { UserData } from "@/types";
import lawyer2 from "@/assets/Lawyer.svg";
import KnowledgeCenter from "./Knowledge-center";

export default function HomePage({ user }: { user: UserData }) {
  const [lawyers, setLawyers] = useState<lawyerDetails[]>([]);

  useEffect(() => {
    async function getAllLawyers() {
      const lawyers = await getLawyers();
      setLawyers(lawyers.slice(0, 7));
    }
    getAllLawyers();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative w-full overflow-hidden rounded-b-3xl pt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20" />
        <div className="relative mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-2 px-4 sm:px-6 md:mt-0 md:grid-cols-2 md:gap-0 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Legal Partner
              <span className="block text-primary">Anytime, Anywhere</span>
            </h1>
            <p className="mt-5 max-w-md text-xl text-foreground/75 sm:text-2xl">
              Professional legal services at your fingertips
            </p>
            <div className="mt-8 flex justify-center space-x-4">
            <a href="https://superprofile.bio/vp/669b9300048d7300133c494c" target="__blank">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></a>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
          <Image
            src={laywer}
            alt=""
            placeholder="blur"
            className="mx-auto h-[480px] rounded-xl object-cover object-top drop-shadow-xl md:ml-20 md:h-[800px]"
          />
        </div>
      </section>

      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose LegalX?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide comprehensive legal solutions tailored to your needs
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedLawyers lawyers={lawyers} user={user} />
      <PricingSections />
      <ServicesSection />
      <div className="flex flex-wrap items-center justify-center gap-8 py-32">
        <KnowledgeCenter />
        <Image
          src={lawyer2}
          alt="lawyer img"
          className="rounded-3xl bg-secondary/10 transition-all duration-500 hover:scale-105"
        />
      </div>
      <PracticeAreas />
      <Testimonials />
      <Chatbot />
    </div>
  );
}

const features = [
  {
    title: "Expert Lawyers",
    description: "Access to experienced legal professionals in various fields",
    icon: Scale,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for your legal matters",
    icon: Users,
  },
  {
    title: "Secure & Confidential",
    description: "Your information is protected with enterprise-grade security",
    icon: Shield,
  },
  {
    title: "Business Solutions",
    description: "Comprehensive legal services for your business needs",
    icon: Briefcase,
  },
];
