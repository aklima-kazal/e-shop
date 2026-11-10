import { useRenderComponent } from "../../../hooks/useRenderComponent";
import AccountDetails from "./AccountDetails";

const RightBar = ({ options }) => {
  const renderComponent = useRenderComponent(options);
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-0 mt-10 md:mt-0">
          <div className="bg-white02 rounded-[25px] p-8 md:p-12 h-fit ">
            <h3 className="font-semibold font-poppins text-2xl md:text-4xl text-black max-w-[50%]  mb-[18px]">
              Order Tracking
            </h3>
            <p className="text-base md:text-xl font-normal font-montserrat text-black">
              See your order history.
            </p>
          </div>
          <div className="bg-white02 rounded-[25px] p-8 md:p-12 h-fit">
            <h3 className="font-semibold font-poppins text-2xl md:text-4xl text-black max-w-[50%]  mb-[18px]">
              Billing Address
            </h3>
            <p className="text-base md:text-xl font-normal font-montserrat text-black">
              Set your billing address.
            </p>
          </div>
        </div>
        <div className="mt-10">{renderComponent}</div>
        <div>
          <AccountDetails />
        </div>
      </div>
    </>
  );
};

export default RightBar;
