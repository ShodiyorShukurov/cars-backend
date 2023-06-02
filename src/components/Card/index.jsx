import React from "react";
import { CiCalendar } from "react-icons/ci";
import { BsSpeedometer } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { Context as CarContext } from "../../context/cars";
import "./card.scss";

const Card = () => {
  const { cars } = React.useContext(CarContext);
  console.log(cars);

  return (
    <>
      <section className="card-section">
        <div className="container">
          <ul className="card-section__list">
            {cars.length > 0 &&
              cars.map((car) => (
                <li className="card-section__item" key={car.id} data-aos="zoom-in">
                  <div className="card-section__img">
                    <img
                      className="card-section__image"
                      src={car.avatar}
                      alt="cars"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="card-section__end">
                    <p className="card-section__price">Price {car.price} $</p>
                    <p className="card-section__name">{car.name} </p>
                    <div className="card-section__text">
                      <p className="card-section__desc year">
                        <CiCalendar />
                        {car.year}
                      </p>
                      <p className="card-section__desc speed">
                        <BsSpeedometer />
                        {car.speed}km/h
                      </p>
                      <p className="card-section__desc door">
                        <GiCarDoor />
                        {car.doors}
                      </p>
                      <p
                        className="card-section__desc color"
                        style={{ color: `${car.color}` }}
                      >
                        <IoMdColorPalette />
                        {car.color}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Card;
