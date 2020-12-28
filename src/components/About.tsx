import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>
      </div>
      <img
        alt=""
        src={`https://images.unsplash.com/photo-1584803894066-6d8f732cc6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`}
        className="md:w-1/4 w-3/4 py-8"
      />
    </>
  );
};

export default About;
