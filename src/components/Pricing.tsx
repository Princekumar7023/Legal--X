"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const professionalFees = [
  {
    range: "₹0 – ₹20,000",
    price: "1499",
    gst: "18% GST",
    link:"https://spf.bio/5iVG0"
  },
  {
    range: "₹20,001 – ₹1,00,000",
    price: "1999",
    gst: "18% GST",
  },
  {
    range: "₹1,00,001 – ₹25,00,000",
    price: "2999",
    gst: "18% GST",
  },
  {
    range: "₹25,00,001 – 1 Cr",
    price: "4999",
    gst: "18% GST",
  },
];

const trademarkPackages = [
  {
    name: "Basic",
    price: "1999",
    features: [
      "Trademark Application Filing",
      "Free Class Search",
      "Free TM Consultation By expert",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    name: "Standard",
    price: "4999",
    features: [
      "Trademark Application Filing",
      "Creative Logo Design By dedicated Logo Designer",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    name: "Premium",
    price: "11999",
    recommended: true,
    features: [
      "Trademark Application Filing",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Use TM next to your brand",
      "Trademark Objection Reply",
      "Trademark Hearing",
      "EMI Facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
];

const gstPackages = [
  {
    name: "Start Up",
    price: "799",
    features: [
      "Application filing for GSTIN",
      "Generate ARN & TRN number",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English",
    ],
  },
  {
    name: "Basic",
    price: "2499",
    features: [
      "GST Registration absolutely FREE",
      "GST Return Filing for 3 Months",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English",
    ],
  },
  {
    name: "Standard",
    price: "4999",
    features: [
      "GST Registration absolutely FREE",
      "GST Return Filing for 6 Months",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English",
    ],
  },
  {
    name: "Premium",
    price: "7999",
    features: [
      "GST Registration absolutely FREE",
      "GST Return Filing for 12 Months",
      "Call, Chat, Email Support",
      "Personally assigned GST Expert",
      "Consultation Available in 3 Languages including English",
    ],
  },
];

export function PricingSections() {
  return (
    <section id="services" className="bg-muted/50 py-24">
      <div className="container mx-auto max-w-7xl space-y-16 px-4">
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Consumer Complaint Fees
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {professionalFees.map((tier, index) => (
              <motion.div
                key={tier.range}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative h-full">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2">
                      <span className="text-sm text-muted-foreground">
                        Purchase/Loss Amount
                      </span>
                      <span>{tier.range}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-4xl font-bold">₹{tier.price}</span>
                      <span className="text-sm text-muted-foreground">
                        +{tier.gst}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Advice + Notice
                    </p>
                    <p className="text-sm font-medium">Professional Fees</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trademark Registration Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Trademark Registration
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trademarkPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "relative h-full",
                    pkg.recommended && "border-primary",
                  )}
                >
                  {pkg.recommended && (
                    <Badge className="absolute right-4 top-4" variant="default">
                      Recommended
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2">
                      <span>{pkg.name}</span>
                      <span className="text-4xl font-bold">₹{pkg.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Contact Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GST Registration Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            GST Registration
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gstPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative h-full">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2">
                      <span>{pkg.name}</span>
                      <span className="text-4xl font-bold">₹{pkg.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Buy Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright Registration Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Copyright Registration
          </h2>
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Copyright Registration
                </CardTitle>
                <p className="text-center text-sm text-muted-foreground">
                  logos, software, art work, books, periodicals, magazines,
                  videos, music, databases, advertisements, cinematography films
                  & video games
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold">₹2,999</span>
                  <p className="text-sm text-muted-foreground">
                    *Exclude Govt. Fees
                  </p>
                </div>
                <ul className="mb-6 space-y-2">
                  {[
                    "Free Consultation with copyright expert",
                    "Dedicated Copyright Expert",
                    "Call, Chat & Email Support",
                    "Drafting and filing",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
