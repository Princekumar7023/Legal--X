"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Service {
  link?: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  features: string[];
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Startup Documents",
    services: [
      {
        title: "Term Sheet Drafting",
        price: 3499,
        originalPrice: 8999,
        discount: 62,
        link:"https://spf.bio/howyE",
        features: [
          "Get your term sheet reviewed by the best startup lawyers",
          "Understand the key terms of your term sheet",
          "Negotiate a better term sheet with the help of an expert",
          "Get the mentorship on your term sheet from the best in the industry",
          "Get the review done in less than 24 Hrs.",
        ],
      },
      {
        title: "Shareholder Subscription Agreement",
        price: 14999,
        originalPrice: 28999,
        discount: 66,
        features: [
          "Get an impeccable shareholder's agreement drafted for your company",
          "Discussion with India's top Startup expert",
          "Best document drafting experts in the country",
          "Delivery of the document in just 5 working days",
        ],
      },
      {
        title: "Freelancer Agreement",
        price: 4499,
        originalPrice: 6999,
        discount: 37,
        features: [
          "Get a Freelancer agreement for your startup",
          "Easy way to hire freelancers with complete trust",
          "With Freelancer agreement now hire from anywhere in the world",
        ],
      },
    ],
  },
  {
    title: "Property Documents",
    services: [
      {
        title: "Gift Deed",
        price: 5999,
        originalPrice: 9999,
        discount: 40,
        features: [
          "Get your Gift Deed drafted with Top in class legal drafting experts",
          "Get a reliable consultation on the use of Gift Deed",
          "First Draft of the gift deed in just 48 hrs",
          "Consultation in your language",
        ],
      },
      {
        title: "Sale Deed Drafting",
        price: 4999,
        originalPrice: 9999,
        discount: 50,
        features: [
          "Experienced Property Lawyers for Sale Deed Drafting",
          "Consultation call with the Lawyer",
          "Final Draft in just 48 hours",
        ],
      },
    ],
  },
  {
    title: "Essential Legal Documents",
    services: [
      {
        title: "Privacy Policy",
        price: 3999,
        originalPrice: 6999,
        discount: 50,
        features: [
          "Discuss with expert about your requirements of Privacy policy for your App & website",
          "Impeccable drafting of Privacy Policy document for your App & Website",
          "24 Hrs Drafting delivery",
          "Discuss in your language",
        ],
      },
      {
        title: "Terms of Use",
        price: 4999,
        originalPrice: 7999,
        discount: 65,
        features: [
          "Get your website's mandatory document to stay compliant",
          "Get the best lawyers to understand and draft tailor made Terms of Use just for your website",
          "Quick and reliable drafting",
        ],
      },
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Legal Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Professional legal document services tailored for your business
            needs
          </p>
        </motion.div>

        <Accordion type="multiple" className="w-full">
          {serviceCategories.map((category) => (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger className="text-xl font-semibold">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: serviceIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <Card className="relative flex h-full flex-col">
                        <CardHeader>
                          <CardTitle className="flex flex-col gap-2">
                            <span>{service.title}</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold">
                                ₹{service.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{service.originalPrice.toLocaleString()}
                              </span>
                              <Badge
                                variant="secondary"
                                className="text-primary"
                              >
                                {service.discount}% Off
                              </Badge>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button className="flex-1">Get Started</Button>
                          <Button variant="outline" className="flex-1">
                            Know More
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
