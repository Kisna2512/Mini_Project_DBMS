import React from "react";

import Java from "../assets/Courses/JAVA.png";
import DSA from "../assets/Courses/DSA.png";
import Chash from "../assets/Courses/Chash.png";
import Neural_Network from "../assets/Courses/NLP.png";
import Python from "../assets/Courses/Python.png";
import SQL from "../assets/Courses/SQL.png";
// import { Link } from "react-scroll";

// import { useState } from "react";
// import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Portfolio = () => {
  //   const [modal, setmodal] = useState(false);
  //   const toggleModal = () => {
  //     setmodal(!modal);
  //   };

  const portfolios = [
    {
      id: 1,
      link: "/enroll",
      src: Java,
    },
    {
      id: 2,
      link: "/enroll",
      src: DSA,
    },
    {
      id: 3,
      link: "/enroll",
      src: Chash,
    },
    {
      id: 4,
      link: "/enroll",
      src: Neural_Network,
    },
    {
      id: 5,
      link: "/enroll",
      src: Python,
    },
    {
      id: 6,
      link: "/enroll",
      src: SQL,
    },
  ];

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Courses
            </p>
            <p className="py-6">
              Check out some of Our Premium Courses right here
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-20  sm:px-0">
            {portfolios.map(({ id, src, link }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    View Course
                  </button>

                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  ">
                    <a href={link}> Enroll now </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
