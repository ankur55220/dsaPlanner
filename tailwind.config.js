import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  extend: {
    colors: {
      // existing app theme colors
      primary: "var(--color-primary)",
      "primary-light": "var(--color-primary-light)",
      "primary-lighter": "var(--color-primary-lighter)",
      accent: "var(--color-accent)",
      "accent-light": "var(--color-accent-light)",
      bg: "var(--color-bg)",
      "bg-soft": "var(--color-bg-soft)",
      "bg-section": "var(--color-bg-section)",
      text: "var(--color-text)",
      "text-soft": "var(--color-text-soft)",
      "text-muted": "var(--color-text-muted)",

      // shadcn-ui theme tokens used in index.css
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: "hsl(var(--card))",
      "card-foreground": "hsl(var(--card-foreground))",
      popover: "hsl(var(--popover))",
      "popover-foreground": "hsl(var(--popover-foreground))",
      "primary-foreground": "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",
      "secondary-foreground": "hsl(var(--secondary-foreground))",
      muted: "hsl(var(--muted))",
      "muted-foreground": "hsl(var(--muted-foreground))",
      accent2: "hsl(var(--accent))",
      "accent2-foreground": "hsl(var(--accent-foreground))",
      destructive: "hsl(var(--destructive))",
      "destructive-foreground": "hsl(var(--destructive-foreground))",
    },

    borderColor: {
      DEFAULT: 'hsl(var(--border))',
    },

    borderRadius: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      section: "var(--radius-section)",
    },

    spacing: {
      1: "var(--space-1)",
      2: "var(--space-2)",
      3: "var(--space-3)",
      4: "var(--space-4)",
      6: "var(--space-6)",
      8: "var(--space-8)",
      12: "var(--space-12)",
      16: "var(--space-16)",
      24: "var(--space-24)",
    },

    boxShadow: {
      card: "var(--shadow-card)",
      lg: "var(--shadow-lg)",
    },

    backgroundImage: {
      "gradient-primary": "var(--gradient-primary)",
      "gradient-soft": "var(--gradient-soft)",
    },
  },
},

  plugins: [tailwindcssAnimate],
}
