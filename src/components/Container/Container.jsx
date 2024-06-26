import { memo, useCallback, useState } from "react";
import style from "./style.module.css";
import Tabs from "../Tabs/Tabs";

import Settings from "../../pages/Settings/Settings";
import ReservationHistory from "../../pages/ReservationHistory/ReservationHistory";
import Service from "../../pages/Service/Service";

const Container = memo(function Container() {
  const [active, setActive] = useState(0);

  const changeActive = useCallback((number) => {
    setActive(number);
  }, []);

  return (
    <main className={style.container}>
      <Tabs
        active={active}
        changeActive={changeActive}
        tabs={[
          { href: "settings", name: "Настройки" },
          { href: "history", name: "История бронирования" },
          { href: "service", name: "Взаимодействие с сервисом" },
        ]}
      />
      <article className={style.article}>
        {active === 0 && <Settings />}
        {active === 1 && <ReservationHistory />}
        {active === 2 && <Service />}
      </article>
    </main>
  );
});

export default Container;
