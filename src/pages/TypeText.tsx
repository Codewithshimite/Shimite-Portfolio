import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <ReactTyped strings={["My React TypedText"]} typeSpeed={100} loop />
      </h1>
    </div>
  );
};

export default TypedText;