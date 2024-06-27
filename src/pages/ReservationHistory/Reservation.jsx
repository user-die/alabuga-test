import { memo, useMemo } from "react";
import style from "./style.module.css";

const Reservation = memo(function Reservation({ element, doFunc, isCurrent }) {
  const status = useMemo(() => {
    return {
      confirmed: { text: "Подтверждено", color: "#73D725" },
      completed: { text: "Состоялось", color: "#7DD5F7" },
      canceled: { text: "Отмена", color: "#E0675F" },
    };
  }, []);

  return (
    <article key={element.id} className={style.div}>
      <li className={style.item}>
        <p>{element.date}</p>
        <p>{element.time}</p>
        <p>{element.service}</p>
        <p>{element.place}</p>
        <p>{element.price} р</p>
        <p
          className={style.status}
          style={{ color: `${status[element.status].color}` }}
        >
          {status[element.status].text}
        </p>
      </li>

      <button onClick={() => doFunc(element)} className="btn">
        {isCurrent ? "Отменить" : "Повторить"}
      </button>
    </article>
  );
});

export default Reservation;
