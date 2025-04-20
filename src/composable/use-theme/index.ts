import { onMounted, onUnmounted, ref } from "vue";

import type { ActiveTheme, ThemePreference } from "./types";

export default function useTheme() {
  const themePreference = ref<ThemePreference>("auto");
  const activeTheme = ref<ActiveTheme>("dark");

  const getSystemTheme = (): ActiveTheme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const applyTheme = (theme: ActiveTheme): void => {
    document.documentElement.setAttribute("data-theme", theme);
    activeTheme.value = theme;
  };

  const updateTheme = () => {
    if (themePreference.value === "auto") {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(themePreference.value);
    }
  };

  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    if (themePreference.value === "auto") {
      applyTheme(e.matches ? "dark" : "light");
    }
  };

  const init = () => {
    const savedPreference = localStorage.getItem("theme-preference") as ThemePreference | null;
    themePreference.value = savedPreference || "auto";
    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    onUnmounted(() => mediaQuery.removeEventListener("change", handleSystemThemeChange));
  };

  const toggleTheme = () => {
    if (themePreference.value === "auto") {
      themePreference.value = getSystemTheme() === "dark" ? "light" : "dark";
    } else if (themePreference.value === "dark") {
      themePreference.value = "light";
    } else {
      themePreference.value = "dark";
    }

    localStorage.setItem("theme-preference", themePreference.value);
    updateTheme();
  };

  onMounted(init);

  return {
    themePreference,
    activeTheme,
    toggleTheme,
  };
}
