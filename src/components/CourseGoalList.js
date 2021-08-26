import React from "react";
import CourseGoalItem from "./CourseGoalItem";

function CourseGoalList(props) {
  const list = props.items.map((goal) => { return [
    <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
      {goal.name}
    </CourseGoalItem>];
  });
  return <ul>{list}</ul>;
}

export default CourseGoalList;
