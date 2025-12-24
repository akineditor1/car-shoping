import Link from "next/link";
import style from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <Link href="/">
          <h2>SHOPING CAR</h2>
          <p>Choose an Buy Your Car</p>
        </Link>
      </header>
      <div className={style.container}>{children}</div>

      <footer className={style.footer}>
        <p>Developed by Ali with ❤️ &copy;</p>
      </footer>
    </>
  );
}

export default Layout;
