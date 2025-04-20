import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ContactUs from './src/contact.jsx'

createRoot(document.getElementById('root')).render(


  

  <div className="contact-section">
  <div className="container my-5 text-center">
        <h1 className="display-4 fw-bold  ">Contact Us</h1>
        <hr className="my-4 w-50 mx-auto" />
        
      </div>
  
    <div className="container">
     
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="contact-wrap w-100 p-lg-5 p-4">
                  <h3 className="mb-4">Send us a message</h3>
                  <form
                    id="contactForm"
                    className="contactForm"
                  
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                          
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                           
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Subject"
                         
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            type="text"
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="6"
                        
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch ">
                <div className="info-wrap w-100 p-lg-5 p-4 img">
                  <h3>Contact us</h3>
                  <p className="mb-4 text-secondry">
                    We're open for any suggestion or just to have a chat
                  </p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721
                        New York NY 10016
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Phone:</span>
                        <a href="tel://123456789">+1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Email:</span>
                        <a href="mailto:info@yoursite.com">
                          info@yoursite.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Website:</span>
                        <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  <div className="footer-section bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-widget">
            <h5 className="mb-3">CATEGORIES</h5>
            <ul className="list-unstyled">
              <li><a href="#">Woman</a></li>
              <li><a href="#">Man</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Watches</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-widget">
            <h5 className="mb-3">HELP</h5>
            <ul className="list-unstyled">
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-widget">
            <h5 className="mb-3">GET IN TOUCH</h5>
            <p>Any questions? Let us know in store at 8th Floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            <div className="social-icons">
              <a href="#" className="mr-2"><i className="fa fa-facebook"></i></a>
              <a href="#" className="mr-2"><i className="fa fa-instagram"></i></a>
              <a href="#" className="mr-2"><i className="fa fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-widget">
            <h5 className="mb-3">NEWSLETTER</h5>
            <p><a href="mailto:amis@example.com">amis@example.com</a></p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email address" aria-label="Your email address" aria-describedby="button-subscribe" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-subscribe">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
  

