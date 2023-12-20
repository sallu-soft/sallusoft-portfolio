'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
// import styles from './SingleProject.module.css'; // Import your CSS file

const SingleProject = ({ project }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`bg-white h-[600px] md:h-[400px] rounded-xl shadow-black my-4 shadow-xl projectContainer} flex flex-col md:flex-row`}
    >
    <div
      ref={containerRef}
      className={`md:m-3 w-full md:w-2/4 shadow-lg shadow-gray-400 h-[95%] overflow-hidden rounded-lg  ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        className="object-cover rounded-lg"
        src={project.image}
        alt={project.title}
        width={800}
        height={800}
        style={{
          transform: isHovered ? 'translateY(-80%)' : 'translateY(0%)',
          transition:'transform 5s ease-in-out 0s'
        }}
      />
    </div>
    <div className="py-3 flex  w-full md:w-2/4 md:m-3 justify-center rounded-lg flex-col px-5 gap-y-4 shadow-lg items-center">
      <h2 className="font-semibold text-gray-600 text-xl">{project.title}</h2>
      <p className="text-justify text-gray-400 font-semibold">{project.description}</p>
      <div className="flex gap-4 mt-5">
        <Link className="text-lg flex items-center gap-2 bg-[#15858B] p-2 text-gray-100  rounded-md" target="_blank" href={project.demo_link}>Live Demo <CgWebsite /></Link>
      </div>
    </div>
    </div>
  );
};

export default SingleProject;

