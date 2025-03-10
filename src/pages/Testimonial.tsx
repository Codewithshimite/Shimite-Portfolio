import styled from 'styled-components';
import avart from "../images/avatar-2-removebg-preview.png"
import jimmy from "../images/jimmy.png"
import Maranatha from "../images/maranatha-removebg-preview.png"




const TestimonyCard  = () => {
  return (
    <>
    <div className='mt-5'>
      <StyledWrapper>
     <div className="container wisher ">
    
     <div style={{ '--r': -15 } as React.CSSProperties} className="glass">
         <div className='text-div'>
         
         <img className="testi-image" src={jimmy} alt="Jimmy" />
         <blockquote>
          "From my experience with Shimite on application development, 
          testing and debugging, I can confirm Shimite has a keen eye 
          for detail and a deep understanding of modern programming and 
          technologies. His dedication, positive attitude, and collaborative
           spirit makes him a good resource to learn from. Shimite is the perfect 
           choice to coach students and bring your projects to life.."
         </blockquote>
         <p>
          <span>-Jimmy</span>
          <span>Founder, Aboba, USA</span>
          </p>

         </div>
       </div>

       <div  style={{ '--r': 5 } as React.CSSProperties} className="glass">
       <div className='text-div'>
       <img className="testi-image" src={avart} alt="Avatar" />
       <blockquote>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore, 
          fugiat ipsam perspiciatis illum tempore hic excepturi amet magnam nesciunt,
           porro unde! Veniam, impedit et delectus fuga qui laborum voluptatibus."
         </blockquote>
         <p>
          <span>-Joyce</span>
          <span>Social Media manager, writer</span>
          </p>
         </div>
       
       </div>

       <div  style={{ '--r': 25 } as React.CSSProperties} className="glass">
       <div className='text-div'>
       <img className="testi-image" src={Maranatha} alt="Avatar" />

       <blockquote>
          "Shimite is an excellent software tester and developer. I have worked with him 
          on bug testing for websites and web apps. His dedication and consistency are
           remarkable. He impressed me by self-teaching software development and developing 
           great skills. He is also highly talented and would be a valuable asset to any company."
         </blockquote>
         <p>
          <span>-Maranatha </span>
          <span>Test Artitect, Utest</span>
          </p>
       </div>
       </div>

     </div>
   </StyledWrapper>
    </div>

    </>

  );
}

const StyledWrapper = styled.div`



  .container {
    margin-top:-5%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid red;
    padding: 4% 2% 4% 2%;
    height: 500px;
    font-style: "Josefin Sans";

  }

 .container .glass {
    width: 350px;
    height: 380px;
    background-color: rgb(78, 80, 82);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    background: linear-gradient(#fff2, transparent);
    background: linear-gradient(to bottom, rgba(193, 30, 30, 0), $primary-color)
    font-style: "Josefin Sans";
    
  }

  .container:hover .glass .text-div {
  border: 2px solid #ea4343;;
}

 .text-div{
  border: 2px solid white;
  width: 100%;
  height: 100%
 }



  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

.container .glass::before {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(201, 19, 19, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border: 1px solid red;
}


  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }

  .testi-image {
   width: 20%;
   border-radius: 100%;
   margin-left: 3%;
  }
  

  blockquote{
  margin-top: 5%;
  padding: 0% 5% 0% 5%;
  color:white;
  font-family: 'Josefin Sans', sans-serif;
  }


  .text-div p {
  display: flex;
  flex-direction: column;
  
  padding-left: 3%;
  color:yellow;
  font-weight: bolder;

  }






  /*Mobile*/

 @media (max-width: 768px) {  
  .wisher{
  display: none
  }




  }
`;

export default TestimonyCard ;


