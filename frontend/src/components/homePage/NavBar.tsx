const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="py-2 text-4xl font-extrabold">Chats</h1>
      </div>
      <input
        type="search"
        className="w-full rounded-lg px-3 py-1.5 outline-none"
        placeholder="Search people"
      />
    </div>
  );
};

export default NavBar;
