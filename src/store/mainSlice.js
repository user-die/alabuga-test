import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'store',
    initialState: {
        user: {
         name: 'Иванова Анна',
         image: '',
         phone: '' ,
          tg: '',
         email: 'AnnaIvanova@mail.ru' ,
         gender:  'female',
         adress: '' ,
          post: 'администратор' ,
         department: '',
        },
   
        comments: [
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
        myReviews: [
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
        activeReverstation: [
            {
              date: "01.06.2024",
              time: "16:00",
              service: "СПА (маникюр)",
              place: "Пирамида 3 этаж",
              price: "1500",
              status: "confirmed",
              id: 999,
            },
          ],
        reversationHistory: [
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
          ]
    },
    reducers: { 
        setUser: (state, action) => {
          state.user = action.payload;
        },
        repeatRev: (state, active) => {
            state.activeReverstation.push(active.payload);
        },

        deleteRev: (state, active) => {
            state.activeReverstation = state.activeReverstation.filter((el) => el.id !== active.payload)
        },
    }
})

export const {setUser, repeatRev, deleteRev} = slice.actions;

export default slice.reducer;

