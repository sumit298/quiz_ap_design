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
    <div className="flex sm:block min-[320px]:block md:block lg:flex">
      <Sidebar />
      <div className=" bg-gray-100 sm:w-1/2 md:w-8/12 min-[320px]:w-8/12 lg:w-3/5 p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="p-2 mx-2 font-semibold text-3xl">Add Language</h2>
          <div className="flex items-center justify-between">
            <span className="bg-white p-2 rounded-full border border-blue-600">
              <img src={Notification} alt="Notification" />
            </span>
            <img src={account} width={"50px"} alt="account" className="ml-3" />
          </div>
        </div>
        <div className="flex justify-between sm:w-full sm:flex-wrap sm:gap-y-2">
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
          <div className="flex lg:flex items-center bg-white rounded-lg mr-4">
            <BsSearch className="ml-4" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Language"
              className="py-2 px-3  font-semibold outline-none text-lg rounded-lg"
            />
          </div>
        </div>
        <div className="p-4 bg-white mx-4 mt-4 rounded-lg">
          <h2 className="text-xl font-bold p-4 opacity-75">Subject</h2>
          {menuItems.map((menuItem: any, index: number) => (
            <SubjectDropDown
              key={index}
              label={menuItem.label}
              subMenuItems={menuItem.subMenuItems}
              toggle={true}
            />
          ))}
        </div>
        <div className="p-4 bg-white mx-4 mt-4 rounded-lg">
          {urduItems.map((menuItem: any, index: number) => (
            <SubjectDropDown
              key={index}
              label={menuItem.label}
              toggle={false}
            />
          ))}
        </div>
        <div className="p-4 bg-white mx-4 mt-4 rounded-lg">
          {hindiItems.map((menuItem: any, index: number) => (
            <SubjectDropDown
              key={index}
              label={menuItem.label}
              toggle={false}
            />
          ))}
        </div>
        <div className="p-4 bg-white mx-4 mt-4 rounded-lg">
          {PunjabiItems.map((menuItem: any, index: number) => (
            <SubjectDropDown
              key={index}
              label={menuItem.label}
              toggle={false}
            />
          ))}
        </div>

        <button className="w-[40%] mx-[25%] mt-4 text-xl bg-purple font-semibold text-white rounded-lg p-3">
          Post
        </button>
      </div>
      <div className=" w-[25rem]">
        <h2 className="p-4 text-2xl font-semibold mt-4">Add Language</h2>
        <div>
          <div className="flex flex-col mt-4">
            <label className="font-bold px-4" htmlFor="subject">
              Language
            </label>
            <Dropdown
              title="Add new or select existing"
              options={["English", "Hindi", "Urdu", "Add new"]}
              gap=""
            />

            <button className="w-[30%] mx-[35%] mt-4 text-xl bg-purple font-semibold text-white rounded-lg p-2">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLanguage;
