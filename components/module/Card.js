import Location from "../icons/Location";
import style from "./Card.module.css";
function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;

  return (
    <div className={style.container}>
      <img src={image} className={style.image} />
      <h4 className={style.titel}>{`${name} ${model}`}</h4>
      <p className={style.detait}>{`${year} . ${distance}km`}</p>
      <div className={style.footer}>
        <p>$ {price}</p>
        <div className={style.location}>
          <p>{location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Card;
