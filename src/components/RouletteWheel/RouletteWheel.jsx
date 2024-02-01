import "./RouletteWheel.scss";
import React from "react";
import { Wheel } from "react-custom-roulette";

function RouletteWheel() {
  <>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={3}
      data={data}
      backgroundColors={["#3e3e3e", "#df3428"]}
      textColors={["#ffffff"]}
    />
  </>;

  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];
}

export default RouletteWheel;
