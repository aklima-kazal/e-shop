import SubscribeForm from "../../../../globalcomponents/subscribe/form";
import SubscribeImg from "../../../../../src/assets/Images/subscribeimg.png";

const Subscribe = () => {
  return (
    <>
      <section className="mt-[80px] px-10">
        <div className="bg-linear-to-r from-white02 to-gray rounded-[25px] grid grid-cols-[2fr_3fr] overflow-hidden ">
          <div className="py-[114px] pl-[100px] ">
            <SubscribeForm />
          </div>
          <div className=" pl-[100px]">
            <img
              src={SubscribeImg}
              alt="subscribe"
              className=" max-w-[1400px] max-h-[700px] object-cover mx-[20%] flex items-center justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
