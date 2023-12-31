
const navItems = (
  <>
    <li>
      <a href='#About' >About</a>
    </li>
    <li>
      <a href='#Skills'>Skills</a>
    </li>
    <li>
      <a href='#Project'>Project</a>
    </li>
    <li>
      <a href='#Contact'>Contact</a>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div>
      <div className="navbar font-bold ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case text-3xl flex "><img src="/icon.png" alt="logo" className="w-10 mr-4" />r03iuL.live</a>
        </div>
        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 text-xl">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
