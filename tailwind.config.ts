import type { Config } from 'tailwindcss'

export default {
  content: [
	'./app/**/*.{ts,tsx}',
	'./components/**/*.{ts,tsx}',
  ],
  theme: {
	extend: {
	  colors: {
		faithBlue: '#0B3D91',
		gold: '#F4B400',
		emerald: '#2E7D32',
	  },
	  fontFamily: {
		heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
		body: ['Inter', 'ui-sans-serif', 'system-ui'],
		scripture: ['Cormorant Garamond', 'serif'],
	  },
	},
  },
  plugins: [],
} satisfies Config
