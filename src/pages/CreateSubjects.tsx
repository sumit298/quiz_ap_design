import Notification from "../assets/notify.svg";
import account from "../assets/account.svg";
import Dropdown from "../components/dropdown";
import Sidebar from "../components/layouts/Sidebar/sidebar";
import SubjectDropDown from "../components/SubjectsCategory/subjectsDropdown";

interface MenuItem {
  label: string;
  subMenuItems?: MenuItem[];
}

const CreateSubjects = () => {
  const menuItems: MenuItem[] = [
    {
      label: "Science",
      subMenuItems: [
        {
          label: "Chemistry",
          subMenuItems: [
            { label: "Element" },
            { label: "Chemical Reactions" },
            { label: "Organic Chemistry" },
          ],
        },
        {
          label: "Biology",
          subMenuItems: [
            { label: "Molecular Biology" },
            { label: "Evolution" },
          ],
        },
        {
          label: "Physics",
          subMenuItems: [{ label: "Gravitation" }, { label: "Optics" }],
        },
        {
          label: "Earth Science",
          subMenuItems: [{ label: "Geology" }, { label: "Oceanography" }],
        },
        {
          label: "Astronomy ",
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

      <div className="flex-1 bg-gray-100 lg:w-3/5 p-4 sm:w-4/5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="p-2 ml-2 font-semibold text-xl sm:text-3xl">Create subject</h2>
          <div className="flex items-center justify-between">
            <span className="bg-white p-2 rounded-full border border-blue-600">
              <img src={Notification} alt="Notification" />
            </span>
            <img src={account} width={"40px"} alt="account" className="ml-3" />
          </div>
        </div>
        
        {/* Class and Language Dropdowns */}
        <div className="mb-4 space-y-4">
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
          <Dropdown
            title="Language"
            options={["English", "Hindi", "Urdu", "Add new"]}
            backgroundColor="#fff"
          />
        </div>
        
        {/* Subject Dropdowns */}
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
        
        {/* Post Button */}
        <button className="w-full sm:w-[40%] mx-auto mt-4 text-lg bg-purple font-semibold text-white rounded-lg p-3">
          Post
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="w-full sm:w-[25rem]">
        <h2 className="p-4 text-2xl font-semibold mt-4">
          Create subject/topic/subtopic
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col mb-4">
            <label className="font-bold px-4" htmlFor="subject">
              Subject
            </label>
            <Dropdown
              title="Add new or select existing"
              options={["Science", "Mathematics", "History", "Add New"]}
              gap=""
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold px-4" htmlFor="subject">
              Topic
            </label>
            <Dropdown
              title="Add new or select existing"
              options={["Chemistry", "Biology", "Physics", "Add new"]}
              gap=""
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-bold px-4" htmlFor="subject">
              Subtopic
            </label>
            <Dropdown
              title="Create new"
              options={["Psychology basics", "Psychology disorders"]}
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

export default CreateSubjects;
