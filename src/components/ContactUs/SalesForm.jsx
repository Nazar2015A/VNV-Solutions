import React from "react";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const SalesForm = () => {
  const [call, setCall] = useState("")
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [select, setSelect] = useState("default")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review || (select === 'default')) {
      setTimeout(() => {
        alert("Будь-ласка заповніть форму коректно!");
      }, 300)
    } else {
      setSelect("");
      setCall("")
      setName("");
      setReview("");
      setTimeout(() => {
        alert("Ваші дані успішно відправлені!");
      }, 300);
    }
  };

  return (
    <Slide className="sales-form" direction="up" triggerOnce>
        <form className="form">
          <div className="form__group">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Введіть своє ім'я"
            />
          </div>

          <div className="form__group">
          <div className="sorting__widget">
          <select className="sorting-select" onChange={(e)=>setSelect(e.target.value)} value={select}>
                  <option value="default">Оберіть спосіб зв'язку</option>
                  <option value="Email">Email</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Viber">Viber</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
          </div>
          </div>

          <div className="form__group">
            <input
              required
              value={call}
              onChange={(e) => setCall(e.target.value)}
              type="email"
              placeholder={select === 'default' ? "Виберіть спосіб зв'язку" : `Введіть свій ${select}`}
            />
          </div>

          <div className="form__group">
            <textarea
              onChange={(e) => setReview(e.target.value)}
              value={review}
              rows={5}
              type="text"
              placeholder="Напишіть свій текст"
            />
          </div>

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="sales-form-right-btn"
          >
            Надіслати
          </button>
        </form>
    </Slide>
  );
};

export default SalesForm;
