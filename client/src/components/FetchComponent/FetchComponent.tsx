import axios from "axios";
import { FC, useState } from "react";
import "./FetchComponent.css";

interface FetchComponentProps {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  phone: string;
}

const FetchComponent: FC = () => {
  const [users, setUsers] = useState<FetchComponentProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSingleUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      const newUser = response.data.results[0];
      console.log(newUser);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Error fetching single user", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fetch-component">
      <h1>Fetch Component</h1>
      {loading && <p className="loading">Loading...</p>}
      <button className="fetch-button" onClick={fetchSingleUser}>
        Fetch Single User
      </button>
      <div className="user-list">
        {users.map(({ name, login, phone }) => (
          <div className="user-card" key={login.uuid}>
            <h3>
              {name.title} {name.first} {name.last}
            </h3>
            <p>Username: {login.username}</p>
            <p>Phone: {phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchComponent;
