import React from "react";
import shanu from "../Assets/shanu.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

const Hero = () => {
  return (
    <Section>
    <div className="w-full">
      <div className="px-[100px] pt-[180px] sm-max:px-[20px] sm-max:pt-[100px]">
        <div className="flex flex-col gap-[10px] text-center">
          <h3 className="text-[white] text-[24px] tracking-[3px]">
            HELLO ' IAM
          </h3>
          <h1 className="text-[white] font-[600] tracking-[3px] text-[60px] sm-max:text-[45px] leading-[60px]">
            MOHAMMED SHAN
          </h1>
          <h4 className="text-[#ded9d9] text-[20px] font-[200]">
            Frontend Devoleper{" "}
          </h4>
        </div>
        <div className="pt-[20px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[50px] mt-[-250px] sm-max:hidden">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[white] text-[20px] font-[500]">
                  Expertise
                </h2>
                <h3 className="text-[white] text-[16px] font-[200] tracking-[2px]">
                  FRONT-END DEVELOPER
                </h3>
              </div>
              <div className="flex flex-col gap-[10px] ">
                <h2 className="text-[white] text-[20px] font-[500]">
                  Experiance
                </h2>
                <h3 className="text-[white] text-[16px] font-[200] tracking-[2px]">
                  1Years
                </h3>
              </div>
            </div>
            <div className="">
              <img
                className="h-[590px] w-[590px] object-cover sm-max:h-[500px] sm-max:w-[450px]"
                src={shanu}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[50px] mt-[-250px] sm-max:hidden">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[white] text-[20px] font-[500]">
                  Expertise
                </h2>
                <h3 className="text-[white] text-[16px] font-[200] tracking-[2px]">
                  FRONT-END & WEB DEVELOPER
                </h3>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[white] text-[20px] font-[500]">
                  Experiance
                </h2>
                <h3 className="text-[white] text-[16px] font-[200] tracking-[2px]">
                  1Years
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default Hero;
