"use client"
import React from 'react';
import Title  from '../Title/page';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import cune from '../../images/cun.png';
import FadeIn from 'react-fade-in';

const worksData = [
    { id: 1, category: 'Reactjs', image: cune, projectname:"Usd" },
    { id: 2, category: 'Reactjs', image: cune, projectname:"Usd" },
    { id: 3, category: 'Angular', image: cune, projectname:"Usd" },
    { id: 4, category: 'Nextjs', image: cune, projectname:"Usd" },
    { id: 5, category: 'Nodejs', image: cune, projectname:"Usd" },
];

const RecentWorks = () => {
    const titleData = {
        title: 'My Recent Works',
        description: 'We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.'
    };

    const renderWorks = (category) => {
        return worksData.filter(work => category === 'All' || work.category === category).map(work => (
            <div key={work.id} className='recent_work'>
                <div className='recent_work_image'>
                    <Image src={work.image} alt="img" width={100} height={100} />
                    <FadeIn>
                    <div className='hover_class'>
                        <p>{work.projectname}</p>
                    </div>
                    </FadeIn>
                </div>
            </div>
        ));
    };

    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[130px] mt-[80px]'>
            <div>
                <Title pram={titleData} />
            </div>

            <div className='mt-[50px]'>
                <Tabs>
                    <TabList className="tablist bg-gradient3">
                        <Tab>All</Tab>
                        <Tab>Reactjs</Tab>
                        <Tab>Angular</Tab>
                        <Tab>Nextjs</Tab>
                        <Tab>Nodejs</Tab>
                    </TabList>

                    <TabPanel className="mt-[50px] reacnt_work_tabpanel">
                        <FadeIn>
                            <div className='flex flex-wrap gap-[19px] reacnt_work_tabpanel2'>
                                {renderWorks('All')}
                            </div>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel className="mt-[50px] reacnt_work_tabpanel">
                        <FadeIn>
                            <div className='flex flex-wrap gap-[19px] reacnt_work_tabpanel2'>
                                {renderWorks('Reactjs')}
                            </div>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel className="mt-[50px] reacnt_work_tabpanel">
                        <FadeIn>
                            <div className='flex flex-wrap gap-[19px] reacnt_work_tabpanel2'>
                                {renderWorks('Angular')}
                            </div>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel className="mt-[50px] reacnt_work_tabpanel">
                        <FadeIn>
                            <div className='flex flex-wrap gap-[19px] reacnt_work_tabpanel2'>
                                {renderWorks('Nextjs')}
                            </div>
                        </FadeIn>
                    </TabPanel>

                    <TabPanel className="mt-[50px] reacnt_work_tabpanel">
                        <FadeIn>
                            <div className='flex flex-wrap gap-[19px] reacnt_work_tabpanel2'>
                                {renderWorks('Nodejs')}
                            </div>
                        </FadeIn>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default RecentWorks;