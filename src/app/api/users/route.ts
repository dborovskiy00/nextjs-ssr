import { NextResponse } from "next/server";
import UserDbService from "@/modules/user/db";

export async function GET() {
  return NextResponse.json({ users: await UserDbService.getAllUsers() });
}
