import React from "react";
import PropTypes from "prop-types";
import { API_KEY } from "../../utils/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [cars, setCars] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState({});

  const nameRef = React.useRef();
  const avatarRef = React.useRef();
  const priceRef = React.useRef();
  const speedRef = React.useRef();
  const colorRef = React.useRef();
  const yearRef = React.useRef();
  const doorsRef = React.useRef();

  const postCars = async () => {
    try {
      const res = await fetch(API_KEY + "car", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      toast(error.message);
    }
    nameRef.value = "";
    avatarRef.value = "";
    speedRef.value = "";
    yearRef.value = "";
    doorsRef.value = "";
    colorRef.value = "";
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (selectedItem.id) {
      fetch(API_KEY + "car/" + selectedItem.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value.trim(),
          avatar: avatarRef.current.value.trim(),
          price: priceRef.current.value.trim(),
          speed: speedRef.current.value.trim(),
          year: yearRef.current.value.trim(),
          doors: doorsRef.current.value.trim(),
          color: colorRef.current.value.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) postCars();
          console.log(data);
          setSelectedItem({});
        })
        .catch((err) => toast(err.message));
    } else {
      fetch(API_KEY + "car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value.trim(),
          avatar: avatarRef.current.value.trim(),
          price: priceRef.current.value.trim(),
          speed: speedRef.current.value.trim(),
          year: yearRef.current.value.trim(),
          doors: doorsRef.current.value.trim(),
          color: colorRef.current.value.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => postCars(data))
        .catch((err) => toast(err.message));
    }
    nameRef.current.value = "";
    avatarRef.current.value = "";
    priceRef.current.value = "";
    speedRef.current.value = "";
    yearRef.current.value = "";
    doorsRef.current.value = "";
    colorRef.current.value = "";
  };

  const handleDelete = (id) => {
    fetch(API_KEY + "car/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) postCars();
        toast("Muvaffaqiyatli o'chirildi");
      })
      .catch((err) => toast(err.message));
  };

  const handleEdit = (car) => {
    console.log(selectedItem);
    setSelectedItem(car);
    nameRef.current.value = car.name;
    avatarRef.current.value = car.avatar;
    priceRef.current.value = car.price;
    speedRef.current.value = car.speed;
    yearRef.current.value = car.year;
    doorsRef.current.value = car.doors;
    colorRef.current.value = car.color;
  };

  React.useEffect(() => {
    postCars();
  }, []);

  return (
    <Context.Provider
      value={{
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
