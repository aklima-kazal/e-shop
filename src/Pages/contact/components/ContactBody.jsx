import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const ContactBody = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
      <section className="mt-[80px] mb-12 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.8fr] gap-x-12">
          <div>
            <h4 className="gap-x-2 flex items-center mb-4 font-montserrat font-normal text-[14px] lg:text-[16px]  text-black">
              <Link to="/">Home</Link>|
              <span className="text-black font-bold font-montserrat text-[14px] lg:text-[16px] capitalize">
                {pageName}
              </span>
            </h4>
            <ContactForm />
          </div>
          <div className="bg-white02 p-6 md:p-8 rounded-[15px] xs:h-[95%] lg:h-[78%] xl:h-[70%] mt-8 lg:mt-0">
            <h4 className="font-semibold font-poppins text-[20px] md:text-[24px] text-black  mb-8">
              Let’s Keep in Touch!
            </h4>
            <p className="font-normal font-montserrat text-[16px] md:text-[20px] text-black ">
              We would love to hear from you. Contact us for any inquiries you
              might have for us.
            </p>
            <div>
              <div className="flex items-center mt-4 md:mt-6 gap-3">
                <FaPhone className="text-black md:size-[20px] size-3" />
                <span className="font-semibold font-montserrat text-[14px] md:text-[20px] text-black ml-2">
                  +1 (123) 456-7890
                </span>
              </div>
              <div className="flex items-center mt-4 md:mt-6 gap-1 md:gap-3">
                <IoIosMail className="text-black size-4 md:size-[25px]" />
                <span className="font-semibold font-montserrat text-[14px] md:text-[20px] text-black ml-2">
                  information@eshop.com
                </span>
              </div>
              <div className="flex items-center mt-4 md:mt-6 gap-1 md:gap-3">
                <MdLocationPin className="text-black size-7 sm:size-5 md:size-[30px]" />
                <span className="font-semibold font-montserrat text-[14px] md:text-[20px] text-black ml-2 ">
                  123 Main Street, Suite 105, Anytown USA
                </span>
              </div>
            </div>
            <div className="mt-14">
              <h5 className="font-bold text-[16px] md:text-[20px] font-montserrat text-black  inline-block border-b-4 border-orange pb-1">
                Opening Hours
              </h5>
              <div className="flex items-center text-center mt-4 gap-3">
                <p className="font-bold font-montserrat text-[12px] md:text-[16px] text-black ">
                  MON to FRI:
                </p>
                <span className="font-normal font-montserrat text-[12px] md:text-[16px] text-black ">
                  9:00 AM to 6:00 PM
                </span>
              </div>
              <div className="flex items-center text-center mt-3 gap-3">
                <p className="font-bold font-montserrat text-[11px] md:text-[16px] text-black ">
                  SAT to SUN:
                </p>
                <span className="font-normal font-montserrat text-[11px] md:text-[16px] text-black ">
                  09:00 AM - 03:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBody;
