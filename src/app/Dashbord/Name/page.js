import Link from 'next/link';
import Image from 'next/image';
import profile from '../../images/logoonly.png';
const links = [
    { href: 'https://www.linkedin.com/in/yourprofile', icon: 'fa-linkedin' },
    // { href: 'https://github.com/manthan3319/backend_new_demo.git', icon: 'fa-github' },
    { href: 'https://wa.me/919409294081', icon: 'fa-whatsapp' },
    { href: 'mailto:nextgennsolution@gmail.com', icon: 'fa-envelope-o' }, // Fix the mailto link
];


const YourComponent = () => {
    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[45px] md:mt-[40px]'>
            <div className='flex lg:flex-row md:flex-row flex-col-reverse text-white items-center'>
                <div className='lg:w-[50%] md:w-[50%]'>
                    <p className='lg:text-[30px] text-[20px] mb-[15px] font-semibold text-white font-sans'>BEST IT SOLUTION PROVIDER</p>
                    <h1 className='lg:text-[52px] text-[33px] lg:leading-[65px] mb-[20px] font-sans font-bold gradient-text'>
                        Advanced Innovative IT Solutions.
                    </h1>
                    <p className='text-white-8c font-sans lg:text-[18px] text-[14px] mb-[35px]'>
                        We run all kinds of IT services that vowsuccess
                    </p>

                    <div className="flex items-center space-x-2 gap-[17px]">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer"
                                className='relative flex items-center justify-center border border-white-8c w-[35px] h-[35px] rounded-full p-2 transition duration-300 hover:bg-gradient2 hover:border-none'>
                                <i className={`fa ${link.icon} text-white`} aria-hidden="true"></i>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='lg:w-[50%] md:w-[50%]'>
                    <div className='floating'>
                        <Image src={profile} alt='Profile Image' className='m-auto  w-[70%] rounded-[50px] mb-[40px] sm:mb-0' width={1920} height={1080} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
