import React from "react";
import Admin from "../layouts/Admin";
import { logOutUser } from "../utils/user";

export default function Home() {
  return (
    <>
      <Admin>
        <div>
          {/* <h1>hi, {user.name}</h1> */}
          <button onClick={logOutUser}>Logout</button>
        </div>
      </Admin>
    </>
  );
}
