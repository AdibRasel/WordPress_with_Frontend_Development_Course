import Menu from '../Components/Menu';
import HeroSection from '../Components/HeroSection';
import CourseModule from '../Components/CourseModule';
import Project from '../Components/Project';
import ContactUs from '../Components/ContactUs';



const Home = () => {
  return (
    <>

      <Menu />
      
      <HeroSection />

      <CourseModule />

      <Project />

      <ContactUs />


      <section id="about" className="section m-5 p-5">About Us Section</section>



    </>

  )
}

export default Home

