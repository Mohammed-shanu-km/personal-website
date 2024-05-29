import React, { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with your logic here
      console.log("Form data:", formData);
      // Clear form data after submission
      setFormData({
        name: "",
        email: "",
        message: "",
        address: ""
      });
      // Clear placeholder text
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => input.placeholder = '');
      
      // Construct WhatsApp message
      let data = "";
      for (const key in formData) {
        data += key + " : " + formData[key] + "\n";
      }

      const result = encodeURIComponent(data);
      // Corrected URL syntax
      window.open(`https://wa.me/+917306940639?text=${result}`);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div id="contact" className="w-full">
      <div className="px-[100px] py-[70px] sm-max:px-[20px] sm-max:py-[40px]">
        <div className="flex w-[100%] sm-max:flex-col">
          <div className="w-[50%] flex flex-col gap-[30px] sm-max:w-[100%]">
          <Section>
            <div>
              <button className="text-[white] tracking-[2px] border-[1px] border-[#a8a8a821] px-[30px] py-[14px] rounded-[50px] text-[14px] font-[500] sm-max:px-[15px] sm-max:text-[10px]  hover:border-white transition-all duration-300 ease-in-out ">
                GET IN TOUCH
              </button>
            </div>
            </Section>
            <Section>
              <h1 className="text-[white] font-[600] text-[44px] w-[70%] tracking-[2px] leading-[50px] sm-max:text-[30px] sm-max:leading-[40px]">
                Let's make your brand brilliant!
              </h1>
            </Section>
            <Section>
            <p className="text-[18px] text-[#a19c9c] w-[80%]">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            </Section>
            <Section>
            <h2 className="text-[40px] font-[500] underline text-[white]">
              730-6940-639
            </h2>
            </Section>
            <Section>
            <div className="flex gap-[20px] text-[white] font-[500] text-[15px]">
              <a href="">Linked in</a>
              <a href="">Facebook</a>
              <a href="">Whatsapp</a>
              <a href="">Github</a>
            </div>
            </Section>
          </div>
         
          <div className="w-[50%] sm-max:w-[100%] sm-max:mt-[20px] sm-max:pb-[40px]">
          <Section>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[20px] sm-max:gap-[10px]">
                <div className="flex gap-[20px] sm-max:flex-col ">
                  <input
                    className={`w-[100%] bg-transparent border-[1px] border-[#a8a8a821] rounded-[10px] p-[15px] text-[white] ${
                      errors.name && "border-red-500"
                    }`}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                  <input
                    className={`w-[100%] bg-transparent border-[1px] border-[#a8a8a821] rounded-[10px] p-[15px] text-[white] ${
                      errors.email && "border-red-500"
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <textarea
                  className={`w-[100%] bg-transparent border-[1px] border-[#a8a8a821] rounded-[10px] p-[15px] text-[white] ${
                    errors.message && "border-red-500"
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
                <input
                  className={`w-[100%] bg-transparent border-[1px] border-[#a8a8a821] rounded-[10px] p-[15px] text-[white]`}
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
                <button className="text-[white] border-[1px] border-[#a8a8a821] py-[15px] rounded-[10px]">
                  Let's Talk
                </button>
              </div>
            </form>
            </Section>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
