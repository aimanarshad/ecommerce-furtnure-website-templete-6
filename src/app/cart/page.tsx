import Features from "../component/features";
import Image from "next/image";
export default function Cart(){
    return(
        <>
        <div
  style={{ backgroundImage: "url('/img.jpg')" }}
  className="bg-cover bg-center h-[330px] opacity-80 w-full relative mt-[100px]"
>
  <div className="absolute top-[60px] left-[50%] transform -translate-x-1/2">
    <Image className="w-[77px] h-[77px] top-[30px] left-[682px]" src="/logo.png" alt="logo" width={70} height={60} />
    <h1 className=" text-[48px] font-medium leading-[72px] text-5xl text-left top-0 ">Cart</h1>
    <div className="w-[145px] h-[24px] flex flex-row gap-7 top-[295px] left-[680px] "
    >
      <span className="font-bold text-sm ">Home</span>
      <Image
      src="/arrow.png"
      alt="arrow"
      width={100}
      height={100}
      className=" w-[30px] h-[15px]  top-[150px] left-[37px] absolute "

      />
      <span className="font-bold text-sm text-black">Cart</span>
    </div>
  </div>
  </div>
        <div className="flex flex-col lg:flex-row  mt-[200px] justify-between p-6 bg-white">
  
  <div className="w-full lg:w-2/3">
    <table className="w-full border-collapse bg-amber-50">
      <thead>
        <tr className="text-left text-gray-600 bg-amber-50">
          <th className="p-4">Product</th>
          <th className="p-4">Price</th>
          <th className="p-4">Quantity</th>
          <th className="p-4">Subtotal</th>
          <th className="p-4"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-4 flex items-center">
            <img
              src="sofa2.png"
              alt="Asgaard sofa"
              className="w-16 h-16 rounded mr-4"
            />
            <span className="text-gray-800">Asgaard sofa</span>
          </td>
          <td className="p-4 text-gray-700">Rs. 250,000.00</td>
          <td className="p-4">
            <input
              type="number"
              defaultValue="1"
              className="w-12 border rounded text-center text-gray-700"
            />
          </td>
        
          <td className="p-4 text-gray-700">Rs. 250,000.00</td>
          <td className="p-4 text-red-500">
            <button>
              <span className="material-icons">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


  <div className="w-full  lg:w-1/3 mt-6 lg:mt-0 lg:ml-8">
    <div className="p-6  bg-amber-50 border rounded">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between text-gray-800 font-bold mb-4">
        <span>Total</span>
        <span>Rs. 250,000.00</span>
      </div>
      <button className="w-full bg-black text-white py-2 rounded">
        Check Out
      </button>
    </div>
  </div>
</div>
<Features/>

        </>
    )
}