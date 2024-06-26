import { memo, useMemo } from "react";
import Comment from "../../components/Comment/Comment";

const MyReviews = memo(function MyReviews() {
  const reviews = useMemo(
    () => [
      {
        id: 1,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "27.06.2024",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 5.0,
      },
      {
        id: 2,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "24.05.24",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 5.0,
      },
      {
        id: 3,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "22.02.24",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 5.0,
      },
      {
        id: 4,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "22.06.24",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 4.8,
      },
      {
        id: 5,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "24.05.24",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 5.0,
      },
      {
        id: 6,
        author: "Иванова Анна",
        img: "",
        type: "СПА",
        date: "22.02.24",
        time: "14:40",
        description: "Очень понравилось, обязательно приду ещё раз!",
        stars: 5.0,
      },
    ],
    []
  );

  return (
    <ul style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      {reviews &&
        reviews.map((el) => <Comment key={el.id} item={el} type={"reviews"} />)}
    </ul>
  );
});

export default MyReviews;
