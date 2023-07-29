import {Fragment}  from "react";
import Header from "./Components/Layout/Header";
import MealsSummery from "./Components/Meals/MealsSummery";


function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummery/>
    </Fragment>
  );
}

export default App;
