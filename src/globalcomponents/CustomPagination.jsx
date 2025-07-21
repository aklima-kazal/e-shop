import { Pagination } from "antd";
import React from "react";

const CustomPagination = ({ current, onChange, total, pageSize, page }) => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <Pagination
          current={current}
          onChange={onChange}
          total={total}
          pageSize={pageSize}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === "page") {
              return (
                <button
                  className={`h-10 w-10 rounded outline-none border-none text-base font-normal font-montserrat  ${
                    current === page
                      ? "bg-orange text-white"
                      : "text-orange hover:bg-white02 "
                  }`}
                >
                  {page}
                </button>
              );
            }
            return originalElement;
          }}
        />
      </div>
    </>
  );
};

export default CustomPagination;
