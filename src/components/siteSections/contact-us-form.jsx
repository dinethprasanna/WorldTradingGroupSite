import { Button } from "../ui/button";

function ContactUsForm() {
  return (
    <section className="contact-us-form-section px-5 lg:px-4 mx-auto pt-1 pb-10 md:pt-2 md:pb-13 lg:pt-3 lg:pb-15 max-w-7xl">
      <div className="contact-form-wrapper mx-auto max-w-[740px]">
        <form className=" space-y-4 px-3.5 md:px-6 lg:px-8 py-8 md:py-10 lg:py-24 bg-[#223347] rounded-3xl">

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-semibold text-(--yellow-text) "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-(--yellow-text) "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-base font-semibold text-(--yellow-text) "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-semibold text-(--yellow-text) "
            >
              Message
            </label>
            <textarea
            placeholder="Message"
            rows="4"
            className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 lg:min-h-[262px]"
            required
          ></textarea>
          </div>


          <Button variant="secondary" type="submit" className="mt-10 md:mt-12 lg:mt-14 w-full md:w-auto mx-auto block px-12 min-h-12 cursor-pointer" >Submit</Button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsForm;
