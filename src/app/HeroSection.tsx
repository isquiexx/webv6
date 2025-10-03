'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  const handleLearnMore = (): void => {};

  return (
    <section className="w-full bg-background-white rounded-[54px] px-[19px] sm:px-[28px] md:px-[38px] mt-[20px] sm:mt-[28px] md:mt-[36px]">
      <div className="w-full max-w-[1340px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-end w-full pt-[20px] sm:pt-[30px] md:pt-[40px]">
          <div className="flex flex-col gap-[22px] sm:gap-[33px] md:gap-[44px] justify-start items-center w-full">
            <div className="flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-start w-full">
              <h1
                className="text-[32px] sm:text-[48px] md:text-[64px] font-normal text-text-secondary leading-[30px] sm:text-[45px] md:leading-[60px] text-left w-auto"
                style={{ fontFamily: 'Benzin-Bold' }}
              >
                <span className="text-text-secondary">Раскройте тайны звезд</span>
                <br />
                <span className="text-text-secondary">с помощью </span>
                <span className="text-accent-text">Celestia</span>
              </h1>
              <p
                className="text-[14px] sm:text-[15px] md:text-base font-medium leading-[18px] sm:leading-[20px] md:leading-[22px] text-left text-text-secondary w-full sm:w-[70%] md:w-[52%]"
                style={{ fontFamily: 'Gilroy' }}
              >
                Мы проводим специальные мероприятия, такие как ночи наблюдения за звездами, лекции и
                многое другое
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[20px] lg:gap-0">
              <div className="mt-[14px] sm:mt-[21px] md:mt-[28px]">
                <Button
                  text="Подробнее"
                  text_font_size="text-[16px] sm:text-[18px] md:text-xl"
                  text_font_family=""
                  text_font_weight="font-normal"
                  text_line_height="leading-[22px] sm:leading-[25px] md:leading-5xl"
                  text_color="text-text-white"
                  fill_background_color="bg-accent-background"
                  border_border_radius="rounded-[34px]"
                  padding="py-[15px] px-[25px] sm:py-[18px] sm:px-[30px] md:py-[20px] md:px-[34px]"
                  onClick={handleLearnMore}
                />
              </div>
              <div className="flex justify-center items-center w-full lg:w-[64%] self-center">
                <Image
                  src="/images/img_group_40.svg"
                  alt="Celestia Illustration"
                  width={808}
                  height={220}
                  className="w-full h-auto max-w-[400px] sm:max-w-[600px] md:max-w-[808px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
