import type { Config } from "tailwindcss";




const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        basicos: {
          black: 'var(--basicos-black)',
          white: 'var(--basicos-white)',
        },
        neutrales: {
          100: 'var(--neutrales-100)',
          200: 'var(--neutrales-200)',
          300: 'var(--neutrales-300)',
          400: 'var(--neutrales-400)',
          50: 'var(--neutrales-50)',
          500: 'var(--neutrales-500)',
          600: 'var(--neutrales-600)',
          700: 'var(--neutrales-700)',
          800: 'var(--neutrales-800)',
          900: 'var(--neutrales-900)',
        },
        primary1: {
          100: 'var(--primary1-100)',
          200: 'var(--primary1-200)',
          300: 'var(--primary1-300)',
          400: 'var(--primary1-400)',
          50: 'var(--primary1-50)',
          500: 'var(--primary1-500)',
          600: 'var(--primary1-600)',
          700: 'var(--primary1-700)',
          800: 'var(--primary1-800)',
          900: 'var(--primary1-900)',
        },
        primary2: {
          100: 'var(--primary2-100)',
          200: 'var(--primary2-200)',
          300: 'var(--primary2-300)',
          400: 'var(--primary2-400)',
          50: 'var(--primary2-50)',
          500: 'var(--primary2-500)',
          600: 'var(--primary2-600)',
          700: 'var(--primary2-700)',
          800: 'var(--primary2-800)',
          900: 'var(--primary2-900)',
        },
        secondary1: {
          100: 'var(--secondary1-100)',
          200: 'var(--secondary1-200)',
          300: 'var(--secondary1-300)',
          400: 'var(--secondary1-400)',
          50: 'var(--secondary1-50)',
          500: 'var(--secondary1-500)',
          600: 'var(--secondary1-600)',
          700: 'var(--secondary1-700)',
          800: 'var(--secondary1-800)',
          900: 'var(--secondary1-900)',
        },
        secondary2: {
          100: 'var(--secondary2-100)',
          200: 'var(--secondary2-200)',
          300: 'var(--secondary2-300)',
          400: 'var(--secondary2-400)',
          50: 'var(--secondary2-50)',
          500: 'var(--secondary2-500)',
          600: 'var(--secondary2-600)',
          700: 'var(--secondary2-700)',
          800: 'var(--secondary2-800)',
          900: 'var(--secondary2-900)',
        },
        semantico: {
          error: {
            100: 'var(--semantico-error-100)',
            200: 'var(--semantico-error-200)',
            300: 'var(--semantico-error-300)',
            400: 'var(--semantico-error-400)',
            50: 'var(--semantico-error-50)',
            500: 'var(--semantico-error-500)',
            600: 'var(--semantico-error-600)',
            700: 'var(--semantico-error-700)',
            800: 'var(--semantico-error-800)',
            900: 'var(--semantico-error-900)',
          },
          info: {
            100: 'var(--semantico-info-100)',
            200: 'var(--semantico-info-200)',
            300: 'var(--semantico-info-300)',
            400: 'var(--semantico-info-400)',
            50: 'var(--semantico-info-50)',
            500: 'var(--semantico-info-500)',
            600: 'var(--semantico-info-600)',
            700: 'var(--semantico-info-700)',
            800: 'var(--semantico-info-800)',
            900: 'var(--semantico-info-900)',
          },
          success: {
            100: 'var(--semantico-success-100)',
            200: 'var(--semantico-success-200)',
            300: 'var(--semantico-success-300)',
            400: 'var(--semantico-success-400)',
            50: 'var(--semantico-success-50)',
            500: 'var(--semantico-success-500)',
            600: 'var(--semantico-success-600)',
            700: 'var(--semantico-success-700)',
            800: 'var(--semantico-success-800)',
            900: 'var(--semantico-success-900)',
          },
          warning: {
            100: 'var(--semantico-warning-100)',
            200: 'var(--semantico-warning-200)',
            300: 'var(--semantico-warning-300)',
            400: 'var(--semantico-warning-400)',
            50: 'var(--semantico-warning-50)',
            500: 'var(--semantico-warning-500)',
            600: 'var(--semantico-warning-600)',
            700: 'var(--semantico-warning-700)',
            800: 'var(--semantico-warning-800)',
            900: 'var(--semantico-warning-900)',
          },
        },

        boxShadow: {
          input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'body-regular': '0.875rem',
        'title-size': '2.375rem',
      },
      lineHeight: {
        'body-regular': '1.375rem',
        'title-line': '2.875rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

};

export default config;
