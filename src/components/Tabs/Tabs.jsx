import { memo } from "react";

import style from "./style.module.css";

const Tabs = memo(function Tabs({ tabs, changeActive, active }) {
  return (
    <div className={style.tabsHeader}>
      {tabs.map((element, index) => (
        <button
          key={element.name}
          className={style.link}
          onClick={() => changeActive(index)}
          data-index={index}
        >
          {element.name}

          {active === index && <div className={style.rectangle}></div>}
        </button>
      ))}
    </div>
  );
});

export default Tabs;
