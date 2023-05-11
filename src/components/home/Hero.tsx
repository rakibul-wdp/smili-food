import HomeHero from "../../assets/homeHero.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-between lg:px-24 lg:pt-11 lg:mt-16">
      <div>
        <h1 className="text-5xl font-bold">Economisez du temp et de l’argent avec votre logiciel Smili food</h1>
        <p className="text-2xl text-[#072B38] mt-5 italic font-light">Simplifiez votre activité de restauration en optimisant chaque étape et concentrez-vous sur le développement de votre restaurant.</p>
      </div>
      <img src={HomeHero} alt="home hero image" />
    </div>
  )
}

export default Hero;