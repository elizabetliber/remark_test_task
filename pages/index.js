import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const imagesMap = [
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="section">
        <div>
          <div className="section__header-display">
            <div className="section__header-title">Предложения и акции</div>
            <div className="section__header-img-first">
              <a className="button_1">
                <Image
                  src="/Subtract_1.png"
                  onClick={this.previous}
                  width={24}
                  height={24}
                />
              </a>
              <a className="button_2">
                <Image
                  src="/Subtract_2.png"
                  onClick={this.next}
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className="section__header-cards">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {imagesMap.map((el, index) => (
                <div className="section__header-card" key={index}>
                  <Image
                    className="section__header-image"
                    src={el.image}
                    width={848}
                    height={424}
                  />
                  <div className="section__header-image-title">{el.title}</div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="section__header-img-second">
            <a className="button_1">
              <img src="/Subtract_1.png" onClick={this.previous} />
            </a>
            <a className="button_2" onClick={this.next}>
              <img src="/Subtract_2.png" alt="" />
            </a>
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
            <div className="news__item">
              Просторные квартиры с гардеробными→
            </div>
            <div className="news__item">
              Жилой комплекс "Новый город" расположен в одном из самых
              развивающихся районов Обнинск - Заовражье. Несмотря на близость к
              центру ( 5 минут езды до ТРК "Триумф Плаза"), место здесь тихое и
              спокойное
            </div>
            <div className="news__item">
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
}
