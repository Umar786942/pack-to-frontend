import * as React from "react";
import { ReactNode } from "react";

type Propstype = {
  children: ReactNode;
  onclick?: () => void;
};

const CustomButton = ({ children, onclick }: Propstype) => {
  return (
    <button
    onClick={onclick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export { CustomButton };
