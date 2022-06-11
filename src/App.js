import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderData = () => {
    console.log(data);
    return data.map(({ id, name, username, email, phone }) => (
      <div key={id}>
        <h1>{name}</h1>
        <h3>{username}</h3>
        <h3>{phone}</h3>
        <h3>{email}</h3>
      </div>
    ));
  };

  return <div className="app">{data ? renderData() : <h1>fetching</h1>}</div>;
}

export default App;
