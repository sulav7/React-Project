import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Review from "./components/Review";
import AccordianData from "./components/AccordianData";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import LogIn from "./components/LogIn";
const App = () => {
  const [question, setQuestion] = useState(AccordianData);
  return (
    <div className=''>
      {/* <section className='review'>
        <Review />
      </section> */}
      {/* <section className='accordian'>
        <div className='info'>
          <h1 style={{ textAlign: "center" }}>FAQ</h1>
          {question.map((questions) => {
            return <Accordian key={questions.id} {...questions} />;
          })}
        </div>
      </section> */}
      <LogIn />
      {/* <RestaurantMenu /> */}
    </div>
  );
};

export default App;
