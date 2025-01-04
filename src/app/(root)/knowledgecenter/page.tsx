import KnowledgeCenter from "@/components/Knowledge-center";
import React from "react";
import lawyer2 from "@/assets/Lawyer.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-10 bg-muted/50">
      <Image
        src={lawyer2}
        alt="lawyer img"
        className="rounded-3xl transition-all duration-500 hover:scale-105"
      />
      <KnowledgeCenter />
    </div>
  );
};

export default page;
