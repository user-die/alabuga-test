import { memo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { setUser } from "../../store/mainSlice";

const Settings = memo(function Settings() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const form = useRef(null);

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

    if (form.current.reportValidity()) {
      dispatch(
        setUser({ name, phone, tg, email, gender, adress, post, department })
      );
    }
  }, [dispatch]);

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
        onChange={(event) => event.preventDefault()}
      >
        <label htmlFor="" className={style.label}>
          ФИО
          <input type="text" name="name" className={style.input} required />
        </label>

        <label htmlFor="" className={style.label}>
          Телефон
          <input type="tel" name="phone" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          Telegram
          <input type="text" name="tg" className={style.input} />
        </label>

        <label htmlFor="" className={style.label}>
          E-mail
          <input type="email" name="email" className={style.input} required />
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
