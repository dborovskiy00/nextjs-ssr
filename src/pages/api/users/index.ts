import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const result = await prisma.user.findMany({
      where: { email: "borovski.danila00@gmail.com" },
    });

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(null);
  }
}
