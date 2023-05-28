/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./resources/ts/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
	    require('@tailwindcss/typography'),
	    require('@tailwindcss/aspect-ratio')
    ],
}
