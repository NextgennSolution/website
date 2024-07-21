
import React from 'react';
import  Title  from '../Title/page';
const ExperienceEducation = () => {
    const experienceData = [
        {
            date: '2022 - Present',
            title: 'LEAD DEVELOPER',
            company: 'Blockdots, London'
        },
        {
            date: '2021 - 2022',
            title: 'JUNIOR DEVELOPER',
            company: 'Tech Solutions, New York'
        },
    ];

    const educationData = [
        {
            date: '2018 - 2022',
            title: 'BACHELOR OF COMPUTER SCIENCE',
            institution: 'University of Technology, Sydney'
        },
        {
            date: '2015 - 2018',
            title: 'HIGH SCHOOL DIPLOMA',
            institution: 'City High School, London'
        },
    ];

    const renderExperienceCards = (data) => (
        data.map((item, index) => (
            <div className='Experience_card' key={index}>
                <h4>{item.date}</h4>
                <h1>{item.title}</h1>
                <p>{item.company}</p>
            </div>
        ))
    );

    const renderEducationCards = (data) => (
        data.map((item, index) => (
            <div className='Experience_card' key={index}>
                <h4>{item.date}</h4>
                <h1>{item.title}</h1>
                <p>{item.institution}</p>
            </div>
        ))
    );

    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[130px] mt-[80px]'>
           
            <div className='flex lg:flex-row flex-col md:flex-row justify-between'>
                <div className='lg:w-[45%] md:w-[45%]'>
                    <div>
                        <Title pram={{ title: 'My Experience' }} />
                    </div>
                    <div className='flex flex-col gap-[30px] '>
                        {renderExperienceCards(experienceData)}
                    </div>
                </div>
                <div className='lg:w-[45%] mt-[40px] md:w-[45%] md:mt-0 lg:mt-0'>
                    <div>
                        <Title pram={{ title: 'My Education' }} />
                    </div>
                    <div className='flex flex-col gap-[30px] '>
                        {renderEducationCards(educationData)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceEducation;