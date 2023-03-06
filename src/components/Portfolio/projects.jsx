import React,{ useState } from 'react' 
import "./portfolio.css"
import ProjectImg1 from '../../assets/IMG/p-1-1.png'
import ProjectImg2 from '../../assets/IMG/P-1.png'
import ProjectImg3 from '../../assets/IMG/P-3.jpg'
import ProjectImg4 from '../../assets/IMG/P-4.png'
import ProjectImg5 from '../../assets/IMG/P-5.png'
import ProjectImg6 from '../../assets/IMG/p-6.png'

const Projects = () => {
  
    const [projectState, setprojectState] = useState(0);

    const projectTab = (index) =>{
          setprojectState(index);
    }

  return (
    <div className='project-section' id='project-section'>
         <ul>
            <li>
            <div className={projectState === 1 ? "project-view photopins": "project-view"}> 
                        

                        <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>PhotoPins</h3>
                            <p className='project-des'>This is similar website to pinterest, Where user can 
                                download images and post there images according to their category 
                                like food, coding, animals, wallpapers, etc.
                          <br/> <br/> Technologies used: HTML, CSS, JavaScript,
                                    React JS and Sanity. </p>
                        </div>
                    </div>
                <div className='project-item lazy-load'>
                    <img src={ProjectImg1} className="project-img"/>
                 
                    <a className='color-box ' onClick={() => projectTab(1)} ></a>

                 
                   
                </div>
               
            </li>
            <li>
            <div className={projectState === 2 ? "project-view farmtech": "project-view"}> 
            <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>FarmTech</h3>
                            <p className='project-des'>This is E-Agriculture website, In which new 
                              farmer see information about agriculture and sell our products and other 
                              user also buy their product. <br/> <br/> Technologies used: HTML, CSS, JavaScript, 
                              Django, MySQL and Bootstrap </p>
                        </div>

            </div>

                <div className='project-item lazy-load'>
                    <img src={ProjectImg2} className="project-img"/>
                 
                    <a className='color-box' onClick={() => projectTab(2)}></a>
                </div>
            </li>
            <li>
            <div className={projectState === 3 ? "project-view online-r": "project-view"}> 
            <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>ONLINE RESTAURANT AND TABLE BOOKING</h3>
                            <p className='project-des'>This is a website where user can reserve online 
                            their suitable table at restaurant. <br/> <br/> Technologies used:
                            React.JS, Node.JS, Express and Mongo DB </p>
                        </div>

            </div>


                <div className='project-item lazy-load'>

                    
                    <img src={ProjectImg3} className="project-img"/>
                    
                    <a className='color-box' onClick={() => projectTab(3)}></a>
                </div>
            </li>
            <li>

            <div className={projectState === 4 ? "project-view aadi-store": "project-view"}> 
                        <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>Aadi's Store</h3>
                            <p className='project-des'>This E-commers website in which user can see all the 
                              sports related products
                        <br/> <br/> Technologies used: HTML, CSS and JavaScript,
                                     </p>
                        </div>
            </div>

                <div className='project-item lazy-load'>
                    <img src={ProjectImg4} className="project-img"/>
                   
                    <a className='color-box' onClick={() => projectTab(4)}></a>
                </div>
            </li>
            <li>
               
            <div className={projectState === 5 ? "project-view fashion": "project-view"}> 
                        <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>Fashion</h3>
                            <p className='project-des'>This is E-commers website in which user can see 
                                best and new collection of men and women fashion. 
                        <br/> <br/> Technologies used: HTML, CSS and JavaScript.
                                     </p>
                        </div>
            </div>

                <div className='project-item lazy-load'>
                    <img src={ProjectImg5} className="project-img"/>
                   
                    <a className='color-box' onClick={() => projectTab(5)}></a>
                </div>
            </li>
            <li>

            <div className={projectState === 6 ? "project-view blog": "project-view"}> 
                        <div className='project-view-content'>
                            <i onClick={() => projectTab(0)} className="ri-close-line project-close"></i>
                            <h3 className='project-title'>Blog</h3>
                            <p className='project-des'>This is blog website in which user can signup and create there
                            blogs and post it.
                        <br/> <br/> Technologies used: HTML, CSS, JavaScript,
                                    Django and MySQL </p>
                        </div>
            </div>

                <div className='project-item lazy-load'>
                    <img src={ProjectImg6} className="project-img"/>
                 
                    <a className='color-box' onClick={() => projectTab(6)} ></a>
                    
                </div>
            </li>
         </ul>
    </div>
  )
}

export default Projects
