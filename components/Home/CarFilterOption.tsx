import React from "react";

export default function CarFilterOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
        >
          <option disabled value="">
            Price
          </option>
          <option value="minToMax">Min to Max</option>
          <option value="maxToMin">Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full md:block max-w-xs hidden"
          defaultValue=""
        >
          <option disabled value="">
            Manufacturer
          </option>
          <option value="honda">Honda</option>
          <option value="toyota">Toyota</option>
        </select>
      </div>
    </div>
  );
}
