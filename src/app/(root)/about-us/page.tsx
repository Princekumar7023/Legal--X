"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import lawyer from "@/assets/Portrait.jpeg";

const teamMembers = [
  {
    name: "Prince Kumar",
    role: "Founder",
    image:
      "https://lh4.googleusercontent.com/ZFQL2AtBsp_ZvfDzC6q_aPNwLC7DMQ9144DNdIR6axSRm2oxw38BGgwtWZyhnJV8b1mcVacZfXuiv_BElCX5NnKfKqdZqctesLSKV_POxSo8Q9pPUVkBB-21W8zNJCQITw=w1280",
  },
  {
    name: "Raj Priya Singh",
    role: "Founder",
    image:
      "https://lh4.googleusercontent.com/-KtbcfsiPd9bTan-f-14e7xKREJnTSpCKiXSK9G7VmGab6xY03HmRLPpQCcTDtK_OyNtJSu7kK_FfHL7yFGH4HrS4S7Qm9WVQ9uORaiKCmva9kXHnRXoWbb_u7BUPM7l2Q=w1280",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-background py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-6xl">About Us</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Learn more about our mission, our team, and how to get in touch with
            us.
          </p>
        </motion.div>

        {/* Our Mission */}
        <div className="flex flex-wrap justify-center">
          <Image
            src={lawyer}
            alt="LegalX"
            width={400}
            height={500}
            className="m-auto h-96 rounded-2xl object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="mx-auto max-w-4xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-foreground">
                  <p className="text-center text-lg leading-relaxed">
                    At LegalX, our mission is to transform the legal landscape
                    by bridging the gap between clients and legal professionals
                    through innovative technology.
                  </p>

                  <p className="text-center leading-relaxed">
                    We are dedicated to making legal services accessible,
                    efficient, and affordable for everyone. Our platform
                    simplifies the process of finding, consulting, and hiring
                    legal experts, ensuring reliable legal support without
                    unnecessary complexity.
                  </p>

                  <div className="mt-8">
                    <h4 className="mb-4 text-center font-semibold">
                      Our Key Objectives
                    </h4>
                    <div className="grid gap-6 text-muted-foreground md:grid-cols-2">
                      <div className="space-y-2">
                        <h5 className="font-medium">Enhance Accessibility</h5>
                        <p className="text-sm">
                          Provide a seamless and inclusive platform connecting
                          clients with legal professionals across diverse
                          fields.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">Promote Affordability</h5>
                        <p className="text-sm">
                          Offer competitive pricing and transparent service
                          models to ensure fair rates for quality legal
                          assistance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">Ensure Efficiency</h5>
                        <p className="text-sm">
                          Streamline legal processes through advanced tools,
                          reducing time and effort in addressing legal issues.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">Foster Trust</h5>
                        <p className="text-sm">
                          Build a community of credible legal professionals,
                          supported by robust reviews and ratings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <section className="my-20 flex justify-center">
          <iframe
            width="1100"
            height="660"
            src="https://www.youtube.com/embed/jiMwi88qIBM"
            title="LegalX; your legal partner for all your legal issues anytime ,anywhere just a click away."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="overflow-hidden rounded-2xl hover:shadow-xl"
          ></iframe>
        </section>
        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-32"
        >
          <h3 className="mb-8 text-center text-2xl font-bold md:text-6xl">
            Our Team
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="hover:border-primary">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={700}
                      className="rounded-2xl"
                    />
                    <h4 className="mt-2 text-xl font-semibold">
                      {member.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          id="contact"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-lg font-semibold">Get in Touch</h4>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold">
                    Contact Information
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <a
                        href="mailto:legalxonline@gmail.com"
                        className="inline-flex"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        <span>legalxonline@gmail.com</span>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      <span>+91 95765 29146</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>LegalX , UEM, Kolkata</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <iframe
                      title="LegalX Office Location"
                      src="https://maps-api-ssl.google.com/maps?hl=en-GB&ll=22.560379,88.490291&output=embed&q=University+Of+Engineering+%26+Management,+New+Town,+University+Area,+Plot+No.+III,+B/5,+New+Town+Rd,+Action+Area+III,+Newtown,+New+Town,+West+Bengal+700160,+India+(University+of+Engineering+%26+Management,+Kolkata+(UEM))&z=17"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      className="rounded-2xl"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
