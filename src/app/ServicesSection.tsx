'use client';
import IconButton from '@/components/ui/IconButton';
import Image from 'next/image';

export default function ServicesSection() {
  const handleServiceClick = (service: string): void => {};

  return (
    <section className="w-full mt-[14px]">
      <div
        className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ padding: 'unsetz' }}
      >
        <div className="flex flex-col lg:flex-row gap-[14px] justify-start items-center w-full">
          <div className="flex flex-col gap-[14px] justify-start items-center w-full lg:w-[32%]">
            <div className="flex flex-row justify-between items-center w-full bg-background-white rounded-[54px] p-[20px] sm:p-[30px] md:p-[40px]">
              <div className="flex flex-col gap-[10px] justify-start items-center w-[62%]">
                <h3
                  className="text-[24px] sm:text-[32px] md:text-4xl font-normal leading-[22px] sm:leading-[30px] md:leading-8xl text-left text-text-secondary w-auto"
                  style={{ fontFamily: 'Benzin-Bold' }}
                >
                  для
                  <br />
                  парочек
                </h3>
                <p
                  className="text-[16px] sm:text-[19px] md:text-2xl font-normal leading-[20px] sm:leading-[23px] md:leading-3xl text-left text-text-secondary w-full mb-[31px] sm:mb-[46px] md:mb-[62px]"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  ночи наблюдения за звездами
                </p>
              </div>
              <div className="self-end">
                <IconButton
                  src="/images/img_frame_136.svg"
                  fill_background_color="bg-accent-background"
                  border_border_radius="rounded-2xl"
                  iconSize="w-4 h-4"
                  onClick={() => handleServiceClick('couples')}
                />
              </div>
            </div>

            <div className="flex flex-row justify-center items-start w-full bg-accent-background rounded-[54px] p-[11px] sm:p-[16px] md:p-[22px]">
              <div className="flex flex-col justify-start items-start w-full mb-[16px] ml-[8px] sm:ml-[12px] md:ml-[16px]">
                <h3
                  className="text-[24px] sm:text-[32px] md:text-4xl font-normal leading-[28px] sm:leading-[42px] md:leading-10xl text-center text-text-white w-auto"
                  style={{ fontFamily: 'Benzin-Bold' }}
                >
                  20%
                </h3>
                <p
                  className="text-[16px] sm:text-[19px] md:text-2xl font-normal leading-[20px] sm:leading-[23px] md:leading-3xl text-left text-text-white w-auto mb-[9px] sm:mb-[13px] md:mb-[18px]"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  скидка пенсионерам
                </p>
              </div>
              <div className="flex flex-col justify-start items-end self-end w-auto mb-[8px] sm:mb-[12px] md:mb-[16px]">
                <IconButton
                  src="/images/img_link.svg"
                  fill_background_color="bg-background-white"
                  border_border_radius="rounded-xl"
                  iconSize="w-4 h-4"
                  onClick={() => handleServiceClick('discount')}
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] justify-center items-center w-full lg:w-[68%] h-auto bg-cover bg-center rounded-[54px] p-[38px] sm:p-[56px]"
            style={{ backgroundImage: 'url(/images/img_.png)' }}
          >
            <div className="flex flex-row gap-[14px] justify-center items-center w-full sm:w-[50%] md:w-[34%]">
              <Image
                src="/images/img_group_2.svg"
                alt="Celestia Icon"
                width={74}
                height={70}
                className="w-[37px] h-[35px] sm:w-[55px] sm:h-[52px] md:w-[74px] md:h-[70px]"
              />
              <h3
                className="text-[18px] sm:text-[21px] md:text-3xl font-normal leading-[25px] sm:leading-[29px] md:leading-6xl text-left text-text-white w-auto"
                style={{ fontFamily: 'Benzin-Bold' }}
              >
                ОНЛАЙН-
                <br />
                ПРОГУЛКА
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[15px] md:gap-[20px] justify-center items-start w-full sm:w-[85%] md:w-[70%]">
              <div className="flex flex-col justify-center items-center w-full sm:w-auto h-auto bg-background-white rounded-[37px] sm:rounded-[55px] md:rounded-[74px] p-[22px] sm:p-[33px] md:p-[44px]">
                <span
                  className="text-[18px] sm:text-[21px] md:text-3xl font-normal leading-[26px] sm:leading-[30px] md:leading-7xl text-center text-text-secondary w-auto"
                  style={{ fontFamily: 'Benzin-Bold' }}
                >
                  &gt;50
                </span>
                <span
                  className="text-[12px] sm:text-[14px] md:text-base font-medium leading-[14px] sm:leading-[16px] md:leading-base text-center text-text-secondary w-auto"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  залов
                </span>
              </div>

              <div className="flex flex-col gap-[1px] sm:gap-[1.5px] md:gap-[2px] justify-center items-center self-center w-full sm:w-auto h-auto bg-accent-background rounded-[55px] sm:rounded-[82px] md:rounded-full p-[32px] sm:p-[48px] md:p-[64px]">
                <span
                  className="text-[18px] sm:text-[21px] md:text-3xl font-normal leading-[26px] sm:leading-[30px] md:leading-7xl text-left text-text-white w-auto"
                  style={{ fontFamily: 'Benzin-Bold' }}
                >
                  &gt;100
                </span>
                <span
                  className="text-[12px] sm:text-[14px] md:text-base font-medium leading-[16px] sm:leading-[19px] md:leading-xl text-center text-text-white w-auto"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  программ про
                  <br />
                  Вселенную
                </span>
              </div>

              <div className="flex flex-col justify-center items-center w-full sm:w-auto h-auto bg-background-white rounded-[37px] sm:rounded-[55px] md:rounded-[74px] p-[22px] sm:p-[33px] md:p-[44px]">
                <span
                  className="text-[18px] sm:text-[21px] md:text-3xl font-normal leading-[26px] sm:leading-[30px] md:leading-7xl text-center text-text-secondary w-auto"
                  style={{ fontFamily: 'Benzin-Bold' }}
                >
                  &gt;20
                </span>
                <span
                  className="text-[12px] sm:text-[14px] md:text-base font-medium leading-[14px] sm:leading-[16px] md:leading-base text-center text-text-secondary w-auto"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  телескопов
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
