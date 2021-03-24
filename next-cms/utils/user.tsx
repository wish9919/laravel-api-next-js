import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { IUser } from "../types/user";

export const getUser = () => {
  const [user, setUser] = useState<IUser>(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`/api/user`, config)
      .then((res) => {
        const { data } = res;
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    user,
  };
};

export const logOutUser = () => {
  localStorage.removeItem("user");
  location.replace("/auth/login");
};

export interface Credentials {
  email: string;
  password: string;
}

export const login = async (credentials: Credentials) => {
  await axios
    .post("http://127.0.0.1:8000/api/login", credentials)
    .then((res) => {
      const { data } = res;
      console.log({ data });
      localStorage.setItem("user", JSON.stringify(data));
      location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
