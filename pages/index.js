import AllButton from "@/components/module/AllButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsdata";

function Index() {
  const cars = carsData.slice(0,3)
  return (
    <>
      <SearchBar/>
      <Categories/>
      <AllButton/>
      <CarsPage data={cars}/>
    </>
  );
}
export default Index