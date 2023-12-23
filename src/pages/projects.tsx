import type { NextPageWithLayout } from "./_app";

const project_list = [
  {
    title: "KU GenEd Credit Count",
    description: "A web version of GenEd Credit Count project.",
    date: "December 2023",
    repo: "https://gened-credit-count-frontend.vercel.app/",
  },
  {
    title: "bitly clone frontend",
    description: "Frontend for bitly clone project.",
    date: "December 2023",
    repo: "https://github.com/vjumpkung/bitly-clone-frontend",
  },
  {
    title: "bitly clone backend",
    description: "API for bitly clone frontend.",
    date: "December 2023",
    repo: "https://github.com/Vjumpkung/bitly-clone-backend",
  },
  {
    title: "GenEdCreditCountBackend",
    description:
      "A project that addresses my pain point involves manually counting General Education (GenEd) subjects and categorizing them by type.",
    date: "November 2023 - December 2023",
    repo: "https://github.com/Vjumpkung/GenEdCreditCountBackend",
  },
  {
    title: "MeeOrder Backend",
    description:
      "A MeeOrder POS webapp using in small to medium size restaurant.Mostly, I develop in backend part an Orders management and fix minor bugs from testing and do some integration test with almost possible use cases.",
    date: "July 2023 - November 2023",
    repo: "https://github.com/meeorder/meeorder-backend",
  },
  {
    title: "Air Quality Report Backend",
    description:
      "Air Quality Report backend part for EXCEED 19 project at Kasetsart University.I did an API design and MongoDB queries.",
    date: "Feb 2023 - Feb 2023",
    repo: "https://github.com/Vjumpkung/GenEdCreditCountBackend",
  },
  {
    title: "Decryptor Game",
    description:
      "A straightforward game for group activities during the Let Me Tired camp, targeting high school players.",
    date: "November 2022",
    repo: "https://github.com/Vjumpkung/decryptor_game",
  },
  {
    title: "Running-Game",
    description:
      "A simple game with big red square and small black square moving thing. You must avoid it by jumping. Caution it has a random size and speed you have to press your button accurately.",
    date: "April 2022 - May 2022",
    repo: "https://github.com/Vjumpkung/Running-Game",
  },
];

const activity_list = [
  {
    organization: "CPSK Club",
    title: "Barcamp Bangkhen 11",
    date: "November 2023",
    description: ["Photographer for Barcamp Bangkhen 11."],
  },
  {
    organization: "CPSK Club",
    title: "Init Me #3.1",
    date: "December 2022",
    description: [
      "I am lecturing on Computer Programming for Year 1 engineering students, covering both lecture and lab exams.",
    ],
  },
  {
    organization: "CPSK Club",
    title: "Let Me Tired",
    date: "November 2022",
    description: [
      "I am a Python teacher who instructs 60 high school students interested in Computer Engineering",
      "I serve as a Teacher Assistant in Microbit and HTML/CSS sessions for high school students.",
    ],
  },
];

const Projects: NextPageWithLayout = () => {
  return (
    <div className="container max-w-xl mx-auto px-4">
      <h1 className="text-center pt-4 mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
        Projects
      </h1>

      {project_list.map((project) => {
        return (
          <div
            key={project_list.indexOf(project)}
            className="flex flex-wrap overflow-hidden"
          >
            <div className="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-full lg:px-1 lg:my-1 xl:w-full xl:px-1 xl:my-1">
              <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm text-gray-300">
                    {project.description}
                  </p>
                  <p className="mt-2 max-w-4xl text-sm text-gray-300">
                    {project.date}
                  </p>
                  <div className="mt-5">
                    <a
                      href={project.repo}
                      className="text-sm font-medium text-blue-700 hover:text-blue-400"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h1 className="text-center pt-4 mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
        Activities
      </h1>

      {activity_list.map((activity) => {
        return (
          <div
            key={activity_list.indexOf(activity)}
            className="flex flex-wrap overflow-hidden"
          >
            <div className="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-full lg:px-1 lg:my-1 xl:w-full xl:px-1 xl:my-1">
              <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm text-gray-300">
                    {activity.date}
                  </p>
                  <ul className="mt-2 max-w-4xl text-sm text-gray-300 list-disc">
                    {activity.description.map((item) => (
                      <li
                        key={activity.description.indexOf(item)}
                        className="ml-5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
