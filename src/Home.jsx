import React, { useEffect, useState } from 'react'
// import Image from "../src/assets/assets/class.png";
// import Image from  "../src/assets/assets/collage.png";
// import Image from "../src/assets/assets/fest copy.png";
// import Image from "../src/assets/assets/puja.png";
// import Image from "../src/assets/assets/class.png";
import classImg from "../src/assets/assets/class.png";
// import collageImg from "../src/assets/assets/collage.png";
import festImg from "../src/assets/assets/fest copy.png";
import pujaImg from "../src/assets/assets/puja.png";
import logoImg from "../src/assets/assets/logo.png";

import { Header } from './Component/header'
const CardJson = [
  {
    icon: "https://tse1.mm.bing.net/th?id=OIP.P3ivrufDhFVothMgVdhoWwHaFT&pid=Api&P=0&h=180",
    title: "B-Ed",
    desc: "Bachelor of Education or B.Ed course is an undergraduate professional course in the field of teaching  .",
  },
  {
    icon: "https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg",
    title: "D- Ed",
    desc: "D.El.Ed which is also known as Diploma course in Elementary Education. It is a full-time two-year.",
  },
  {
    icon: "https://tse3.mm.bing.net/th?id=OIP.s8rq1tgDTeTgZM7oCvV5KAHaE7&pid=Api&P=0&h=180",
    title: "BSC",
    desc: "Bachelor of Science, popularly known as BSc, is an undergraduate degree programme specialising in science subjects. Bachelor of Science or BSc courses are mainly awarded to students ",
  },
  {
    icon: "https://tse1.mm.bing.net/th?id=OIP.fQalnNda5edc_zo9KgN6FAHaE8&pid=Api&P=0&h=180",
    title: "BCA",
    desc: "BCA is a three-year undergraduate course in computer application. This degree gives good knowledge in areas related to computer science, the IT industry and networking..",
  },
  {
    icon: "https://tse2.mm.bing.net/th?id=OIP.yF8jz90VNEt1hK9DVu39QQHaE8&pid=Api&P=0&h=180",
    title: "MBA",
    desc: " MBA is a 2-year postgraduate program that focuses on developing skills and knowledge in fields of business and management. MBA is the most sought-after postgraduate degree.",
  },
];

