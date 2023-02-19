import { useState } from "react";
import "./App.css";
import List from "./components/List";
import cassie from "./images/cassie.jpg";
import mayer from "./images/mayer.jpg";
import lottie from "./images/lottie.jpg";
import alan from "./images/alan.jpg";
import Surround from "./components/Surround";


function App() {
const petList = [{name: "Cassie", image: cassie, alt: "A blue roan cocker spaniel stares at the camera.", color: "#BAFFC9", about:"I love stealing socks, barking at hot air balloons and sighing deeply."}, {name: "Mayer", image: mayer, alt: "A ginger cat enjoys a head scratch.", color: "#BAE1FF", about:"I love breaking into the cupboard where my food is kept." }, {name: "Lottie", image: lottie, alt: "A hopeful King Charles spaniel begs for food.", color: "#BAFFC9", about:"I love taking a bite out of apple pies when none of my family are looking."}, {name: "Alan", image: alan, alt: "A white alpaca stares into the distance.", color: "#BAE1FF", about: "I love contemplating the meaning of life."}]
  return <div className="App">
  <Surround>
    <List pets={petList} />
    </Surround>
  </div>;
}

export default App;
