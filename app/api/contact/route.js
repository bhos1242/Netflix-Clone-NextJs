import dbConn from "@/utils/dbConn";

import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConn();

    await Contact.create(body);

    return NextResponse.json({
      body: {
        message: "Message sent Successfully!",
      },
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({
      body: {
        messgae: "Server error,Please try again!",
      },
      status: 500,
    });
  }
}
