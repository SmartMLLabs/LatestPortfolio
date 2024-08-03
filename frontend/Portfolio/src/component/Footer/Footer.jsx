import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="section footer pt-8 pb-20 bg-black  px-7 md:px-20 lg:px-[140px]">
      <div className="content mx-auto max-w-6xl px-10 md:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <div className="block-footer flex flex-col items-center sm:items-start text-center sm:text-left lg:w-[400px] ">
            <p className=" h-9 mb-7 text-white text-2xl font-semibold">
              SmartML Labs
            </p>
            <p className="paragraph-footer lg:pr-5 mb-0 text-base leading-7 text-[#616d7e] ">
              SmartML Labs is an AI-based startup dedicated to creating
              innovative solutions that transform industries and enhance
              everyday life.
              <br />
              <br />
              <a
                href="mailto:careers@smartmllabs.com"
                className=" text-[#d8dfe9cc] underline hover:text-white  "
              >
                careers@smartmllabs.com
              </a>
            </p>
          </div>
          <div className="block-footer flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="heading-footer text-lg font-medium  mt-1 mb-8 text-white">
              Quick Links
            </div>
            <Link
              to="/"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              About
            </Link>
            <Link
              to="/technology"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              Technology
            </Link>
            <Link
              to="/contact"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              Contact
            </Link>
          </div>
          <div className="block-footer flex flex-col items-center sm:items-start text-center sm:text-left ">
            <div className="heading-footer text-lg font-medium text-white  mt-1 mb-8">
              Social Media
            </div>
            <a
              href="https://www.instagram.com/smartmllabs/?igsh=MTRtZHgwZDVwaWIzZw%3D%3D"
              target="_blank"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              Instagram
            </a>
            <a
              href="https://x.com/Smartmllabs?t=krWOYwgVAsHu1CDhNzE0Eg&s=09"
              target="_blank"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/smartml-labs/posts/?feedView=all"
              target="_blank"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white"
            >
              Linkedin
            </a>
          </div>
          {/* <div className="block-footer flex flex-col items-center sm:items-start text-center sm:text-left ">
            <div className="heading-footer text-lg font-medium text-white mt-1 mb-8">
              Template
            </div>
            <a
              href="/template-info/licensing"
              className="link-footer text-base leading-7 text-[#616d7e] hover:text-white mb-1"
            >
              Licensing
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
