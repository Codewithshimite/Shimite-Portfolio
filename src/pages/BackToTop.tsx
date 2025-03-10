import { useRef } from "react";

export default function ScrollToOga() {
  const scrollRef = useRef<HTMLElement | null>(null);

  const scrollToOga = () => {
    scrollRef.current = document.querySelector(".oga");
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-5 scrol">
      <button
        onClick={scrollToOga}
        className="scroll-up"
      >
         <i className="fa fa-arrow-down"></i> 
      </button>
    </div>
  );
}
