import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();
  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://react-http-tests-b89b5-default-rtdb.firebaseio.com/meals.json");
      
      if (!response.ok) {
        throw new Error("Deu ruim!")
      }
      
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    try {
      fetchMeals().catch((e) => {
        setIsLoading(false);
        setHasError(e.message);
      });
    } catch (e) {

    }
  }, []);

  if (hasError) {
    return <section className={classes.MealsError}>
      <p>{hasError}</p>
    </section>
  }

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
