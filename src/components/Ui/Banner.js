"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "../Shared/Container";
import chad from "@/assets/chad.png";
import Calendar from "@/assets/Calendar.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Banner = () => {
  return (
    <div className="bg-[#069A71] ">
      <Container>
        <div className="lg:flex justify-between gap-20 md:py-[106px] py-12">
          <div className="2xl:w-[660px] lg:w-[550px] w-full">
            <p className="text-white md:text-[48px] text-[24px] font-medium leading-8 md:leading-[60px]">
              Chad Smith
            </p>

            <h1 className="text-[#F7EB0B] 2xl:text-[80px] lg:text-[60px] md:text-[80px] text-[40px] mt-4 font-extrabold 2xl:leading-[92px] lg:leading-[72px] md:leading-[92px] leading-[48px]">
              Math, Reading & Writing Tutor
            </h1>

            <p className="text-white text-[18px] md:mt-8 mt-6 font-normal leading-[28px]">
              I've spent the last 10 years working in the tech industry, and
              have 4 years of experience in elementary school tutoring.
              Additionally, I'm a proud graduate of Hampton University and
              resident of Church Hill.
            </p>

            <ScrollLink
              to="calendlysection"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <button className="md:px-6 md:py-3 px-4 py-2 bg-white text-[#242424] md:text-[18px] text-[14px] font-bold leading-7 uppercase rounded-[8px] md:mt-8 mt-6 flex items-center gap-[10px] hover:bg-[#F7EB0B] duration-300">
                <Image className="w-6 h-6" src={Calendar} alt="Calendar icon" />{" "}
                Schedule Tutoring Session
              </button>
            </ScrollLink>
          </div>

          <div className="lg:w-[400px] w-[320px] md:w-[600px] lg:h-[565px] md:h-[748px] h-[438px] mx-auto lg:mx-0 mt-10 md:mt-16 lg:mt-0">
            <Image
              className="w-full h-full object-contain"
              src={chad}
              alt="chad image "
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
