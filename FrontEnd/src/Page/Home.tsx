import * as React from 'react';
import Menu from '../Components/Menu';
import HeroSection from '../Components/HeroSection';
import CourseModule from '../Components/CourseModule';
import Project from '../Components/Project';



const Home = () => {
  return (
    <>

      <Menu />
      
      <HeroSection />

      <CourseModule />

      <Project />


      <section id="contact" className="section m-5 p-5">Contact Us Section</section>
      <section id="about" className="section m-5 p-5">About Us Section</section>



    </>

  )
}

export default Home

