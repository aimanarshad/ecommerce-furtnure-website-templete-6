
export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content of Your Page */}
      <main className="flex-grow">
        {/* Add your page content here */}
      </main>

      {/* Footer */}
      <footer className="bg-white border-gray-600 border-2 text-gray-800 mt-auto">
        <div className="container w-[1350px] h-[300px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 w-[1201.5px] h-[250px] mt-[50px] gap-[30px]">
            {/* Company Information */}
            <div>
              <h1 className="text-2xl font-bold">Funiro.</h1>
              <p className="mt-4">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </p>
            </div>

            {/* Links */}
            <div className="w-[68px] h-[312px] flex flex-col gap-[30px]">
              <h2 className="text-lg font-semibold">Links</h2>
              <ul className="flex flex-col gap-[30px]">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="w-[140px] h-[242px] flex flex-col gap-[30px]">
              <h2 className="text-lg font-semibold mb-3">Help</h2>
              <ul className="flex flex-col gap-[30px]">
                <li>
                  <a href="#" className="hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-[286px] flex flex-col gap-[30px]">
              <h2 className="text-lg font-semibold mb-3">Newsletter</h2>
              <div className="flex gap-4">
                <div className="text-black text-sm">
                  <span>Enter your email</span>
                  <div className="w-[100px] h-[2px] border-[1px] border-black"></div>
                </div>
                <div className="text-black text-sm font-bold">
                  <span>SUBSCRIBE</span>
                  <div className="w-[100px] h-[2px] border-[1px] border-black"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-4 text-left text-lg">
            <p>© 2023 Funiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
