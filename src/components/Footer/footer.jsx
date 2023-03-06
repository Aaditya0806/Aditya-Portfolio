import React from 'react'
import "./footer.css"
import Logo from "../../assets/IMG/logo.png"

const footer = () => {
  return (
    <footer className='footer'>

        <div className='footer-container'>
            <h1 className='footer-title' ><img src={Logo} className="footer-logo"/>ditya.</h1>
            
            <span className='footer-copy'>
                &#169; aditya. All right reserved
            </span>

            <div className='footer-list'>

                    <a href='https://www.linkedin.com/in/aditya0806/' target="_blank" className='footer-link' >
                       <i className="ri-linkedin-box-line footer-icon"></i>
                    </a>

                    <a href='https://www.instagram.com/_iam_aditya._/' target="_blank" className='footer-link'>
                       <i className="ri-instagram-line footer-icon"></i>
                    </a>

                    <a href='https://github.com/Aaditya0806' target="_blank" className='footer-link'>
                       <i className="ri-gitlab-line footer-icon"></i>
                    </a>

                    <a href='https://wa.me/+917247547310' target="_blank" className='footer-link' >
                      <i className="ri-whatsapp-line footer-icon"></i>
                    </a>
            </div>


        </div>
      
    </footer>
  )
}

export default footer
