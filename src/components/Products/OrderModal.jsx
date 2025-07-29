import { X } from "lucide-react";
import { useState } from "react";

function OrderModal({ isOpen, onClose, product }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handleSendOrder = (e) => {
    e.preventDefault();

    const phoneNumber = "8524978353";
    const message = `
Hello, I'd like to order:
*Product:* ${product.name} (${product.volume}) - ₹${product.price.toLocaleString("en-IN")}
*Name:* ${name}
*Phone Number:* ${phone}
*Delivery Address:* ${address}

Please confirm my order. Thank you!
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setName("");
    setPhone("");
    setAddress("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 font-playfair-display">
            Order "{product.name}"
          </h2>

          <form onSubmit={handleSendOrder} className="space-y-5 text-sm">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1 font-inter">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-inter"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1 font-inter">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-inter"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-1 font-inter">
                Delivery Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-inter resize-y"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:from-lime-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 font-inter text-base sm:text-lg"
            >
              Send Order via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
