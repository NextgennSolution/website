"use client"
import React from 'react';
import CountUp from 'react-countup';

const History = () => {
    const historyData = [
        {
          value: 7,
          suffix: '+',
          title: 'Years of',
          description: 'Experience'
        },
        {
          value: 181,
          suffix: '+',
          title: 'Project',
          description: 'Completed'
        },
        {
          value: 430,
          suffix: '+',
          title: 'Happy',
          description: 'Clients'
        }
      ];
  return (
    <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[45px] mt-[50px]'>
      <div className='flex  justify-center'>
        <div className='text-white flex  md:flex-row md:p-[27px] md:gap-[20px]  lg:flex-row flex-col lg:gap-[86px] md:bg-gradient3 bg:none lg:py-[32px] rounded-[17px] lg:px-[49px]'>
          {historyData.map((item, index) => (
            <div key={index} className='flex items-center sm:mb-[5px] gap-[14px] bg-gradient3 rounded-[15px] md:rounded-none px-[20px] py-[15px] md:p-[0px] lg:bg-none mb-[10px] md:mb-[0px]'>
              <h1 className='flex font-sans font-semibold text-[56px] md:text-[40px]'>
                <CountUp end={item.value || 0} duration={2 || 0} /> {item.suffix || 0}
              </h1>
              <p className='font-sans text-[18px]'>
                {item.title} <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
