import prisma from "@/libs/prisma";
export async function GET(request: any) {
  return Response.json({ data: "Hello" });
}
