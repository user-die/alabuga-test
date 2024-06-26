import { memo, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

import mainLogo from "./../../images/icon logo.png";
import { spaIcon, restIcon, bronIcon, techIcon } from "../../images/images.jsx";

const routes = [
  { name: "СПА", link: "/spa", img: spaIcon },
  { name: "Рестораны", link: "/restaurants", img: restIcon },
  { name: "Бронирование", link: "/Booking", img: bronIcon },
  { name: "Тех. заявки", link: "/applications", img: techIcon },
];

const Nav = memo(function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <nav
      className={`${style.nav} ${open && style.open}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={style.logoContain}>
        <img src={mainLogo} alt="" className={style.mainLogo} />
        {open && (
          <p className={style.logoText}>
            алабуга <span style={{ color: "#2B3998" }}>social</span>
          </p>
        )}
      </div>

      <ul className={style.list}>
        {routes.map((el, index) => (
          <Link
            onClick={() => setActive(index)}
            key={el.name}
            to={el.link}
            className={`${style.link} ${open && style.linkOpen} ${
              active === index && style.active
            }`}
          >
            {<el.img className={style.svg} />}

            {open && <p className={style.p}>{el.name}</p>}
          </Link>
        ))}
      </ul>
    </nav>
  );
});

export default Nav;
