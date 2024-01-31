import { useEffect, useRef } from "react";

const NavBar = () => {
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="py-2 text-4xl font-extrabold">Chats</h1>
      </div>
      <div className="sm:mr-1.5">
        <input
          ref={searchInput}
          type="search"
          className="w-full rounded-lg px-3 py-1.5 outline-none "
          placeholder="Search people"
        />
      </div>
    </div>
  );
};

export default NavBar;
