import SubscribeForm from "../../../../globalcomponents/subscribe/form";
import SubscribeImg from "../../../../../src/assets/Images/subscribeimg.png";

const Subscribe = () => {
  return (
    <>
      <section className="mt-[8px] lg:mt-[8px] px-10">
        <div className="bg-linear-to-r from-white02 to-gray rounded-[25px] grid grid-cols-1 xl:grid-cols-[2fr_3fr] ">
          <div className="py-2 lg:py-[80px] pl-8 px-6 xl:pl-[100px] ">
            <SubscribeForm />
          </div>
          <div className="  xl:pl-[100px]  xl:block hidden">
            <img
              src={SubscribeImg}
              alt="subscribe"
              className=" xl:w-[70%] 2xl:w-[85%] max-h-[700px]  mt-[80px] 2xl:mt-0 ml-10 2xl:ml-[140px] lg:flex items-center justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
