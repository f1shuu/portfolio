/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        hello: {
          words: ['hi, I\'\m Filip '],
          repeat: 0,
          writeSpeed: 0.1,
          eraseSpeed: 0
        }
      }
    })
  ]
}