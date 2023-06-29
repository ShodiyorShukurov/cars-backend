import { useContext } from "react";
import "./cars.scss";
import { CiCalendar } from "react-icons/ci";
import { BsSpeedometer } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { Context as CarContext } from "../../context/cars";

const Cars = () => {
  const {
    cars,
    nameRef,
    avatarRef,
    priceRef,
    speedRef,
    colorRef,
    yearRef,
    doorsRef,
    handleSubmit,
    handleDelete,
    handleEdit,
    selectedItem,
  } = useContext(CarContext);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Add Car</h1>
              </div>
              <div className="card-body">
                <form onSubmit={(evt) => handleSubmit(evt)}>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Car name"
                    ref={nameRef}
                    defaultValue={selectedItem?.name}
                    required
                  />
                  <input
                    className="form-control my-3"
                    type="url"
                    name="avatar"
                    placeholder="Img url"
                    ref={avatarRef}
                    defaultValue={selectedItem?.avatar}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    name="price"
                    type="number"
                    placeholder="Car price"
                    ref={priceRef}
                    defaultValue={selectedItem?.price}
                    required
                  />
                  <input
                    className="form-control"
                    name="speed"
                    type="number"
                    placeholder="Car speed"
                    ref={speedRef}
                    defaultValue={selectedItem?.speed}
                    required
                  />
                  <input
                    className="form-control my-3"
                    name="year"
                    type="number"
                    placeholder="Car year"
                    ref={yearRef}
                    defaultValue={selectedItem?.year}
                    required
                  />
                  <input
                    className="form-control"
                    name="doors"
                    type="number"
                    placeholder="Car doors"
                    ref={doorsRef}
                    defaultValue={selectedItem?.doors}
                    required
                  />
                  <input
                    className="form-control my-3"
                    name="color"
                    type="color"
                    placeholder="Car color"
                    ref={colorRef}
                    defaultValue={selectedItem?.color}
                    required
                  />
                  <button className="btn btn-success w-100">Add</button>
                </form>
              </div>
            </div>
          </div>

          <ul className="card-cars__list">
            {cars.length > 0 &&
              cars.map((car) => (
                <li className="card-cars__item" key={car.id}>
                  <div className="card-cars__img">
                    <img
                      className="card-cars__image"
                      src={car.avatar}
                      alt="cars"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="card-cars__end">
                    <p className="card-cars__price">Price {car.price} $</p>
                    <p className="card-cars__name">{car.name} </p>
                    <div className="card-cars__text">
                      <p className="card-cars__desc year">
                        <CiCalendar />
                        {car.year}
                      </p>
                      <p className="card-cars__desc speed">
                        <BsSpeedometer />
                        {car.speed}km/h
                      </p>
                      <p className="card-cars__desc door">
                        <GiCarDoor />
                        {car.doors}
                      </p>
                      <p
                        className="card-cars__desc color"
                        style={{ color: `${car.color}` }}
                      >
                        <IoMdColorPalette />
                        {car.color}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(car)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(car.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <button className="d-block mx-auto btn btn-success w-25 my-3">
            <a className="text-white" href="/">GO HOME</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cars;
