"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { addLawyer } from "@/actions/lawyer";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  userId: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  profile_image: z.string().url("Please enter a valid image URL").optional(),
  categories: z
    .array(z.string())
    .nonempty("Please select at least one category"),
  languages: z
    .array(z.string())
    .nonempty("Please select at least one language"),
  email: z.string().email("Please enter a valid email"),
  education: z.string().min(2, "Education details required"),
  experience: z.string().min(1, "Experience details required"),
  description: z
    .string()
    .min(10, "About yourself should be at least 10 characters"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Office address is required"),
  barCouncil: z.string().min(1, "Bar Council Number is required"),
  nationality: z.string().min(2, "Nationality is required"),
});

interface ImprovedProfileFormProps {
  userId: string;
  isLawyer?: boolean;
}

export default function ImprovedProfileForm({
  userId,
  isLawyer,
}: ImprovedProfileFormProps) {
  const router = useRouter();
  if (isLawyer) {
    router.push("/lawyers");
  }

  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId,
      categories: ["General"],
      languages: ["Hindi"],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const result = await addLawyer({ details: values });
      if (result.error) {
        throw new Error(result.error);
      } else toast.success("Profile submitted successfully!");
      router.push("/lawyers/" + result?.data?.id);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto my-20 max-w-5xl">
      <CardHeader>
        <h2 className="mb-6 text-center text-2xl font-bold md:text-4xl">
          Lawyer Profile
        </h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Personal Information */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profile_image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Picture</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/profile.jpg"
                        type="url"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormDescription>Enter a valid image URL</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Professional Details */}
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="w-full"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select Categories" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {[
                              "Criminal",
                              "Property",
                              "General",
                              "Corporate",
                              "Intellectual Property",
                              "Family",
                            ].map((category) => (
                              <MultiSelectorItem
                                key={category}
                                value={category}
                              >
                                {category}
                              </MultiSelectorItem>
                            ))}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Languages</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="w-full"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select Languages" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {["Hindi", "Bengali", "English", "Marathi"].map(
                              (language) => (
                                <MultiSelectorItem
                                  key={language}
                                  value={language}
                                >
                                  {language}
                                </MultiSelectorItem>
                              ),
                            )}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Contact Information */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="my-2">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder="Enter your phone number"
                        {...field}
                        defaultCountry="IN"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Professional Background */}
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your highest qualification"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Experience</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Years of experience"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="barCouncil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bar Council No.</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Bar Council Number"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nationality"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Additional Details */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Office Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your workplace address"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About Yourself</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself..."
                        className="w-full resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write a brief professional bio
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
                {loading && <Loader className="ml-2 animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
