import React from 'react'
import Title from '../Title/page';
import Image from 'next/image';
import appdevelopment from '../../images/operation-system.png';
import support from '../../images/24-hours.png';
import quality from '../../images/quality-assurance.png';


// Define the service data array
const services = [
    {
        image: appdevelopment,
        title: 'Operational Excellence.',
        description: 'Operational excellence is a mindset that embraces certain principles and tools to create a culture of excellence within an organization. Operational excellence means every employee can see, deliver and improve the flow of value to a customer.'
    },
    {
        image: support,
        title: '24/7 Support',
        description: '24/7 support, also known as 24/7 tech support or round-the-clock customer service describes a customer service that is dedicated to providing support every day of the year at any time.'
    },
    {
        image: quality,
        title: 'Quality Services',
        description: 'Service quality is a measure of how an organization delivers its services compared to the expectations of its customers. This can be broken into six components: reliability, tangibility, empathy, responsiveness, assurance and non-core services.'
    },
];
const SkillsinProgress = () => {
    const titleData = {
        title: 'Why Choose Us',
    };

    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[80px] mt-[50px]'>
            <div>
                <Title pram={titleData} />
            </div>

            <div className='mt-[50px]'>
                <div className='flex flex-wrap gap-[30px] justify-center items-center'>
                    {services.map((service, index) => (
                        <div className='service_laguages'  key={index}>
                            <div className='laguage_service_img2'>
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
    )
}


export default SkillsinProgress;