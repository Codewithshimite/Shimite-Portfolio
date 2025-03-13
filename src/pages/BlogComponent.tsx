import React, { useState } from "react";

import AnimatedButton from "../pages/ReadMoreComponent"



import "../styles/BlogComponent.scss"
import cat from "../images/Laptop1.jpeg"
import image2 from "../images/Reactdesktop.avif"
import image3 from "../images/front-end-developer.jpg"
import usestate from "../images/useState.jpeg"




// const chatLogo = [
// "public/images/apple.png",
// ];


// interface BlogItem {
//   id: number;
//   header: string;
//   subHeader?: string;
//   text: string;
// }

interface BlogItem {
  id: number;
  imgSrc: string;
  header: string;
  subHeader: string;
  text: string;
  content: string;  // ✅ Ensure all objects include this
  linkedIn?: string;  // ✅ Make this optional if it's not always needed
}


const Blogs: BlogItem[] = [
  {
    id: 1,
    imgSrc: image3,
    header: "React useContext() Simplified",
    subHeader: "My Blog",
    text: "😀 Imagine your family has a big house with many rooms...",
    content: "In React, useContext() allows you to share state between components without passing props down manually. Think of it as a global state that components can access easily, reducing prop drilling. You define a context using `React.createContext()`, wrap components with a `Provider`, and use `useContext(MyContext)` to access the data. This simplifies state management in large applications.",
    linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:7292504204240130049/"
  },
  {
    id: 2,
    imgSrc: image2,
    header: "User Experience Implementation",
    subHeader: "Bringing UX designs to life through code",
    text: "User experience (UX) implementation ensures a website is easy to use...",
    content: "UX design is about making a website intuitive and user-friendly. It includes clear navigation, fast-loading pages, mobile responsiveness, and accessibility features. A great UX improves user retention, reduces frustration, and increases conversions. Developers work with designers to turn mockups into functional interfaces using HTML, CSS, and JavaScript frameworks like React.",
  },
  {
    id: 3,
    imgSrc: cat,
    header: "Testing your Website is Important",
    subHeader: "Identifying site issues with precise analysis",
    text: "Testing your website ensures a smooth user experience...",
    content: "Website testing includes multiple types: Functional testing ensures features work as expected, Performance testing checks speed and responsiveness, Security testing protects user data, and Accessibility testing ensures usability for everyone. Tools like Jest, Cypress, and Lighthouse help automate testing, ensuring a bug-free experience.",
  },
  {
    id: 4,
    imgSrc: usestate,
    header: "React useState(), a Magic Box",
    subHeader: "The react useState() works like a magic box",
    text: "The react useState is a react Hook that is used to set and update a function...",
    content: "useState() is a React hook that lets components manage state. It returns a state variable and a function to update it. For example: `const [count, setCount] = useState(0);`. When `setCount` is called, React re-renders the component with the new value. It’s useful for managing form inputs, toggles, and dynamic data updates.",
  },
];



const BlogCard: React.FC<{ Blog: BlogItem; onClick: () => void }> = ({ Blog, onClick }) => {
  return (
    <div className="blog-div-carrier" onClick={onClick}>
      <div className="blog-own-images-div">
      <img className="blog-card-image" src={Blog.imgSrc} alt={Blog.header} />
      </div>

      <div className="blog-image-button-div">
      <h2 className="text-light title-text">{Blog.header}</h2>
      <div> <AnimatedButton /> </div> 
      </div>

   
      
    </div>
  );
};


const Modal: React.FC<{ Blog: BlogItem | null; onClose: () => void }> = ({ Blog, onClose }) => {
  if (!Blog) return null;

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="blog-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="blog-image-inside"> <img className="blog-card-image" src={Blog.imgSrc} alt={Blog.header} /></div>
        <h2 className="blog-header">{Blog.header}</h2>
        {/* {Blog.subHeader && <h3>{Blog.subHeader}</h3>} */}
        <p className="textModal">{Blog.text}</p>
        <p className="textModal">{Blog.content}</p>
        
      </div>
    </div>
    
  );
  
};

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <>
    <div className="-blog-port">
      <div className="blog-flex-home">
        {Blogs.map((Blog) => (
          <BlogCard key={Blog.id} Blog={Blog} onClick={() => setSelectedBlog(Blog)} />
        ))}
      </div>
      {/* Modal */}
      <Modal Blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
 
    </div>

   
    </>
  );
};






export default Blog;

