import { FiEdit } from "react-icons/fi";

const OuterBar = () => {
  return (
    <div>
      <div className="m-8 w-80 shadow-xl rounded-2xl bg-darkPurple h-40 flex flex-col justify-center items-center">
        <span className="text-lg  text-white font-semibold">Total Quiz</span>
        <h2 className="text-white my-2 text-4xl font-semibold">50,000</h2>
      </div>
      <h2 className="font-semibold text-2xl px-4 mb-6">Preview</h2>
      <div className="bg-gray-100 w-[90%] m-auto rounded-2xl p-4">
        <FiEdit className="float-right m-1 cursor-pointer" />
        <h2 className="p-2 font-semibold opacity-75 text-lg mt-2">
          Todoba national park known for sheltering tiger, panther and bear is
          located in:
        </h2>
        <ul className="max-w-md px-4 space-y-1 font-semibold text-lg text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Assam</li>
          <li>Chandrapur</li>
          <li>Karnataka</li>
          <li>Tamil Nadu</li>
        </ul>
      </div>
      <div className="bg-gray-100 w-[90%] m-auto rounded-2xl p-4 mt-4">
        <FiEdit className="float-right m-1 cursor-pointer" />
        <div className="flex w-full items-center">
          <div className="bg-gray-300 rounded-xl w-64 h-24"></div>
          <h2 className="p-2 font-semibold opacity-75 text-lg mt-2">
            Todoba national park known for sheltering tiger, panther and bear is
            located in:
          </h2>
        </div>
        <ul className="max-w-md px-4 space-y-1 font-bold text-lg text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Assam</li>
          <li>Chandrapur</li>
          <li>Karnataka</li>
          <li>Tamil Nadu</li>
        </ul>
      </div>
    </div>
  );
};

export default OuterBar;
