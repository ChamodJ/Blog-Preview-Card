import React from 'react'
import pic from './assets/images/illustration-article.svg'
import prof_pic from './assets/images/image-avatar.webp'

const App = () => {
  return (
    
      <div className='bg-white w-[350px]  max-h-[500px] p-[20px] border-2 border-black rounded-xl outline-none xs:w-[300px] shadow-[9px_9px_0_0px_black] shadow-black'>    
        <div className='rounded overflow-hidden'>
          <img src={pic}  />
        </div>

        <div className='flex flex-col mt-[20px]'>
          <div className='bg-bac-yellow px-[20px] py-[5px] rounded border-none outline-none w-[100px] text-center'>
            <p className='font-extrabold text-[0.75rem]'>Learning</p>
          </div>

          <p className='my-[10px] font-bold text-[0.75rem]'>Published 21 Dec 2023</p>

          <h1 className='font-extrabold text-[1.2rem] cursor-pointer hover:text-bac-yellow'>HTML & CSS foundations</h1>

          <p className='text-[hsl(0, 0%, 50%)] leading-4 my-[10px] text-[0.75rem]'>These languages are the backbone of every website, defining structure, content, and presentation. </p>

          <div className='flex justify-start items-center pt-[10px]'>
            <div className='w-[40px] h-[40px] mr-[15px]'>
              <img src= {prof_pic} />
            </div>
            
            <p className='my-[10px] font-bold text-[0.75rem]'>Greg Hooper</p>
          </div>
        </div>
      </div>

  )
}

export default App