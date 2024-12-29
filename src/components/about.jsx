import React from 'react'

function About() {
  return (
    <div className=" flex flex-col items-center w-[80%] sm:w-[80%] sm:mx-1 justify-between mx-[15%] my-2 sm:my-1 bg-gray-100 text-gray-800">
      <div className="w-full max-w-4xl px-6  sm:px-1 sm:w-[100%] sm:overflow-y-visible  py-8 mx-2 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl -mt-5 font-bold text-center text-blue-900 mb-1">
          About Us
        </h1>
        <hr className="mx-5 mt-5 sm:my-1 mb-4" />
        <p className="text-md text-justify leading-relaxed mb-6">
          Welcome to <strong>Movie World</strong>, your one-stop destination for
          exploring your favorite movies, discovering new titles, and learning
          about the stories that captivate audiences worldwide. Our goal is to
          provide a seamless experience for movie enthusiasts, helping you dive
          into the cinematic world with ease and enjoyment.
        </p>
        <p className="text-md text-justify leading-relaxed mb-6">
          Founded by a team of passionate movie buffs, Movie World aims to
          bridge the gap between viewers and the movies they love. Whether
          you're searching for the latest blockbusters or timeless classics,
          we've got you covered.
        </p>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Our Mission
        </h2>
        <p className="text-md text-justify leading-relaxed mb-6">
          At Movie World, we strive to make movie discovery enjoyable,
          informative, and personalized. With an extensive database and
          intelligent recommendations, we aim to enrich your movie-watching
          journey.
        </p>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Contact Us
        </h2>
        <p className="text-md text-justify  leading-relaxed mb-6">
          We'd love to hear from you! Whether you have feedback, questions, or
          partnership inquiries, feel free to reach out to us at{" "}
          <a
            href="mailto:support@movieworld.com"
            className="text-blue-500 underline"
          >
            support@movieworld.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About
