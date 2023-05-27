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
    <div className="w-full h-1/2 flex flex-col bg-indigo-100">
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
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-1/6 z-10 bg-indigo-100">
          <p className="text-6xl pl-4 pt-20 pb-4 font-semibold border-b-2 border-amber-500 text-amber-500">
            Mission and Vission
          </p>
        </div>
        <div className="flex h-5/6">
          <div className="h-5/6 w-1/2 border-2">
            <div className="w-5/6 h-full m-auto ">
              <p className="tracking-wider text-left mt-14 text-4xl pt-24 font-light opacity-90">
                "To nourish and sustain our communities through responsible
                farming practices, providing fresh, high-quality, and nutritious
                food while preserving the environment and promoting the
                well-being of our employees and the local economy."
              </p>
            </div>
          </div>
          <div className="min-h-max mt-10 left-2/3 w-1/2 ">
            <img
              src="./assets/images/about.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="w-full h-1/6 z-10 bg-indigo-100">
          <p className="text-6xl pl-4 pt-20 pb-4 font-semibold border-b-2 border-amber-500 text-amber-500">
            Meet our Officers
          </p>
        </div>
        {details.map((e) => (
          <AboutTemplate name={e.name} role={e.role} details={e.details} />
        ))}{" "}
      </div>
    </div>
  );
};

export default About;
