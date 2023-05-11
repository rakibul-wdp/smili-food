import ClientAvatar from "../../assets/clientAvatar.svg";

const testimonials = [
  {
    id: 1,
    avatar: ClientAvatar,
    review: "J’ai découvert le logiciel smili pour lla carte connecté, c’est tout simplement extra ! Je peut l’actualiser en temp réel, plus besoins de l’imprimante.",
    name: "Olivier Garcia",
    title: "Directeur "
  },
  {
    id: 2,
    avatar: ClientAvatar,
    review: "J’ai découvert le logiciel smili pour lla carte connecté, c’est tout simplement extra ! Je peut l’actualiser en temp réel, plus besoins de l’imprimante.",
    name: "Olivier Garcia",
    title: "Directeur "
  },
  {
    id: 3,
    avatar: ClientAvatar,
    review: "J’ai découvert le logiciel smili pour lla carte connecté, c’est tout simplement extra ! Je peut l’actualiser en temp réel, plus besoins de l’imprimante.",
    name: "Olivier Garcia",
    title: "Directeur "
  }
]

const Testimonial = () => {
  return (
    <div className="bg-[#FCF2E3] pt-14 pb-28">
      <div className="ml-28 md:ml-32 lg:ml-56 mb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold">Découvrez les avis de nos cleints</h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-medium mt-5 border-l-4 border-[#FFCA7A] pl-4">Essayer Smili food c’est l’adopter !</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-16 md:px-20 lg:px-28 relative">
        {
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white pt-16 pb-8 pl-24 pr-10 text-sm rounded-lg">
              <img className={`absolute top-10 left-20`} src={testimonial.avatar} alt="client avatar" />
              <p>{testimonial.review}</p>
              <p className="font-semibold my-5">{testimonial.name}</p>
              <p>{testimonial.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonial;