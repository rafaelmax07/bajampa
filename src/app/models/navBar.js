export default function NavBar() {
    return (
        <nav className="nav-links bg-black">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="index.html" className="flex items-center">
        <img
          src="./images/logo.png"
          className="h-20 w-20 mr-3 flex-start"
          alt="Flowbite Logo"
        />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-orange-00 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-musgo">
          <li className="">
            <a
              href="#"
              className="block text-center py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-orange-400 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-center py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-orange-400 md:p-0"
            >
              Projeto
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-center py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-orange-400 md:p-0"
            >
              Patrocinadores
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-center py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-orange-400 md:p-0"
            >
              Sobre Nós
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
    )
}