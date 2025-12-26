import style from "./SearchBar.module.css"
function SearchBar() {
  return (
    <div className={style.container}>
        <div>
            <input placeholder="Inter min-price" />
            <input placeholder="Inter max-price" />
        </div>
        <button>Search</button>
    </div>
  )
}

export default SearchBar