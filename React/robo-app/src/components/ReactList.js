import { useState } from "react";
import "./ReactList.css";
import { useEffect } from "react";
import RobotCard from "./RobotCard";
import AddRobot from "./AddRobot";
import SearchInput from "./SearchInput";

function ReactList() {
  //state variables

  const [userList, setUserList] = useState([]);
  const [userFilteredList, setUserFilteredList] = useState([]);

  const [search, setSearch] = useState(" ");

  //useEffect changes

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUserList(users);
        setUserFilteredList(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredList = userList.filter((user) => {
      if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (user.email.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    setUserFilteredList(newFilteredList);
  }, [search, userList]);

  //Customn handle function

  const handleAddUser = (name, email) => {
    const newUserList = userList.map((user) => {
      return user;
    });
    newUserList.push({ name: name, email: email });
    setUserList(newUserList);
    setUserFilteredList(newUserList);
  };
  const handleSearchUser = (inputValue) => {
    console.log("Valoare noua", inputValue);
    setSearch(inputValue);
  };

  return (
    <div className='react-view-container'>
      <AddRobot handleAddUser={handleAddUser} />
      <SearchInput handleSearchUser={handleSearchUser} />
      <div className='react-list-container'>
        {userFilteredList.map((user, index) => {
          return (
            <RobotCard
              nameAtribut={user.name}
              emailAtribut={user.email}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ReactList;
