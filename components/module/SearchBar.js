import { useState } from "react";
import style from "./SearchBar.module.css";
import { useRouter } from "next/router";
function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandeler = () => {
    if (min && max) {
        router.push(`/filter/${min}/${max}`)
    } else {
      alert("Please Enter minimum and maximum price!");
    }
  };
  return (
    <div className={style.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandeler}>Search</button>
    </div>
  );
}

export default SearchBar;
