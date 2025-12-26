export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col text-white mx-7 bg-[#B7D6E1]">
      <header className="flex flex-col items-center">
        <div className="font-medium text-center text-6xl mt-8 max-w-2xl px-4">
          <p>More Then a Home,</p>
          <p className="mt-4">Build Your Future</p>
        </div>
        <p className="flex justify-center text-center mt-2 px-4">
          Dive into a world comfort and convenience as we connect you <br />
          the finest, ensureing a perfect getaway tailored to your presences
        </p>
      </header>

      <div className="relative mt-10 max-w-full">
        <img src="house1.png" alt="house" className="ml-0" width={1000} />

        <div className="absolute top-16 right-1/6 bg-[#88BBC3] px-4 py-3 rounded-2xl w-56 mx-auto">
          <h3>🏠 Dunial Haven Resident</h3>
          <p className="text-[14px]">1901 Thornridge Cir.Shiloh,</p>
          <p className="text-[14px]">Hawaii 81063</p>
          <button className="bg-white text-black px-3 py-1 mt-2.5 rounded-full">
            Learn More
          </button>
        </div>

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
          <button className="bg-black px-4 py-2 rounded-full">
            Find Property
          </button>
        </div>
      </div>

      <div>
        <h2>Expert Guides to finding your perfect Fit</h2>
        <div>
          <div>
            🏠
            <h3>Buy Properties</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta praesentium tenetur nostrum reiciendis, veritatis distinctio est repellendus. Quae, odio deleniti.</p>
            <button>Learn More</button>
          </div>
          <div>
            💲
            <h3>Sell Properties</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta praesentium tenetur nostrum reiciendis, veritatis distinctio est repellendus. Quae, odio deleniti.</p>
            <button>Learn More</button>
          </div>
          <div>
            <h3 className="text-black">%</h3>
            <h3>Buy Properties</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta praesentium tenetur nostrum reiciendis, veritatis distinctio est repellendus. Quae, odio deleniti.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
