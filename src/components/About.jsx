import React from "react";

const About = () => {
  const details = [
    {
      name: "Spongebob",
      role: "CEO",
      details:
        "With a focus on innovation, quality, and customer satisfaction, I have been an instrumental in driving the growth of our company. Their visionary approach has led to the development of groundbreaking products and services that have helped us maintain our position as a leader in the industry.",
    },
    {
      name: "Patrick",
      role: "CFO",
      details:
        "I bring a wealth of experience to our organization, having worked in a variety of finance roles throughout their career. They are a wizard when it comes to financial planning, budgeting, and forecasting, and their ability to analyze data and spot trends is nothing short of legendary.",
    },
  ];
  const AboutTemplate = (ev) => (
    <div className="w-full h-1/2 flex flex-col">
      <div className="h-48 w-5/6 m-auto flex">
        <div className="w-1/6">
          <img
            className="h-full w-auto rounded-full"
            src="./assets/about/mainThumbnail.gif"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-8 w-5/6">
          <p className="text-5xl font-medium">{ev.name}</p>
          <p className="text-xl font-extralight mt-2">{ev.role}</p>
          <p className="text-xl font-light mt-2 text-justify">{ev.details}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-full h-auto">
      <div className="w-full h-screen">
        {details.map((e) => (
          <AboutTemplate name={e.name} role={e.role} details={e.details} />
        ))}{" "}
      </div>
    </div>
  );
};

export default About;
