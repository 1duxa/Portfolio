function Navbar() {
  return (
    <div className="bg-sky-600 h-[45px] flex ">
      <svg viewBox="0 0 102 105" fill="none" className="p-[2px] flex-[0.3]">
        <path
          d="M4 102.002C6.5 86.002 18.2444 67.2826 
 21.5 58.002M48.5 102.002C46 99.502 42.8525 
 51.9587 41.4383 42.002M62 4.002L81 102.002L97.5
  4.002M21.5 58.002C32.0642 27.8874 32.3437 3.74719 
  34 4.002C35.1876 6.49602 37.9324 17.3174 41.4383 
  42.002M21.5 58.002L41.4383 42.002"
          stroke="white"
          strokeWidth="9"
        />
      </svg>

      <ul className="flex gap-10 text-white flex-1 justify-end mr-9 items-center text-[18px]">
        <li className="hover:text-slate-400 transition-[1s] cursor-pointer">
          Products
        </li>
        <li className="hover:text-slate-400 transition-[1s] cursor-pointer">
          About us
        </li>
        <li className="hover:text-slate-400 transition-[1s] cursor-pointer">
          Fevourites
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
