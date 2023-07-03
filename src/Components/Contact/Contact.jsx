import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_wwvdyq8",
        "template_64qlh5i",
        form.current,
        "mVFCQ0yuytbdWR3H8"
      )
      .then(
        
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire(
            'Success!',
            'Your message was sent!',
            'success'
          )
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-10 mx-5 lg:mx-0 min-h-screen"id="Contact">
      <div className=" flex flex-col p-5 justify-center ">
        <div className="flex flex-col lg:flex-row justify-between items-center border-4  border-orange-400">
          <div className="  text-justify">
            <img
              src="/Img2.png"
              className="mx-auto lg:mx-10 rounded-lg mt-10 lg:mt-0 shadow-none w-11/12"
              alt="Profile"
            />
          </div>
          <div className="mt-10 lg:mt-0 px-10  bg-orange-300 text-justify w-full lg:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="my-10 py-10 px-10 lg:px-0 flex flex-col justify-center items-center text-slate-600 text-left text-xl font-bold"
            >
              <h1 className="text-3xl font-bold py-2 mb-5">Contact Me!</h1>
              <div className="py-6 flex flex-col ">
                <label className="mb-5" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="form_email"
                  placeholder="Your email."
                  className="px-20 py-5 border-4 border-orange-400  rounded-lg"
                  required
                />
              </div>
              <div className="py-5 flex flex-col">
                <label className="mb-5" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="form_name"
                  placeholder="Your name."
                  className="px-20 py-5 border-4 border-orange-400  rounded-lg"
                  required
                />
              </div>
              <div className="py-5 flex flex-col">
                <label className="mb-5" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="form_massage"
                  placeholder="Your massage."
                  className="px-20 py-10 border-4 border-orange-400  rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-bold text-xl items-center border-4 border-orange-400 rounded-lg bg-orange-400 m py-5 px-10 mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
