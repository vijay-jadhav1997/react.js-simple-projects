import { useState, useEffect } from "react";
import "./App.css";
import EmployeeCard from "./components/userCard/EmployeeCard";

function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  async function userData() {
    try {
      const data = await fetch("https://dummyjson.com/users/");
      const jsonData = await data.json();
      console.log(jsonData);
      setStudentList(jsonData?.users);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="app">
        <header>
          <h1>
            User Profile Card Using <span>React</span>
          </h1>
        </header>
        <div className="studentCard_container">
          {studentList.map((studentInfo) => {
            return (
              <EmployeeCard key={studentInfo?.id} studentData={studentInfo} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
