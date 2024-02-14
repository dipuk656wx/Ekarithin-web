import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // Handle form submission logic here
    //   console.log(formData);
    e.preventDefault();
    const { name, email, phone, college } = formData;
    // console.log(formData);

    const response = await fetch("http://localhost:5000/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, college }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/Account");
      //showAlert("Account created Successfully", "success");
    } else {
      //showAlert("Invalid creadential", "danger");
    }
  };
  return (
    <div>
      <div className="relative min-h-screen grid bg-black ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div
            className=" sm:w-1/2 xl:w-3/5 bg-black-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
            // style={{
            //   backgroundImage: "url(https://i.postimg.cc/mrgPMqpP/logo.png)",
            // }}
          >
            <iframe src="/flower.html"
             width="100%"
             height="700" ></iframe>
              <iframe src="/flower.html"
             width="100%"
             height="700" ></iframe>
              <iframe src="/flower.html"
             width="100%"
             height="700" ></iframe>
             
            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center ">
                  <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <h2 className="text-2xl font-semibold mb-4">
                      Registration Form
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col space-y-8 mt-10"
                    >
                      <label
                        htmlFor="name"
                        className=" font-bold text-lg text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                        onChange={handleChange}
                        value={formData.name}
                      />

                      <label
                        htmlFor="email"
                        className="font-bold text-lg text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                        onChange={handleChange}
                        value={formData.email}
                      />

                      <label
                        htmlFor="phone"
                        className="font-bold text-lg text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                        onChange={handleChange}
                        value={formData.phone}
                      />

                      <label
                        htmlFor="college"
                        className="font-bold text-lg text-white"
                      >
                        College (optional)
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        placeholder="College"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                        onChange={handleChange}
                        value={formData.college}
                      />

                      <button
                        type="submit"
                        className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
