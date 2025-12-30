export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col mx-7 bg-white">
      <header className="flex flex-col items-center text-white bg-[#B7D6E1]">
        <div className="font-medium  text-center text-6xl mt-8 max-w-2xl px-4">
          <p>More Then a Home,</p>
          <p className="mt-4">Build Your Future</p>
        </div>
        <p className="flex justify-center text-center mt-2 px-4">
          Dive into a world comfort and convenience as we connect you <br />
          the finest, ensureing a perfect getaway tailored to your presences
        </p>
      </header>

      {/* main */}
      <div className="relative  max-w-full bg-[#B7D6E1]">
        <img src="house1.png" alt="house" className="ml-0" width={1000} />

        <div className="absolute top-16 right-1/6 text-white bg-[#88BBC3] px-4 py-3 rounded-2xl w-56 mx-auto">
          <h3>🏠 Dunial Haven Resident</h3>
          <p className="text-[14px]">1901 Thornridge Cir.Shiloh,</p>
          <p className="text-[14px]">Hawaii 81063</p>
          <button className="bg-white text-black px-3 py-1 mt-2.5 rounded-full">
            Learn More
          </button>
        </div>

        {/* absolute = ลอย, -bottom-10 = ลอยออกล่าง ,left-1/2 + -translate-x-1/2 = จัดกลางแนวนอน */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-xl px-6 py-4 flex gap-4 items-center mx-auto text-sm">
          <select className="px-4 py-2 rounded-full border text-black">
            <option value="rentbuy">&#9983; RentBuy</option>
          </select>
          <select className="px-4 py-2 rounded-full border text-black">
            <option value="house">🏠House</option>
          </select>
          <span className="px-4 py-2 rounded-full border text-black">
            {" "}
            📍Malang, Indonesia
          </span>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Find Property
          </button>
        </div>
      </div>

      {/* Expert Guides */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold mb-10">
          Expert Guides to finding <br /> your perfect Fit
        </h2>

        <div className="flex justify-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="font-semibold mb-2">Buy Properties</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-black text-white px-4 py-1 rounded-full">
              Learn More
            </button>
          </div>

          <div className="flex-1 text-center border-l border-gray-400 px-6">
            <div className="text-3xl mb-4">💲</div>
            <h3 className="font-semibold mb-2">Sell Properties</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-black text-white px-4 py-1 rounded-full">
              Learn More
            </button>
          </div>

          <div className="flex-1 text-center border-l border-gray-300 px-6">
            <div className="text-3xl mb-4">%</div>
            <h3 className="font-semibold mb-2">Rent Properties</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-black text-white px-4 py-1 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Move-in ready games */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold mb-10">
          Move-In Ready Games: <br /> Discover Your Dream Home Today
        </h2>
        <div className="flex justify-center gap-10 max-w-5xl mx-auto">
          <div>
            <img src="4.jpg" alt="" width={300} />
            <span>01 The Futuristic House</span>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur et saepe, quos veritatis reprehenderit eveniet nulla
              dolorem quae enim sed ratione magnam adipisci exercitationem nam,
              
            </p>
          </div>
          <div>
            <div>
              <img src="5.jpg" alt="" width={300} />
              <span>02 The Minimalist House</span>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur et saepe, quos veritatis reprehenderit eveniet
                nulla dolorem quae enim sed ratione magnam adipisci
                exercitationem nam,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
