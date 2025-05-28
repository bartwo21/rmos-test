import React from "react";
import CarForm from "./CarForm";
import { Car } from "@/types";

function CustomToolPanel({ onAddCar }: { onAddCar: (car: Car) => void }) {
  return (
    <div>
      <CarForm onAddCar={onAddCar} />
    </div>
  );
};

export default CustomToolPanel;