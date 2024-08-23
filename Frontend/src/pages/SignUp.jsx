import axios from "axios";
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom";

import React, { useState } from "react";

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    username:"",
    email:"",
    password:"",
  });

  const handleSubmit = async(e)=>(
    e.preventDefault(),
    console.log(signUpForm),
   await axios.post("http://localhost:5000/signup",signUpForm),
    setSignUpForm({
        username:"",
        email:"",
        password:""
    })

  )

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600">
      <div className="p-5 bg-gray-300 shadow-2xl rounded-xl h-fit ">
        <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col justify-center  gap-5 p-5">
          <div >
            <label htmlFor="username">Username
              <input
                type="text"
                name="username"
                id="username"
                className="px-3 py-2 rounded-xl w-full"
                placeholder="Username"
                value={signUpForm.username}
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, username: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">Email
              <input type="email" name="email" id="email" className="px-3 py-2 w-full rounded-xl" 
              placeholder="Email"
              value={signUpForm.email}
              onChange={(e)=>setSignUpForm({...signUpForm,email:e.target.value})}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">Password
                <input type="password" name="password" id="password" 
                className="px-3 py-2 w-full rounded-xl"
                value={signUpForm.password}
                onChange={(e)=>setSignUpForm({...signUpForm,password:e.target.value})}
                placeholder="password"
                />
            </label>
          </div>
          <div className="self-center">
            <Button className="" type="submit">
                Create Account
            </Button>
          </div>
          <div className="self-center">
            <p className="text-sm text-gray-800">Already have an account? <Link to={'/login'} className="text-orange-500 font-semibold">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
