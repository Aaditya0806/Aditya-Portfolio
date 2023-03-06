import React from 'react'
import "./qualification.css"

const qualification = () => {
  return (
    <section className='qualification-section'>
        <p className='html-tag o-q-section'> &lt;section	&gt;</p>
        <p className='html-tag o-q-h1'> &lt;h1	&gt;</p>
        <h1 className='qualification-title'>Qualification</h1>
        <p className='html-tag c-q-h1'> &lt;/h1	&gt;</p>
        <p className='html-tag o-q-h2'> &lt;h2	&gt;</p>
        <h1 className='qualification-subtitle'><button className='qualification-bounce q-M'>M</button>
        <button className='qualification-bounce q-y'>y</button> <button className='qualification-bounce q-J'>J</button> 
        <button className='qualification-bounce q-u'>o</button> <button className='qualification-bounce q-u'>u</button> 
        <button className='qualification-bounce q-r'>r</button> <button className='qualification-bounce q-n'>n</button> 
        <button className='qualification-bounce q-e'>e</button> <button className='qualification-bounce q-yy'>y</button></h1>

        <p className='html-tag c-q-h2'> &lt;/h2	&gt;</p>
        <p className='html-tag o-q-div'> &lt;div grid	&gt;</p>
        <div className='qualification-container'>
            <div className='qualification-tab'>
                <div className='qualification-button'>
                <i class="ri-ball-pen-line qualification-icon"></i>Education

                </div>
            </div>
        </div>
       <div className='education-content'>
       <div className='education-data-1'>
            <div>
                <h3 className='education-title'>Engineering(CS)</h3>
                <span className='education-subtitle'>OIST-Bhopal</span>
                <div>CGPA-7.9</div>
                <div className='education-calender'>
                <i class="ri-calendar-2-line"></i>2019-Present
                </div>
            </div>
            <div>
                <span className='education-round-1'></span>
                <span className='education-line-1'></span>
            </div>
        </div>
        <div className='education-data-2'>

           <div>
                <span className='education-round-2'></span>
                <div className='education-line-2'></div>
            </div>
            <div>
                <h3 className='education-title'>12th(PCM)</h3>
                <span className='education-subtitle'>Nalanda School-Bhopal</span>
                <div>CGPA-7.6</div>
                <div className='education-calender'>
                <i class="ri-calendar-2-line"></i>2018-2019
                </div>
            </div>
           
        </div>
       </div>
       <p className='html-tag c-q-div'> &lt;/div	&gt;</p>
       <p className='html-tag c-q-section'> &lt;/section	&gt;</p>
    </section>
  )
}

export default qualification
