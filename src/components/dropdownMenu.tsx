import CustomDropdown from "./dropdown";

const DropDownMenu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-4 gap-y-4 opacity-75 py-8 px-2 w-full sm:w-[95%] rounded-xl bg-white">
      <CustomDropdown title="Class" options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "Add Class"]} />
      <CustomDropdown title="Subject" options={["Science", "Mathematics", "History", "Add Subject"]} />
      <CustomDropdown title="Topic" options={["Biology", "Chemistry", "Physics", "Add topic"]} />
      <CustomDropdown title="Sub topic" options={["Genetics", "Ecology", "Human Anatomy", "Add Subtopic"]} />
      <CustomDropdown title="Level" options={["Beginner", "Intermediate", "Advance"]} />
      <CustomDropdown title="Quiz Type" options={["Multiple choice - Single Answer", "Multiple Choice - Multiple Answers", "Yes or No", "True or False"]} />
    </div>
  );
};

export default DropDownMenu;
