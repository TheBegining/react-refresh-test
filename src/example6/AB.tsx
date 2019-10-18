import React from "react";
import ABA from "./ABA";
import ABB from "./ABB";
import Counter from "./Counter";

const AB = () => {
  console.log("refresh AB");
  return (
    <div style={{ flexGrow: 1 }}>
      AB:
      <Counter name={"AB"} />
      <div style={{ display: "flex" }}>
        <ABA />
        <ABB />
      </div>
    </div>
  );
};

export default AB;
