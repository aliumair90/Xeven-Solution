import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about" className="s-about">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="">
          <h3 className="subhead subhead--dark ">Hello There</h3>
          <h1 className="display-1 display-1--light ">
            We Are Xeven Solutions
          </h1>
        </div>
      </div>{" "}
      {/* end section-header */}
      <div className="row about-desc" data-aos="fade-up">
        <div className="col-full">
          <p className="">
            We are a dynamic team of professionals dedicated to delivering
            top-notch digital marketing, IT solutions, and customer care
            services. Our mission is to empower businesses with innovative
            strategies, cutting-edge technology, and exceptional support to
            drive growth and success. Whether you need to enhance your online
            presence, streamline your IT operations, or provide unparalleled
            customer service, Xeven Solutions is here to partner with you every
            step of the way. Let us help you achieve your goals and take your
            business to new heights!
          </p>
        </div>
      </div>{" "}
      {/* end about-desc */}
      <div
        className="row about-stats stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10"
        data-aos="fade-up"
      >
        <div className="col-block stats__col">
          <div className="stats__count">
            <CountUp end={127} duration={2} />
          </div>
          <h5 className="">Awards Received</h5>
        </div>
        <div className="col-block stats__col text-center">
          <div className="stats__count font-bold">
            <CountUp end={1505} duration={2} />
          </div>
          <h5 className="">Cups of Coffee</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">
            <CountUp end={109} duration={2} />
          </div>
          <h5 className="text-lg mt-2">Projects Completed</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">
            <CountUp end={102} duration={2} />
          </div>
          <h5 className="">Happy Clients</h5>
        </div>
      </div>{" "}
      {/* end about-stats */}
    </section>
  );
};

export default About;
