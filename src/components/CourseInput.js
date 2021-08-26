import Button from './Button/Button';
import React , {useState} from 'react'
import '../App.css';
import down from './down.svg';

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const inputChangehandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form className="App" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Here"
        value={enteredValue}
        className="input"
        onChange={inputChangehandler}
      />
      <Button type="submit">Course Goals</Button>
      <h2 className='head'>
        Todo List Below <img src={down} alt="My logo" />
      </h2>
    </form>
  );
}

export default CourseInput;
