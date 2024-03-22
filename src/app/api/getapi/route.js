import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { connect } from "./db";
import User from "./model";

connect();
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  try {
    const user = new User({ ...data });
    await user.save();
    NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(data);
}

// taking header in nect js
export async function GET(req, res) {
  const data = await User.find();
  const headersList = headers();
  const referer = headersList.get("tokend");
  console.log(referer);
  return NextResponse.json(data);
}

