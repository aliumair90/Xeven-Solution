import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="row footer-main pt-32 px-20  w-full h-full">
        <div className="col-six tab-full left footer-desc">
          <div className=" text-[#39b54a] text-5xl mb-12">Xeven Solution</div>
          At Xeven Solutions, we specialize in digital marketing, customer
          support, and tech solutions, including web and app development. Our
          mission is to drive your business success through innovative
          strategies and exceptional service.
        </div>

        <div className="col-six tab-full right footer-subscribe ">
          <h4 className="text-white">Get Notified</h4>
          <p className="pt-12">
            Stay Updated with Xeven Solutions! Subscribe to our newsletter and
            be the first to know about our latest services, industry insights,
            and exclusive offers. Join our community and keep up-to-date with
            the latest trends in digital marketing, customer support, and tech
            solutions. <br /> Sign up now!
          </p>
          <div className="pt-12">
            <div className="subscribe-form ">
              <form id="mc-form" className="group" novalidate="true">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="email"
                  id="mc-email"
                  placeholder="Email Address"
                  required=""
                />
                <input type="submit" name="subscribe" value="Subscribe" />
                <label htmlFor="mc-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright ">
            <span>© Copyright Xeven Solution 2023</span>
          </div>

          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
