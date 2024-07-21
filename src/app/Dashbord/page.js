"use client"
import React, { useRef } from 'react';
import Navbar from './Navbar/page';
import Name from './Name/page';
import History from './history/page';
import QualityServices from './QualityServices/QualityServices';
import RecentWorks from './RecentWorks/page';
import ExperienceEducation from './ExperienceEducation/page';
import Contact from './Contact/page';
import SkillsinProgress from './SkillsinProgress/page';

const Dashboard = () => {
  const sections = {
    home: useRef(null),
    testimonials: useRef(null),
    services: useRef(null),
    works: useRef(null),
    WhyChooseUs: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
    hire: useRef(null)
  };

  return (
    <>
      <Navbar sections={sections} />
      <section ref={sections.home}><Name /></section>
      <section ref={sections.testimonials}><History /></section>
      <section ref={sections.services}><QualityServices /></section>
      <section ref={sections.WhyChooseUs}><SkillsinProgress /></section>
      {/* <section ref={sections.works}><RecentWorks /></section> */}
      {/* <section ref={sections.resume}><ExperienceEducation /></section> */}
      <section ref={sections.contact}><Contact /></section>
    </>
  );
};

export default Dashboard;
