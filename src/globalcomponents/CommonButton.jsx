import { Button } from "antd";
import React from "react";

const CommonButton = ({
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
}) => {
  return (
    <Button
      loading={loading}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
