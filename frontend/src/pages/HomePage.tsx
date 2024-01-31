import NavBar from "../components/homePage/NavBar";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-col-1 sm:grid-cols-4 p-1.5 sm:pl-2">
        <nav className="">
          <NavBar />
        </nav>
        <aside className="sm:col-span-2 bg-gray-800">he</aside>
        <div>hello</div>
      </div>
    </>
  );
}
