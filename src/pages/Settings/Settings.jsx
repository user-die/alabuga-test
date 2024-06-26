import { memo } from "react";
import style from "./style.module.css";

const Settings = memo(function Settings() {
  return (
    <>
      <article className={style.profile}>
        <img src="" alt="" className={style.avatar} />

        <article style={{ flex: "1" }}>
          <p className={style.name}>
            Иванова Анна | <span className={style.post}>администратор</span>
          </p>
          <p className={style.mail}>AnnaIvanova@mail.ru</p>
        </article>

        <button className={`${style.saveButton} btn`}>Сохранить</button>
      </article>

      <form action="" className={style.form}>
        <label htmlFor="" className={style.label}>
          ФИО
          <input type="text" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Телефон
          <input type="text" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Telegram
          <input type="text" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          E-mail
          <input type="text" className={style.input} />
        </label>

        <div className={style.form_radio_btn}>
          <label htmlFor="" className={style.label}>
            M
          </label>
          <input type="radio" value="M" name="gender" className={style.radio} />
        </div>

        <div className={style.form_radio_btn}>
          <label htmlFor="" className={style.label}>
            Ж
          </label>
          <input type="radio" value="F" name="gender" className={style.radio} />
        </div>

        <label htmlFor="" className={style.label}>
          Адрес проживания
          <input type="text" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Должность
          <input type="text" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Подразделение
          <input type="text" className={style.input} />
        </label>
      </form>
    </>
  );
});

export default Settings;
