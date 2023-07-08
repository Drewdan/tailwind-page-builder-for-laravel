/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./resources/ts/**/*.{vue,js,ts,jsx,tsx}",
    "./resources/views/**/*.php",
  "./resources/views/components/**/*.{php,blade.php}",
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
