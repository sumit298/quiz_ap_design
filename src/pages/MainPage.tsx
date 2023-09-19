import Notification from "../assets/notify.svg";
import account from "../assets/account.svg";
import Dropdown from "../components/dropdown";
import DropDownMenu from "../components/dropdownMenu";
import Questions from "../components/Questions/Questions";
import Sidebar from "../components/layouts/Sidebar/sidebar";
import OuterBar from "../components/layouts/Sidebar/Outerbar";

const MainPage = () => {
  return (
    <div className="flex sm:block min-[320px]:block md:block lg:flex">
      <Sidebar />
      <div className=" bg-gray-100 w-3/5 p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="p-2 ml-2 font-semibold text-3xl">Create quiz</h2>
          <div className="flex items-center justify-between">
            <span className="bg-white p-2 rounded-full border border-blue-600">
              <img src={Notification} alt="Notification" />
            </span>
            <img src={account} width={"50px"} alt="account" className="ml-3" />
          </div>
        </div>
        <div className="flex justify-between">
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
        <DropDownMenu />
        <Questions />
        <button className="w-[40%] mx-[25%] mt-4 text-xl bg-purple font-semibold text-white rounded-lg p-3">
          Post
        </button>
      </div>
      <div className=" w-[25rem]">
        <OuterBar/>
      </div>
    </div>
  );
};

export default MainPage;
