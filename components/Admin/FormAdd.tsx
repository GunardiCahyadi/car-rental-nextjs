// FormAddCar.jsx
"use client";

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
export default function FormAddCar(data: any) {
  // const navigate = useNavigate();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    seat: "",
    image: "",
    carType: "",
    carBrand: "",
    carAvg: "",
  });

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      ...formData,
      price: parseInt(formData.price),
      seat: parseInt(formData.seat),
      carAvg: parseInt(formData.carAvg),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      const response = await fetch("/api/v1/addCar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const createdCars = await response.json();
        if (createdCars.isCreated) {
          setIsCreated(true);
          router.push("/", { scroll: false });
        }
      } else {
        // Handle error cases
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      {isCreated && (
        <p className="text-color-primary">postingan terkirim....</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seat"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Seat:
          </label>
          <input
            type="text"
            id="seat"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="carType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Car Type:
          </label>
          <input
            type="text"
            id="carType"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="carBrand"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Car Brand:
          </label>
          <input
            type="text"
            id="carBrand"
            name="carBrand"
            value={formData.carBrand}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="carAvg"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Car Avg:
          </label>
          <input
            type="text"
            id="carAvg"
            name="carAvg"
            value={formData.carAvg}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            onClick={handleChange}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
