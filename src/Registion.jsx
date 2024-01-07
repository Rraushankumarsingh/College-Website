import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Registion = () => {
  let navigate = useNavigate();

  let gotologin = () => {
    navigate("/LogIn");
  };
  let [Formdata, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Number: "",
    Password: "",
    Confirmpassword: "",
  });
  // console.log(Formdata);
  let [Error, setError] = useState({});

  let HandalOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Formdata, [name]: value });
  };
  var cheakPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  let RegistionTologin = (e) => {
    e.preventDefault();

    let handalerror = {};
    //console.log(handalerror);
    if (!Formdata.FirstName.trim()) {
      handalerror.FirstName = "Firstname is require";
    } else if (Formdata.FirstName.length < 3) {
      handalerror.FirstName = "Firstname more then 3 digit";
    }
    if (!Formdata.LastName.trim()) {
      handalerror.LastName = "Lastname is require";
    } else if (Formdata.LastName.length < 3) {
      handalerror.LastName = "Lastname more then 3 digit";
    }
    if (!Formdata.Email.trim()) {
      handalerror.Email = "Email is requred";
    } else if (cheakPassword.test(Formdata.Email)) {
      handalerror.Email = "invalite Email";
    }
    if (!Formdata.Number.trim()) {
      handalerror.Number = "Number is required";
    } else if (Formdata.Number.length < 10) {
      handalerror.Number = "Number must have 10 chacter";
    }
    if (!Formdata.Password.trim()) {
      handalerror.Password = "password is require";
    } else if (Formdata.Password.length < 6) {
      handalerror.Password = "password must be 6 char";
    } else if (!cheakPassword.test(Formdata.Password)) {
      handalerror.Password = "password must have include @Aa123";
    }
    if (!Formdata.Confirmpassword.trim()) {
      handalerror.Confirmpassword = "Confirmpassword is required";
    } else if (Formdata.Confirmpassword !== Formdata.Password) {
      handalerror.Confirmpassword = "password not match";
    }else if (!cheakPassword.test(Formdata.Confirmpassword)) {
      handalerror.Confirmpassword = "password must have include @Aa123";
    }
    setError(handalerror);

    if (Object.keys(handalerror).length === 0) {
       // localStorage.setItem("RegistionData",  JSON.stringify(Formdata))
      alert("form submit successfully");
      setFormData({
        FirstName: "",
        LastName: "",
        Email: "",
        Number: "",
        Password: "",
        Confirmpassword: "",
      });
      navigate("/LogIn");
    }
  };

  return (
         <>

           <style>
        {`
          body {
            
            background-image: url(${"https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg"});
            background-size: cover;
            background-position: center;
            
          }
        `}
        </style>
      <div className=" flex items-center justify-center  h-full   mt-5 overflow-visible">
        <div className="p-8 rounded shadow-md shadow-black mb-2 w-auto items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">Registion</h2>

          <form className="w-90 h-full">
            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                FirstName
              </label>
              <input 
                name="FirstName"
                type="text"
                placeholder="firstname "
                className="rounded-sm border pl-1 "
                value={Formdata.FirstName}
                onChange={HandalOnChange}
              />
              <br></br>
              {Error.FirstName && <span>{Error.FirstName}</span>}
            </div>
           

            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                LastName
              </label>
              <input
                name="LastName"
                type="text"
                placeholder="lastname"
                className="rounded-sm  border pl-1"
                value={Formdata.LastName}
                onChange={HandalOnChange}
              />
              <br />
              {Error.LastName && <span>{Error.LastName}</span>}
            </div>

            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Email
              </label>
              <input
                name="Email"
                type="Email"
                placeholder="email"
                className="rounded-sm border-spacing-0 pl-1"
                value={Formdata.Email}
                onChange={HandalOnChange}
              />
              <br />
              {Error.Email && <span>{Error.Email}</span>}
            </div>

            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Number
              </label>
              <input
                name="Number"
                type="text"
                placeholder="number"
                className="rounded-sm  border pl-1"
                value={Formdata.Number}
                onChange={HandalOnChange}
              />
              <br />
              {Error.Number && <span>{Error.Number}</span>}
            </div>
            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                password
              </label>
              <input
                name="Password"
                type="password"
                placeholder="password"
                className="rounded-sm  border pl-1"
                value={Formdata.Password}
                onChange={HandalOnChange}
              />
              <br />
              {Error.Password && <span>{Error.Password}</span>}
            </div>

            <div className="mb-2">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Confirmpassword
              </label>
              <input
                name="Confirmpassword"
                type="password"
                placeholder="Confirmpassword"
                className="rounded-sm  border pl-1"
                value={Formdata.Confirmpassword}
                onChange={HandalOnChange}
              />
              <br />
              {Error.Confirmpassword && <span>{Error.Confirmpassword}</span>}
            </div>

            <button
              className={`w-full bg-blue-700 text-white p-2 rounded-md  focus :outline none focus:shadow outline-blue ${(!Formdata.FirstName || !Formdata.LastName||
                !Formdata.Email ||
                !Formdata.Password ||
                !Formdata.Number||
                !Formdata.Confirmpassword) ?  "disabledButton" : ""}`}
          
              onClick={RegistionTologin}
            
              disabled=
              {!Formdata.FirstName || !Formdata.LastName||
                !Formdata.Email ||
                !Formdata.Password ||
                !Formdata.Number||
                !Formdata.Confirmpassword}
                 
               > Registion
            
            </button>
            <p className="mt-2">
              Already register please log in{" "}
              <button
                className="bg-green text-center font-medium rounded-md"
                onClick={gotologin}
              >
                LogIn
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
