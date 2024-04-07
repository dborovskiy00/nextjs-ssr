import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const result = await prisma.user.findMany();

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(null);
  }
}
