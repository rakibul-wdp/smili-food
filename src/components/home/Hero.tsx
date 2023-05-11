import HomeHero from "../../assets/homeHero.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-16 pt-5 mt-8 md:mt-10 md:px-20 md:pt-8 lg:px-24 lg:pt-11 lg:mt-16">
      <div className="lg:mr-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Economisez du temp et de l’argent avec votre logiciel Smili food</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#072B38] mt-5 italic font-light">Simplifiez votre activité de restauration en optimisant chaque étape et concentrez-vous sur le développement de votre restaurant.</p>
      </div>
      <img src={HomeHero} alt="home hero image" />
    </div>
  )
}

export default Hero;