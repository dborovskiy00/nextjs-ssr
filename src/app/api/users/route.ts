import { NextResponse } from "next/server";
import UserDbService from "@/modules/user/db";

export async function GET() {
  const users = (await UserDbService.getAllUsers()) || [];

  return NextResponse.json({ users });
}
