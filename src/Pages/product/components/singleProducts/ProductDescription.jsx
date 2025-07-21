import React from "react";

const ProductDescription = ({ decription }) => {
  return (
    <>
      <div className="mt-12 border-b border-black01">
        <h5 className="font-semibold font-poppins text-2xl text-black mb-6">
          Description
        </h5>
        <p className="font-normal font-montserrat text-xl text-black mb-8">
          {decription}
        </p>
      </div>
    </>
  );
};

export default ProductDescription;
