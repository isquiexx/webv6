'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background-primary">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between py-4 md:py-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 mr-8">
              <Image
                src="/images/img_group_2.svg"
                alt="Celestia Logo"
                width={36}
                height={36}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
              />
              <span
                className="text-xl sm:text-2xl font-normal text-text-white whitespace-nowrap"
                style={{ fontFamily: 'Benzin-Bold' }}
              >
                Celestia
              </span>
            </a>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 mx-8">
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              События
            </a>
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              Отзывы
            </a>
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-base font-normal text-text-white hover:text-accent-text transition-colors whitespace-nowrap"
            >
              Контакты
            </a>
          </nav>

          {/* Contact & CTA Section - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Number */}
            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-6">
              <a href="#" className="flex items-center justify-center w-5 h-5">
                <Image
                  src="/images/img_objects.svg"
                  alt="Social Link"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>
              <a href="#" className="flex items-center justify-center w-6 h-5">
                <Image
                  src="/images/img_vector.svg"
                  alt="Social Link"
                  width={24}
                  height={20}
                  className="w-full h-full"
                />
              </a>
            </div>

            <span
              className="text-lg font-bold text-text-white whitespace-nowrap"
              style={{ fontFamily: 'Gilroy', lineHeight: '22px' }}
            >
              (812) 336-36-36
            </span>

            {/* CTA Button */}
            <Button
              text="Купить билет"
              className="px-6 py-3 ml-4 whitespace-nowrap"
              onClick={() => console.log('Buy ticket clicked')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
