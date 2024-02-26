import { useEffect } from "react";
import "./App.css";
import baseUrl from "./baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-users`)
      .then((res) => {
        console.log(res.data); // Log the API response
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(users)

  return (
    <div className="App">
      <h1>READ</h1>

      
      {users &&
  users.length > 0 &&
  users.map((user, index) => {
    return (
      <div key={index}>
        <h3>
          {user.name} {user.lastName}
        </h3>
      </div>
    );
  })}


      <button onClick={() => navigate("create")}>Create</button>
    </div>
  );
}

export default App;