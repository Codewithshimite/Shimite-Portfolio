import { useEffect, useRef} from "react";
import "../styles/MovingLogo.scss";



const logos = [
  "public/images/html-5.png",
   "public/images/css-3.png",
  "public/images/js.png",
  "public/images/typescript.png",
  "public/images/bootstrap.png",
  "public/images/sass.png",
  "public/images/JQuery.png",
  "public/images/atom.png"
]



const MovingLogos = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const copy = logosRef.current.cloneNode(true);
      logosRef.current.parentElement?.appendChild(copy);
    }
  }, []);

  return (
    <>
    <h3 className="use">Tools I Use For My Work</h3>
    <div className="logos">
      <div className="logos-slide" ref={logosRef}>
        {logos.map((src, index) => (
          <img key={index} src={src} alt="brand logo" />
          
        ))}
      </div>
    </div>
    
    </>
  );
};

export default MovingLogos;

