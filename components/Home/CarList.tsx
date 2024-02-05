import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
// import { createCar, getCars } from "@/libs/fetchers"; // Assuming `@` is a valid path alias

export default async function CarList(props: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.carsList.map((car: any, index: number) => (
        <div>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}
