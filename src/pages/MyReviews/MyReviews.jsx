import { memo, useMemo } from "react";
import Comment from "../../components/Comment/Comment";
import {useSelector} from 'react-redux';

const MyReviews = memo(function MyReviews() {
  const reviews = useSelector((state) => state.myReviews)

  return (
    <ul style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      {reviews &&
        reviews.map((el) => <Comment key={el.id} item={el} type={"reviews"} />)}
    </ul>
  );
});

export default MyReviews;
