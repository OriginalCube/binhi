import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-indigo-100">
      <div className="h-auto w-full">
        <div className="w-full h-1/6 z-10 bg-indigo-100">
          <p className="text-6xl pl-4 pt-20 pb-4 font-semibold border-b-2 border-amber-500 text-amber-500">
            Contact and Location Details
          </p>
        </div>
        <div className="h-full w-full ">
          <div className="w-5/6 h-full m-auto pt-24 ">
            <div className="h-full w-full flex">
              <div className="h-full w-1/2 flex flex-col">
                <p className="text-4xl font-semibold">Office Address</p>
                <p className="text-xl font-light w-4/6 pt-4">
                  Cesar E.A. Virata School of Business, University of the
                  Philippines, Diliman, Quezon City 1101
                </p>
                <p className="text-4xl font-semibold pt-12">Contact Number</p>
                <p className="text-xl font-light w-4/6 pt-2">
                  Landline: +63-2-8123-4567
                </p>{" "}
                <p className="text-xl font-light w-4/6 pt-2">
                  Mobile (Smart): 09148925466
                </p>
                <p className="text-xl font-light w-4/6 pt-2">
                  Mobile (Globe): 09274990214
                </p>
                <p className="text-4xl font-semibold pt-12">Social Media</p>
                <div className="pt-2 flex items-baseline text-blue-500">
                  <img
                    className="h-6 w-6"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                    alt=""
                  />
                  <p className="pl-4 text-xl font-light w-4/6 pt-2">Facebook</p>
                </div>
                <div className=" pt-2 flex items-baseline text-blue-500">
                  <img
                    className="h-6 w-6"
                    src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                    alt=""
                  />
                  <p className="pl-4 text-xl font-light w-4/6 pt-2">
                    Instagram
                  </p>
                </div>
                <div className=" pt-2 flex items-baseline text-blue-500">
                  <img
                    className="h-6 w-6"
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                    alt=""
                  />
                  <p className="pl-4 text-xl font-light w-4/6 pt-2">Youtube</p>
                </div>
              </div>
              <div className="h-auto w-1/2">
                <iframe
                  title="Office Address"
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15440.055283966349!2d121.073801!3d14.6551569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b766b56d7a69%3A0x76307bdd5bb7629a!2sUP%20Diliman%20Cesar%20E.A.%20Virata%20School%20of%20Business%20(College%20of%20Business%20Administration)!5e0!3m2!1sen!2sph!4v1685181518356!5m2!1sen!2sph"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
