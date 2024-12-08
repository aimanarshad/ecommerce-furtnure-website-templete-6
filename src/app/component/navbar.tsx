import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <nav className="w-[1350px] h-[100px] ">
        <div className="w-[1201.5px] h-[41px] flex  translate-y-[-24px] absolute  top-[29px] left-[54px]">
          <div className="logo flex items-center top-[29px] relative ">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="leading-[41.45px] "
            />
            <h1 className="text-[34px] font-bold leading-[41.45px] text-left  ">
              Furniro
            </h1>
          </div>
          <div className="w-[430px] h-[24px] absolute top-[38px] left-[488px] ">
            <ul className="text-lg font-bold flex flex-row gap-[50px]">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="icon flex justify-evenly left-[1000px]">
          <div className="w-[40px] h-[40px] absolute top-[36px] left-[1000px] ">
            <Image
              src="/person.png"
              alt="heart"
              width={30}
              height={40}
              className="leading-[41.45px] "
            />
          </div>

          <div className="w-[40px] h-[40px] absolute top-[36px] left-[1070px] ">
            
            <Image
              src="/search.png"
              alt="heart"
              width={40}
              height={40}
              className="leading-[41.45px] "
            />
          </div>
          <div className="w-[40px] h-[40px] absolute top-[36px] left-[1150px] ">
            <Image
              src="/heart.png"
              alt="heart"
              width={40}
              height={40}
              className="leading-[41.45px] "
            />
          </div>

          <div className="w-[60px] h-[60px] absolute top-[30px] left-[1210px] mb-5 ">
            <Image
              src="/cart.png"
              alt="heart"
              width={60}
              height={60}
              className="leading-[41.45px] "
            />
          </div>
          </div> 
          

        </div>
      </nav>
      
        </>
    )
}