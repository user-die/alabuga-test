import { memo } from "react";
import style from "./style.module.css";

const MiniTabs = memo(function MiniTabs({ tabs, changeActive, active }) {
  return (
    <>
      {tabs.map((el, index) => (
        <button
          key={el.name}
          onClick={() => changeActive(index)}
          className={style.link}
        >
          {el.name}
        </button>
      ))}
    </>
  );
});

export default MiniTabs;
