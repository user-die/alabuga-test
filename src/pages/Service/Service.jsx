import { memo, useMemo, useState, useCallback } from "react";
import MiniTabs from "../../components/miniTabs/MiniTabs";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Comments from "../../pages/Comments/Comments";

const Service = memo(function Service() {
  const [active, setActive] = useState(0);

  const changeActive = useCallback((number) => {
    setActive(number);
  }, []);

  const tabs = useMemo(
    () => [
      { name: "Мои отзывы", href: "/myreviews" },
      { name: "Замечания", href: "/comments" },
    ],
    []
  );

  return (
    <>
      <MiniTabs tabs={tabs} changeActive={changeActive} active={active} />
      {active === 0 && <MyReviews />}
      {active === 1 && <Comments />}
    </>
  );
});

export default Service;
