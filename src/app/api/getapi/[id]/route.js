import { NextResponse } from "next/server";
import User from "../model";

export async function GET(req, { params }) {
  const data = await User.findById(params.id);
  console.log(data);
  return NextResponse.json(data)
}
