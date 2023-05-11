import SmiliLogo from "../../assets/smiliLogo.svg";

const Footer = () => {
  return (
    <div className="bg-[#EFEEE7] px-16 pt-14 pb-9">
      <div className="flex justify-around mb-5">
        <div>
          <h1 className="text-3xl text-black font-medium mb-1">Solutions</h1>
          <ul>
            <li className="text-lg text-black font-light">Smili Menu connecté</li>
            <li className="text-lg text-black font-light">Smili Commande en ligne</li>
            <li className="text-lg text-black font-light">Smili réservation en ligne</li>
            <li className="text-lg text-black font-light">Smili Menu connecté +</li>
          </ul>
        </div>
        <div>
        <h1 className="text-3xl text-black font-medium mb-1">Notre réseau</h1>
          <ul>
            <li className="text-lg text-black font-light">Devenir partenaire</li>
            <li className="text-lg text-black font-light">Recrutement</li>
          </ul>
        </div>
        <div className="w-96 bg-[#66666680] py-5 px-8 rounded-lg text-white">
          <h1 className="text-3xl font-semibold">Newsletter</h1>
          <p className="my-2 leading-5">Inscrivez-vous à notre newsletter et recevez mensuellement des articles sur les bars et restaurants</p>
          <form>
            <input className="rounded bg-[#66666680] border border-gray-100" type="email" name="" id="" />
            <input className="bg-[#D9D9D9] px-2 rounded ml-2" type="button" value="S’inscrire" />
          </form>
        </div>
      </div>
      <img src={SmiliLogo} alt="smilo logo" />
    </div>
  )
}

export default Footer;