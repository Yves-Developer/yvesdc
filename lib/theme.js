export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before the page paints, so a saved choice never flashes.
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;
