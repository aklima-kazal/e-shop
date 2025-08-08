import { useFormik } from "formik";
import { contactSchema, initialValues } from "./Schema";

const ContactForm = () => {
  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  console.log(touched);

  return (
    <div>
      <h2 className="mb-4 text-2xl lg:text-4xl font-semibold font-poppins text-black">
        Contact Us
      </h2>
      <p className="mb-4 text-[18px] lg:text-xl font-normal font-montserrat text-black">
        Have any questions for us? Don’t hesitate to contact us.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-[18px] lg:text-xl font-bold font-montserrat text-black">
            Name
          </label>
          <input
            type="text"
            placeholder="Aklima Kazal"
            className="w-full border border-black01 outline-none p-4 rounded-[10px]"
            onChange={handleChange}
            name="name"
            value={values.name}
          />
          {touched.name && (
            <p className="text-red font-bold font-montserrat text-sm mt-2">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-8">
          <div>
            {" "}
            <label className="block mb-2 text-[18px] lg:text-xl font-bold font-montserrat text-black">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              name="phone"
              value={values.phone}
              type="text"
              placeholder="+0123456789"
              className="w-full border border-black01 outline-none p-4 rounded-[10px]"
            />
            {touched.phone && (
              <p className="text-red font-bold font-montserrat text-sm mt-2">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            {" "}
            <label className="block mb-2 text-[18px] lg:text-xl font-bold font-montserrat text-black">
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={values.email}
              type="text"
              placeholder="5vDZk@example.com"
              className="w-full border border-black01 outline-none p-4 rounded-[10px]"
            />
            {touched.email && (
              <p className="text-red font-bold font-montserrat text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8">
          <label className="block mb-2 text-[18px] lg:text-xl font-bold font-montserrat text-black mt-8">
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            value={values.message}
            placeholder="Enter your message ..."
            className="w-full border border-black01 outline-none p-4 rounded-[10px] h-[241px] resize-none"
          />
          {touched.message && (
            <p className="text-red font-bold font-montserrat text-sm mt-2">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="!bg-orange !mt-[16px] !px-8 !h-12 !border-none rounded-[10px] cursor-pointer !mx-[25%] lg:!mx-[40px] xl:!mx-0"
        >
          <span className="font-bold font-montserrat text-lg text-white ">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
