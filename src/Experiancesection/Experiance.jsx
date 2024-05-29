import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(30px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Experiance = () => {
  return (
    <div id="experiance" className="w-full bg-[#1d1d1d] ">
      <div className="px-[100px] py-[70px] sm-max:px-[20px]  sm-max:py-[40px]">
        <div className="w-[100%] flex gap-[70px] sm-max:flex-col sm-max:gap-[">
          <div className="w-[50%] flex flex-col gap-[15px] sm-max:w-[100%]">
          <Section>
            <div>
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[14px] rounded-[50px] text-[14px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                SKILLS
              </button>
            </div>
            </Section>
            <Section>
              <h1 className="text-[white] font-[600] text-[44px] sm-max:text-[30px]">
                My Skills
              </h1>
            </Section>
            <Section>
            <div className="flex gap-[20px] mt-[30px] sm-max:mt-[20px]">
              <div className="h-[150px] w-[100px] border-[1px] border-[#a8a8a821] rounded-[70px] flex items-center justify-center  hover:border-white transition-all duration-300 ease-in-out   sm-max:h-[90px] sm-max:w-[70px] ">
                <RiReactjsLine className="h-[70px] w-[70px] text-[#2089d9] sm-max:h-[40px] sm-max:w-[40px]" />
              </div>
              <div className="h-[150px] w-[100px] border-[1px] border-[#a8a8a821] rounded-[70px] flex items-center justify-center  hover:border-white transition-all duration-300 ease-in-out   sm-max:h-[90px] sm-max:w-[70px] ">
                <IoLogoJavascript className="h-[70px] w-[70px]  text-[#eaea45]  sm-max:h-[40px] sm-max:w-[40px] " />
              </div>

              <div className="h-[150px] w-[100px] border-[1px] border-[#a8a8a821] rounded-[70px] flex items-center justify-center  hover:border-white transition-all duration-300 ease-in-out   sm-max:h-[90px] sm-max:w-[70px] ">
                <FaHtml5 className="h-[70px] w-[70px]  text-[#ea4545]  sm-max:h-[40px] sm-max:w-[40px] " />
              </div>

              <div className="h-[150px] w-[100px] border-[1px] border-[#a8a8a821] rounded-[70px] flex items-center justify-center  hover:border-white transition-all duration-300 ease-in-out   sm-max:h-[90px] sm-max:w-[70px] ">
                <FaCss3Alt className="h-[70px] w-[70px]  text-[#489dc2]  sm-max:h-[40px] sm-max:w-[40px]" />
              </div>
              <div className="h-[150px] w-[100px] border-[1px] border-[#a8a8a821] rounded-[70px] flex items-center justify-center  hover:border-white transition-all duration-300 ease-in-out  sm-max:h-[90px] sm-max:w-[70px] ">
                <FaGithub className="h-[70px] w-[70px]  text-[#d7dcde]  sm-max:h-[40px] sm-max:w-[40px]" />
              </div>
            </div>
            </Section>
          </div>
          <div className="w-[50%] sm-max:w-[100%]">
            <div className="flex flex-col gap-[30px] w-[100%]">
              <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
              <Section>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[white]  text-[18px] font-[500] max-w-[70%]">
                    React Js
                  </h1>
                  <h5 className="text-[#a19c9c]">Junior React Js Devoleper</h5>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <FaLocationArrow className="h-[20px] w-[20px] text-[white]" />
                  <h6 className="text-[#a19c9c]">2023 - 2024</h6>
                </div>
              </div>
              </Section>
              <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
              <Section>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[white]  text-[18px] font-[500] max-w-[70%]">
                    HTML Devoleper
                  </h1>
                  <h5 className="text-[#a19c9c]">HTML Devoleper </h5>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <FaLocationArrow className="h-[20px] w-[20px] text-[white]" />
                  <h6 className="text-[#a19c9c]">2022 - 2024</h6>
                </div>
              </div>
              </Section>
              <div className="w-[full]  border-[1px] border-[#a8a8a821]"></div>
              <Section>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[white]  text-[18px] font-[500] max-w-[70%]">
                    Web Designer
                  </h1>
                  <h5 className="text-[#a19c9c]">Web Designer</h5>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <FaLocationArrow className="h-[20px] w-[20px] text-[white]" />
                  <h6 className="text-[#a19c9c]">2022 - 2024</h6>
                </div>
              </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
