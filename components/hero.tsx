import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-[68px]">
        <h1 className="text-[60px] font-medium -tracking-[4px] mt-[134px]">The social layer for student life.</h1>
        <div>
            <Image src="/assets/iphone_mockup.png" alt="phone" width={650} height={884}/>
        </div>
    </div>
  )
}

export default Hero