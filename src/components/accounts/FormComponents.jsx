import React from "react";

const FormComponents = (props) => {
  return (
    <div className="inputWrapper w-5/6 mt-4 m-auto rounded overflow-auto text-left">
      <input
        type={props.type}
        className="h-full w-full outline-none p-3 border-2 border-gray-400"
        placeholder={props.label}
      />
    </div>
  );
};

export default FormComponents;
