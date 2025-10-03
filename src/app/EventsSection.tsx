'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Image from 'next/image';

interface Event {
  id: string;
  category: string;
  title: string;
  description: string;
  ageRating: string;
  adultPrice: string;
  childPrice: string;
  image: string;
}

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('programs');

  const events: Event[] = [
    {
      id: '1',
      category: 'programs',
      title: 'ПРОГУЛКА\nПО ЗВЕЗДНОМУ\nНЕБУ',
      description:
        'Мы предлагаем вам прогуляться по самым ярким созвездиям северного полушария, насладиться петербургским звездным небом всех сезонов, полюбоваться Млечным Путем и, конечно, загадать заветное желание на "падающую" звезду',
      ageRating: '7+',
      adultPrice: '400 ₽',
      childPrice: '600 ₽',
      image: '/images/img_firefly_space_in.png',
    },
    {
      id: '2',
      category: 'programs',
      title: 'ПУТЕШЕСТВИЕ\nПО СОЛНЕЧНОЙ\nСИСТЕМЕ',
      description:
        'Программа для самых юных посетителей, где можно весело и увлекательно совершить экспедицию на космическом корабле к удивительным планетам. Узнаем какая из планет самая большая, а какая ближе всего находится к Солнцу.',
      ageRating: '4+',
      adultPrice: '400 ₽',
      childPrice: '600 ₽',
      image: '/images/img_firefly_space_in_158x312.png',
    },
    {
      id: '3',
      category: 'programs',
      title: 'ТЕМНАЯ\nАСТРОНОМИЯ',
      description:
        'До появления науки как таковой, мы обращались к мифам. На программе «Мифы и легенды звёздного неба» мы узнаем, как люди древности использовали мифологическое мышление в попытках понять, каково место человека во Вселенной...',
      ageRating: '10+',
      adultPrice: '400 ₽',
      childPrice: '600 ₽',
      image: '/images/img_firefly_space_in_1.png',
    },
  ];

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleBuyTicket = (eventId: string): void => {};

  const handleShowMore = (): void => {};

  return (
    <section className="w-full mt-[72px] sm:mt-[108px] md:mt-[144px]">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] justify-start items-center w-full">
          <div className="flex flex-col gap-[23px] sm:gap-[34px] md:gap-[46px] justify-start items-center w-full">
            <div className="flex flex-row gap-[15px] sm:gap-[22px] md:gap-[30px] justify-center items-start w-auto">
              <Image
                src="/images/img_vector_deep_purple_a700.svg"
                alt="Star Icon"
                width={70}
                height={70}
                className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] md:w-[70px] md:h-[70px] mt-[2px] sm:mt-[3px] md:mt-[4px]"
              />
              <h2
                className="text-[28px] sm:text-[42px] md:text-5xl font-normal leading-[39px] sm:leading-[58px] md:leading-12xl text-center text-text-white w-auto self-center"
                style={{ fontFamily: 'Benzin-Bold' }}
              >
                События
              </h2>
              <Image
                src="/images/img_vector_deep_purple_a700.svg"
                alt="Star Icon"
                width={70}
                height={70}
                className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] md:w-[70px] md:h-[70px] mt-[2px] sm:mt-[3px] md:mt-[4px]"
              />
            </div>

            <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] justify-start items-center w-full">
              <div className="flex flex-row gap-[5px] sm:gap-[7px] md:gap-[10px] justify-center items-center w-full sm:w-[50%] md:w-[38%]">
                <Button
                  text="Программы"
                  text_font_size="text-base"
                  text_font_family="Gilroy"
                  text_font_weight="font-medium"
                  text_line_height="leading-lg"
                  text_color="text-text-white"
                  fill_background_color={
                    selectedCategory === 'programs' ? 'bg-accent-background' : 'bg-transparent'
                  }
                  border_border_radius="rounded-lg"
                  border_border={
                    selectedCategory !== 'programs' ? '1px solid #ffffff4c' : undefined
                  }
                  padding="py-[10px] px-[17px] sm:px-[25px] md:px-[34px]"
                  layout_width="w-full"
                  onClick={() => handleCategoryChange('programs')}
                />
                <Button
                  text="Мероприятия"
                  text_font_size="text-base"
                  text_font_family="Gilroy"
                  text_font_weight="font-medium"
                  text_line_height="leading-lg"
                  text_color="text-text-white"
                  fill_background_color={
                    selectedCategory === 'events' ? 'bg-accent-background' : 'bg-transparent'
                  }
                  border_border_radius="rounded-lg"
                  border_border={selectedCategory !== 'events' ? '1px solid #ffffff4c' : undefined}
                  padding="py-[10px] px-[17px] sm:px-[25px] md:px-[34px]"
                  layout_width="w-full"
                  onClick={() => handleCategoryChange('events')}
                />
                <Button
                  text="Лекции"
                  text_font_size="text-base"
                  text_font_family="Gilroy"
                  text_font_weight="font-medium"
                  text_line_height="leading-lg"
                  text_color="text-text-white"
                  fill_background_color={
                    selectedCategory === 'lectures' ? 'bg-accent-background' : 'bg-transparent'
                  }
                  border_border_radius="rounded-lg"
                  border_border={
                    selectedCategory !== 'lectures' ? '1px solid #ffffff4c' : undefined
                  }
                  padding="py-[10px] px-[17px] sm:px-[25px] md:px-[34px]"
                  layout_width="w-auto"
                  onClick={() => handleCategoryChange('lectures')}
                />
              </div>

              <div className="flex flex-col gap-[15px] sm:gap-[22px] md:gap-[30px] w-full">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col lg:flex-row justify-start items-center w-full py-[5px] sm:py-[7px] md:py-[10px]"
                  >
                    <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-[21px] sm:gap-[31px] md:gap-[42px]">
                      <div className="relative w-full lg:w-[312px] h-[158px] rounded-[54px] overflow-hidden">
                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                        <div className="absolute top-[1px] right-[1px] bg-background-white rounded-[14px] px-2 py-1">
                          <span
                            className="text-xs font-medium text-text-secondary"
                            style={{ fontFamily: 'Gilroy', lineHeight: '15px' }}
                          >
                            {event.ageRating}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[14px] sm:gap-[21px] md:gap-[28px] justify-start items-start w-full lg:w-[328px]">
                        <span
                          className="text-xs font-medium leading-xs text-left text-text-white w-auto"
                          style={{ fontFamily: 'Gilroy' }}
                        >
                          ПОЛНОКУПОЛЬНАЯ ПРОГРАММА
                        </span>
                        <h3
                          className="text-[16px] sm:text-[18px] md:text-xl font-normal leading-[21px] sm:leading-[24px] md:leading-5xl text-left text-text-white w-auto"
                          style={{ fontFamily: 'Benzin-Bold' }}
                        >
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[13px] sm:gap-[19px] md:gap-[26px] justify-start items-center w-full mt-4 lg:mt-0">
                      <p
                        className="text-base font-medium leading-xl text-left text-text-white w-full"
                        style={{ fontFamily: 'Gilroy' }}
                      >
                        {event.description}
                      </p>
                      <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-4">
                        <div className="flex flex-col sm:flex-row justify-center items-center w-full lg:w-[42%] gap-2">
                          <div className="flex flex-row justify-center items-center w-auto gap-2">
                            <Image
                              src="/images/img_frame_71.svg"
                              alt="Adult Price"
                              width={24}
                              height={24}
                              className="w-[24px] h-[24px] self-end"
                            />
                            <span
                              className="text-[16px] sm:text-[19px] md:text-2xl font-normal leading-[20px] sm:leading-[23px] md:leading-4xl text-left text-text-white w-auto ml-[10px]"
                              style={{ fontFamily: 'Gilroy' }}
                            >
                              {event.adultPrice}
                            </span>
                          </div>
                          <div className="flex flex-row gap-[10px] justify-center items-center w-auto px-[10px] sm:px-[15px] md:px-[20px]">
                            <Image
                              src="/images/img_frame_73.svg"
                              alt="Child Price"
                              width={24}
                              height={24}
                              className="w-[24px] h-[24px] self-end"
                            />
                            <span
                              className="text-[16px] sm:text-[19px] md:text-2xl font-normal leading-[20px] sm:leading-[23px] md:leading-4xl text-left text-text-white w-auto"
                              style={{ fontFamily: 'Gilroy' }}
                            >
                              {event.childPrice}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center self-center w-full lg:w-auto gap-2">
                          <Dropdown
                            placeholder="Выбрать дату"
                            text_font_size="text-sm"
                            text_font_family="Gilroy"
                            text_font_weight="font-medium"
                            text_line_height="leading-sm"
                            text_color="text-text-white-muted"
                            border_border="1px solid #ffffff66"
                            border_border_radius="rounded-lg"
                            layout_gap="gap-[18px] sm:gap-[27px] md:gap-[36px]"
                            layout_width="w-full sm:w-[48%]"
                            padding="py-[12px] px-[14px] sm:px-[21px] md:px-[28px] pr-[20px]"
                          />
                          <Button
                            text="Купить билет"
                            text_font_size="text-xs"
                            text_font_family="Benzin-Bold"
                            text_font_weight="font-normal"
                            text_line_height="leading-sm"
                            text_color="text-text-white"
                            fill_background_color="bg-accent-background"
                            border_border_radius="rounded-md"
                            padding="py-[10px] px-[13px] sm:px-[19px] md:px-[26px]"
                            layout_width="w-auto"
                            margin="ml-[5px] sm:ml-[7px] md:ml-[10px]"
                            onClick={() => handleBuyTicket(event.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            text="Показать еще"
            text_font_size="text-base"
            text_font_family="Benzin-Bold"
            text_font_weight="font-normal"
            text_line_height="leading-2xl"
            text_color="text-text-primary"
            fill_background_color="bg-background-white"
            border_border_radius="rounded-xl"
            padding="py-[12px] px-[17px] sm:px-[25px] md:px-[34px]"
            layout_width="w-full"
            onClick={handleShowMore}
          />
        </div>
      </div>
    </section>
  );
}
