import logo from "../assets/logo.png";
import { useFormik } from "formik";
import LoginSchema from "./LoginSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ParticipantsLogin = () => {
  const initialValues = {
    roll: "",
    password: "",
  };

  const [loginError, setLoginError] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,

      // onSubmit: async (values) => {
      //   // console.log("hello");
      //   try {
      //     const response = await fetch('http://127.0.0.1:5000/login/', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(values),
      //     });

      //     if (response.ok) {
      //       // Successfull Login
      //       const data = await response.json();
      //       console.log(data);
      //       console.log("Successfull");
      //     } else {
      //       // Login failed.
      //       const errorData = await response.json();
      //       setLoginError(errorData.message);
      //       console.log("failed");
      //     }
      //   } catch (error) {
      //     console.error("Error:", error);
      //     setLoginError("An error occurred during login.");
      //   }
      // },
    });

    //to check error in the data.
    const check = async(data)=>{
      if("error" in data ){
        // toast(data.error)
        return true;
      }
      return false;
    }

    //to fetch
    const submit = async(e)=>{
      e.preventDefault();
      try {
        // console.log("hello");
        console.log(values);
        const response = await fetch(`http://127.0.0.1:5000/login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Successfull Login
          const data = await response.json();
          // console.log(data
          if(check(data)){
              
            // console.log(data);
              toast.error(data.error,{
                position:"top-center",
                theme:"colored",})
          }
          else{

              toast.success(data.successfull,{
                position:"top-center",
                theme:"colored",})
            }
          // console.log("Successfull");

          
        } else {
          // Login failed.
          const errorData = await response.json();
          setLoginError(errorData.message);
          console.log("failed");
          toast.error("Unsuccessfull",{
            position:"top-center",
            theme:"colored",}
          )
        }
      } catch (error) {
        toast.error("Unsucessfull",{
          position:"top-center",
          theme:"colored",
        })
        setLoginError("An error occurred during login.");
      }
    }
    
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="" />
      <div className="bg-transparent backdrop-blur-sm rounded-lg h-full m-0 p-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex-1">
          <div className="bg-gradient-to-t from-transparent via-blue-950/60 to-transparent shadow-lg p-7">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
              Login
            </h1>

            <div className="m-2 w-36 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>

            <form onSubmit={submit}>
              <div className="input-block text-left p-5 font-semibold font-custom-san">
                <input
                  type="number"
                  name="roll"
                  placeholder="Roll Number "
                  className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                  value={values.roll}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.roll && touched.roll ? (
                  <p className="form-error text-red-500">{errors.roll}</p>
                ) : null}
              </div>
              <div className="input-block text-left p-5 font-semibold font-custom-san">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error text-red-500">{errors.password}</p>
                ) : null}
              </div>
              <div className=" justify-between items-center mt-3">
                <button 
                type="submit"
                className="py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 text-white">
                Login
                </button>
              </div>
            </form>

            {loginError && <p className="text-red-500">{loginError}</p>}

            <div className="m-3 grid grid-cols-3 items-center text-blue-500">
              <hr className="border-blue-500" />
              <p className="text-center">OR</p>
              <hr className="border-blue-500" />
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="mt-3 text-xs text-white flex justify-between items-center">
                If not Registered..
              </p>
              <Link
                to="/signup/participant"
                className="py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 text-white"
              >
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            src={logo}
            alt="Registration Image"
            className="rounded-2xl h-fit"
          />
        </div>
      </div>
      <ToastContainer/>
      <Particle />
    </div>
  );
};

export default ParticipantsLogin;
