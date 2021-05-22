import "./App.css";
import DummyInfo from "./components/DummyInfo.js";
import { React, useState, useEffect } from "react";
import Map from "./components/Map.js";
import Title from "./components/Title.js"
function App() {
  const [options, setOptions] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    let map = new Map();
    map.createMap(38.03021221173271, -78.47680996024131, 13);
    setMap(map);
    setOptions(DummyInfo);
  }, []);

  useEffect(() => {
    if (options.length !== 0 && map !== null) {
      map.setMarkers(options);
    }
  }, [map, options]);

// didn't know you could stack values in ternary operators kinda like switch statements
//https://stackoverflow.com/questions/12548857/multiple-conditions-in-ternary-conditional-operator
const content = DummyInfo.map((obj) => {
    const price =
      obj.price_level == undefined
        ? "$ info not available "
        : obj.price_level === 1
        ? "$"
        : obj.price_level === 2
        ? "$$"
        : obj.price_level === 3
        ? "$$$"
        : obj.price_level === 4
        ? "$$$$"
        : "";
    return (
      <div class="header1">
        <h3>{obj.name}</h3>

        <h3>
          {obj.rating} stars, {price}
        </h3>

        <ul class="places">
          <img src={obj.imgURL} alt="Nearby Places" class="center" />
        </ul>
        <span style={{ backgroundColor: "white" }}></span>
      </div>
    );
  });
  return <div><Title></Title>{content}</div>;
}

export default App;
