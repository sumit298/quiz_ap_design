import addbackground from "../../assets/addbackground.svg";
import deleteIcon from "../../assets/deleteIcon.svg";

interface OptionProps {
  option: string;
  color: string;
}

const Options: React.FC<OptionProps> = ({ option, color }) => {
  return (
    <div className="flex items-center px-4 mb-4">
      {/* Radio Button */}
      <div className={`border-2 p-1 mr-3 rounded-full border-${color} `}>
        <div className={`w-4 h-4 rounded-full bg-${color} `}></div>
      </div>
      <span className="w-[85%] rounded-lg p-2 text-lg px-4 font-semibold bg-gray-100">
        {option}
      </span>
      <div className="flex items-center gap-2 ml-2">
        <img src={addbackground} alt="addbackground" className="cursor-pointer" width={"30px"} />
        <img src={deleteIcon} alt="deleteIcon" width={"25px"} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Options;
