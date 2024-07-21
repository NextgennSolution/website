import React from 'react'
import  Title from '../Title/page';
import Link from 'next/link';

const Contact = () => {
    const links = [
        { href: 'https://www.linkedin.com/in/yourprofile', icon: 'fa-linkedin', name: "Linkedin" },
        { href: 'mailto:nextgennsolution@gmail.com', icon: 'fa-envelope-o', name: "Email" },
        { href: 'https://wa.me/919409294081', icon: 'fa-whatsapp', name: "Whatsapp" },
    ];

    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[130px] bg-[#050709] lg:py-[50px] mt-[80px]'>
            <div>
                <Title pram={{ title: 'Contact' }} />
            </div>

            <div className='flex lg:flex-row flex-col lg:items-center gap-y-[80px] lg:gap-[100px] lg:mt-[40px]'>
                <div className='flex flex-col lg:gap-[20px] gap-[30px]'>
                    <div className='flex gap-[20px] items-center'>
                        <div>
                            <span className='bg-gradient w-[45px] h-[45px] inline-block text-center text-[25px] rounded-[50px] text-white py-[5px]'>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='flex flex-col gap-y-[3px]'>
                            <p className='text-white font-sans text-[17px] font-medium'>Phone</p>
                            <Link href="./" className='text-white font-sans lg:text-[20px] text-[14px] font-bold inline-block'>+91 94092 94081</Link>
                        </div>
                    </div>

                    <div className='flex gap-[20px] items-center'>
                        <div>
                            <span className='bg-gradient w-[45px] h-[45px] inline-block text-center text-[25px] rounded-[50px] text-white py-[5px]'>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='flex flex-col gap-y-[3px]'>
                            <p className='text-white font-sans text-[17px] font-medium'>Email</p>
                            <Link href="./" className='text-white font-sans lg:text-[20px] text-[10px] font-bold inline-block'>
                               nextgennsolution@gmail.com
                            </Link>
                        </div>
                    </div>

                    {/* <div className='flex gap-[20px] items-center'>
                        <div>
                            <span className='bg-gradient w-[45px] h-[45px] inline-block text-center text-[25px] rounded-[50px] text-white py-[5px]'>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='flex flex-col gap-y-[3px]'>
                            <p className='text-white font-sans text-[17px] font-medium'>Address</p>
                            <Link href="./" className='text-white font-sans lg:text-[20px] text-[14px] font-bold inline-block max-w-[500px]'>
                                1ST FLOOR B106, SHANTINAGAR SOCIETY HIRABAUG, SURAT CITY, GUJARAT, INDIA
                            </Link>
                        </div>
                    </div> */}
                </div>

                <div className='mb-[60px]'>
                    <div>
                        <div className='flex flex-col gap-[20px]'>
                            {links.map((link, index) => (
                                <div key={index} className='flex flex-row gap-[14px] items-center'>
                                    <Link href={link.href} target="_blank" rel="noopener noreferrer"
                                        className='relative flex items-center justify-center border border-white-8c w-[35px] h-[35px] rounded-full p-2 transition duration-300 hover:bg-gradient2 hover:border-none'>
                                        <i className={`fa ${link.icon} text-white`} aria-hidden="true"></i>
                                    </Link>
                                    <p className='text-white font-sans text-[18px]'>{link.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;