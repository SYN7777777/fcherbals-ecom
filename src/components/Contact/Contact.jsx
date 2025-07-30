import { MailIcon, PhoneIcon, MapIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b  from-emerald-50 via-white to-amber-50 py-20 sm:py-32 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-center text-emerald-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question about our products, pricing, or anything else — our team is ready to help.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-start gap-4">
              <MapIcon className="w-6 h-6 text-emerald-700" />
              <div>
                <h4 className="font-semibold text-[#4d2600]">Address</h4>
                <p className="text-gray-700">
                  Pandian Saraswathi Yadav Engineering College, <br />
                  Arasanoor, Thirumansolai Post, <br />
                  Sivaganga Dist., Tamil Nadu – 630 561
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon className="w-6 h-6 text-emerald-700" />
              <div>
                <h4 className="font-semibold text-[#4d2600]">Phone</h4>
                <a href="tel:+918524978353" className="text-gray-700 hover:text-emerald-800 transition">
                  +91 85249 78353
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MailIcon className="w-6 h-6 text-emerald-700" />
              <div>
                <h4 className="font-semibold text-[#4d2600]">Email</h4>
                <a href="mailto:fcagroproducts2003@gmail.com" className="text-gray-700 hover:text-emerald-800 transition">
                  fcagroproducts2003@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Optional Form Placeholder */}
          <div className="flex-1">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-emerald-900 mb-4">Send us a message</h4>
              <p className="text-sm text-gray-600">We're working on enabling the form soon. For now, reach us by phone or email.</p>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Map to FC Herbal Products"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d631066.3583982413!2d78.16857293386712!3d9.853022979216274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b00e3c7e3e0383d%3A0x445edc3fd34d11e!2sMadurai%2C%20Tamil%20Nadu!3m2!1d9.9252007!2d78.1197754!4m5!1s0x3b00e64ea5bcecb5%3A0x6dc80cdd8703d3c3!2sArasanoor%2C%20Thirumansolai%20Post%2C%20Sivaganga%20Dist.%2C%20Sivaganga%2C%20Tamil%20Nadu%20630561!3m2!1d9.8489834!2d78.3457361!5e0!3m2!1sen!2sin!4v1722240177485!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
