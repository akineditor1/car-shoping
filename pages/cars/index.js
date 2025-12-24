import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsdata";
function Details() {
  return (
    <div>
     <CarsPage data={carsData}/>
    </div>
  );
}

export default Details;
