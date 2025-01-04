import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-xl px-2 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance bg-gradient-to-r from-foreground to-muted-foreground/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                The best NextJS <br />
                Starter Template
              </h1>
              <p className="mx-auto text-muted-foreground">
                Comes with ShadCN UI, theme toggle too! Accelerate your
                development process with this template.
              </p>
            </div>
            <div className="flex gap-4 px-2">
              <Button className="max-w-fit">Login</Button>
              <Button asChild className="max-w-fit" variant={"outline"}>
                <Link href="https://github.com/Xeven777/next-shadcn-template">
                  Github
                </Link>
              </Button>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-bottom shadow-md sm:w-full lg:order-last"
            height="310"
            src="https://assets.lummi.ai/assets/Qmc6UDXMS3TbGxidEX9BoeemaWKQTa1VrVZnHKSPvEXNPz?auto=format&w=1500"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
