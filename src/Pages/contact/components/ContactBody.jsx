import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
      <section className="mt-[80px] mb-12 px-10">
        <div className="grid grid-cols-[2fr_1fr]">
          <div>
            <h4 className="gap-x-2 flex items-center mb-4 font-montserrat font-normal text-[16px] text-black">
              <Link to="/">Home</Link>|
              <span className="text-black font-bold font-montserrat text-[16px] capitalize">
                {pageName}
              </span>
            </h4>
            <ContactForm />
          </div>
          <div>fggsg</div>
        </div>
      </section>
    </>
  );
};

export default ContactBody;
