import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  let imagesMap = [
    { id: 1, image: "/image_1.png", title: 'Карта привилегий "Новый город"' },
    {
      id: 2,
      image: "/image_2.png",
      title: "Бесплатное такси в офис продаж Нового города",
    },
    {
      id: 3,
      image: "/image_3.png",
      title: "Квартиры с отделкой от застройщика",
    },
  ];

  return (
    <div className="section">
      <div className="section__header">
        <div className="section__header-title">Предложения и акции</div>
        <div className="section__header-cards">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            visibleSlides={width <= 320 ? 1 : 3}
          >
            <Slider>
              {imagesMap.map((el, index) => (
                <Slide index={index}>
                  <div className="section__header-card">
                    <Image
                      className="section__header-image"
                      src={el.image}
                      width={848}
                      height={424}
                    />
                    <div className="section__header-image-title">
                      {el.title}
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
        <div className="section__header-more">
          <a>Узнать больше</a>
        </div>
      </div>
      <div className="section__body">
        <div className="section__body-images">
          <Image
            className="section__body-image"
            src="/image_4.png"
            alt=""
            width={993}
            height={324}
          />
        </div>
        <div className="news">
          <div className="news__item-title">
            Просторные квартиры с гардеробными{" "}
          </div>
          <div className="news__item">
            Жилой комплекс "Новый город" расположен в одном из самых
            развивающихся районов Обнинск - Заовражье. Несмотря на близость к
            центру ( 5 минут езды до ТРК "Триумф Плаза"), место здесь тихое и
            спокойное
          </div>
          <div className="news__item-date">
            Архитектура и дизайн комплекса - яркий пример удачного сочетания
            классических традиций строительства с современными материалами и
            технологиями. Территория микрорайона разделена на ряд
            благоустроенных зон с детскимии игровыми площадками, спортивными
            тренажерами и прогулочными дорожками
          </div>
        </div>
      </div>
    </div>
  );
}
