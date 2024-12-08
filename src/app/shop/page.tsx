import Images from "../component/images";
import Image from "next/image";
import Features from "../component/features";

export default function Shop() {
  return (
    <>
      <div
  style={{ backgroundImage: "url('/img.jpg')" }}
  className="bg-cover bg-center h-[330px] opacity-80 w-full relative mt-[100px]"
>
  <div className="absolute top-[60px] left-[50%] transform -translate-x-1/2">
    <Image className="w-[77px] h-[77px] top-[30px] left-[682px]" src="/logo.png" alt="logo" width={70} height={60} />
    <h1 className=" text-[48px] font-medium leading-[72px] text-5xl text-left top-0 ">Shop</h1>
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
      <span className="font-bold text-sm text-black">Shop</span>
    </div>
  </div>
  </div>
      <main>
        <div className="flex items-center justify-between bg-amber-50 p-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-700">
              <span className="material-icons">filter_list</span>
              <span className="ml-1">Filter</span>
            </button>
            <div className="flex space-x-2">
              <button className="p-1 border border-yellow-400 bg-yellow-400">
                <span className="material-icons">grid_view</span>
              </button>
              <button className="p-1 border">
                <span className="material-icons">view_list</span>
              </button>
            </div>
            <span className="text-sm text-gray-600">
              Showing 1–16 of 32 results
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-1">Show</span>
              <input
                type="number"
                defaultValue="16"
                className="w-12 p-1 border rounded text-center text-sm text-gray-700"
              />
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-1">Short by</span>
              <select className="p-1 border rounded bg-white text-sm text-gray-700 border-yellow-400">
                <option>Default</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-[1350px] h-[2051px]  ">
          {/* box1 */}
          <div className="w-[1236px] h-[446px] mt-[50px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[285px] h-[700px] ">
              <Image
                src="/carts.jpeg"
                alt="logo"
                width={285}
                height={700}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Luxry big sofa</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 700.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Respira</h4>
                <span className="text-[16px]">Outdoor bar table and stool</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 500.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* box2 */}

          <div className="w-[1236px] h-[446px] mt-[140px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i2.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp
                     3.500.000
                  </span>
                  </p>
              </div>
            </div>
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Luxry big sofa</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 700.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Respira</h4>
                <span className="text-[16px]">Outdoor bar table and stool</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 500.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 
          box3 */}

          {/* box2 */}

          <div className="w-[1236px] h-[446px] mt-[140px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i2.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp
                     3.500.000
                  </span>
                  </p>
              </div>
            </div>
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Luxry big sofa</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 700.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Respira</h4>
                <span className="text-[16px]">Outdoor bar table and stool</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 500.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* box4 */}

          {/* box2 */}

          <div className="w-[1236px] h-[446px] mt-[140px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
                <h4 className="text-[24px] font-bold">Syltherine</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i2.png"
                alt="logo"
                width={285}
                height={301}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp
                     3.500.000
                  </span>
                  </p>
              </div>
            </div>
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Luxry big sofa</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 700.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[446px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={285}
                height={301}
                className="w-[300px] h-[446px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#F4F5F7] gap-[5px]">
              <h4 className="text-[24px] font-bold">Respira</h4>
                <span className="text-[16px]">Outdoor bar table and stool</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 500.0000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <div className="w-[392px] h-[90px] p-[30px] flex flex-row gap-[38px] mt-[300px] ml-[500px] justify-center ">
          <div className="box1 bg-[#B88E2F] text-center text-white text-2xl w-[60px] h-[60px] top-[30px] gap-0 rounded-[10px]">
            1
          </div>
          <div className="box1 bg-[#d6c1a6] text-center text-black text-2xl w-[60px] h-[60px] top-[30px] gap-0 rounded[10px]">
            2
          </div>
          <div className="box1 bg-[#d6c1a6] text-center text-black text-2xl w-[60px] h-[60px] top-[30px] gap-0 rounded[10px]">
            3
          </div>
          <div className="box1 bg-[#d6c1a6] text-center text-black text-2xl w-[90px] h-[60px] top-[30px] gap-0 rounded[10px]">
           Next
          </div>
        </div>
        <Features/>
    </>
  );
}
