import React, { useState } from "react";

const MyAccordian = (props) => {
  const [showData, setShowData] = useState(false);

  const toggle = () => {
    setShowData(!showData);
  };
  return (
    <>
      <div className="main-heading">
        <p onClick={toggle}>{showData ? "➖" : "➕"}</p>
        <h3>{props.question}</h3>
      </div>
      {showData && <p className="answers">{props.answer}</p>}
    </>
  );
};

export default MyAccordian;
