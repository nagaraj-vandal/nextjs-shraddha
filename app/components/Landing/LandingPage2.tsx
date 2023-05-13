import Image from "next/image"
import CommonHeading from "../CommonHeading/CommonHeading"

function LandingPage2() {
  
  return (
    <div className="w-screen h-auto px-20 pt-20 grid grid-cols-2 place-content-center overflow-hidden mb-24">
      <div className="w-full pr-20 ">
        <div className="w-full h-[600px]  relative">
        <Image src='/images/landing-left-top.svg' fill={true}    className='w-full object-cover '    alt='banner image' />
        </div>
        <div className="pl-20 mt-20  h-auto">
          <div>
            <CommonHeading classes="heading font-fredoka leading-[58px] text-5xl  w-auto" topText="Our" bottomText="Services"  />
            <ul className="mt-12 font-ubuntu">
              <li className=" flex ">
                <div className="flex-none w-20 h-20 rounded-full bg-slate-500 opacity-50 mt-4"></div>
                  <div className="grow ml-10">
                    <div className=" mb-2 "><p className="text-xl">Course - Industry Standard Content with Quiz at the end</p></div>
                  <div><p className=" text-base text-grey">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit</p></div>
                </div>
              </li>
              <li className="flex mt-12 mb-12">
                <div className="flex-none w-20 h-20 rounded-full bg-slate-500 opacity-50 mt-4"></div>
                <div className="grow ml-10">
                  <div className=" mb-2"><p className="text-xl">Doubt Sessions - All Queries will be addressed </p></div>
                  <div><p className=" text-base text-grey">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit</p></div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none w-20 h-20 rounded-full bg-slate-500 opacity-50 mt-4"></div>
                <div className="grow ml-10">
                  <div className="mb-2"><p className="text-xl">Soft Skills - Communication Skills, Leadership Qualities</p></div>
                  <div><p className="text-base  text-grey">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit</p></div>
                </div>
              </li>
            </ul>
          </div>
        
        </div>  
      </div>
      <div className="w-full h-screen pl-18  ">
        <div className=" mt-24 ">
          <CommonHeading classes="heading font-fredoka leading-[58px] text-5xl  w-auto  leading-[58px] pl-24" topText="Quick" bottomText="Intro"  />
          <p className="text-grey text-xl font-normal leading-7 font-ubuntu mt-8  mb-24  pl-24">
          Quick Intro about what we do. Quick Intro about what we do. Quick Intro about what we do. Quick Intro about what we do. Quick Intro about what we do. Quick Intro about what we do.
          </p>
          <div className="w-full lg:h-[900px]  relative ">
        <Image src='/images/landing-right-bottom.svg' fill={true}    className='w-full object-cover '    alt='banner image' />
        </div>
        </div>
        </div>  
    </div>
  )
}

export default LandingPage2


