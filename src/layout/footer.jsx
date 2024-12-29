function Footer() {


  return (
    <footer className="bg-blue-900 text-white py-12  mt-[10%] sm:py-4 sm:fixed sm:bottom-0 sm:w-[full]">
      <div className="container  text-center ">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} <strong>Movie World</strong>.
          All Rights Reserved.
        </p>
      
        <p className="text-sm mt-1">
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
