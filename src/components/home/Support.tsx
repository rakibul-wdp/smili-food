import SupportImg from "../../assets/supportImg.png";

const supports = [
  {
    id: 1,
    title: "6j/7",
    description: "À l'écoute de vos besoins",
  },
  {
    id: 2,
    title: "96%",
    description: "Nos clients satisfaits",
  },
  {
    id: 3,
    title: "15 min",
    description: "Temp de réponse en moynne",
  },
];

const Support = () => {
  return (
    <div className="px-16 md:px-24 lg:pl-44 pt-16 md:pt-28 mb-14 md:mb-16 lg:mb-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold border-l-4 border-[#FFCA7A] pl-5 mb-6">
        Une assistance de qualité <br /> supérieure.
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-black font-medium">
        Nos clients ont confiance en notre fiabilité au quotidien !
      </p>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 md:mt-7 lg:mt-3">
        <div className="mt-5 md:mt-10 lg:mt-0">
          <div className="grid grid-cols-3 gap-5 lg:gap-10 text-center mb-16">
            {supports.map((support) => (
              <div key={support.id}>
                <h1 className="text-xl md:text-3xl lg:text-4xl text-[#FFCA7ACC] font-bold">
                  {support.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-black font-medium">
                  {support.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-black mb-5">Vous avez des questions ?</p>
          <button className="bg-[#3B3E3A] text-white py-1 px-3 rounded-lg">
            Nous conctacter
          </button>
        </div>
        <img src={SupportImg} alt="support image" />
      </div>
    </div>
  );
};

export default Support;
