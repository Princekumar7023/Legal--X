"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  FileText,
  Users,
  Shield,
  Scale,
  Building2,
  Handshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Business formation, mergers & acquisitions, and corporate governance",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property transactions, leasing agreements, and land use law",
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    description: "Patents, trademarks, copyrights, and trade secrets",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Divorce, custody, adoption, and domestic relations",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Criminal litigation, appeals, and white-collar crime",
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Dispute resolution, mediation, and trial advocacy",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Workplace rights, contracts, and compliance",
  },
  {
    icon: Handshake,
    title: "Estate Planning",
    description: "Wills, trusts, and estate administration",
  },
];

export function PracticeAreas() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Our Practice Areas</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We offer comprehensive legal services across various practice areas,
            ensuring expert representation for all your legal needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <area.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
