import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

function FloatingSocialIcons() {
  return (
    <div
      aria-label="Floating Social Icons"
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-xl z-50 transition-all"
    >
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Contact"
        className="text-emerald-600 hover:text-emerald-800 p-2 rounded-full hover:bg-emerald-50 transition duration-300"
      >
        <BsWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href="https://instagram.com/yourinstagramhandle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        className="text-pink-500 hover:text-pink-700 p-2 rounded-full hover:bg-pink-50 transition duration-300"
      >
        <BsInstagram className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href="https://youtube.com/youryoutubechannel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Channel"
        className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition duration-300"
      >
        <BsYoutube className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
}

export default FloatingSocialIcons;
