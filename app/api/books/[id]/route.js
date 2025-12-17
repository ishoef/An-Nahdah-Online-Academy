import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "private-books", `${id}.pdf`);

  console.log("Looking for file at:", filePath);

  if (!fs.existsSync(filePath)) {
    console.log("FILE NOT FOUND");
    return new NextResponse("Not found", { status: 404 });
  }

  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
    },
  });
}
