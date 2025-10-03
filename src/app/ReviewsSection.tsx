'use client';
import Image from 'next/image';

export default function ReviewsSection() {
  const handlePrevious = (): void => {};

  const handleNext = (): void => {};

  return (
    <section className="w-full mt-[47px] sm:mt-[70px] md:mt-[94px]">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-end items-center w-full">
          <h2
            className="text-[28px] sm:text-[42px] md:text-5xl font-normal leading-[26px] sm:leading-[39px] md:leading-9xl text-left text-text-white w-auto"
            style={{ fontFamily: 'Benzin-Bold' }}
          >
            Отзывы и отметки
          </h2>
          <div className="flex flex-row justify-end items-center self-end w-auto">
            <button
              onClick={handlePrevious}
              className="w-[13px] h-[13px] sm:w-[19px] sm:h-[19px] md:w-[26px] md:h-[26px] transition-opacity hover:opacity-80"
              aria-label="Previous reviews"
            >
              <Image
                src="/images/img_buttonleft.svg"
                alt="Previous"
                width={26}
                height={26}
                className="w-full h-full"
              />
            </button>
            <button
              onClick={handleNext}
              className="w-[13px] h-[13px] sm:w-[19px] sm:h-[19px] md:w-[26px] md:h-[26px] ml-[15px] sm:ml-[22px] md:ml-[30px] transition-opacity hover:opacity-80"
              aria-label="Next reviews"
            >
              <Image
                src="/images/img_buttonright.svg"
                alt="Next"
                width={26}
                height={26}
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
