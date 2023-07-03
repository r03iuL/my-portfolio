const Footer = () => {
  return (
    <div>
      <div className=" py-5 bg-orange-300 text-slate-600 border-t-4 border-orange-400">
        <div className="max-w-screen-xl mx-auto text-center items-center">
          <a href="" className="flex flex-col items-center text-xl font-bold">
            {" "}
            <img src="/Up.png" alt="" className="w-20" /> Back To Top
          </a>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center my-5">
            <a
              href="https://www.linkedin.com/in/r03iul/"
              className="flex flex-col items-center text-xl font-bold px-5"
            >
              <img src="/linkedin.png" alt="" className="w-20" />
              Linkedin
            </a>
            <a
              href="https://github.com/r03iuL"
              className="flex flex-col items-center text-xl font-bold px-5"
            >
              <img src="/github.png" alt="" className="w-20" />
              Github
            </a>
            <a
              href="https://facebook.com/r03iuL"
              className="flex flex-col items-center text-xl font-bold px-5"
            >
              <img src="/facebook.png" alt="" className="w-20" />
              Facebook
            </a>
            <a
              href="mailto:robiulislam1806@gmail.com"
              className="flex flex-col items-center text-xl font-bold px-5"
            >
              <img src="/gmail.png" alt="" className="w-20" />
              Gmail
            </a>
          </div>
        </div>
      </div>
      <footer className="f items-center p-4 bg-neutral text-neutral-content">
        <div className=" text-center ">
          <p>Copyright © 2023 Robiul Islam - All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
