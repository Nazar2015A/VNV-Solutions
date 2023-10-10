import React from "react";
import "./sales.css";
import { Slide } from "react-awesome-reveal";


const Sales = () => {
  return (
    <div className="sales-wrapper">
      <Slide direction="left" triggerOnce>
        <div className="sales-whyus">
          <h2>При першому замовленні консультація безкоштовна!</h2>
          <div className="sales-whyus-text">
            <ul>
              <li>
                <p className="sales-whyus-text-bold">
                  Заповніть форму щоб отримати доступ до нашого безкоштовного
                  лід-магніту та дізнатися, як ми можемо зробити ваш бізнес ще
                  успішнішим
                </p>
              </li>
              <li>
                <p className="sales-whyus-text-big">
                  Інновації: Наша команда використовує передові технології та
                  нестандартні способи для вирішення найскладніших завдань
                </p>
              </li>
              <li>
                <p className="sales-whyus-text-big">
                  Індивідуальний підхід: Ми розуміємо, що кожен проект
                  унікальний. Ми працюємо з вами, щоб розробити рішення, яке
                  відповідає вашим конкретним потребам
                </p>
              </li>
            </ul>
          </div>
            <button className="sales-right-btn">Отримати</button>
        </div>
      </Slide>
      {/* <div className="sales-right" triggerOnce>
        <Slide direction="right" triggerOnce>
      <div className="sales-title">
        <div className="sales-title-p">
          <h2>Залишайтеся крок попереду в IT-індустрії з VNV Solutions!</h2>
          <p>
            Ви шукаєте інноваційні та нестандартні рішення для вашого бізнесу?
            Хочете використовувати новітні підходи в розробці та обслуговуванні
            вашого веб-проекту? Інтегруйте "Шоу Кітчен" нашої компанії в свій
            бізнес і відчуйте комфорт співпраці з VNV Solutions.
          </p>
        </div>
      </div>
      </Slide>
      </div> */}
    </div>
  );
};

export default Sales;
