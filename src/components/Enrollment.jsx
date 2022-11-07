import React from "react";

// const PostData = async (e) => {
//   e.preventDefault();
//   const { first_name, last_name, Email, Profession, course_name } = user;
//   const res = await fetch("/enroll", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       first_name,
//       last_name,
//       Email,
//       Profession,
//       course_name,
//     }),
//   });
// };

export default function Enrollment() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div
        id="form"
        className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90"
      >
        <form method="POST" action="/post-feedback">
          <h2 className="text-blue-700 text-3xl font-semibold my-4">
            Register for course
          </h2>

          <div id="fullName" className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
              <label for="fname" className="text-sm">
                First Name
              </label>
              <br />
              <input
                type="text"
                name="first_name"
                id="fname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
            </div>

            <div id="lastName" className="w-1/2 mr-1">
              <label for="lname" className="text-sm">
                Last Name
              </label>
              <br />
              <input
                type="text"
                name="last_name"
                id="lname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
            </div>
          </div>

          <label for="email" className="text-sm">
            Email
          </label>
          <br />
          <input
            type="emial"
            name="Email"
            id="email"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <label for="password" className="text-sm">
            Enter course name:
          </label>
          <br />
          <input
            type="text"
            name="course_name"
            id="password"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <label for="confirmPassword" className="text-sm">
            Enter your Profession?
          </label>
          <br />
          <input
            type="text"
            name="Profession"
            id="confirmPassword"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />

          <div id="gender" className="text-sm mb-2">
            <p className="mt-2">Gender</p>
            <input
              type="radio"
              name="gender"
              id="male"
              className="text-sm mx-1"
              checked
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="text-sm mx-1"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              className="text-sm mx-1"
            />
            <label for="other">Other</label>
          </div>

          {/* <button className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 Pay now ">
            <a href="https://kisna2512.github.io/Success_page/"> Pay now</a>
          </button> */}

          {/* <br /> */}

          <input
            type="Submit"
            name=""
            value="Submit"
            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"
          />
          {/* <br /> */}
          {/* <p className="text-xs my-2">
            Already have a account?{" "}
            <a href="#" className="text-blue-600">
              Login
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
