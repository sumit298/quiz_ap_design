import Notification from "../assets/notify.svg";
import account from "../assets/account.svg";
import Dropdown from "../components/dropdown";
import DropDownMenu from "../components/dropdownMenu";
import Questions from "../components/Questions/Questions";
import Sidebar from "../components/layouts/Sidebar/sidebar";
import OuterBar from "../components/layouts/Sidebar/Outerbar";

const MainPage = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="p-2 ml-2 font-semibold text-xl sm:text-3xl">Create quiz</h2>
          <div className="flex items-center justify-between">
            <span className="bg-white p-2 rounded-full border border-blue-600">
              <img src={Notification} alt="Notification" />
            </span>
            <img src={account} width={"40px"} alt="account" className="ml-3" />
          </div>
        </div>
        
        {/* Language and Menu Dropdowns */}
        <div className="mb-4  flex justify-between mx-4">
          <Dropdown
            title="Language"
            options={["English", "Hindi", "Urdu", "Add new"]}
            backgroundColor="#fff"
          />
          <Dropdown
            title="..."
            options={["Add Language", "Create Subject", "Create topic", "Create Subtopic"]}
            backgroundColor="#fff"
            gap="0"
          />
        </div>
        
        {/* Dropdown Menu and Questions */}
        <DropDownMenu />
        <Questions />

        {/* Post Button */}
        <button className="w-full  sm:w-[40%] m-auto lg:ml-[30%]  mt-4 text-lg bg-purple font-semibold text-white rounded-lg p-3">
          Post
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="w-full sm:w-[25rem]">
        <OuterBar />
      </div>
    </div>
  );
};

export default MainPage;
