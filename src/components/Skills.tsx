import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
    <div className='grid md:grid-cols-2 gao-20 items-center'>

        <div data-aos="zoom-in-up"> 
            
            <h2 className='text-4xl md:text-5xl'> Technologies I Work with </h2> 

            <p className='text-greay 500 pt-2'> 
              I have a solid foundation in web develoment, specializing in HTML, CSS, and javaSript.   

            </p>
            </div> 
            <div>

            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                            </div>
   
                 <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                            </div>


            </div>      
            
            </div>

        </div>  
      
    </div>
  )
}

export default Skills
