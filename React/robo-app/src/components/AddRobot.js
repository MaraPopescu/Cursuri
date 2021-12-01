import { useState } from "react";
import "./AddRobot.css";

function AddRobot({ handleAddUser }) {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  return (
    <div className='add-container'>
      <input
        placeholder='Nume...'
        type='text'
        onChange={(event) => {
          setName(event.target.value);

          console.log(event);
        }}></input>
      <input
        placeholder='Email'
        type='email'
        onChange={(event) => {
          setEmail(event.target.value);
        }}></input>
      <button
        onClick={() => {
          handleAddUser(name, email);
        }}>
        Adauga utilizator nou!
      </button>
      <br />
      {name} ----- {email}
    </div>
  );
}

export default AddRobot;
