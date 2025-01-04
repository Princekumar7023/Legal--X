"use server";

import { LawyerDetails } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addLawyer({ details }: { details: LawyerDetails }) {
  try {
    if (!details) {
      throw new Error("Lawyer details are required");
    }

    const lawyer = await prisma.lawyerDetails.create({
      data: {
        userId: details.userId,
        name: details.name,
        image: details.profile_image,
        category: details.categories,
        phone: details.phone,
        barCouncil: details.barCouncil,
        nationality: details.nationality,
        experience: details.experience,
        about: details.description,
        education: details.education,
        officeAddress: details.address,
        email: details.email,
        languages: details.languages,
      },
    });

    return { success: true, data: lawyer };
  } catch (error) {
    console.error("Error adding lawyer:", error);
    return { success: false, error: "Failed to add lawyer" };
  } finally {
    await prisma.$disconnect();
  }
}

export async function getLawyers(filter?: {
  search?: string;
  specialization?: string;
}) {
  try {
    let query: any = {};

    if (filter?.search) {
      query.name = { contains: filter.search, mode: 'insensitive' };
    }

    if (filter?.specialization && filter.specialization !== 'all') {
      query.category = { has: filter.specialization };
    }

    const lawyers = await prisma.lawyerDetails.findMany({
      where: query,
    });

    return lawyers;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getLawyerById({ id }: { id: string }) {
  try {
    const lawyer = await prisma.lawyerDetails.findUnique({
      where: {
        id,
      },
    });

    return { success: true, data: lawyer };
  } catch (error) {
    console.error("Error fetching lawyer:", error);
    return { success: false, error: "Failed to fetch lawyer" };
  } finally {
    await prisma.$disconnect();
  }
}
