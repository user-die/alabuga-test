import { memo } from "react";
import style from "./style.module.css";

const MiniTabs = memo(function MiniTabs({ tabs, changeActive, active }) {
  return (
    <div className={style.tabs}>
      {tabs.map((el, index) => (
        <button
          key={el.name}
          onClick={() => changeActive(index)}
          className={style.link}
        >
          {el.name}

          {active === index && <div className={style.rectangle}></div>}
        </button>
      ))}
    </div>
  );
});

export default MiniTabs;
