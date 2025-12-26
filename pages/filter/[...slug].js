import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsdata";
import { useRouter } from "next/router";
function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filterData = carsData.filter(
    (item) => item.price >= min && item.price <= max
  );
  if (!filterData.length) {
    return <h3>NotFound</h3>;
  }
  return <CarList data={filterData}/>;
}

export default FilteredCars;
