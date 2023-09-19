import logo from "../../../assets/logo.svg";
import exam from "../../../assets/exam.svg";
import calendar from "../../../assets/calendar.svg";
import author from "../../../assets/author.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[15rem]">
      {/* Content for div1 */}
      <div className="p-4 my-4">
        <Link to="/">
          <img width={"150px"} src={logo} alt={logo} />
        </Link>
      </div>
      {/* Menu */}
      <div>
        <div className="flex flex-col px-4 m-2 gap-2">
          <Link to="/">
            <button
              className="flex outline-none items-center enabled:bg-purple enabled:text-white hover:text-white p-2 rounded-lg w-full"
              autoFocus={true}
            >
              <img
                className="text-sm"
                width={"25px"}
                src={calendar}
                alt="calendar"
              />
              <span className="mx-1 text-sm font-semibold">Quiz</span>
            </button>
          </Link>
          <Link to="/subjects">
            <button className="flex items-center hover:bg-purple hover:text-white p-2 rounded-lg w-full">
              {" "}
              <img src={exam} width={"25px"} alt="exam" />{" "}
              <span className="font-semibold text-sm mx-1">Add Subjects</span>
            </button>
          </Link>
          <Link to="/language">
          <button className="flex items-center hover:bg-purple hover:text-white p-2 rounded-lg w-full">
            {" "}
            <img src={author} width={"25px"} alt="exam" />{" "}
            <span className="font-semibold text-sm mx-1">Add Language</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
