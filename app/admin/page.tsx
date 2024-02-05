import React from "react";
import ListCars from "@/components/Admin/ListCars";
import FormAddCar from "@/components/Admin/FormAdd";
export default function page(data: any) {
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {/* <FormAddCar addCar={data} /> */}
      <ListCars />
    </div>
  );
}
