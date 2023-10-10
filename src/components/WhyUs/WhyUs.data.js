import { MdDesignServices } from "react-icons/md";
import { GiTalk } from 'react-icons/gi'
import { FaPeopleArrows } from 'react-icons/fa'
import { GiNetworkBars } from 'react-icons/gi'
import { ImPriceTags } from 'react-icons/im'
import { AiOutlineTeam } from 'react-icons/ai'

export const servicesData = [
    {
      id: 1,
      title: "Якісні послуги",
      desc: "Ми віддані наданню послуг найвищої якості, що гарантує наші професійні знання і великий досвід у цій сфері",
      icon: <MdDesignServices />,
    },
    {
      id: 2,
      title: "Досвідчена команда",
      icon: <AiOutlineTeam />,
      desc: "Наша команда складається з досвідчених фахівців, які мають глибокі знання та багатий досвід у своїх галузях"
    },
    {
      id: 3,
      title: "Інноваційні рішення",
      icon: <GiTalk />,
      desc: "Ми завжди у пошуку нових інноваційних рішень та технологій, які можуть покращити ефективність та результативність наших проектів"
    },
    {
      id: 4,
      title: "Особистий підхід до клієнтів",
      icon: <FaPeopleArrows />,
      desc: "Наша команда завжди слухає потреби та вимоги кожного клієнта"
    },
    {
      id: 5,
      title: "Швидка робота",
      icon: <GiNetworkBars/>,
      desc: "Ми розуміємо, що час - це гроші, і завжди прагнемо забезпечити швидку та надійну доставку наших продуктів і послуг"
    },
    {
      id: 6,
      title: "Конкурентоспроможні ціни",
      icon: <ImPriceTags />,
      desc: "Ми віримо в справедливість і прозорість у відносинах з клієнтами і завжди намагаємося забезпечити оптимальний баланс якості та вартості"
    },
  ]