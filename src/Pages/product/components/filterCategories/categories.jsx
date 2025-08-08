import { Checkbox, Collapse, Divider } from "antd";

const Categories = () => {
  return (
    <>
      <div className="">
        <Collapse
          size="small"
          rootClassName="product-custom-collapse"
          items={[
            {
              key: "1",
              label: (
                <h4 className="text-black font-montserrat font-bold text-base lg:text-xl ">
                  Categories
                </h4>
              ),
              children: (
                <ul className="">
                  <li>
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px] ">
                      Computers & Tablets
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      Mobile & Accessories
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      TV & Home Theater
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      Audio & Headphones
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox className="!text-black !font-normal !font-montserrat !text-[16px]">
                      Cameras & Camcorders
                    </Checkbox>
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Categories;
