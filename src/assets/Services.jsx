import React from "react";

const Services = () => {
  return (
    <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">What We Do</h3>
          <h1 className="display-2">
            We’ve got everything you need to launch and grow your business
          </h1>
        </div>
      </div>{" "}
      {/* end section-header */}
      <div className="row services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-megaphone"></i>
          </div>
          <div className="service-text">
            <h3 className="">Digital Marketing</h3>
            <p className="">
              Our digital marketing services are designed to boost your online
              presence and drive targeted traffic to your business. From SEO and
              content marketing to social media and PPC campaigns, we tailor
              strategies to achieve your specific goals.
            </p>
          </div>
        </div>

        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-group"></i>
          </div>
          <div className="service-text">
            <h3 className="">Customer Support</h3>
            <p className="">
              We offer comprehensive customer support services to ensure your
              clients receive prompt and effective assistance. Our dedicated
              team is available around the clock to resolve issues, answer
              questions, and enhance customer satisfaction.
            </p>
          </div>
        </div>

        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-lego-block"></i>
          </div>
          <div className="service-text">
            <h3 className="">Tech Solution</h3>
            <p className="">
              Our tech solutions cover a comprehensive range of services
              including web development, app development, and IT consulting. We
              create custom websites and mobile applications tailored to your
              business needs, ensuring seamless functionality and exceptional
              user experience.
            </p>
          </div>
        </div>

        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-earth"></i>
          </div>
          <div className="service-text">
            <h3 className="">SaaS</h3>
            <p className="">
              Our SaaS offerings provide scalable and cost-effective software
              solutions that can be accessed from anywhere. Whether you need CRM
              systems, project management tools, or custom applications, we
              deliver reliable and efficient software tailored to your business.
            </p>
          </div>
        </div>

        {/* <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-cube"></i>
          </div>
          <div className="service-text">
            <h3 className="">Packaging Design</h3>
            <p className="">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-lego-block"></i>
          </div>
          <div className="service-text">
            <h3 className="">Web Development</h3>
            <p className="">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div> */}
      </div>{" "}
      {/* end services-list */}
    </section>
  );
};

export default Services;
