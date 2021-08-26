import CourseInput from "./components/CourseInput";
import CourseGoalList from "./components/CourseGoalList";
import React, { useState } from "react";

const arr = [
  { id: "g1", name: "Create Todo list" },
  { id: "g2", name: "Solve HackerEarth test" },
  { id: "g3", name: "Do exercise" },
  { id: "g4", name: "Create a Full stack app" },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(arr);
  
  const addGoalHandler = (enteredName) => {
    setCourseGoals((prevGoals) => {
      let updatedGoals = [];
      updatedGoals = [...prevGoals];
      updatedGoals.push({
        id: Math.floor(Math.random() * 100).toString(),
        name: enteredName,
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (id) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler} />
      {content}
    </div>
  );
}

export default App;
