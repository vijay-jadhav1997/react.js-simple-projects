import useTheme from "../contexts/themeContexts";

function TogglerBtn() {
  const { themeToggler, theme } = useTheme();

  return (
    <div className="btnContainer">
      <div className="darkMode">Dark Mode</div>
      <div className="toggleBtn" onClick={themeToggler}>
        <div className="toggler">{theme === "light-theme" ? "🌞" : "🌙"}</div>
      </div>
    </div>
  );
}

export default TogglerBtn;
