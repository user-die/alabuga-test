import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import notify from "./../../images/Notify.png";

const options = {
  month: "long",
  day: "numeric",
};

const Header = memo(function Header({ count }) {
  const [date, setDate] = useState(new Date());
  const user = "Анна";

  useEffect(() => {
    const now = Date.now();

    const timeout = setTimeout(
      queueMicrotask(() => {
        setDate(new Date());
      }),
      now % 1000
    );

    return () => clearTimeout(timeout);
  }, [date]);

  const time = `${date.toLocaleDateString("ru", options)} | ${date
    .toLocaleTimeString("ru")
    .slice(0, 5)}`;

  return (
    <article className={style.header}>
      <section>
        <p className={style.welcome}>Добро пожаловать, {user}</p>

        <p className={style.time}>{time}</p>
      </section>

      <section className={style.control}>
        <input type="text" className={style.search} placeholder="Поиск..." />

        <button name="notifications" className={style.notify}>
          <img src={notify} alt="" />
          <p className={style.count}>{count}</p>
        </button>

        <Link>
          <div className={style.profile}></div>
        </Link>
      </section>
    </article>
  );
});

export default Header;
