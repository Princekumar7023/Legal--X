"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { lawyerDetails } from "@prisma/client";
import { UserData } from "@/types";
import StartChatBtn from "./StartChatBtn";

export function FeaturedLawyers({
  lawyers,
  user,
}: {
  lawyers: lawyerDetails[];
  user: UserData;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("all");
  const pathname = usePathname();
  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch = lawyer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialization =
      specialization === "all" || lawyer.category.includes(specialization);
    return matchesSearch && matchesSpecialization;
  });
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {pathname === "/lawyers" ? "All Lawyers" : "Featured Lawyers"}
        </h2>
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Search lawyers by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:max-w-xs"
          />
          <Select value={specialization} onValueChange={setSpecialization}>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Filter by specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              <SelectItem value="Criminal">Criminal</SelectItem>
              <SelectItem value="Property">Property</SelectItem>
              <SelectItem value="General">General</SelectItem>
              <SelectItem value="Corporate">Corporate</SelectItem>
              <SelectItem value="Intellectual Property">
                Intellectual Property
              </SelectItem>
              <SelectItem value="Family">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredLawyers.map((lawyer) => (
            <Card key={lawyer.id}>
              <CardContent className="p-4">
                <img
                  src={lawyer.image || "https://via.placeholder.com/400x400"}
                  alt={lawyer.name}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-1 text-lg font-semibold">{lawyer.name}</h3>
                <p className="mb-1 text-sm text-muted-foreground">
                  {lawyer.phone}
                </p>
                <p className="mb-2 text-sm text-muted-foreground">
                  {lawyer.nationality}
                </p>
                <div className="mb-2 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 5
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {lawyer.experience}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/lawyers/${lawyer.id}`} passHref>
                    <Button variant="outline">View Profile</Button>
                  </Link>
                  <StartChatBtn lawyer={lawyer} user={user} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
