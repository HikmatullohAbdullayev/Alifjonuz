import React from 'react';
import footerData from '../../data/footer'; // Import qiling

function Footer() {
  return (
    <footer className="bg-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-[20px] ">
          {/* Kompaniya haqida qisqacha ma'lumot */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 mx-auto">
            <h2 className="text-xl font-semibold text-primary mb-2">Zamaxshariy Edu</h2>
            <p className="text-gray-700">Zamaxshariy Edu - Arab tili o'rganish uchun onlayn ta'lim platformasi.</p>
          </div>
          {/* Aloqa ma'lumotlari */}
          <div className="w-full mx-auto flex flex-col gap-4 sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className='"text-xl font-semibold text-primary mb-2'>Biz bilan bog'lanish </h3>
            <a href="https://t.me/zamaxshariyEduuz" className="text-blue-600 hover:underline">Telegram</a>
            <a href="tel:+998935671121" className="text-gray-700">Telefon: +998 93 567 11 21</a>
            <a href="mailto:hikmatullohabdullayev2@gmail.com" className="text-gray-700">Email: hikmatullohabdullayev2@gmail.com</a>
          </div>
          {/* Tezkor havolalar */}
          <div className="w-full mx-auto  sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-semibold text-primary mb-2">Tezkor havolalar</h2>
            <ul className="space-y-2">
              {footerData.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="text-gray-700 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mualliflik huquqi ma'lumotlari */}
        <div className="text-center text-gray-700 mt-6">
          &copy; 2024 Zamaxshariy Edu. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
