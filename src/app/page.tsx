import React, { FC } from 'react'

const page: FC = () => {
  return (
    <div className=' w-[100vw] h-[100vh] px-6 py-4  '>
      <div className='text-yellow text-MainHeading font-MainHeading'>Home Page</div>
      <div className='text-gray text-SubHeading font-SubHeading py-2'>Lorem ipsum dolor sit amet.</div>
      <p className='text-Paragraph font-Paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic molestias beatae aspernatur perferendis quos a, earum totam debitis, veritatis, atque corporis expedita voluptates eveniet cum vitae odio porro placeat.</p>

      <div className='mt-20 w-[400px] h-[260px] bg-slate-100 shadow-md shadow-gray-300 rounded-xl flex justify-center items-center flex-col px-4 gap-4'>
        <h2 className='text-center text-CardHeading font-CardHeading'>Card Heading</h2>
        <p className='text-center text-Paragraph font-Paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero amet sequi, quisquam officia tempora distinctio quidem deserunt maiores minus inventore quo, enim adipisci sed quia quasi veniam est hic.</p>
        <button className='px-4 py-1 bg-yellow hover:bg-[#deb01d] text-black rounded-md text-buttonText font-buttonText'>SignUp</button>
      </div>
    </div>
  )
}

export default page;