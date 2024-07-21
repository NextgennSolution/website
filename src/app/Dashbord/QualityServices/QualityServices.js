"use client";
import React from 'react';
import Title from '../Title/page';
import Image from 'next/image';
import appdevelopment from '../../images/app-development.png';
import game from '../../images/game.png';
import Blockchain from '../../images/Blockchain.png';
import coin from '../../images/coin.png';
import marketin from '../../images/email.png';
import ico from '../../images/ico.png';
import business from '../../images/business.png';
import cloning from '../../images/cloning.png';
import FadeIn from 'react-fade-in';

const QualityServices = () => {
  const titleData = {
    title: 'Our Affordable Services'
  };

  // Define the service data array
  const services = [
    {
      image: appdevelopment,
      title: 'Web/App Development',
      description: 'Creating user-friendly websites and apps for optimal digital experiences and functionality.'
    },
    {
      image: game,
      title: 'Game  Development',
      description: 'Transforming ideas into immersive games, delivering competitive edge in mobile gaming.'
    },
    {
      image: Blockchain,
      title: 'Blockchain Development',
      description: 'Building decentralized applications and systems using blockchain technology for secure transactions.'
    },
    {
      image: coin,
      title: 'Token & Coin Development',
      description: 'Revolutionary blockchain currency empowering global transactions with unparalleled security and efficiency.'
    },
    {
      image: marketin,
      title: 'Digital Marketing',
      description: 'Top core team professionals drive success with effective digital marketing strategy and quality SEO packages.'
    },
    {
      image: ico,
      title: 'ICO  Marketing',
      description: 'Drive ICO success with targeted marketing strategies tailored to maximize visibility and investor engagement.'
    },
    {
      image: business,
      title: 'MLM Development',
      description: 'Creating a network-based sales model involving recruitment and layered commissions system'
    },
    {
      image: cloning,
      title: 'Clone',
      description: 'Customized, pre-built project solutions for efficient development needs. Tailored services available.'
    },
  ];

  return (
    <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[80px] mt-[50px]'>
      <div>
        <Title pram={titleData} />
      </div>

      <div className='mt-[50px]'>
        <div className='flex flex-wrap gap-[30px] '>
          {services.map((service, index) => (
              <div className='service_laguages'>
                <div className='laguage_service_img'>
                  <div>
                    <Image src={service.image} className='w-[100px] m-auto mb-[20px]' width={1920} height={1080} />
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold mb-2'>{service.title}</h1>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityServices;
