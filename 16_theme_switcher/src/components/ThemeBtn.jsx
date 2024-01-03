import useTheme from "../contexts/themeContext";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e) => {
    const themeStatus = e.currentTarget.checked;
    if (themeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      htmlFor=""
    >
      <input
        type="checkbox"
        name=""
        id=""
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:"></div>
    </label>
  );
}
