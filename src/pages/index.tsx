import Image from "next/image";

const programming_list = [
  "Typescript",
  "Javascript",
  "Python",
  "C",
  "C++",
  "C#",
];

const other_tools_list = [
  "Prettier",
  " black",
  " Git",
  " ClickUp",
  " Postman",
  " Vercel",
];

const framework_list = ["Next.js", "NestJS", "FastAPI"];

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center pt-4 mb-4 text-4xl font-bold leading-none tracking-tightmd:text-5xl lg:text-6xl text-white">
        Chanrich Pisitjing
      </h1>
      <div className="py-3">
        <Image
          src="/IMG_2581.jpg"
          width={256}
          height={256}
          alt="profile picture"
          className="mx-auto rounded-full border-4"
        />
      </div>
      <h2 className="text-center text-white text-xl font-bold">
        Year 3, Kasetsart University, Computer Engineering
        <br />
      </h2>
      <div className="md:w-1/3 w-full mx-auto pt-5">
        <p className="text-white">
          Computer Engineering student who wants to do Backend Developer
          focusing on REST API and Database Integration. I am looking for a
          Backend developer with python or javascript framework to create a REST
          (or RESTful) application.
        </p>
      </div>
      <h2 className="text-center text-white text-3xl font-bold pt-10">
        Current Cumulative Grade
      </h2>
      <p className="text-center">
        <span className="text-center text-white text-4xl pt-3">
          3.35{"    "}
        </span>
        <span className=" text-gray-600">out of 4</span>
      </p>
      <h2 className="text-center text-white text-3xl font-bold pt-10">
        Programming Skills
      </h2>
      <div className="w-full mx-auto md:w-1/4">
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-white text-l">
          {programming_list.map((item) => (
            <li key={item.indexOf(item)}>{item}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-center text-white text-3xl font-bold pt-10">
        Framework
      </h2>
      <div className="w-full mx-auto md:w-1/4">
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-white text-l">
          {framework_list.map((item) => (
            <li key={item.indexOf(item)}>{item}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-center text-white text-3xl font-bold pt-10">
        Database
      </h2>
      <div className="w-full mx-auto md:w-1/4">
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-white text-l">
          <li key={0}>MongoDB</li>
        </ul>
      </div>
      <h2 className="text-center text-white text-3xl font-bold pt-10">
        Others Tools
      </h2>
      <div className="w-full mx-auto md:w-1/4">
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-white text-l">
          {other_tools_list.map((item) => (
            <li key={item.indexOf(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
