"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const countries = [
  "India",
  "USA",
  "UK",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "China",
  "Japan",
  "Brazil",
  "South Africa",
  "Russia",
  "Mexico",
  "Italy",
  "Spain",
];

const categories = [
  "Traffic",
  "Crime",
  "Family",
  "Property",
  "Tax",
  "Employment",
  "Corporate",
  "Intellectual Property",
  "Immigration",
  "Banking",
  "Contract",
  "Consumer Rights",
  "Environmental",
  "Cybersecurity",
  "Privacy",
  "Education",
  "Human Rights",
  "Insurance",
  "Healthcare",
  "Technology",
  "Real Estate",
  "Criminal Defense",
  "Patent",
  "Trademark",
  "Divorce",
  "Wills and Trusts",
  "Bankruptcy",
  "Adoption",
  "Civil Rights",
  "Social Security",
];

const links = {
  India: {
    Traffic: "https://en.wikipedia.org/wiki/Traffic_in_India",
    Crime: "https://en.wikipedia.org/wiki/Crime_in_India",
    Family: "https://en.wikipedia.org/wiki/Family_law_in_India",
    Property: "https://en.wikipedia.org/wiki/Land_law_in_India",
    Tax: "https://en.wikipedia.org/wiki/Taxation_in_India",
    Employment: "https://en.wikipedia.org/wiki/Labour_law_in_India",
    Corporate: "https://en.wikipedia.org/wiki/Corporate_law_in_India",
    "Intellectual Property":
      "https://en.wikipedia.org/wiki/Intellectual_property_in_India",
    Immigration: "https://en.wikipedia.org/wiki/Immigration_to_India",
    Banking: "https://en.wikipedia.org/wiki/Banking_in_India",
    Contract: "https://en.wikipedia.org/wiki/Indian_Contract_Act",
    "Consumer Rights":
      "https://en.wikipedia.org/wiki/Consumer_protection_in_India",
    Environmental: "https://en.wikipedia.org/wiki/Environmental_law_in_India",
    Cybersecurity: "https://en.wikipedia.org/wiki/Cybersecurity_in_India",
    Privacy: "https://en.wikipedia.org/wiki/Privacy_in_India",
    Education: "https://en.wikipedia.org/wiki/Education_in_India",
    "Human Rights": "https://en.wikipedia.org/wiki/Human_rights_in_India",
    Insurance: "https://en.wikipedia.org/wiki/Insurance_in_India",
    Healthcare: "https://en.wikipedia.org/wiki/Healthcare_in_India",
    Technology: "https://en.wikipedia.org/wiki/Information_technology_in_India",
    "Real Estate": "https://en.wikipedia.org/wiki/Real_estate_in_India",
    "Criminal Defense": "https://en.wikipedia.org/wiki/Criminal_law_in_India",
    Patent: "https://en.wikipedia.org/wiki/Indian_Patent_Act",
    Trademark: "https://en.wikipedia.org/wiki/Trademark_law_in_India",
    Divorce: "https://en.wikipedia.org/wiki/Divorce_in_India",
    "Wills and Trusts": "https://en.wikipedia.org/wiki/Will_and_testament",
    Bankruptcy: "https://en.wikipedia.org/wiki/Insolvency_and_Bankruptcy_Code",
    Adoption: "https://en.wikipedia.org/wiki/Adoption_in_India",
    "Civil Rights": "https://en.wikipedia.org/wiki/Human_rights_in_India",
    "Social Security": "https://en.wikipedia.org/wiki/Social_security_in_India",
  },
  USA: {
    Traffic: "https://en.wikipedia.org/wiki/Traffic_in_the_United_States",
    Crime: "https://en.wikipedia.org/wiki/Crime_in_the_United_States",
    Family: "https://en.wikipedia.org/wiki/Family_law_in_the_United_States",
    Property: "https://en.wikipedia.org/wiki/Real_estate_in_the_United_States",
    Tax: "https://en.wikipedia.org/wiki/Taxation_in_the_United_States",
    Employment: "https://en.wikipedia.org/wiki/Labor_law_in_the_United_States",
    Corporate:
      "https://en.wikipedia.org/wiki/Corporate_law_in_the_United_States",
    "Intellectual Property":
      "https://en.wikipedia.org/wiki/Intellectual_property_in_the_United_States",
    Immigration:
      "https://en.wikipedia.org/wiki/Immigration_to_the_United_States",
    Banking: "https://en.wikipedia.org/wiki/Banking_in_the_United_States",
    Contract: "https://en.wikipedia.org/wiki/Contract_law_in_the_United_States",
    "Consumer Rights":
      "https://en.wikipedia.org/wiki/Consumer_protection_in_the_United_States",
    Environmental:
      "https://en.wikipedia.org/wiki/Environmental_law_in_the_United_States",
    Cybersecurity:
      "https://en.wikipedia.org/wiki/Cybersecurity_in_the_United_States",
    Privacy: "https://en.wikipedia.org/wiki/Privacy_laws_of_the_United_States",
    Education: "https://en.wikipedia.org/wiki/Education_in_the_United_States",
    "Human Rights":
      "https://en.wikipedia.org/wiki/Human_rights_in_the_United_States",
    Insurance:
      "https://en.wikipedia.org/wiki/Health_insurance_in_the_United_States",
    Healthcare:
      "https://en.wikipedia.org/wiki/Health_care_in_the_United_States",
    Technology: "https://en.wikipedia.org/wiki/Technology_in_the_United_States",
    "Real Estate":
      "https://en.wikipedia.org/wiki/Real_estate_in_the_United_States",
    "Criminal Defense": "https://en.wikipedia.org/wiki/Criminal_defense_lawyer",
    Patent: "https://en.wikipedia.org/wiki/United_States_patent_law",
    Trademark: "https://en.wikipedia.org/wiki/United_States_trademark_law",
    Divorce: "https://en.wikipedia.org/wiki/Divorce_law_in_the_United_States",
    "Wills and Trusts":
      "https://en.wikipedia.org/wiki/Trust_law_in_the_United_States",
    Bankruptcy: "https://en.wikipedia.org/wiki/Bankruptcy_in_the_United_States",
    Adoption: "https://en.wikipedia.org/wiki/Adoption_in_the_United_States",
    "Civil Rights":
      "https://en.wikipedia.org/wiki/Civil_rights_in_the_United_States",
    "Social Security":
      "https://en.wikipedia.org/wiki/Social_Security_(United_States)",
  },
  UK: {
    Traffic:
      "https://en.wikipedia.org/wiki/Road_traffic_regulation_in_the_United_Kingdom",
    Crime: "https://en.wikipedia.org/wiki/Crime_in_the_United_Kingdom",
    Family: "https://en.wikipedia.org/wiki/Family_law_in_the_United_Kingdom",
    Property: "https://en.wikipedia.org/wiki/English_land_law",
    Tax: "https://en.wikipedia.org/wiki/Taxation_in_the_United_Kingdom",
    Employment:
      "https://en.wikipedia.org/wiki/Employment_law_in_the_United_Kingdom",
    Corporate: "https://en.wikipedia.org/wiki/United_Kingdom_corporate_law",
    "Intellectual Property":
      "https://en.wikipedia.org/wiki/Intellectual_property_law_of_the_United_Kingdom",
    Immigration:
      "https://en.wikipedia.org/wiki/Immigration_to_the_United_Kingdom",
    Banking: "https://en.wikipedia.org/wiki/Banking_in_the_United_Kingdom",
    Contract: "https://en.wikipedia.org/wiki/English_contract_law",
    "Consumer Rights":
      "https://en.wikipedia.org/wiki/Consumer_protection_in_the_United_Kingdom",
    Environmental:
      "https://en.wikipedia.org/wiki/Environmental_law_in_the_United_Kingdom",
    Cybersecurity:
      "https://en.wikipedia.org/wiki/Cybersecurity_in_the_United_Kingdom",
    Privacy: "https://en.wikipedia.org/wiki/Privacy_in_the_United_Kingdom",
    Education: "https://en.wikipedia.org/wiki/Education_in_England",
    "Human Rights":
      "https://en.wikipedia.org/wiki/Human_rights_in_the_United_Kingdom",
    Insurance:
      "https://en.wikipedia.org/wiki/Insurance_law_in_the_United_Kingdom",
    Healthcare: "https://en.wikipedia.org/wiki/National_Health_Service",
    Technology:
      "https://en.wikipedia.org/wiki/Technology_in_the_United_Kingdom",
    "Real Estate":
      "https://en.wikipedia.org/wiki/Real_estate_in_the_United_Kingdom",
    "Criminal Defense":
      "https://en.wikipedia.org/wiki/Criminal_law_of_England_and_Wales",
    Patent: "https://en.wikipedia.org/wiki/United_Kingdom_patent_law",
    Trademark: "https://en.wikipedia.org/wiki/United_Kingdom_trade_mark_law",
    Divorce: "https://en.wikipedia.org/wiki/Divorce_law_in_the_United_Kingdom",
    "Wills and Trusts":
      "https://en.wikipedia.org/wiki/Inheritance_law_in_the_United_Kingdom",
    Bankruptcy:
      "https://en.wikipedia.org/wiki/Bankruptcy_in_the_United_Kingdom",
    Adoption: "https://en.wikipedia.org/wiki/Adoption_in_the_United_Kingdom",
    "Civil Rights":
      "https://en.wikipedia.org/wiki/Human_rights_in_the_United_Kingdom",
    "Social Security":
      "https://en.wikipedia.org/wiki/Social_security_in_the_United_Kingdom",
  },
  // Add other countries' links here following the same pattern.
};

export default function KnowledgeCenter() {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      links[country as keyof typeof links] &&
      links[country as keyof typeof links][
        category as keyof (typeof links)[keyof typeof links]
      ]
    ) {
      router.push(
        links[country as keyof typeof links][
          category as keyof (typeof links)[keyof typeof links]
        ],
      );
    } else {
      alert("No information available for the selected combination.");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-primary">
          Legal Knowledge Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country">Choose Country:</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Choose Law Category:</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
