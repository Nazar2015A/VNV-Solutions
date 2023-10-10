import revman1 from "../../images/revman.jpg";
import revman2 from "../../images/revman2.jpg";
import revwoman1 from "../../images/revwoman1.jpg";
import revwoman2 from "../../images/revwoman2.jpg";

export const clients = [
  {
    name: "Іван Семенов",
    position: "Фінансовий аналітик",
    img_url: revman1,
    stars: 5,
    disc: `Ми встановили бота, розробленого цією компанією, для автоматизації наших фінансових процесів. Результати були чудові, і ми ефективно заощадили час та ресурси. Дуже задоволений роботою цієї команди!`,
  },
  {
    name: "Ольга Коваль",
    position: "Медична сестра",
    img_url: revwoman1,
    stars: 5,
    disc: `Ми вирішили використовувати бота для підтримки наших пацієнтів і покращення комунікації в нашій лікарні. Розробка бота була швидкою і ефективною, і тепер наша робота стала набагато продуктивнішою.`,
  },
  {
    name: "Володимир Яковенко",
    position: "Генеральний директор",
    img_url: revman2,
    stars: 5,
    disc: `Ця компанія виявилася надзвичайною у всіх аспектах роботи. Вони розробили для нас веб-сайт і бота, які допомогли підвищити ефективність нашого бізнесу. Я вражений професіоналізмом і якістю їхньої роботи.`,
  },
  {
    name: "Марія Литвин",
    position: "Інженер-конструктор",
    img_url: revwoman2,
    stars: 5,
    disc: `Ця компанія надала нам важливу підтримку в розробці спеціалізованих програмних рішень для нашого проекту. Результати були вражаючими, і ми плануємо продовжувати співпрацю в майбутньому.`,
  },
];
export const testimonialsSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
