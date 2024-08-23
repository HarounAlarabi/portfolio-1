// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        black: {
          100: '#100d25',
          200: '#090325',
        },
        white: {
          100: '#f3f3f3',
        },
        platinum: '#e6e6e9',
      },
      backgroundImage: {
        'motion-background': "url('../../images/motion-background.jpg')",
      },
      keyframes: {
        moveInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-10rem)' },
          '80%': { transform: 'translateX(1rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        moveInRight: {
          '0%': { opacity: '0', transform: 'translateX(10rem)' },
          '80%': { transform: 'translateX(1rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' },
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 30s linear infinite',
        moveInLeft: 'moveInLeft 2s ease-out',
        moveInRight: 'moveInRight 2s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeIn: 'fadeIn 1.5s ease-out',
        bounce: 'bounce 2s infinite',
      },
    },

    fontFamily: {
      arenq: ['Arenq'],
      beckman: ['Beckman'],
      mova: ['Mova'],
      overcameBold: ['Overcame Bold'],
      overcameOutline: ['Overcame Outline'],
      poppins: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      about:
        'linear-gradient(120deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 55%, transparent 55%)',

      hero: 'linear-gradient(135deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,0.95) 60%)',
      'hero-mobile':
        'linear-gradient(137deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,1) 60%)',
    },
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      xmd: '900px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
  },
  plugins: [],
};

// In your tailwind.config.js
// export default {
//   // ...other config
//   theme: {
//     extend: {
//       animation: {
//         fadeInDown: 'fadeInDown 1s ease-out',
//         fadeInUp: 'fadeInUp 1s ease-out',
//         fadeIn: 'fadeIn 1.5s ease-out',
//         bounce: 'bounce 2s infinite',
//       },
//       keyframes: {
//         fadeInDown: {
//           '0%': { opacity: '0', transform: 'translateY(-10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//     },
//   },
//   // ...other config
// };
