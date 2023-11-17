import { useEffect, useState } from "react";
import UserData from "./components/UserData.js";

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  //as API data return promises so async await
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data); //if data is fetched from the api then store it to users array for further uses
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  //used to fetch data from API but only first time rendering
  useEffect(() => {
    fetchUsers(API);
  }, []); // [] if dependency array is blank then it render for the first time
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
