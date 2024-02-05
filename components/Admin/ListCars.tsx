// "use client";
import { getCars } from "@/libs/carsControllers";
import React from "react";
import Link from "next/link";

export default async function page() {
  const data = await getCars();
  // const router = useRouter();

  async function handleDelete() {
    try {
      await fetch(`/api/v1/deleteCar/${42}`, {
        method: "DELETE",
      });
      // router.reload;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="p-8">
      {/* <FormAddCar /> */}
      <div className="flex  justify-end p-1">
        <Link href="/addCar" passHref>
          <h2 className="border bg-red-200 rounded-md p-1">Add Car</h2>
        </Link>
      </div>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Seat</th>
            <th className="py-2 px-4 border">Car Type</th>
            <th className="py-2 px-4 border">Car Brand</th>
            <th className="py-2 px-4 border">Car Avg</th>
            <th className="py-2 px-4 border">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car: any, index: number) => (
            <tr key={index} className="text-left">
              <td className="py-2 px-4 border">{car.name}</td>
              <td className="py-2 px-4 border">{car.price}</td>
              <td className="py-2 px-4 border">{car.seat}</td>
              <td className="py-2 px-4 border">{car.carType}</td>
              <td className="py-2 px-4 border">{car.carBrand}</td>
              <td className="py-2 px-4 border">{car.carAvg}</td>
              <td className="py-2 px-4 border flex justify-center">
                <button className=" border bg-red-200 rounded-md p-1">
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
