import prisma from "@/libs/prisma";
export async function getCars() {
  const data = await prisma.cars.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      carType: true,
      carBrand: true,
      image: true,
      seat: true,
      carAvg: true,
    },
  });
  return data;
}
