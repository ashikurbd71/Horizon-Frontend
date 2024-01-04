import React from 'react';
import banner1 from "../assets/banner-2.jpg"
import Container from '../Shared/Container';
import { Link } from 'react-router-dom';
const Login = () => {
    return (

        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url('${banner1}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
         
        <h1 className="mb-2 text-2xl">Horizen Travel</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <form action="#">
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-black  text-center  placeholder-gray-900 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-gray-900 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="rounded-3xl bg-black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900">Login</button>
        </div>
      </form>

      <h1 className='text-center mt-5'>
Don't have an account yet?<Link to={'/register'}> <span className='text-black underline'>Register</span></Link></h1>
    </div>
  </div>
</div>
       

    );
};

export default Login;