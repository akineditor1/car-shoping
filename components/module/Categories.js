import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import style from "./Categories.module.css";

function Categories() {
  return (
    <div className={style.container}>
      <div>
        <p>Sedan</p>
        <Sedan />
      </div>
      <div>
        <p>Suv</p>
        <Suv />
      </div>
      <div>
        <p>Hatchback</p>
        <Hatchback />
      </div>
      <div>
        <p>Sport</p>
        <Sport />
      </div>
    </div>
  );
}

export default Categories;
