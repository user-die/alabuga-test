import { memo } from "react";
import Comment from "../../components/Comment/Comment";
import {useSelector} from 'react-redux';

const Comments = memo(function Comments() {
  const comments = useSelector((state) => state.comments);
  
  return (
    <ul style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      {comments &&
        comments.map((el) => (
          <Comment key={el.id} item={el} type={"comments"} />
        ))}
    </ul>
  );
});

export default Comments;
