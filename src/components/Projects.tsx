import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim
          cursus lorem ac. Orci maecenas praesent arcu eget orci est orci
          nullam. Leo purus est pellentesque massa at tortor, est. Aliquet
          pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.
        </p>
      </div>

      <section className=" pattern py-20">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-2xl font-semibold">
            Here's some stuff that I've made
          </h2>

          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs w-full">
                <a
                  href="https://github.com/joakimgy/aoc2020"
                  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <p
                      style={{
                        display: "inline-block",
                        color: "#00cc00",
                        textShadow: "0 0 2px #00cc00, 0 0 5px #00cc00",
                      }}
                      className="text-2xl"
                    >
                      Advent of code
                    </p>
                  </div>

                  <div className="py-2 px-3 text-center text-sm">
                    <p className="text-gray-300">Advent of code</p>

                    <span className="block text-gray-500 mt-2">github.com</span>
                  </div>
                </a>
              </div>

              <div className="max-w-xs w-full">
                <a
                  href="https://github.com/joakimgy/robotic_lawn_mower"
                  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div className="flex items-center justify-center h-56 bg-white  border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-fill "
                      src={`https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80`}
                      alt=""
                    />
                  </div>

                  <div className="py-2 px-3 text-center text-sm">
                    <p className="text-gray-300">Robotic lawn mower</p>

                    <span className="block text-gray-500 mt-2">github.com</span>
                  </div>
                </a>
              </div>

              <div className="max-w-xs w-full">
                <a
                  href="https://github.com/joakimgy"
                  className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-fill"
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt=""
                    />
                  </div>

                  <div className="py-2 px-3 text-center text-sm">
                    <p className="text-gray-300">Visit my Github</p>

                    <span className="block text-gray-500 mt-2">github.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
