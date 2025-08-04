import { Button, Form, Input, Select } from "antd";
import { t } from "i18next";
const { Option } = Select;

const CheckoutForm = ({ form }) => {
  const handleFinish = () => {
    console.log("finish");
  };
  return (
    <>
      <div>
        <h4 className="font-semibold font-poppins text-[36px] text-black w-[70%] leading-[60px] mb-10">
          Billing Details
        </h4>
        <div className="mt-10">
          <Form
            form={form}
            onFinish={handleFinish}
            rootClassName="custom-form"
            className="grid grid-cols-2 gap-x-6 gap-y-18"
          >
            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[16px] text-black ">
                  First Name
                </p>
              }
              name={"firstName"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="First Name"
              />
            </Form.Item>

            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[16px] text-black ">
                  Last Name
                </p>
              }
              name={"lastName"}
              required
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="Last Name "
              />
            </Form.Item>
            <Form.Item
              label={
                <p className="font-bold font-montserrat text-[16px] text-black ">
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
                <p className="font-bold font-montserrat text-[16px] text-black ">
                  Email Address
                </p>
              }
              name={"Email Address"}
              required
              rules={[
                {
                  required: true,
                  message: "This field is required",
                  type: "email",
                },
              ]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="Email Address "
              />
            </Form.Item>

            <div className="col-span-2">
              <Form.Item
                label={
                  <p className="font-bold font-montserrat text-[16px] text-black ">
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
                <p className="font-bold font-montserrat text-[16px] text-black ">
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
                <p className="font-bold font-montserrat text-[16px] text-black ">
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
                <p className="font-bold font-montserrat text-[16px] text-black ">
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
                <p className="font-bold font-montserrat text-[16px] text-black ">
                  ZIP Code
                </p>
              }
              rules={[
                {
                  required: true,
                  message: "This field is required",
                  type: "ZIP Code",
                },
              ]}
            >
              <Input
                className="!border !border-black01 !rounded-[10px] !p-4"
                placeholder="ZIP Code"
              />
            </Form.Item>

            <div className="col-span-2">
              <Form.Item
                label={
                  <p className="font-bold font-montserrat text-[16px] text-black ">
                    Other Notes
                  </p>
                }
                d
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
