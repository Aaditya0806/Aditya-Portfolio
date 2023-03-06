import React , { useRef }  from 'react'
import emailjs from '@emailjs/browser';
import location from "../../assets/IMG/location.png"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from "react-leaflet"
import { Popup } from "react-leaflet"
import { useMap } from 'react-leaflet/hooks'
// import from 'react';
import "./contact.css"


const Contact = () => {

     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();
   

          emailjs.sendForm('service_49nhnzg', 'template_91zf0xv', form.current, 'Tal4CgiR5bCY-VjKI')
          .then((result) => {
              console.log(result.text);
              alert("Status "+ result.text)
          }, (error) => {
              console.log(error.text);
              alert("Status "+ error.text)
          });
     }

  return (
    <section className='contact-section' id='contact'>

      <div className='contact-content1'>
      <p className='html-tag o-c-h1'> &lt;h1	&gt;</p>
           <h1 className='contact-title'>Contact Me</h1>
           <p className='html-tag c-c-h1'> &lt;/h1	&gt;</p>
           <p className='html-tag o-c-h2'> &lt;h2	&gt;</p>
           <h1 className='contact-subtitle'>
           <button className='contact-bounce c-G'>G</button> <button className='contact-bounce c-e'>e</button>
           <button className='contact-bounce c-t'>t</button> <button className='contact-bounce c-I'>I</button>
           <button className='contact-bounce c-n'>n</button> <button className='contact-bounce c-T'>T</button>
           <button className='contact-bounce c-o'>o</button> <button className='contact-bounce c-u'>u</button>
           <button className='contact-bounce c-c'>c</button> <button className='contact-bounce c-h'>h</button>
           </h1>
            <p className='html-tag c-c-h2'> &lt;/h2	&gt;</p>
            <p className='html-tag o-c-form'> &lt;form&gt;</p>
            <p className='contact-des'>I'm interested in freelance opportunities and | am always ready

               to build projects at anytime, if you have any job offer for me, you
               could use the form below to react out to me.
</p>
           <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <ul className='form-content'>
                     <li className='half form-input'> 
                          <input className='name' type="text" name='to_name' placeholder='Name' required
                           
                          />
                     </li>
                     <li className='half form-input'> 
                          <input type="email" name='from_name' placeholder='Email' required
                          
                          />

                     </li>
                     <li className=' form-input'> 
                          <input type="text" name='subject' placeholder='Subject' required
                           
                          />
                     </li>
                     <li className=' form-input'> 
                          <textarea type="text" name='message' placeholder='Message' required
                           
                          />
                     </li>
                     <li className='contact-send-button1 '>
                      <input type="submit" className='contact-send-button' value="Send" />
                     </li>
                </ul>
           </form>
           <p className='html-tag c-c-form'> &lt;/form	&gt;</p>
           <p className='html-tag c-c-section'> &lt;/section	&gt;</p>
      <p className='html-tag c-c-body'> &lt;/body	&gt;</p>
      <p className='html-tag c-c-html'> &lt;/html	&gt;</p>
      </div>
      <div className='contact-content2'>
      
       <div className='contact-map-info'>
         Aditya Malviya
         <br/>
         SIB Complex, Char Imli 
         <br/>
         Bhopal(M.P)
         <br/>
         India
         <span> Aadimalviyaa@gmail.com</span>
       </div>
       {/* <div className='contact-map'>
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
          <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
      </MapContainer>
       </div> */}
       {/* 23.21860,77.42449 */}
       <img src={location} className="location-img"/>
      </div>

      
      
    </section>
  )
}

export default Contact
