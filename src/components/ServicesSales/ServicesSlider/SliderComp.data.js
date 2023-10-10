import img from '../../../images/web-development.jpg'
import img2 from '../../../images/mobile.jpg'
import img3 from '../../../images/design.jpg'
import img4 from '../../../images/marketing.jpg'
import img5 from '../../../images/support.jpg'

export const reviewsData = [
  {
    id: 1,
    text: "Веб-розробка",
    discount: "-20%",
    img: img,
  },
  {
    id: 2,
    text: "Мобільні додатки",
    discount: "-25%",
    img: img2,
  },
  {
    id: 3,
    text: "Веб-дизайн",
    discount: "-20%",
    img: img3,
  },
  {
    id: 4,
    text: "Цифровий маркетинг",
    discount: "-15%",
    img: img4,
  },
  {
    id: 5,
    text: "Технічна підтримка",
    discount: "-10%",
    img: img5,
  },
];

export const sliderCompSettings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
