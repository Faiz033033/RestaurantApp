import React from "react";
import Card from "../UI/Card";
import classes from "./AvaillableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "All the way from Punjab",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken Tikka Masala",
    description: "flavorful and slightly spicy taste",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Paneer Tikka",
    description: "marinating cubes of paneer",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Palak Paneer",
    description: "Pure Indian Taste...",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Chicken Biryani",
    description: "Taste of Asia...",
    price: 28.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
          <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
