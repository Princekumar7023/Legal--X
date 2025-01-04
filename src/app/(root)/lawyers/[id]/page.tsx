import { getLawyerById } from "@/actions/lawyer";
import StartChatBtn from "@/components/StartChatBtn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { MapPin, Mail, Phone } from "lucide-react";

export default async function LawyerProfile({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const lawyerId = (await params).id;
  const { data: lawyer } = await getLawyerById({ id: lawyerId });
  console.log(lawyer);
  if (!lawyer) {
    return (
      <div className="h-80 py-24 text-center text-2xl font-bold md:text-5xl">
        Lawyer not found
      </div>
    );
  }
  const user = await currentUser();
  const simplifiedUser = user
    ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      }
    : null;
  if (!simplifiedUser) {
    console.log("User not logged in");
  }
  return (
    <div className="container mx-auto mt-12 max-w-6xl px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <img
                src={lawyer.image || "https://via.placeholder.com/300x400"}
                alt={lawyer.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="pt-6 md:w-2/3 md:pl-10">
              <h1 className="mb-2 text-3xl font-bold">{lawyer.name}</h1>
              <p className="mb-2 text-lg text-muted-foreground">
                {lawyer.category.join(", ")}
              </p>
              <div className="mb-4 flex items-center">
                <MapPin className="mr-2 size-4 text-muted-foreground" />
                <span>{lawyer.officeAddress}</span>
              </div>
              <div className="mb-4 space-y-2">
                <div className="flex items-center">
                  <Phone className="mr-2 size-4 text-muted-foreground" />
                  <span>{lawyer.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 size-4 text-muted-foreground" />
                  <span>{lawyer.email}</span>
                </div>
              </div>
              <p className="mb-4">
                <span className="text-muted-foreground">Experience :</span>{" "}
                {lawyer.experience}
              </p>
              <div className="flex space-x-4">
                <a href={`tel:${lawyer.phone}`}>
                  <Button variant={"secondary"}>
                    <Phone className="mr-2 size-4" />
                    Book Consultation
                  </Button>
                </a>
                {/*  @ts-expect-error */}
                <StartChatBtn lawyer={lawyer} user={simplifiedUser} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                About {lawyer.name}
              </h2>
              <p className="mt-2 leading-relaxed">{lawyer.about}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-muted-foreground">
                    Education
                  </CardTitle>
                  <CardContent className="px-0">
                    <p className="text-lg font-semibold">{lawyer.education}</p>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-muted-foreground">
                    Bar Council
                  </CardTitle>
                  <CardContent className="px-0">
                    <p className="text-lg font-semibold">{lawyer.barCouncil}</p>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-muted-foreground">
                    Nationality
                  </CardTitle>
                  <CardContent className="px-0">
                    <p className="text-lg font-semibold">
                      {lawyer.nationality}
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-muted-foreground">
                    Languages
                  </CardTitle>
                  <CardContent className="px-0">
                    <p className="text-lg font-semibold">
                      {lawyer.languages.join(", ")}
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
