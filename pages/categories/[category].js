import { useRouter } from "next/router";
import React from "react";
import carsData from "@/data/carsdata";
import CarList from "@/components/templates/CarList";
function category() {
  const router = useRouter();
  const { category } = router.query;
  const car = carsData.filter((car) => car.category === category);

  return <CarList data={car}/>
}

export default category;
