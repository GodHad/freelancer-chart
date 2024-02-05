export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-gray-800 text-white bottom-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Freelancer Bid Helper by
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800">
                  Creative Sunharius@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
