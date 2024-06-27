import { memo, useState, useCallback } from "react";
import MiniTabs from "../../components/miniTabs/MiniTabs";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Comments from "../../pages/Comments/Comments";

const tabs = [
  { name: "Мои отзывы", href: "/myreviews" },
  { name: "Замечания", href: "/comments" },
];

const Service = memo(function Service() {
  const [active, setActive] = useState(0);

  const changeActive = useCallback((number) => {
    setActive(number);
  }, []);

  return (
    <>
      <MiniTabs tabs={tabs} changeActive={changeActive} active={active} />
      <article style={{ padding: "50px" }}>
        {active === 0 && <MyReviews />}
        {active === 1 && <Comments />}
      </article>
    </>
  );
});

export default Service;
