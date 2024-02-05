import AboutClient from "./AboutClient";
import Blog from "./Blog";

function MainBlog() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 relative block min-h-screen md:mt-16 px-5 py-3">
        <Blog />
      </div>
      <div className="w-full xl:w-4/12 px-4">
        <AboutClient />
      </div>
    </div>
  );
}

export default MainBlog;
