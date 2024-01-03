import students from "../assets/students.jpg";

export default function Card() {
  return (
    <div className="w-full bg-white border pb-2 bordergra rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img src={students} alt="product_image1" className="p-8 rounded-t-lg" />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h5>
        </a>
        <div className="flex items-center mt-2 5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            Jay Jay Ram Krushna Hari
          </svg>
        </div>
        <div className="flex justify-between items-center w-full my-3">
          <p className="text-slate-950 text-xl dark:text-white">$599</p>
          <button className="py-2 px-3 rounded-lg text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
