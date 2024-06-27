import { memo, useCallback } from "react";
import style from "./style.module.css";
import Reservation from "./Reservation";
import { deleteRev, repeatRev } from "../../store/mainSlice";
import { useSelector, useDispatch } from "react-redux";

const ReservationHistory = memo(function ReservationHistory() {
  const currentsRev = useSelector((state) => state.activeReverstation);
  const reservationsStory = useSelector((state) => state.reversationHistory);
  const dispatch = useDispatch();

  const repeat = useCallback(
    (element) => {
      dispatch(repeatRev(element));
    },
    [dispatch]
  );

  const deleteOrder = useCallback(
    (element) => {
      dispatch(deleteRev(element.id));
    },
    [dispatch]
  );

  return (
    <>
      <h1 className={style.heading}>Текущие бронирования</h1>

      <ul className={style.list}>
        {currentsRev.map((element) => (
          <Reservation
            element={element}
            doFunc={deleteOrder}
            isCurrent={true}
            key={element.id}
          />
        ))}
      </ul>

      <div style={{ marginBottom: "50px" }}></div>

      <h1 className={style.heading}>Прошлые бронирования</h1>

      <ul className={style.list}>
        {reservationsStory.map((element) => (
          <Reservation element={element} doFunc={repeat} key={element.id} />
        ))}
      </ul>
    </>
  );
});

export default ReservationHistory;
