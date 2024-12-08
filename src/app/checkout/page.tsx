import Images from "../component/images";
import Features from "../component/features";
export default function Checkout() {
  return (
    <>
      <section>
      <Images/>

      </section>
    
      <section>
        <div className="flex flex-row">
        <div className="w-[608px] h-[1714px] mt-5 ml-[100px] gap-0 border-t border-transparent">
          <h1 className="text-2xl font-bold mb-6">Billing details</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* First Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-[211px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-[211px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="company" className="block font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Country/Region */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="country" className="block font-medium mb-1">
                Country / Region
              </label>
              <select
                id="country"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Sri Lanka</option>
              </select>
            </div>
            {/* Street Address */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="street" className="block font-medium mb-1">
                Street address
              </label>
              <input
                type="text"
                id="street"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Town/City */}
            <div>
              <label htmlFor="city" className="block font-medium mb-1">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="w-[453px] h-[75px]  border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Province */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="province" className="block font-medium mb-1">
                Province
              </label>
              <select
                id="province"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Western Province</option>
              </select>
            </div>
            {/* ZIP Code */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="zip" className="block font-medium mb-1">
                ZIP code
              </label>
              <input
                type="text"
                id="zip"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email Address */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="email" className="block font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Additional Information */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="additional" className="block font-medium mb-1">
                Additional Information
              </label>
              <textarea
                id="additional"
                rows={2}
                className="w-[453px] h-[75px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </form>
        </div>
     
      
        <div className="w-[608px] h-[789px] mt-5 ml-[200px]">
          <div className="bg-white shadow-lg p-6 w-96 rounded-md ">
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <div className="flex justify-between border-b pb-4 mb-4">
              <span>Asgaard sofa &times; 1</span>
              <span className="font-medium">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-yellow-500">Rs. 250,000.00</span>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Payment Methods</h3>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="payment"
                    className="form-radio text-yellow-500"
                  />

                  <span className="ml-2">Direct Bank Transfer</span>
                </label>
                <p className="text-gray-600 text-xs mt-1">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="payment"
                    className="form-radio text-yellow-500"
                  />
                  <span className="ml-2">Cash On Delivery</span>
                </label>
              </div>
            </div>

            <p className="text-gray-600 text-xs mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>
              .
            </p>

            <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600">
              Place order
            </button>
          </div>
        </div>
        </div>
        <Features/>
      </section>
     <Features/>
    </>
  );
}
