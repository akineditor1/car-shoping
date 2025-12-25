import { useRouter } from "next/router";
import carsData from "@/data/carsdata";
function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  return <div>CarDetail </div>;
}

export default CarDetail;
