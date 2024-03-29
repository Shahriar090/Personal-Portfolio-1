import contactImg from "../../assets/Contact/contact-img.avif";
import SectionTitle from "../../SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import Container from "../../utils/container";

const Contact = () => {
  // form ref
  const form = useRef();

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();

    // Checking if required fields are empty
    const { from_name, from_email, from_subject, message } =
      form.current.elements;
    if (
      (!from_name.value || !from_email.value,
      !from_subject.value,
      !message.value)
    ) {
      toast.warning("Please Fill In All Required Fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_6niuyk5",
        "template_9m3cbpj",
        form.current,
        "E9LXZxPlYpHSSOFlB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Sending Message, Please Try Again");
        }
      );
  };

  //   return div start
  return (
    // <div className="section-container w-full h-auto   text-slate-100 ">
    //   <ToastContainer position="top-center" />
    //   <Container>
    //     <section>
    //       <SectionTitle heading={"Let's Talk"}></SectionTitle>
    //     </section>
    //     {/* main content */}
    //     <section className="main-content">
    //       <div className="parent-div flex flex-col lg:flex-row shadow-xl gap-5 ">
    //         {/* contact section image, address related topic */}
    //         <div className="child-one p-4 w-full h-full md:w-full lg:w-3/6 ">
    //           <picture>
    //             <img
    //               src={contactImg}
    //               alt="Contact Image"
    //               className="w-full md:w-3/4 lg:w-3/6 rounded-lg opacity-80"
    //             />
    //           </picture>

    //           <div className="texts pt-5 flex flex-col  gap-4 ">
    //             <h2 className="flex gap-3 items-center">
    //               <GoPerson></GoPerson>Mohammad Shafayet Hossain
    //             </h2>
    //             <h3 className="flex gap-3 items-center">
    //               <FaLocationDot></FaLocationDot>Forskarbacken 03, Lappis,
    //               Stockholm
    //             </h3>
    //             <h3 className="flex gap-3 items-center">
    //               <HiOutlineMailOpen></HiOutlineMailOpen>
    //               shafayethossain957@gmail.com
    //             </h3>
    //             <h3 className="flex gap-3 items-center">
    //               <FaPhoneVolume></FaPhoneVolume>+33-745639099
    //             </h3>
    //           </div>
    //         </div>
    //         <div className="child-two w-full   md:w-full lg:w-3/6 p-4">
    //           {/* contact form start from here */}
    //           <form
    //             ref={form}
    //             onSubmit={sendEmail}
    //             className="flex flex-col  gap-5"
    //           >
    //             <span className="block">Your Name *</span>
    //             <input
    //               type="text"
    //               placeholder="Your Name"
    //               name="from_name"
    //               className="input input-bordered w-full  bg-slate-300 text-black"
    //             />
    //             {/* email */}
    //             <span className="block">Your Email *</span>
    //             <input
    //               type="Your Email"
    //               placeholder="Your Email"
    //               name="from_email"
    //               className="input input-bordered w-full  bg-slate-300 text-black"
    //             />
    //             {/* subject */}
    //             <span className="block">Subject *</span>
    //             <input
    //               type="text"
    //               placeholder="Your Subject"
    //               name="from_subject"
    //               className="input input-bordered w-full  bg-slate-300 text-black"
    //             />
    //             {/* message */}
    //             <span className="block">Message *</span>
    //             <textarea
    //               className="textarea textarea-bordered textarea-lg w-full  bg-slate-300 text-black"
    //               placeholder="Your Message"
    //               name="message"
    //             ></textarea>

    //             <input
    //               type="submit"
    //               value="Sent"
    //               className="btn-outline w-3/6 mx-auto"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //     </section>
    //   </Container>
    // </div>
    <div className="w-full h-screen">
      <h1 className="mt-10 uppercase text-red-500">
        This section is not available right now, Will be available soon
      </h1>
    </div>
  );
};

export default Contact;
