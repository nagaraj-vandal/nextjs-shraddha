import Image from "next/image"

export const Banner = () => {
  return (
    <>
    <main className="bg-black  px-20  w-full h-[calc(100vh-80px)] bg-no-repeat bg-[url('../public/images/banner-left-bg.svg'),url('../public/images/banner-right-bg.svg')]  bg-[position:left_top_40px,right_-30px_top_60px] overflow-hidden font-ubuntu mb-10 xl:mb-0">
      <div className="grid grid-cols-2  h-full w-full ">
        <div className='w-full h-full grid place-content-center '>
        <div className='w-[600px]  h-[550px]   '>
          <span className='text-sm font-bold text-white opacity-60 leading-4'>Pay once and access all...</span>
          <h1 className='text-white font-semibold text-6xl leading-[80px] break-words font-fredoka'>Still Paying for Individual Courses!!!</h1>
          <ul className='flex flex-row items-center text-xl  text-white leading-6'>
            <li className='flex flex-row items-center'>Unlimited Access <span className=' inline-block w-3 h-0  border-2 border-brand border-solid rounded-full mx-3'></span></li>
            <li className='flex flex-row items-center'>Techie News <span className=' inline-block w-3 h-0  border-2 border-brand border-solid rounded-full  mx-3'></span></li>
            <li>Get Unlimited Access</li>
          </ul>
          <div className="relative mt-4  h-12 w-[470px] ">
            <input
              className="block w-full h-full px-4 py-2 text-lg text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              type="text"
              placeholder="Search for courses"
            />
            <button title='search' className="absolute top-0 right-0  w-12  h-full  font-semibold text-white bg-brand rounded-md">
              <Image src='/images/searchIcon.svg' className='mx-auto' width={20} height={20} alt='search icon' />
            </button>
          </div>
          <ul className=' mt-44 flex flex-row'>
            <li className=' w-auto h-full relative'  ><Image src={'/images/banner-tri-1.svg'} className=' ' width={140} height={140} alt='no of courses' />
            <div className='absolute top-0 w-full h-full grid place-content-center  text-white  '>
              <span className='block text-4xl font-bold mx-auto'>20+</span><span className=' text-[10px] mx-auto'>Courses</span>
            </div>
            </li>
            <li className=' mx-7  w-auto h-full relative'><Image src={'/images/banner-tri-2.svg'} width={140} height={140} alt='no of courses' />
            <div className='absolute top-0 w-full h-full grid place-content-center  text-white  '>
              <span className='block text-4xl font-bold mx-auto'>1L+</span><span className=' text-[10px] mx-auto'>Students Enrolled</span>
            </div>
            </li>
            <li className=' w-auto h-full relative'><Image src={'/images/banner-tri-3.svg'} width={140} height={140} alt='no of courses' />
            <div className='absolute top-0 w-full h-full grid place-content-center  text-white  '>
              <span className='block text-4xl font-bold mx-auto'>20+</span><span className=' text-[10px] mx-auto'>Doubt Sessions</span>
            </div>
            </li>
          </ul>
        </div>
        </div>
        <div className='grid place-items-center'>
          <Image src='/images/banner-main-img.svg' width={600} height={600} alt='banner image' />
        </div>
      </div>

    </main>

    </>
  )
}

