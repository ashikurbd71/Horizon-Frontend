import React from 'react';

const Register = () => {
    return (
        <div>
           <div>
  {/* <!-- component --> */}
  <body className="font-mono bg-[#FFFFFF]">
    {/* <!-- Container --> */}
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        {/* <!-- Row --> */}
        <div className="w-full flex">
   
         
          {/* <!-- Col --> */}
          <div className="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center font-bold ">Create an Account!</h3>
        <p className='text-center font-medium text-lg'>Horizen Travel</p>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <h1 className='text-xl fon font-semibold py-3'>Personal Details</h1>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full px-20 py-4 text-sm leading-tight text-gray-700 border rounded shadow bg-[#F7F7F7] appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Company Name
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>

              </div>
              
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Email Adress
                  </label>
                  <input
                    className="w-full bg-[#F7F7F7] px-20 py-4 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Email Adress"
                    type="email"
               
                  />
            
                </div>

      

                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-[#F7F7F7] px-20 py-4 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Your Number"
                    type="text"
               
                  />
            
                </div>




                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Password
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="password"   
                      placeholder="******************"

                  
                  />
                </div>

            
              </div>
              <h1 className='text-xl fon font-semibold py-3'>Contact Information</h1>

              <div className="mb-4 md:flex gap-20 md:justify-center">

                <div className="md:ml-2">
                  <label className="block mb-2 px-44 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Address
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Adress 1"
                  />
                </div>

                <div className="md:ml-2">
                  <label className="block px-44  mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Address
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Adress 2"
                  />
                </div>

              </div>

              <div className="mb- mb-10 md:flex md:justify-between">
              <div>
  <label htmlFor="HeadlineAct" className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastNam"> Your Country</label>

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  >
    <option value="">Please Country</option>
    <option value="JM">Bangladesh</option>
    <option value="SRV">India</option>
    <option value="JH">China</option>
    <option value="BBK">Japan</option>

  </select>
</div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Your City
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Your City"
                  />
                </div>

                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Zip Code
                  </label>
                  <input
                    className="w-full px-20 py-4 bg-[#F7F7F7]  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>

              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                
              </div>
              <div className="text-center">
                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</div>;
 
        </div>
    );
};

export default Register;