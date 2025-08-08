import { useRenderComponent } from "../../../hooks/UseRenderComponent";

const RightBar = ({ options }) => {
  const renderComponent = useRenderComponent(options);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-x-12">
          <div className="bg-white02 rounded-[25px] p-12 h-fit ">
            <h3 className="font-semibold font-poppins text-4xl text-black max-w-[50%]  mb-[18px]">
              Order Tracking
            </h3>
            <p className="text-xl font-normal font-montserrat text-black">
              See your order history.
            </p>
          </div>
          <div className="bg-white02 rounded-[25px] p-12 h-fit">
            <h3 className="font-semibold font-poppins text-4xl text-black max-w-[50%]  mb-[18px]">
              Billing Address
            </h3>
            <p className="text-xl font-normal font-montserrat text-black">
              Set your billing address.
            </p>
          </div>
        </div>
        <div className="mt-10">{renderComponent}</div>
      </div>
    </>
  );
};

export default RightBar;
