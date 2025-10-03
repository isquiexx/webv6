'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import IconButton from '@/components/ui/IconButton';
import Image from 'next/image';

interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ContactSection() {
  const [email, setEmail] = useState<string>('');

  const promotions: Promotion[] = [
    {
      id: '1',
      title: 'Скидка\nдля пенсионеров',
      description: 'Все пенсионеры получат 20% скидку\nна билет при посещении планетария',
      image: '/images/img_studio_shot_mat.png',
    },
    {
      id: '2',
      title: 'Пакет ко дню\nрождения',
      description: 'В свой день рождения посетители получат экскурсию по планетарию',
      image: '/images/img_studio_shot_mat_380x426.png',
    },
    {
      id: '3',
      title: 'Акция\n"День семьи"',
      description: 'В воскресенье семьи с двумя детьми получают карту звездного неба',
      image: '/images/img_studio_shot_mat_1.png',
    },
  ];

  const handleSubscribe = (): void => {};

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePromotionClick = (promotionId: string): void => {};

  return (
    <section className="w-full mt-[-1px] sm:mt-[-1.5px] md:mt-[-2px]">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[23px] sm:gap-[34px] md:gap-[46px] justify-start items-center w-full">
          <div className="relative w-full h-[325px] sm:h-[487px] md:h-[650px] rounded-[54px] overflow-hidden">
            <div className="absolute bottom-[25px] sm:bottom-[37px] md:bottom-[50px] left-0 w-full sm:w-[70%] md:w-[32%] h-[230px] sm:h-[345px] md:h-[460px]">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex flex-col justify-start items-center w-full h-auto bg-background-white rounded-[54px] overflow-hidden">
                  <Image
                    src="/images/img_studio_shot_mat.png"
                    alt="Contact"
                    width={426}
                    height={380}
                    className="w-full h-[190px] sm:h-[285px] md:h-[380px] object-cover"
                  />
                  <div className="flex flex-row justify-start items-center w-full mt-[-45px] sm:mt-[0px] md:mt-[-90px]">
                    <div className="flex flex-row justify-center items-center w-full bg-accent-background rounded-none sm:rounded-[41px] md:rounded-[82px_82px_54px_54px] p-[14px] sm:p-[21px] md:p-[28px]">
                      <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-start w-full">
                        <h3
                          className="text-[12px] sm:text-[16px] md:text-xl font-normal leading-[17px] sm:leading-[22px] md:leading-5xl text-left text-text-white w-auto"
                          style={{ fontFamily: '' }}
                        >
                          Скидка
                          <br />
                          для пенсионеров
                        </h3>
                        <p
                          className="text-[10px] sm:text-[13px] md:text-base font-medium leading-[13px] sm:leading-[18px] md:leading-xl text-left text-text-white w-auto"
                          style={{ fontFamily: 'Gilroy' }}
                        >
                          Все пенсионеры получат 20% скидку
                          <br />
                          на билет при посещении планетария
                        </p>
                      </div>
                      <div className="self-end mr-[3px] sm:mr-[4px] md:mr-[6px]">
                        <IconButton
                          src="/images/img_link.svg"
                          fill_background_color="bg-background-white"
                          border_border_radius="rounded-2xl"
                          padding="p-[9px] sm:p-[13px] md:p-[18px]"
                          onClick={() => handlePromotionClick('contact')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[80px] sm:bottom-[120px] md:bottom-[160px] left-0 flex flex-row justify-start items-center w-full h-auto px-[28px] sm:px-[42px] md:px-[56px]">
              <div className="flex flex-row justify-end items-center w-full pr-[78px] sm:pr-[117px] md:pr-[156px]">
                <Image
                  src="/images/img_facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                />
                <Image
                  src="/images/img_instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] ml-[12px] sm:ml-[18px] md:ml-[24px]"
                />
                <Image
                  src="/images/img_youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] ml-[12px] sm:ml-[18px] md:ml-[24px]"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-[26%]">
                <div className="flex flex-row justify-end items-center w-full px-[14px] sm:px-[21px] md:px-[28px]">
                  <Image
                    src="/images/img_objects.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                    className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px]"
                  />
                  <Image
                    src="/images/img_vector.svg"
                    alt="Contact"
                    width={24}
                    height={20}
                    className="w-[12px] h-[10px] sm:w-[18px] sm:h-[15px] md:w-[24px] md:h-[20px] ml-[6px] sm:ml-[9px] md:ml-[12px]"
                  />
                </div>
                <span
                  className="text-[10px] sm:text-[13px] md:text-base font-medium leading-[12px] sm:leading-[16px] md:leading-base text-left text-text-white w-auto"
                  style={{ fontFamily: 'Gilroy' }}
                >
                  +7 (812) 336 36 36
                </span>
              </div>
            </div>

            <div className="absolute bottom-[25px] sm:bottom-[37px] md:bottom-[50px] right-0 flex flex-col justify-start items-center w-full sm:w-[85%] md:w-[66%] h-auto ml-[2px] sm:ml-[3px] md:ml-[4px]">
              <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] w-full">
                {promotions.slice(1).map((promotion) => (
                  <div
                    key={promotion.id}
                    className="flex flex-col justify-start items-center w-full sm:w-[426px]"
                  >
                    <Image
                      src={promotion.image}
                      alt={promotion.title}
                      width={426}
                      height={380}
                      className="w-full h-[190px] sm:h-[285px] md:h-[380px] object-cover rounded-[54px]"
                    />
                    <div className="flex flex-row justify-start items-center w-full mt-[-45px] sm:mt-[-67px] md:mt-[-90px]">
                      <div className="flex flex-row justify-center items-center w-full bg-accent-background rounded-none sm:rounded-[41px] md:rounded-[82px_82px_54px_54px] p-[14px] sm:p-[21px] md:p-[28px]">
                        <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-start w-full">
                          <h3
                            className="text-[12px] sm:text-[16px] md:text-xl font-normal leading-[17px] sm:leading-[22px] md:leading-5xl text-left text-text-white w-auto"
                            style={{ fontFamily: '' }}
                          >
                            {promotion.title}
                          </h3>
                          <p
                            className="text-[10px] sm:text-[13px] md:text-base font-medium leading-[13px] sm:leading-[17px] md:leading-lg text-left text-text-white w-auto"
                            style={{ fontFamily: 'Gilroy' }}
                          >
                            {promotion.description}
                          </p>
                        </div>
                        <div className="self-end mr-[3px] sm:mr-[4px] md:mr-[6px]">
                          <IconButton
                            src="/images/img_link.svg"
                            fill_background_color="bg-background-white"
                            border_border_radius="rounded-2xl"
                            padding="p-[9px] sm:p-[13px] md:p-[18px]"
                            onClick={() => handlePromotionClick(promotion.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-[1px] sm:top-[1.5px] md:top-[2px] left-[123px] sm:left-[184px] md:left-[364px] flex flex-row justify-start items-center w-auto h-auto">
              <Image
                src="/images/img_vector_deep_purple_a700.svg"
                alt="Star Icon"
                width={60}
                height={60}
                className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]"
              />
              <h3
                className="text-[28px] sm:text-[42px] md:text-5xl font-normal leading-[39px] sm:leading-[58px] md:leading-12xl text-left text-text-white w-auto ml-[9px] sm:ml-[13px] md:ml-[18px]"
                style={{ fontFamily: '' }}
              >
                Акции и скидки
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
