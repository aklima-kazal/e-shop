import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const RegestrationForm = () => {
  return (
    <>
      <div className="bg-white02 rounded-[15px] p-[48px] mt-[40px]">
        <Form rootClassName="custom-form" className="flex flex-col gap-y-12">
          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                Email Address
              </p>
            }
            name={"Email "}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input className="!h-[50px] " placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                Password
              </p>
            }
            name={"Password"}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              className=" !h-[50px]"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                Username
              </p>
            }
            name={"Username"}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input className="w-full !h-[50px]" placeholder="Username" />
          </Form.Item>
          <Button
            htmlType="submit"
            className="!text-white !bg-orange !font-semibold !font-poppins !text-[16px] !h-[48px] !px-6 !rounded-[8px] !flex !items-center !justify-center !w-full mt-10"
          >
            Create Account
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RegestrationForm;
