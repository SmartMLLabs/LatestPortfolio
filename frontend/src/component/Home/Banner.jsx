import { useState, useRef, useEffect } from "react";
import axios from 'axios'; 
import "./Banner.css";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  const [email, setEmail] = useState('')

  useEffect(() => {
    const currentBannerRef = bannerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentBannerRef) {
      observer.observe(currentBannerRef);
    }

    return () => {
      if (currentBannerRef) {
        observer.unobserve(currentBannerRef);
      }
    };
  }, []);

  const addSubscribeHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/subscribers', { email: email })
      .then(res => {
        console.log('Thank you for subscribing', res.data);
        window.alert('Thank you for subscribing');
      })
      .catch(error => {
        console.error('DEBUG: Error adding Subscriber:', error);
        window.alert('Oops! Something went wrong while submitting the form.');
      });
  };
  

  return (
    <div className="section banner pb-8 bg-black">
      <div className="flex flex-col items-center px-5 sm:px-10 py-32 overflow-hidden">
        <div
          className={`w-full px-7 md:px-20 lg:px-[140px] flex flex-col items-center ${
            isVisible ? "animate" : ""
          }`}
          ref={bannerRef}
        >
          <div
            className="group-banner w-full text-center rounded-lg flex flex-col justify-center items-center py-12 sm:py-24 px-5 sm:px-10 relative overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgba(29, 40, 56, 0.5), rgba(29, 40, 56, 0.25))",
            }}
          >
            <div className="block-banner z-10 w-full max-w-screen-md flex flex-col items-center relative">
              <h3 className="text-white tracking-tight mb-4 sm:mb-7 text-2xl md:text-5xl lg:text-[55px] font-medium leading-tight">
              Stay Ahead with the Latest Updates !
              </h3>
              <div className="form-block-banner w-full flex flex-col items-center">
                <form
                  id="Email-Form"
                  name="email-form"
                  method="get"
                  className="form-banner grid grid-cols-1 sm:grid-cols-[1.7fr,1fr] gap-2 items-center"
                  aria-label="Email Form"
                >
                  <input
                    className="text-field h-12 sm:h-14 border border-gray-800 bg-[#0E141D] text-white rounded-xl mb-2 sm:mb-0 px-4 py-2 text-base sm:text-lg font-normal transition duration-400 ease-in-out focus:border-[#aa55f4] outline-none"
                    maxLength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Your email address"
                    type="email"
                    id="Email"
                    onChange={event=>setEmail(event.target.value)}
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="bg-[#aa55f4] bg-gradient-to-r from-[#aa55f4] to-[#6a1bf0] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#6a1bf0] hover:scale-95"
                    value="Subscribe"
                    onClick={addSubscribeHandler}
                  />
                </form>
                <div
                  className="success-message w-form-done text-center bg-gray-200 py-5 hidden"
                  role="region"
                  aria-label="Email Form success"
                >
                  <div className="text-success text-white text-base font-medium leading-snug">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div
                  className="error-message w-form-fail bg-red-100 mt-2 p-2 hidden"
                  role="region"
                  aria-label="Email Form failure"
                >
                  <div className="text-error text-red-700 text-base font-medium leading-snug">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div className="glow-banner z-0 h-64 bg-[#aa55f4] opacity-60 filter blur-[65px] rounded-full absolute top-[-230px] bottom-auto left-[10%] right-[10%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
