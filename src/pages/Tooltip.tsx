
import styled from 'styled-components';
import "../styles/_variables.scss"
const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <span className="tooltip">𝓜𝓸𝓻𝓮 𝓪𝓫𝓸𝓾𝓽 𝓶𝓮</span>
        <a href="/About-Shimite" target="_blank" >
     <span className="text">ᎷᏋ</span>
      </a>
      </div>
    </StyledWrapper>
  );
}



const StyledWrapper = styled.div`
  .tooltip-container {
      // --background:rgb(183, 53, 53);
    position: relative;
    background: var(--background);
    cursor: pointer;
    transition: background 0.3s;
    font-size: fit-content;
    padding: 0.7em 1.8em;
    color:white;
    height: fit-content;
    
    
  }

  .text{
  font-size:15px;
  text-decoration: underline;
  
  }

  a{
  color:white
  }

  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10%); /* Adjusted the initial position */
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    background: var(--background);
    color: #fff;
    border-radius: 0.3em;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 14px;
    width: fit-content; /* Adjusted the width */
    padding: 0.5em 1em; /* Adjusted padding */
    white-space: nowrap; /* Prevent text wrapping */
  }

  .tooltip-container:hover .tooltip {
    top: -100%; /* Adjusted the tooltip position */
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
    background:#ea4343;
  }`;

export default Tooltip;
