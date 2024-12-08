import Image from "next/image";
import Features from "../component/features";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] mt-[100px] bg-cover bg-center" style={{ backgroundImage: 'url("/img2.jpg")' }}>
        <div className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#FFF3E3] text-[#B88E2F] h-[230px] p-6">
          <h2 className="text-2xl md:text-3xl mb-4">Discover Our New Collection</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="bg-[#B88E2F] text-white py-2 px-4 rounded">Shop Now</a>
        </div>
      </div>

      {/* Product Showcase */}
      <section className="text-center mt-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-between space-x-4">
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img3.png" alt="Dining" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Dining</p>
          </div>
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img4.png" alt="Living" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Living</p>
          </div>
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img5.png" alt="Bedroom" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Bedroom</p>
          </div>
        </div>
      </section>
      <section>
      <h1 className="text-[60px] text-center font-bolder text-balance">Related Goods</h1>
    <div className="w-[1200px] h-[446px] mt-[50px] gap-[40px]  flex flex-row">
            {/* b1 */}
            <div className="w-[200px] h-[200px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={300}
                height={300}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col bg-[#cdd5e6] gap-[5px]">
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
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/carts.jpeg"
                alt="logo"
                width={300}
                height={300}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col bg-[#cdd5e6] gap-[8px]">
                <h4 className="text-[24px] font-bold">laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={300}
                height={300}
                className="w-[300px] h-[200px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#cdd5e6] gap-[5px]">
                <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                Rp 7.000.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={300}
                height={300}
                className="w-[300px] h-[200px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#cdd5e6] gap-[5px]">
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
          <div className="w-[1200px] h-[446px] mt-[50px] gap-[32px]  flex flex-row">
            {/* b1 */}
            <div className="w-[200px] h-[200px] ">
              <Image
                src="/i1.png"
                alt="logo"
                width={300}
                height={300}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col bg-[#cdd5e6] gap-[5px]">
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
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/carts.jpeg"
                alt="logo"
                width={300}
                height={300}
                className="leading-[41.45px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col bg-[#cdd5e6] gap-[8px]">
                <h4 className="text-[24px] font-bold">laviosa</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                  Rp 2.500.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/i4.png"
                alt="logo"
                width={300}
                height={300}
                className="w-[300px] h-[200px]"
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#cdd5e6] gap-[5px]">
                <h4 className="text-[24px] font-bold">Lotilo</h4>
                <span className="text-[16px]">Stylish cafe chair</span>

                <p className=" text-xl font-semibold leading-[30px] text-left">
                Rp 7.000.000
                  <span className=" text-base font-normal leading-6 text-left line-through">
                    Rp 3.500.000
                  </span>
                </p>
              </div>
            </div>
            {/* b4 */}
            <div className="w-[285px] h-[200px] ">
              <Image
                src="/i3.jpg"
                alt="logo"
                width={300}
                height={300}
                className="w-[300px] h-[200px] "
              />
              <div className="w-[285px] h-[99px] top-[317px] left-[16px] flex flex-col  bg-[#cdd5e6] gap-[5px]">
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
      </section>
      {/* Image Grid */}
      <section className=" mt-[100px]">
        <h4 className="text-xl text-center text-gray-800">Share you Setup with us</h4>

        <h1 className="text-[40px] text-center font-bold text-[#3A3A3A]">#FuniroFurniture</h1>
        <Image
                src="/fu.png"
                alt="logo"
                width={780}
                height={500}
                className="w-[1350px] h-[500px] mt-6"
              />
        
      </section>
      <Features/>
    </div>

  );
}
