import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AccountDetails = () => {
  return (
    <>
      <div className=" ">
        <h4 className="text-4xl font-semibold text-black font-poppins border-b-4 border-orange  inline-block pb-2">
          Account Details
        </h4>
        <Form
          rootClassName="custom-form"
          className="grid grid-cols-2 gap-y-12 gap-x-4"
        >
          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                First Name
              </p>
            }
            name={"First Name"}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input className="!h-[50px] " placeholder="First Name" />
          </Form.Item>
          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                Last Name
              </p>
            }
            name={" LastName"}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input className="w-full !h-[50px]" placeholder=" LastName" />
          </Form.Item>

          <Form.Item
            label={
              <p className="font-bold font-montserrat text-[16px] text-black ">
                Email Address
              </p>
            }
            name={"EmailAddress"}
            rules={[{ message: "This field is required", required: true }]}
          >
            <Input className="w-full !h-[50px]" placeholder="EmailAddress" />
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

          <Button
            htmlType="submit"
            className="!text-white !bg-orange !font-semibold !font-poppins !text-[16px] !h-[48px] !px-2  !rounded-[8px] !flex !items-center !justify-center !w-[180px] !mt-8"
          >
            Edit Profile
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AccountDetails;
