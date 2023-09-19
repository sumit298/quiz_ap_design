import Notification from "../assets/notify.svg";
import account from "../assets/account.svg";
import Dropdown from "../components/dropdown";
import Sidebar from "../components/layouts/Sidebar/sidebar";
import SubjectDropDown from "../components/SubjectsCategory/subjectsDropdown";
import { BsSearch } from "react-icons/bs";

interface MenuItem {
  label: string;
  subMenuItems?: MenuItem[];
}

const CreateLanguage = () => {
  const urduItems: MenuItem[] = [
    {
      label: "Urdu",
    },
  ];
  const hindiItems: MenuItem[] = [
    {
      label: "Hindi",
    },
  ];
  const PunjabiItems: MenuItem[] = [
    {
      label: "Punjabi",
    },
  ];
  const menuItems: MenuItem[] = [
    {
      label: "English",
      subMenuItems: [
        {
          label: "Science",
          subMenuItems: [
            { label: "Element" },
            { label: "Chemical Reactions" },
            { label: "Organic Chemistry" },
          ],
        },
        {
          label: "English",
          subMenuItems: [
            { label: "Molecular Biology" },
            { label: "Evolution" },
          ],
        },
        {
          label: "Social Science",
          subMenuItems: [{ label: "Gravitation" }, { label: "Optics" }],
        },
        {
          label: "Hindi",
          subMenuItems: [{ label: "Geology" }, { label: "Oceanography" }],
        },
        {
          label: "Maths",
          subMenuItems: [{ label: "Astrophysics" }, { label: "Cosmology" }],
        },
      ],
    },
    {
      label: "Mathematics",
      subMenuItems: [
        { label: "Algebra" },
        { label: "Calculus" },
        { label: "Trigonometry" },
      ],
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row">
    {/* Sidebar */}
    <Sidebar />

    <div className="flex-1 bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="p-2 mx-2 font-semibold text-xl sm:text-3xl">Add Language</h2>
        <div className="flex items-center justify-between">
          <span className="bg-white p-2 rounded-full border border-blue-600">
            <img src={Notification} alt="Notification" />
          </span>
          <img src={account} width={"40px"} alt="account" className="ml-3" />
        </div>
      </div>
      
      {/* Search and Dropdown */}
      <div className="mb-4 flex items-center justify-between">
        <Dropdown
          title="Class"
          options={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "Add new class",
          ]}
          backgroundColor="#fff"
        />
        <div className="flex items-center bg-white rounded-lg mt-2">
          <BsSearch className="ml-2" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Language"
            className="py-2 px-3 font-semibold outline-none text-lg rounded-lg w-full"
          />
        </div>
      </div>
      
      {/* Subject Dropdowns */}
      <div className="space-y-4 bg-white">
        {menuItems.map((menuItem: any, index: number) => (
          <SubjectDropDown
            key={index}
            label={menuItem.label}
            subMenuItems={menuItem.subMenuItems}
            toggle={true}
          />
        ))}
      </div>
      
      {/* Additional Language Dropdowns */}
      <div className="space-y-4">
        {urduItems.map((menuItem: any, index: number) => (
          <SubjectDropDown
            key={index}
            label={menuItem.label}
            toggle={false}
          />
        ))}
        {hindiItems.map((menuItem: any, index: number) => (
          <SubjectDropDown
            key={index}
            label={menuItem.label}
            toggle={false}
          />
        ))}
        {PunjabiItems.map((menuItem: any, index: number) => (
          <SubjectDropDown
            key={index}
            label={menuItem.label}
            toggle={false}
          />
        ))}
      </div>

      {/* Post Button */}
      <button className="w-full sm:w-[40%] mx-auto mt-4 text-lg bg-purple font-semibold text-white rounded-lg p-3">
        Post
      </button>
    </div>

    {/* Right Sidebar */}
    <div className="w-full sm:w-[25rem]">
      <h2 className="p-4 text-xl font-semibold mt-4">Add Language</h2>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col w-[95%] m-auto">
          <label className="font-bold" htmlFor="subject">
            Language
          </label>
          <Dropdown
            title="Add new or select existing"
            options={["English", "Hindi", "Urdu", "Add new"]}
            gap=""
          />
          <button className="w-full sm:w-[30%] mx-auto mt-4 text-lg bg-purple font-semibold text-white rounded-lg p-2">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CreateLanguage;
