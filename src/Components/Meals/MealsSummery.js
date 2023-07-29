import { Fragment} from "react";
import classes from './MealsSummery.module.css'

const MealsSummery = (props) => {
  return (
    <Fragment className={classes.summary}>
      <h2 >Delicious Foods, Delivered To You!</h2>
      <p>
        Welcome to Sharpner Restaurant, where culinary excellence meets
        unforgettable dining experiences. Indulge in a symphony of flavors
        expertly crafted by our passionate chefs using only the freshest,
        locally sourced ingredients. Whether you seek an intimate dinner for two
        or a lively gathering with friends, our warm ambiance and attentive
        service ensure an extraordinary time. Discover a delightful journey
        through the finest gastronomic delights at Sharpner Restaurant.
      </p>
    </Fragment>
  );
};

export default MealsSummery
