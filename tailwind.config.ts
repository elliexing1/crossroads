import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
              // Core Palette Mapped to CSS Variables
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              card: 'hsl(var(--card))',
              'card-foreground': 'hsl(var(--card-foreground))',
              popover: 'hsl(var(--popover))',
              'popover-foreground': 'hsl(var(--popover-foreground))',
              primary: 'hsl(var(--primary))',
              'primary-foreground': 'hsl(var(--primary-foreground))',
              'primary-orange': 'hsl(var(--primary-orange))',
              'primary-golden': 'hsl(var(--primary-golden))',
              secondary: 'hsl(var(--secondary))',
              'secondary-foreground': 'hsl(var(--secondary-foreground))',
              'secondary-magenta': 'hsl(var(--secondary-magenta))',
              'secondary-purple': 'hsl(var(--secondary-purple))',
              muted: 'hsl(var(--muted))',
              'muted-foreground': 'hsl(var(--muted-foreground))',
              destructive: 'hsl(var(--destructive))',
              'destructive-foreground': 'hsl(var(--destructive-foreground))',
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',

              // Backward Compatibility Aliases for Components
              paper: 'hsl(var(--background))',
              ink: 'hsl(var(--foreground))',
              accent: 'hsl(var(--primary-orange))',
              highlight: 'hsl(var(--primary))',
              'brand-green': 'hsl(var(--secondary))',
              'brand-magenta': 'hsl(var(--secondary-magenta))',
              'brand-purple': 'hsl(var(--secondary-purple))',
              'neutral-blue': '#7B9BA4',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        title: ['Space Grotesk', 'sans-serif'],
        subtitle: ['Space Grotesk', 'sans-serif'],
        highlight: ['Space Mono', 'monospace'],
        handwritten: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
