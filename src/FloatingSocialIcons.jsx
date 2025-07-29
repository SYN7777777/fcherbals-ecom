import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

 function FloatingSocialIcons() {
  return (
    <div
      aria-label="Floating Social Icons"
      className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-50"
      style={{ minWidth: "50px" }}
    >
      <a
        href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Contact"
        className="text-emerald-600 hover:text-emerald-800 transition-colors duration-300"
      >
        <BsWhatsapp size={32} />
      </a>
      <a
        href="https://instagram.com/yourinstagramhandle" // Replace with your Instagram profile URL
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
      >
        <BsInstagram size={32} />
      </a>
      <a
        href="https://youtube.com/youryoutubechannel" // Replace with your YouTube channel URL
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Channel"
        className="text-red-600 hover:text-red-800 transition-colors duration-300"
      >
        <BsYoutube size={32} />
      </a>
    </div>
  );
}
export default FloatingSocialIcons