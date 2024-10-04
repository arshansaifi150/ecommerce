import { Button } from "../components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:5000/login', loginForm, {
            // withCredentials: true
        })
        console.log(response.data)
        const token = !!response.data.token
        if (token) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isAdmin',response.data.isAdmin)
            navigate('/')

        } else {
            alert("Invalid Credentials")
        }



        // console.log(response.data)



    } catch (error) {
        alert("invalid username or password")
    }
}

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600">
      <div className="flex justify-center">
        {/* <div className="w-[30%] p-3 bg-gray-300 rounded-l-xl ">
          <img src="https://img.freepik.com/free-photo/fashion-clothing-white-color-knitted-patterns-hanging-racks-display-row-solid-outfits-wardrobe_273609-32739.jpg?t=st=1724238334~exp=1724241934~hmac=0bbfd13ef02538831426e19e8a17cf09a2a08edc2a7aa796ab56509f0e111d55&w=1060" 
          className="object-cover w-fit rounded-lg"
          alt="" />
          <div>
            <h1 className="text-2xl  text-center">
              Free Shipping
            </h1>
          </div>
        </div> */}
        <div className="p-5 bg-gray-300 shadow-2xl rounded-xl h-fit  ">
        <form
          action=""
          method="post"
          onSubmit={handleLogin}
          className="flex flex-col justify-center  gap-5"
        >
          <div>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                id="username"
                className="px-3 py-2 w-full rounded-xl"
                placeholder="Username"
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 py-2 w-full rounded-xl"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                className="px-3 py-2 w-full rounded-xl"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                placeholder="password"
              />
            </label>
          </div>
          <div className="self-center ">
            <Button className="px-10 py-2" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
      </div>
      
    </div>
  );
}

export default Login;
