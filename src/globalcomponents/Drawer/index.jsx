import { Drawer } from "antd";
const CustomDrawer = ({
  children,
  open,
  setOpen,
  placement,
  closable,
  rootClassName,
  title,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={open}
        key={placement}
        rootClassName={rootClassName}
      >
        {children}
      </Drawer>
    </>
  );
};
export default CustomDrawer;
