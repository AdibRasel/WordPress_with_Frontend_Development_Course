
import CourseImage from "../assets/CourseImage.jpg";

const HeroSection = () => {
  return (
    <section  id="home" className="hero-section py-5 bg-light">
          <div className="container">
            <div className="row align-items-center flex-column-reverse flex-md-row">
              {/* Left Text Content */}
              <div className="col-md-7 text-center text-md-start mt-4 mt-md-0">
                <h1 className="display-5 fw-bold text-dark mb-3">
                  Complete <span className="text-primary">WordPress</span> &{" "}
                  <span className="text-primary">FrontEnd</span> in One Course
                </h1>
                <p className="text-muted mb-4">
                  Become a professional developer by learning everything from WordPress setup to advanced frontend with React js. Beginner-friendly, project-based, and career-focused.
                </p>
                <button className="btn btn-primary btn-lg px-4">🚀 Enroll Now</button>
              </div>

              {/* Right Image */}
              <div className="col-md-5 text-center">
                <img
                  src={CourseImage}
                  alt="Course"
                  className="img-fluid rounded-4 shadow"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection
