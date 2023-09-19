import addbackground from "../../assets/addbackground.svg";
import Options from "./Options";
const Questions = () => {
  return (
    <div className="py-8 px-4 z-10  w-[95%] rounded-xl bg-white m-auto mb-8">
      <h2 className="mb-4 text-2xl px-4 font-bold">Question</h2>
      <div className="flex justify-between px-4 mb-4">
        <h2 className="w-[90%] rounded-lg p-2 text-lg px-4 font-semibold bg-gray-100">
          Question
        </h2>
        <img src={addbackground} alt="addbackground" width={"35px"} />
      </div>
      <div>
        <h2 className="mb-4 text-2xl px-4 font-bold">Options:</h2>
        <Options option="Option A" color="gray-400" />
        <Options option="Option B" color="purple"/>
        <Options option="Option C" color="gray-400" />
        <Options option="Option D" color="gray-400"/>
      </div>
      <h2 className="float-right  text-purple opacity-1 cursor-pointer font-bold text-lg mr-3 mb-4">
        Add another Option
      </h2>
    </div>
  );
};

export default Questions;
