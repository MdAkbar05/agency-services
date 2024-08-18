import React from "react";
import contact from "../../assets/img/contacts.png";
const Contacts = () => {
  return (
    <div
      id="contact"
      className="customContainer flex flex-col  my-20 gap-y-12 "
    >
      <div className="flex flex-col justify-center items-ceter gap-y-4">
        <div className="font-bold sm:text-2xl md:text-4xl text-center">
          Get in <span className="text-borderColor">TOUCH</span>
        </div>
        <hr className="border w-full" />
        <div className="text-center text-lg">
          Share your expectation with friendly, We hear you consequently
        </div>
      </div>
      <div className="flex justify-around items-center sm:flex-col lg:flex-row">
        <img src={contact} alt="Contacts" className="w-2/5" />
        <form
          action=""
          className="md:border-4 sm:border-2 border-borderColor p-12 rounded-3xl lg:w-2/4 md:w-4/5 sm:w-full space-y-6"
        >
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="name" className="uppercase font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="focus:outline-none bg-transparent border rounded-lg text-xl p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="name" className="uppercase font-semibold">
              Your Email
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="focus:outline-none bg-transparent border rounded-lg text-xl p-2"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="name" className="uppercase font-semibold">
              Your Message
            </label>
            <textarea
              type="text"
              name="name"
              id="name"
              rows="4"
              className="resize-y focus:outline-none bg-transparent border rounded-lg text-xl p-2"
            />
            <input
              type="submit"
              id="submit"
              value="SEND MESSAGE"
              className="text-start shadow__btn mt-3 w-fit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
