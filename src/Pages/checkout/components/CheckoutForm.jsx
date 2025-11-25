import { Alert, Button, Form, Input, Select } from "antd";
import { t } from "i18next";
import { useState } from "react";
import { useBlocker, useNavigate } from "react-router-dom";
const { Option } = Select;

const CheckoutForm = ({ form }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useBlocker(() => {
    if (!isFormValid) {
      return false; // Block navigation
    }
    return true; // Allow navigation
  }, true);
  const handleFinish = () => {
    setIsFormValid(true);
    navigate("/payment");
  };

  const handleFinishFailed = () => {
    setIsFormValid(false);
  };
  return (
    <>
      <div>
        <h4 className="font-semibold font-poppins text-[20px] md:text-[36px] text-black w-[70%] leading-[60px] md:mb-10">
          Billing Details
        </h4>
        <div className="md:mt-10">
          <Form
            form={form}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            rootClassName="custom-form"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-y-52 lg:gap-x-6 lg:gap-y-18"
          >
            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  First Name
                </p>
              }
              name={"firstName"}
              required
              rules={[{ required: true }]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="First Name"
              />
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  Last Name
                </p>
              }
              name={"lastName"}
              required
              rules={[{ required: true }]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="Last Name "
              />
            </Form.Item>
            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  Phone Number
                </p>
              }
              name={"Phone Number"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="Phone Number "
              />
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  Email Address
                </p>
              }
              name={"Email Address"}
              required
              rules={[
                {
                  required: true,

                  type: "email",
                },
              ]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="Email Address "
              />
            </Form.Item>

            <div className="col-span-1 md:col-span-2">
              <Form.Item
                label={
                  <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                    Address
                  </p>
                }
                name={" Address"}
                required
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input
                  className="!border !border-black01 !rounded-[10px] !p-4"
                  placeholder="Address "
                />
              </Form.Item>
            </div>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  Country
                </p>
              }
              name={"Country"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select
                className=" !rounded-[10px] !h-[55px] !outline-none !focus:outline-none "
                placeholder="Country"
              >
                <Option value="1">Address 1</Option>
                <Option value="2">Address 2</Option>
                <Option value="3">Address 3</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  State
                </p>
              }
              name={"State"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select
                className=" !rounded-[10px] !h-[55px] !outline-none !focus:outline-none "
                placeholder="State"
              >
                <Option value="1">Address 1</Option>
                <Option value="2">Address 2</Option>
                <Option value="3">Address 3</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  City
                </p>
              }
              name={"City"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select
                className=" !rounded-[10px] !h-[55px] !"
                placeholder="City"
              >
                <Option value="1">Address 1</Option>
                <Option value="2">Address 2</Option>
                <Option value="3">Address 3</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                  ZIP Code
                </p>
              }
              name={"ZIP Code"}
              required
              rules={[
                {
                  name: "ZIP Code",

                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="ZIP Code"
              />
            </Form.Item>

            <div className="col-span-1 md:col-span-2">
              <Form.Item
                label={
                  <p className="font-bold font-montserrat text-[14px] md:text-[16px] text-black ">
                    Other Notes
                  </p>
                }
                required
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                    type: "address",
                  },
                ]}
              >
                <Input.TextArea className="!border !border-black01 !rounded-[10px] !h-20" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