export const Home = () => {
 
  return (
    <>
    
    <div className="h-full w-full bg-gradient-to-b from-white to-[#f0f1ff] bg-no-repeat overflow-hidden">
      <div className="px-5 xl:px-0 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto relative">
        
        <div className="flex justify-start items-end my-5 xl:my-20">
          <div className="md:max-w-[400px] flex flex-col gap-6 my-14">
            <div>
              <h1 className="text-[#13183f] xl:text-[52px] text-[40px] font-extrabold leading-[50px]">
                Maximize skill, minimize budget
              </h1>
            </div>
            <div>
              <p className="text-[#83869a]">
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
            </div>
            <div>
              <button className="py-3 px-7 text-white font-bold bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl group relative overflow-hidden">
                Get Started
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
              </button>
            </div>
          </div>
          <div className=" md:-right-32 md:left-auto xl:-right-80 xl:-top-20 md:-top-50 lg:-right-28 lg:-top-14 ">
            <img
              src={logoImg}
              //"src/assets/assets/logo.png"
              alt="logo"
              className="relative md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] hidden md:block"
            />
            <img
              src={logoImg}
              //"src/assets/assets/logo.png"
              alt="logo"
              className="relative -bottom-72 md:hidden block max-w-[343px] sm:max-w-[400px]"
            />
          </div>
          
        </div>
        <div className="pt-56 md:pt-0 grid sm:grid-cols-3 lg:grid-cols-3 gap-20 my-24 lg:my-32 place-items-center sm:place-items-stretch">
          <div className="hover:drop-shadow-2xl w-full bg-gradient-to-r from-pink-500 to-red-600 sm:max-w-xs rounded-xl px-10 py-5 text-white text-xl font-extrabold leading-8 shadow-xl">
            Check out our most popular courses which is provided By the Sindhu Collage of Education!
          </div>
          {CardJson.map((data, index) => {
            return (
              <div
                key={index}
                className="shadow-xl hover:drop-shadow-2xl relative bg-white sm:max-w-xs rounded-xl px-5 py-5 flex flex-col gap-4 overflow-hidden"
              >
                <img className="" src={data.icon} alt="icon" />
                <h1 className="text-[#13183f] font-extrabold text-xl">
                  {data.title}
                </h1>
                <p className="text-[#83869a] min-h-[40px] text-sm">{data.desc}</p>
                <div>
                  <button className="text-pink-600 font-extrabold leading-7">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>

    <div className="min-h-screen py-14 flex gap-16 flex-col lg:flex-row sm:flex-wrap justify-center items-center bg-[#F1F5FD]">
      <div className="relative z-[50]">
        <div class="semi-circle -rotate-[47deg] w-[295px] h-[271px] rounded-[100px_100px_0_0] sm:rounded-[400px_400px_0_0] sm:w-[411px] sm:h-[251px] -top-[123px] -left-[139px] sm:-left-[118px] sm:-top-[41px] absolute bg-[#f1f5fd] z-50"></div>
        <div className="relative h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] group rounded-full bg-[#F1F5FD] cursor-pointer">
          <img
            src={pujaImg}
            //"src/assets/assets/puja.png"
            className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full z-40 relative border border-[5px] object-cover object-top border-[#f1f5fd] relative z-[60]"
            alt="pujaimg"
          />
          <div className="h-0 w-0 group-hover:h-[290px] group-hover:w-[290px] group-hover:sm:h-[400px] group-hover:sm:w-[400px] bg-gradient-to-r transition-all duration-300 ease-in-out from-pink-500 via-red-500 to-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute transition-all group-hover:duration-300 group-hover:delay-200 group-hover:ease-in-out top-12 group-hover:top-[41px] group-hover:left-[201px] group-hover:sm:top-[80px] left-0 group-hover:sm:left-[304px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" hover:fill-blue-500 fill-black transition-none min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px]"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[89px] group-hover:left-[209px] group-hover:sm:top-[147px] absolute transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[310px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-blue-500 fill-black"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[137px] group-hover:left-[199px] group-hover:sm:top-[210px] absolute transition-all duration-300 group-hover:delay-100 ease-in-out left-0 group-hover:sm:left-[290px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-blue-500 fill-black"
            >
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[177px] group-hover:left-[169px] group-hover:sm:top-[264px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[250px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-blue-500 fill-black"
            >
              <path d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z" />
              <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[201px] group-hover:left-[123px] group-hover:sm:top-[296px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[188px] cursor-pointer -rotate-[17deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-blue-500 fill-black"
            >
              <path
                fill-rule="evenodd"
                d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
              />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[205px] group-hover:left-[68px] group-hover:sm:top-[301px] absolute hover:delay-0 hover:duration-0 transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[116px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-blue-500 fill-black "
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative z-40">
        <div class="semi-circle -rotate-[47deg] w-[295px] h-[271px] rounded-[100px_100px_0_0] sm:rounded-[400px_400px_0_0] sm:w-[411px] sm:h-[251px] -top-[123px] -left-[139px] sm:-left-[118px] sm:-top-[41px] absolute bg-[#f1f5fd] z-50"></div>
        <div className="relative h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] group rounded-full bg-[#F1F5FD] cursor-pointer">
          <img
            src={classImg}
            //"src/assets/assets/class.png"
            className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full z-40 relative border border-[5px] object-cover object-top border-[#f1f5fd] relative z-[60]"
            alt="classIMg"
          />
          <div className="h-0 w-0 group-hover:h-[290px] group-hover:w-[290px] group-hover:sm:h-[400px] group-hover:sm:w-[400px] bg-gradient-to-r transition-all duration-300 ease-in-out from-green-300 via-blue-500 to-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute transition-all group-hover:duration-300 group-hover:delay-200 group-hover:ease-in-out top-12 group-hover:top-[41px] group-hover:left-[201px] group-hover:sm:top-[80px] left-0 group-hover:sm:left-[304px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" hover:fill-white fill-black transition-none min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px]"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[89px] group-hover:left-[209px] group-hover:sm:top-[147px] absolute transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[310px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[137px] group-hover:left-[199px] group-hover:sm:top-[210px] absolute transition-all duration-300 group-hover:delay-100 ease-in-out left-0 group-hover:sm:left-[290px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[177px] group-hover:left-[169px] group-hover:sm:top-[264px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[250px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z" />
              <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[201px] group-hover:left-[123px] group-hover:sm:top-[296px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[188px] cursor-pointer -rotate-[17deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path
                fill-rule="evenodd"
                d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
              />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[205px] group-hover:left-[68px] group-hover:sm:top-[301px] absolute hover:delay-0 hover:duration-0 transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[116px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black "
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative z-30">
        <div class="semi-circle -rotate-[47deg] w-[295px] h-[271px] rounded-[100px_100px_0_0] sm:rounded-[400px_400px_0_0] sm:w-[411px] sm:h-[251px] -top-[123px] -left-[139px] sm:-left-[118px] sm:-top-[41px] absolute bg-[#f1f5fd] z-50"></div>
        <div className="relative h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] group rounded-full bg-[#F1F5FD] cursor-pointer">
          <img
            src={festImg}
            //"src/assets/assets/fest copy.png"
            className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full z-40 relative border border-[5px] object-cover object-right-top border-[#f1f5fd] relative z-[60]"
            alt="festImg"
          />
          <div className="h-0 w-0 group-hover:h-[290px] group-hover:w-[290px] group-hover:sm:h-[400px] group-hover:sm:w-[400px] bg-gradient-to-r transition-all duration-300 ease-in-out from-pink-300 via-purple-300 to-indigo-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute transition-all group-hover:duration-300 group-hover:delay-200 group-hover:ease-in-out top-12 group-hover:top-[41px] group-hover:left-[201px] group-hover:sm:top-[80px] left-0 group-hover:sm:left-[304px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" hover:fill-white fill-black transition-none min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px]"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[89px] group-hover:left-[209px] group-hover:sm:top-[147px] absolute transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[310px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[137px] group-hover:left-[199px] group-hover:sm:top-[210px] absolute transition-all duration-300 group-hover:delay-100 ease-in-out left-0 group-hover:sm:left-[290px] hover:delay-0 hover:duration-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[177px] group-hover:left-[169px] group-hover:sm:top-[264px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[250px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z" />
              <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[201px] group-hover:left-[123px] group-hover:sm:top-[296px] absolute transition-all hover:delay-0 hover:duration-0 duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[188px] cursor-pointer -rotate-[17deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black"
            >
              <path
                fill-rule="evenodd"
                d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
              />
            </svg>
          </div>
          <div className="top-12 group-hover:top-[205px] group-hover:left-[68px] group-hover:sm:top-[301px] absolute hover:delay-0 hover:duration-0 transition-all duration-300 group-hover:delay-200 ease-in-out left-0 group-hover:sm:left-[116px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="min-h-[32px] min-w-[26px] sm:min-h-[42px] sm:min-w-[32px] hover:fill-white fill-black "
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Student Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="">
                    <span className="text-blue-900 font-semibold">Sign in</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center  py-5 object-cover max-w-70px max-h-70px h-5/6 w-6/12">
        <div className="px-5 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full flex justify-between mx-auto">
          <a href="#_" className="flex items-center">
            <img src={logoImg}
            //"src/assets/assets/logo.png" alt="Logo" 
            />
            <img src={pujaImg}
            //"src/assets/assets/puja.png" alt="Logo" 
            />

          </a>
          
         
        </div>
      </div>
    </> 
  );
};
