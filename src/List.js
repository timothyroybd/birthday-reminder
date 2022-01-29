import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [personData, setPersonData] = useState(data);
  const [count, setCount] = useState(personData.length);
  const clearAll = () => {
    setPersonData([]);
    setCount(0);
  };
  return (
    <section className="container">
      <h3>{count} birthdays today</h3>
      {personData.map(({ id, name, age, image }) => {
        return (
          <div className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </section>
  );
};

export default List;
