import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:8001/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
      if (error.response) {
        history.push("/");
      }
    }
    const axiosJwt = axios.create();
    axiosJwt.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get("http://localhost:8001/token");
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.name);
          setExpire(decoded.exp);
        }
        console.log(config);
        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8001/users", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    setUsers(response.data);
  };
  return (
    <div className="dashboard">
      <h1>Welcome Back {name}</h1>
      <table className="table is-striped is-fullwidth">
        <thead>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((user, index) => {
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
