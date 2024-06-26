import { memo, useCallback, useRef, useState } from "react";
import style from "./style.module.css";

const Settings = memo(function Settings() {
  const [userData, setUserData] = useState({
    name: "Иванова Анна",
    email: "AnnaIvanova@mail.ru",
    post: "администратор",
  });

  const form = useRef(null);

  const formChange = useCallback((event) => {
    event.preventDefault();
  }, []);

  const save = useCallback(() => {
    const formData = new FormData(form.current);

    let name = formData.get("name");
    let phone = formData.get("phone");
    let tg = formData.get("tg");
    let email = formData.get("email");
    let gender = formData.get("gender");
    let adress = formData.get("adress");
    let post = formData.get("post");
    let department = formData.get("department");

    setUserData({ name, phone, tg, email, gender, adress, post, department });
  }, []);

  return (
    <>
      <article className={style.profile}>
        <img src="" alt="" className={style.avatar} />

        <article style={{ flex: "1" }}>
          <p className={style.name}>
            {userData.name} |{" "}
            <span className={style.post}>{userData.post}</span>
          </p>
          <p className={style.mail}>{userData.email}</p>
        </article>

        <button onClick={() => save()} className={`${style.saveButton} btn`}>
          Сохранить
        </button>
      </article>

      <form
        ref={form}
        action=""
        className={style.form}
        onChange={(event) => formChange(event)}
      >
        <label htmlFor="" className={style.label}>
          ФИО
          <input type="text" name="name" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Телефон
          <input type="text" name="phone" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Telegram
          <input type="text" name="tg" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          E-mail
          <input type="text" name="email" className={style.input} />
        </label>

        <div className={style.gender}>
          <div className={style.form_radio_btn}>
            <input id="radio-1" type="radio" name="gender" value="male" />
            <label
              htmlFor="radio-1"
              className={`${style.male} ${style.labelRadio}`}
            >
              М
            </label>
          </div>

          <div className={style.form_radio_btn}>
            <input id="radio-2" type="radio" name="gender" value="female" />
            <label
              htmlFor="radio-2"
              className={`${style.female} ${style.labelRadio}`}
            >
              Ж
            </label>
          </div>
        </div>

        <label htmlFor="" className={style.label}>
          Адрес проживания
          <input type="text" name="adress" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Должность
          <input type="text" name="post" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Подразделение
          <input type="text" name="department" className={style.input} />
        </label>
      </form>
    </>
  );
});

export default Settings;
