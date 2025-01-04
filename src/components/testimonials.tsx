"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    content:
      "LegalX provided exceptional service for my business needs. Their corporate law team was professional, thorough, and helped me navigate complex legal challenges.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    content:
      "The intellectual property lawyers at LegalX helped protect my startup's innovations. Their expertise in patent law was invaluable for our growth.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Real Estate Developer",
    content:
      "I've worked with many law firms, but LegalX stands out for their real estate expertise. They make complex transactions smooth and efficient.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Client Testimonials</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            See what our clients say about their experience working with our
            legal team
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
