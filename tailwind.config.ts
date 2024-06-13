import type { Config } from "tailwindcss"

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        MainHeading: "36px",
        SubHeading: "24px",
        Paragraph: "16px",
        CardHeading: "20px",
        buttonText: "16px",
      },
      lineHeight: {
        MainHeading: "40px",
        SubHeading: "32px",
        Paragraph: "24px",
        CardHeading: "28px",
        buttonText: "24px",
      },
      fontWeight: {
        MainHeading: "800",
        SubHeading: "700",
        Paragraph: "400",
        CardHeading: "600",
        buttonText: "500",
      },
      colors: {
        MainHeading: "#f7c100",
        SubHeading: "#254736",
        black: "#00000",
        white: "#fff",
        yellow: "#f7c100",
        gray: "#254736"
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}






// necessary colors for the shadcn library if required

// border: "hsl(var(--border))",
// input: "hsl(var(--input))",
// ring: "hsl(var(--ring))",
// background: "hsl(var(--background))",
// foreground: "hsl(var(--foreground))",
// primary: {
//   DEFAULT: "hsl(var(--primary))",
//   foreground: "hsl(var(--primary-foreground))",
// },
// secondary: {
//   DEFAULT: "hsl(var(--secondary))",
//   foreground: "hsl(var(--secondary-foreground))",
// },
// destructive: {
//   DEFAULT: "hsl(var(--destructive))",
//   foreground: "hsl(var(--destructive-foreground))",
// },
// muted: {
//   DEFAULT: "hsl(var(--muted))",
//   foreground: "hsl(var(--muted-foreground))",
// },
// accent: {
//   DEFAULT: "hsl(var(--accent))",
//   foreground: "hsl(var(--accent-foreground))",
// },
// popover: {
//   DEFAULT: "hsl(var(--popover))",
//   foreground: "hsl(var(--popover-foreground))",
// },
// card: {
//   DEFAULT: "hsl(var(--card))",
//   foreground: "hsl(var(--card-foreground))",
// },


// borderRadius: {
//   lg: "var(--radius)",
//   md: "calc(var(--radius) - 2px)",
//   sm: "calc(var(--radius) - 4px)",
// },