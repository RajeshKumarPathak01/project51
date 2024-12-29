function Footer() {


  return (
    <footer className="bg-blue-900 text-white py-4  mt-0 sm:py-4 sm:fixed sm:bottom-0 sm:w-[full]">
      <div className="container  text-center ">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} <strong>Movie World</strong>.
          All Rights Reserved.
        </p>
        <p className="text-sm mt-2 mx-2">
          This application uses third-party APIs for movie data. All movie
          titles, descriptions, images, and other content are the property of
          their respective owners and are used in compliance with their API
          policies.
        </p>
        <p className="text-sm mt-2">
          For copyright inquiries, contact us at{" 7870012723 "}
          <a href="mailto:support@movieworld.com" className="white">
            support@movieworld.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
export default Footer;
