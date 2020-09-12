import React, { useState } from "react";
import fakeData from "../../fakeData/data.json";
import Subject from "../Subject/Subject";
import Cart from "../Cart/Cart";
import "./Class.css";

const Class = () => {
  //console.log(fakeData);
  const [totalClass, setTotalClass] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddSubject = (subject) => {
    const newCart = [...cart, subject];
    setCart(newCart);
    //console.log("subject added", subject);
  };

  return (
    <div className="class-container">
      <div className="subject-container">
        {totalClass.map((cl) => (
          <Subject
            subject={cl}
            handleAddSubject={handleAddSubject}
            key={cl.id}
          ></Subject>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Class;
