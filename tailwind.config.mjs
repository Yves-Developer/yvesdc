import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: {
          DEFAULT: "var(--muted)",
          light: "var(--muted-light)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--muted)",
            "--tw-prose-headings": "var(--foreground)",
            "--tw-prose-lead": "var(--muted)",
            "--tw-prose-links": "var(--foreground)",
            "--tw-prose-bold": "var(--foreground)",
            "--tw-prose-counters": "var(--muted-light)",
            "--tw-prose-bullets": "var(--muted-light)",
            "--tw-prose-hr": "var(--border)",
            "--tw-prose-quotes": "var(--foreground)",
            "--tw-prose-quote-borders": "var(--border)",
            "--tw-prose-captions": "var(--muted-light)",
            "--tw-prose-code": "var(--foreground)",
            "--tw-prose-pre-code": "var(--foreground)",
            "--tw-prose-pre-bg": "var(--surface)",
            "--tw-prose-th-borders": "var(--border)",
            "--tw-prose-td-borders": "var(--border)",
            fontSize: "17px",
            lineHeight: "1.75",
            a: {
              fontWeight: "500",
              textDecorationColor: "var(--border)",
              textUnderlineOffset: "4px",
              "&:hover": { textDecorationColor: "var(--foreground)" },
            },
            pre: { border: "1px solid var(--border)" },
            ":not(pre) > code": {
              fontWeight: "500",
              fontSize: "0.875em",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "0.15em 0.4em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [typography],
};
