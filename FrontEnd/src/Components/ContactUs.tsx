

const ContactUs = () => {
  return (
    <section id="contact" className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa, #e3f2fd)' }}>
      <div className="container">
        <h1 className="text-center text-uppercase fw-bold text-primary mb-5 border-bottom pb-2 d-inline-block">
          Contact Us
        </h1>

        <div className="row g-5">
          {/* Company Info */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg h-100 rounded-4 bg-white hover-shadow transition">
              <div className="card-body p-4">
                <h2 className="text-center text-primary fw-bold fs-3 mb-4">LifeSupport-IT</h2>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="bi bi-geo-alt-fill me-2 text-primary"></i> <strong>Address:</strong> City Plaza, Ramganj, Bangladesh</li>
                  <li className="mb-3"><i className="bi bi-telephone-fill me-2 text-primary"></i> <strong>Phone:</strong> +880 01335-942514</li>
                  <li className="mb-3">
                    <i className="bi bi-facebook me-2 text-primary"></i>
                    <strong>Facebook:</strong>{' '}
                    <a
                      href="https://www.facebook.com/lifesupportit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-underline"
                    >
                      facebook.com/lifesupportit
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-globe me-2 text-primary"></i>
                    <strong>Website:</strong>{' '}
                    <a
                      href="http://lifesupportit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-underline"
                    >
                      lifesupportit.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2 text-primary"></i>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:institute253@gmail.com"
                      className="text-primary text-decoration-underline"
                    >
                      institute253@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mentor Info */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg h-100 rounded-4 bg-white">
              <div className="card-body p-4">
                <h2 className="border-start border-4 border-primary ps-3 fw-semibold fs-4 mb-3">
                  Mentor
                </h2>
                <p className="fst-italic text-muted mb-4">
                  If you have any questions about the course, feel free to contact the mentor directly.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3"><strong>Name:</strong> Rasel Hossain Adib</li>
                  <li className="mb-3">
                    <strong>Website:</strong>{' '}
                    <a
                      href="https://adibrasel.github.io/My_Portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-underline"
                    >
                      adibrasel.github.io/My_Portfolio/
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:adibrasel.com@gmail.com"
                      className="text-primary text-decoration-underline"
                    >
                      adibrasel.com@gmail.com
                    </a>
                  </li>
                  <li><strong>Phone:</strong> +880 01934544352, +880 01626757897</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-5 shadow rounded-4 overflow-hidden" style={{ height: '400px' }}>
          <iframe
            title="LifeSupport-IT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0108621937427!2d90.85576971537319!3d23.09609068478353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754ed0077b1ee2d%3A0xa119acc8a5c9430a!2sLifeSupport-IT!5e0!3m2!1sen!2sbd!4v1685800000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
