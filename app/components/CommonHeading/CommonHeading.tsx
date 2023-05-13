import React from 'react'

function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(" ");
  }

function CommonHeading({classes  , topText , bottomText}: {classes: string ,topText: String , bottomText: String}) {  
  return (
    <div className={classNames(classes)}>
         <div><span className=" font-normal">{topText}</span></div>
        <div><span className="font-semibold">{bottomText}</span></div>
    </div>
  )
}

export default CommonHeading