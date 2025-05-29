import React from "react";

/**
 * A button to toggle between light and dark mode.
 * @param {boolean} darkMode - Current theme state.
 * @param {Function} toggleDarkMode - Function to toggle the theme.
 */
function ThemeToggleButton({ darkMode, toggleDarkMode }) {
  return (
    <button className="mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? "☀️ Light Mode" : "🌘 Dark Mode"}
    </button>
  );
}

export default ThemeToggleButton;
