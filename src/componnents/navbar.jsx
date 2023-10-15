import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Duta Project</a>
  </div>
  <ul className="flex gap-4">
        <li className=" p-2 border border-black rounded-lg"><NavLink to={"/"} cl>Home</NavLink></li>
        <li className=" p-2 border border-black rounded-lg"><NavLink to={"/about"}  cl>About</NavLink></li>
        <li className=" p-2 border border-black rounded-lg"><NavLink to={"/contact"} cl>Kontak</NavLink></li>
    </ul>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
    )
}

export default Navbar