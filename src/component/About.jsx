import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text=4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl ml-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi eos eligendi pariatur dolorem quo consectetur temporibus consequuntur autem ab tempore eius expedita dicta laudantium molestiae esse vitae voluptates sapiente accusamus ratione aliquid quod, similique odit dolor. Corporis hic accusantium quos reprehenderit, libero eveniet, voluptatem, cum sed alias voluptas dolorum!
            </p>
            <br/>
            <p className='text-xl ml-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos qui asperiores labore ipsum incidunt ad id nobis, officia quo accusantium aspernatur at hic exercitationem architecto nihil consequatur consectetur facere velit recusandae in sed. Reprehenderit, voluptate. Autem blanditiis assumenda quae repudiandae veniam, nisi sit. Libero enim id sed harum nisi dolor.</p>
        </div>
    </div>
  )
}

export default About