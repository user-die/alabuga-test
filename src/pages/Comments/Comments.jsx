import { memo, useMemo } from "react";
import Comment from "../../components/Comment/Comment";

const Comments = memo(function Comments() {
  const reviews = useMemo(
    () => [
      {
        id: 1,
        author: "Иванова Анна",
        img: "",
        type: "шум",
        date: "26.06.24",
        time: "14:40",
        description: "Очень шумно у соседей!",
        status: "inProgress",
      },
      {
        id: 2,
        author: "Иванова Анна",
        img: "",
        type: "работа",
        date: "24.05.24",
        time: "14:40",
        description: "Редко убирают мусор!",
        status: "completed",
      },
      {
        id: 3,
        author: "Иванова Анна",
        img: "",
        type: "проживание",
        date: "22.02.24",
        time: "14:40",
        description: "Не работает душ после того как приходил мастер!",
        status: "completed",
      },
      {
        id: 4,
        author: "Иванова Анна",
        img: "",
        type: "шум",
        date: "22.06.24",
        time: "14:40",
        description: "Очень шумно у соседей!",
        status: "inProgress",
      },
      {
        id: 5,
        author: "Иванова Анна",
        img: "",
        type: "работа",
        date: "24.05.24",
        time: "14:40",
        description: "Редко убирают мусор!",
        status: "completed",
      },
      {
        id: 6,
        author: "Иванова Анна",
        img: "",
        type: "проживание",
        date: "22.02.24",
        time: "14:40",
        description: "Не работает душ после того как приходил мастер!",
        status: "completed",
      },
    ],
    []
  );

  return (
    <ul style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      {reviews &&
        reviews.map((el) => (
          <Comment key={el.id} item={el} type={"comments"} />
        ))}
    </ul>
  );
});

export default Comments;
