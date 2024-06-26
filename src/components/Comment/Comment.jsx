import { memo, useMemo } from "react";
import style from "./style.module.css";
import defaultAvatar from "./../../images/defaultAvatar.png";
import star from "./../../images/star.png";

const Comment = memo(function Comment({ item, type }) {
  const status = useMemo(() => {
    return {
      inProgress: { text: "В процессе", color: "#EFAB44" },
      completed: { text: "Решено", color: "#73D725" },
    };
  }, []);

  return (
    <div>
      <p className={style.date}>
        {item.date === new Date() ? "сегодня" : item.date}{" "}
      </p>
      <li className={style.item}>
        <img src={item.img || defaultAvatar} alt="" />

        <div style={{ position: "relative" }}>
          <div className={style.line}></div>
          <p className={style.author}>{item.author}</p>
          <p style={{ color: "#444444" }} className={style.service}>
            {type === "reviews" ? "Усгуга: " : "Тип: "}
            {item.type}
          </p>
        </div>

        <p className={style.description}>{item.description}</p>

        {type === "comments" ? (
          <div className={style.status}>
            <div
              style={{ top: "16px", left: "-36px" }}
              className={style.line}
            ></div>
            <p style={{ color: status[item.status].color }}>
              {status[item.status].text}
            </p>
          </div>
        ) : (
          <div className={style.feedbackDiv}>
            <img src={star} alt="" />
            <p className={style.starCount}>{item.stars}</p>
          </div>
        )}
      </li>
    </div>
  );
});

export default Comment;
