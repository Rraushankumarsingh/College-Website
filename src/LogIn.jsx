import React, { useState ,useEffect} from "react";
import { json, useNavigate } from "react-router-dom";

export const LogIn = () => {

  let navigate = useNavigate();

  const RegisterButton = () => {
    navigate("/Registion");
  };
  //const strogeResistionData = localStorage.getItem("RegistionData");

  // let RegistionData;
  // if (strogeResistionData) {
  //   RegistionData = JSON.parse(strogeResistionData);
  // }

  let [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  let [Error, setError] = useState({});
   console.log(Error,"Error")

  let handalOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitdata = (e) => {
    debugger
    e.preventDefault();
    const token ="12345"
    let handalerror = {};
    if (!user.Email.trim()) {
      handalerror.Email = "userName is required ";
    }
    if (!user.Password.trim()) {
      handalerror.Password = "password is required";
    }

    setError(handalerror);
    if (Object.keys(handalerror).length === 0) {
      if (
        RegistionData &&
        user.UserName === RegistionData.UserName &&
        user.Password === RegistionData.Password
      ) {
        localStorage.setItem("isAuth", true);
        alert("Log In sucessecfull");
        setUser({
          Email: "",
          Password: "",
        });
      } else {
        alert("invalid user");
      }
    }
    
     navigate("/")
  };

  return (
    <>
      <style>
        {`
          body {
            
            background-image: url(${"https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"});
            background-size: cover;
            background-position: center;
            
          }
        `}
      </style>
      <div className=" flex items-center justify-center  h-full  mt-28">
        <div className="p-8 rounded shadow-black shadow-md mb-4 ">
          <h2 className="text-2xl font-semibold mb-4 text-center">  LogIn </h2>

          <form className="w-90 h-full">
            <div className="mb-4">
              <label className="block text-gray-900 text-sm font-bold mb-2 ">
                Username
              </label>
              <input
                name="Email"
                type="Email"
                placeholder="UserName "
                className="rounded-md border-spacing-0"
                onChange={handalOnChange}
                value={user.Email}
              />
              <br />
             
              {Error.Email && <span>{Error.Email}</span>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Password
              </label>
              <input
                name="Password"
                type="Password"
                placeholder="Password"
                className="rounded-md  border"
                value={user.Password}
                onChange={handalOnChange}
              />
              <br />
              {Error.Password && <span>{Error.Password}</span>}
            </div>

            <button
              className="w-full bg-blue-700 text-white p-2 rounded-md  focus :outline none focus:shadow outline-blue
          "
              onClick={submitdata}
            >
              Submit
            </button>
            <p className="mt-4">
              New user please Register{" "}
              <button
                className="bg-green text-center font-medium rounded-md text-lg font-bold"
                onClick={RegisterButton}
              >
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
