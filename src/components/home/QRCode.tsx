import QRCodeImg from "../../assets/qrcodeImg.svg";

const QRCode = () => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-16 md:px-20 lg:px-28">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8">
        <div className="pr-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-5 lg:mb-8">Un exemple de carte connecté, scan le Code QR !</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-black">Saviez vous qu’une carte connecté peut augmenter le panier moyen de vos consommateurs jusqu’à 30% ? </p>
        </div>
        <img src={QRCodeImg} alt="qr code" />
      </div>
      <div className="flex justify-center">
      <button className="bg-[#FFCA7A] py-1 px-3 text-white text-lg md:text-xl lg:text-2xl font-bold rounded-lg">Nous conctacter</button>
      </div>
    </div>
  );
};

export default QRCode;
