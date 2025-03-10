
import styled from 'styled-components';
// import whatsaappImage from "../images/WhatsApp Image 2025-02-03 at 09.13.00_1a8a1ca1.jpg"

const SocialsNetworks = () => {
  return (
    <StyledWrapper>
      <main>
        <ul className="example-1">
          <li className="icon-content">
            <a className="link" data-social="linkedIn" aria-label="LinkedIn" href="https://www.linkedin.com/in/shimite-obi-akejelu/" target='_blank'>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.49a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.47 20.47h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7H9.34V9h3.41v1.56h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.2 2.33 4.2 5.36v6.37z"/>
</svg>


            </a>
            <div className="tooltip">linkedIn</div>
          </li>
          <li className="icon-content">
            <a className="link" data-social="Whatsapp" aria-label="Whatsapp" href="https://wa.link/0vtquw" target='_blank'>
            <svg width="100" height="100" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.002 3.003C9.377 3.003 3.995 8.387 3.995 15.01c0 2.544.672 4.8 1.873 6.804L4 29l7.374-1.849c1.949.967 3.803 1.347 6.062 1.347 6.627 0 12.01-5.384 12.01-12.008C29.445 8.387 23.06 3.003 16.002 3.003zm0 21.995c-1.915 0-3.673-.517-5.223-1.425l-.37-.215-4.379 1.095 1.122-4.29-.243-.39a9.906 9.906 0 0 1-1.45-5.058c0-5.476 4.455-9.93 9.94-9.93 5.486 0 9.942 4.454 9.942 9.93 0 5.485-4.456 9.93-9.94 9.93zm5.737-7.357c-.312-.157-1.85-.912-2.14-1.02-.289-.107-.5-.157-.71.157-.207.314-.82 1.02-1.008 1.23-.186.209-.369.236-.682.08-.312-.157-1.322-.487-2.517-1.552-.93-.83-1.558-1.855-1.74-2.167-.185-.313-.02-.482.137-.638.141-.14.312-.366.467-.547a2.21 2.21 0 0 0 .312-.523c.053-.106.027-.21-.014-.293-.04-.08-.71-1.71-.973-2.344-.256-.617-.514-.533-.71-.533-.185 0-.396-.026-.607-.026-.207 0-.54.08-.822.366-.283.287-1.078 1.05-1.078 2.56s1.102 2.97 1.255 3.17c.155.209 2.176 3.324 5.283 4.658 1.77.76 2.46.826 3.34.695.54-.08 1.85-.755 2.107-1.486.262-.732.262-1.363.183-1.486-.08-.133-.282-.21-.592-.367z"/>
</svg>

            </a>
            <div className="tooltip">Whatsapp</div>
          </li>
          <li className="icon-content">
            <a className="link" data-social="tiktok" aria-label="Tiktok" href="https://www.tiktok.com/@codewithshimite?is_from_webapp=1&sender_device=pc" target='_blank'>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M448,209.3c-35.4,0-69.1-11.5-96.5-30.8v133.9c0,70.9-57.6,128.5-128.5,128.5s-128.5-57.6-128.5-128.5 
    c0-70.9,57.6-128.5,128.5-128.5c4.4,0,8.7,0.2,13,0.7v66.3c-4.3-0.6-8.6-0.9-13-0.9c-34.7,0-62.9,28.2-62.9,62.9 
    c0,34.7,28.2,62.9,62.9,62.9c34.7,0,62.9-28.2,62.9-62.9V61.3h66.4c3.3,37.8,25.3,71.1,57.6,89.2c17.4,9.9,37.3,15.5,57.6,15.6 
    V209.3z"/>
</svg>
            </a>
            <div className="tooltip">TikTok</div>
          </li>
          <li className="icon-content">
            <a className="link" data-social="X" aria-label="X" href="https://X.org/" target='_blank'>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.29 2H21L13.06 10.91 22 22h-6.65l-5.72-7.13L5.85 22H3L11.47 12 2 2h6.82l5.24 6.55L18.29 2Z"/>
</svg>



            </a>
            <div className="tooltip">X</div>
          </li>
        </ul>
      </main>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid pink;
    gap:-5%;
    width: 500px;
  }
  .example-1 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-1 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-1 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 50px;
  }
  .example-1 .icon-content .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-1 .icon-content .link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-1 .icon-content .link svg {
    width: 30px;
    height: 30px;
  }
  .example-1 .icon-content .link[data-social="linkedIn"]:hover {
    color:#0077B5
  }
  .example-1 .icon-content .link[data-social="Whatsapp"]:hover {
    color: #25D366;
  }
  .example-1 .icon-content .link[data-social="Tiktok"]:hover {
    color: rgb(255, 0, 0) !important
  }
  .example-1 .icon-content .link[data-social="X"]:hover {
    color:rgb(15, 16, 16)
  }
    


  @media (max-width: 991px) {
  .example-1{
  width: fit-content;
  }

  }
  
  
  
  
  `;

export default SocialsNetworks;
