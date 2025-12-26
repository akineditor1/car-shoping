import { useRouter } from "next/router";
import style from "./CarList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarList({ data }) {
  const router = useRouter();
  const backHandeler = () => {
    router.back();
  };
  return (
    <div className={style.container}>
      <div className={style.back} onClick={backHandeler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={style.cards}>
        {data.map((item) => (
          <Card key={item.id }{...item} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
