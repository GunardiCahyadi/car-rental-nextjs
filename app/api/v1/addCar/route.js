import prisma from "@/libs/prisma";
export async function POST(request) {
  const {
    name,
    price,
    carType,
    carBrand,
    seat,
    carAvg,
    image,
    createdAt,
    updatedAt,
  } = await request.json();
  const data = {
    name,
    price,
    carType,
    carBrand,
    seat,
    carAvg,
    image,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const createCar = await prisma.cars.create({ data });
  if (!createCar) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
