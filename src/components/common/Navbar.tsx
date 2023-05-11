import SmiliLogo from "../../assets/smiliLogo.svg";

const Navbar = () => {
  return (
    <div className="lg:px-24 lg:pt-11">
      <div className="flex items-center justify-between">
        <img src={SmiliLogo} alt="smili food logo" />
        <div>
          <ul className="flex items-center text-3xl font-medium">
            <li>Solutions</li>
            <li className="ml-10">Contact</li>
            <li className="ml-10">Blog</li>
            <li className="ml-10"><button className="bg-[#3B3E3A] rounded-lg text-white px-12 py-5">Connexion</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;