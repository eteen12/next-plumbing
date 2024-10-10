export default function WhyUs() {
  const caseStudies = [
    {
      company: "Alphabet Inc.",
      title: "Official website",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    },
    {
      company: "Microsoft Corp.",
      title: "Management system",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    },
    {
      company: "Adobe Inc.",
      title: "Logo design",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    },
  ];

  return (
    <section className="mediumGrayBg antialiased">
      <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white dm-sans">
            Welcome to plumbing
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 space-y-4 rounded-lg shadow-md"
            >
              <span className="text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {caseStudy.company}
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                {caseStudy.title}
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                {caseStudy.description}
              </p>
              <a
                href="#"
                title=""
                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button"
              >
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
