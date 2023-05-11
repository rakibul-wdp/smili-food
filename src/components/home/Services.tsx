const services = [
  {
    id: 1,
    title: "Gagnez des clients",
    description: "Convertissez les clients en ligne avec notre réservation en ligne et offrez une expérience de commande fluide sur place avec nos solutions."
  },
  {
    id: 2,
    title: "Gagnez du temp",
    description: "Simplifiez votre quotidien grâce à notre série de fonctionnalités conçues pour améliorer l'expérience client et celle de votre équipe."
  },
  {
    id: 3,
    title: "Augmentez votre CA",
    description: "Maximisez votre panier chiffre d’affaireen  créant des parcours de commande optimisés avec Smili food."
  }
]

const Services = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-black text-center pt-10 lg:px-24">Smili food un outil tout-en-un pour développer votre activité grâce à Internet</h1>
      <div className="grid grid-cols-3 gap-14 mt-24 px-14">
        {
          services.map((service) => (
            <div key={service.id} className={`${service.id === 1 && "bg-[#FFF9E9]"} ${service.id === 2 && "bg-[#FFE7C3]"} ${service.id === 3 && "bg-[#FFCA7A]"} text-center pt-20 px-8 pb-5 rounded-lg`}>
              <h2 className={`${service.id === 1 && "text-[#CF8A28]"} ${service.id === 2 && "text-[#CC7A00]"} ${service.id === 3 && "text-[#864F00]"} text-4xl font-extrabold mb-8`}>{service.title}</h2>
              <p className="text-black text-xl font-light">{service.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services;