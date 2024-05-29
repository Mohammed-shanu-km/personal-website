import React from "react";
import { GrCubes } from "react-icons/gr";
import { FaStarOfDavid } from "react-icons/fa6";
import { FaCubesStacked } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../Servicesection/Service.css";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiSolidGraduation } from "react-icons/bi";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Service = () => {
  return (
    <div id="service" className="w-full">
      <div className="px-[100px] py-[70px] sm-max:px-[20px] sm-max:py-[40px]">
        <div className="w-[100%] flex gap-[100px] sm-max:flex-col sm-max:gap-[40px]">
          <div className="w-[40%] flex flex-col gap-[15px] sm-max:w-[100%] sm-max:gap-[10px] ">
          <Section>
            <div>
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[14px] rounded-[50px] text-[14px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                EDUCATION
              </button>
            </div>
            </Section>
            <Section>
              <h1 className="text-[white] font-[600] text-[44px] sm-max:text-[30px]">
                Education
              </h1>
            </Section>
            <Section>
            <h2 className="text-[#ded9d9] text-[16px] font-[200]">
              Education is the key to unlocking potential, especially in
              Computer Science where it fuels innovation and empowers creators.
            </h2>
            </Section>
          </div>
          
          <div className="flex flex-col gap-[50px] w-[60%] sm-max:w-[100%] sm-max:gap-[30px]">
            <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
            <Section>
            <div className="flex justify-between gap-[30px] sm-max:flex-col sm-max:gap-[15px]">
              <div>
                <FaGraduationCap className="text-[white] h-[50px] w-[50px]" />
              </div>
              <h1 className="text-[white]  text-[20px] font-[500] max-w-[70%] sm-max:max-w-[100%]">
                Bachelor of Technology in Information Technology
              </h1>
              <h5 className="text-[#ded9d9] text-[16px] font-[200]">
                MEA Engneering College Perinthalmanna Malapppuram cgpa(6.97)
              </h5>
            </div>
            </Section>
            <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
            <Section>
            <div className="flex justify-between gap-[30px] sm-max:flex-col sm-max:gap-[15px] ">
              <div>
                <RiGraduationCapLine className="text-[white] h-[50px] w-[50px]" />
              </div>
              <h1 className="text-[white]  text-[20px] font-[500] max-w-[70%] sm-max:max-w-[100%]">
                Higher Secondary Education in Computer Science
              </h1>
              <h5 className="text-[#ded9d9] text-[16px] font-[200]">
                Darul Uloom Higher Secondery School Panakkad Malappuram (80%)
              </h5>
            </div>
            </Section>
            <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
            <Section>
            <div className="flex justify-between gap-[30px] sm-max:flex-col sm-max:gap-[15px] ">
              <div>
                <BiSolidGraduation className="text-[white] h-[50px] w-[50px]" />
              </div>
              <h1 className="text-[white]  text-[20px] font-[500] max-w-[70%]">
                High School in Kerala State Syllabus
              </h1>
              <h5 className="text-[#ded9d9] text-[16px] font-[200]">
                MMET Higer Secondery School Malappuram Kerala (93%)
              </h5>
            </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
