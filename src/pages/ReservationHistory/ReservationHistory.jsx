import { memo, useCallback, useMemo, useState } from "react";
import style from "./style.module.css";

const ReservationHistory = memo(function ReservationHistory() {
  const [currents, setCurrents] = useState([
    {
      date: "01.06.2024",
      time: "16:00",
      service: "СПА (маникюр)",
      place: "Пирамида 3 этаж",
      price: "1500",
      status: "confirmed",
      id: 999,
    },
  ]);

  const reservationsStory = useMemo(
    () => [
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 1,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 2,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 3,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 4,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 5,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 6,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 7,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 8,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 9,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 10,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 11,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 12,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 13,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 14,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 15,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "confirmed",
        id: 16,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "completed",
        id: 17,
      },
      {
        date: "01.06.2024",
        time: "16:00",
        service: "СПА (маникюр)",
        place: "Пирамида 3 этаж",
        price: "1500",
        status: "canceled",
        id: 18,
      },
    ],
    []
  );

  const repeat = useCallback((element) => {
    setCurrents((currents) => [...currents, element]);
  }, []);

  const deleteOrder = useCallback((element) => {
    setCurrents((currents) => currents.filter((el) => el.id !== element.id));
  }, []);

  return (
    <>
      <h1 className={style.heading}>Текущие бронирования</h1>

      <ul className={style.list}>
        {currents.map((element) => (
          <ReservationHistory
            element={element}
            doFunc={deleteOrder}
            key={element.id}
          />
        ))}
      </ul>

      <div style={{ marginBottom: "50px" }}></div>

      <h1 className={style.heading}>Прошлые бронирования</h1>

      <ul className={style.list}>
        {reservationsStory.map((element) => (
          <ReservationHistory
            element={element}
            doFunc={repeat}
            key={element.id}
          />
        ))}
      </ul>
    </>
  );
});

export default ReservationHistory;
