import React from "react";
import { questions } from "./data";
import MyAccordian from "./MyAccordian";
import "./accordian.css";

const Accordian = () => {
  return (
    <>
      <h1>react interview questions</h1>
      <section className="main-div">
        {questions.map((curVal) => {
          const { id } = curVal;
          return <MyAccordian key={id} {...curVal} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
