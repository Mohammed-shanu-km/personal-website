import React from "react";
import project1 from "../Assets/Screenshot 2024-05-27 122333.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import project2 from '../Assets/Screenshot 2024-05-27 123245.png'
import project3 from '../Assets/Screenshot 2024-05-27 124046.png'
import project4 from '../Assets/Screenshot 2024-05-27 124426.png'
import project5 from '../Assets/Screenshot 2024-05-27 124940.png'
import project6 from '../Assets/Screenshot 2024-05-27 125808.png'

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

const Project = () => {
  return (
    <div className="px-[100px] py-[100px] sm-max:px-[20px] sm-max:py-[40px]">
      <div className="flex flex-col gap-[10px]">
      <Section>
        <div>
          <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[14px] rounded-[50px] text-[14px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
            PROJECTS
          </button>
        </div>
        </Section>
        <Section>
          <h1 className="text-[white] font-[600] text-[44px] sm-max:text-[30px]">
            Latest Projects
          </h1>
        </Section>
      </div>
      <div className="pt-[50px] grid grid-cols-2 w-[100%] gap-[30px] sm-max:grid-cols-1 ">
      <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[100%] h-[300px] mt-[20px] object-cover "
              src={project1}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              29/04/2024
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Uslot Career Prediction{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
              VIEW
              </button>
              
            </div>
          </div>
        </div>
        </Section>
        <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[400px] h-[300px] mt-[20px] object-cover "
              src={project2}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              10/05/2024
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Carbi Analytics{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
             
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                VIEW
              </button>
            </div>
          </div>
        </div>
        </Section>
        <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[400px] h-[300px] mt-[20px] object-cover "
              src={project3}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              7/01/2024
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Carehealth Pharmacy{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
             
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                VIEW
              </button>
            </div>
          </div>
        </div>
        </Section>
        <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[400px] h-[300px] mt-[20px] object-cover "
              src={project4}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              16/04/2024
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Uslot Learning{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
             
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                VIEW
              </button>
            </div>
          </div>
        </div>
        </Section>
        <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[400px] h-[300px] mt-[20px] object-cover "
              src={project5}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              7/12/2023
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Carehealth Pharmacy{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
             
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                VIEW
              </button>
            </div>
          </div>
        </div>
        </Section>
        <Section>
        <div className="flex items-center h-[auto] w-[100%] border-[1px] border-[#a8a8a821]  pt-[20px] px-[20px] gap-[20px] sm-max:flex-col sm-max:gap-[40px] sm-max:pb-[20px]">
          <div className="w-[100%] h-[300px] sm-max:w-[100%]">
            <img
              className="w-[400px] h-[300px] mt-[20px] object-cover "
              src={project6}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[10px] sm-max:text-center">
            <h2 className="text-[#ded9d9] text-[16px] font-[500]">
              7/12/2022
            </h2>
            <h1 className="text-[white]  text-[25px] font-[600]">
              Proworld Website{" "}
            </h1>
            <div className="flex gap-[10px] sm-max:items-center sm-max:justify-center">
             
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[15px] py-[10px] rounded-[50px] text-[12px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                VIEW
              </button>
            </div>
          </div>
        </div>
        </Section>
      </div>
      <div className="flex items-center justify-center mt-[100px]">
      <Section>
        <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[12px] rounded-[50px] text-[16px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
          VIEW MORE
        </button>
        </Section>
      </div>
    </div>
  );
};

export default Project;
