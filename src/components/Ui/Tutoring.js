import Image from "next/image";
import Container from "../Shared/Container";
import multipilication from "@/assets/multipilication.png";
import division from "@/assets/division.png";
import reading from "@/assets/reading.png";
import image4 from "@/assets/image4.png";
import CalendlyWidget from "./CalendlyWidget";

const Tutoring = () => {
  return (
    <Container>
      <div className="lg:w-[1140px] w-full md:mt-[120px] mt-[66px]">
        <p className="text-[#242424] md:text-[36px] text-[24px] font-normal md:leading-[48px] leading-8">
          Tutoring for 2nd Graders -
        </p>
        <p className="text-[#069A71] md:text-[36px] text-[24px] font-bold md:leading-[48px] leading-8">
          Finish the school year strong! Get ahead in the summer!
        </p>

        <div className="md:mt-[66px] mt-[40px] lg:w-[780px] w-full">
          <h1 className="text-[#242424] md:text-[24px] text-[20px] font-semibold leading-7">
            📚 How does it work?📚
          </h1>

          <p className="text-[#3D3D3D] text-[18px] mt-6 font-normal leading-7">
          Math tutoring will use 3rd grade-level workbooks to help students get ahead of upcoming classroom material. Reading and Writing will focus on enhancing standardized test-taking skills. Students will use workbook lessons to practice reading, complete reading comprehension questions, and practice essay writing. Homework will be assigned after each session.
          </p>

          <div className="md:mt-[66px] mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div className="w-[243px] h-[320px]">
              <Image
                className="w-full h-full object-cover"
                src={multipilication}
                alt="multipilication image"
                placeholder="blur"
              />
            </div>

            <div className="w-[243px] h-[320px]">
              <Image
                className="w-full h-full object-cover"
                src={division}
                alt="division image"
                placeholder="blur"
              />
            </div>

            <div className="w-[243px] h-[320px]">
              <Image
                className="w-full h-full object-cover"
                src={reading}
                alt="reading image"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="md:mt-[120px] mt-[66px]">
            <div className="">
              <h1 className="text-[#242424] md:text-[24px] text-[20px] font-semibold leading-7">
                📚 How long is each session?📚
              </h1>

              <p className="text-[#3D3D3D] text-[18px] mt-6 font-normal leading-7">
                Tutoring will occur for{" "}
                <span className="text-[#069A71] font-semibold">
                  2 hours every Saturday
                </span>
                . The first hour will focus on Math, while the second hour will
                focus on Reading and Writing.
              </p>
            </div>
          </div>

          <div className="md:mt-[66px] mt-[40px]">
            <h1 className="text-[#242424] md:text-[24px] text-[20px] font-semibold leading-7">
              📚 How much does it cost?📚
            </h1>

            <p className="text-[#3D3D3D] text-[18px] mt-6 font-normal leading-7">
              Each tutoring session is{" "}
              <span className="text-[#069A71] font-semibold">
                $40 per student
              </span>
              . Workbooks will be provided for both tutoring and at-home practicing.
            </p>
          </div>

          <div className="md:mt-[66px] mt-[40px]">
            <h1 className="text-[#242424] md:text-[24px] text-[20px] font-semibold leading-7">
              📚 Where are you located?📚
            </h1>

            <p className="text-[#3D3D3D] text-[18px] mt-6 font-normal leading-7">
              Tutoring will occur at Fairfield - Henrico County Public Library, located at
               <span className="text-[#069A71] font-semibold"> 1401 N Laburnum Ave, Richmond, VA 23223</span>
            </p>
          </div>
        </div>

        <div className="mt-[48px] ">
          <Image
            className="w-full md:h-[560px]  md:object-cover object-contain"
            src={image4}
            alt="product image"
            placeholder="blur"
          />
        </div> 
        
        
      </div>
    </Container>
  );
};

export default Tutoring;
