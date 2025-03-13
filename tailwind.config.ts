import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
const plugin = require("tailwindcss-filters");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				inter: [
					'var(--inter)',
					'sans-serif'
				],
				dancing_script: [
					'var(--dancing_script)',
					'sans-serif'
				],
				exo_2: [
					'var(--exo_2)',
					'sans-serif'
				],
				playwrite: [
					'var(--playwrite)',
					'sans-serif'
				],
				geologica: [
					'var(--geologica)',
					'sans-serif'
				],
				'bangla': ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],

			},
			keyframes: {
				swapColors1: {
					'0%, 100%': {
						color: '#f95c5c',
						boxShadow: '0px 0px 10px #f95c5c'
					},
					'33%': {
						color: '#f9e15c',
						boxShadow: '0px 0px 10px #f9e15c'
					},
					'66%': {
						color: '#f9a85c',
						boxShadow: '0px 0px 10px #f9a85c'
					}
				},
				swapColors2: {
					'0%, 100%': {
						color: '#f9e15c',
						boxShadow: '0px 0px 10px #f9e15c'
					},
					'33%': {
						color: '#f95c5c',
						boxShadow: '0px 0px 10px #f95c5c'
					},
					'66%': {
						color: '#f9a85c',
						boxShadow: '0px 0px 10px #f9a85c'
					}
				},
				swapColors3: {
					'0%, 100%': {
						color: '#f9a85c',
						boxShadow: '0px 0px 10px #f9a85c'
					},
					'33%': {
						color: '#f9e15c',
						boxShadow: '0px 0px 10px #f9e15c'
					},
					'66%': {
						color: '#f95c5c',
						boxShadow: '0px 0px 10px #f95c5c'
					}
				}
			},
			animation: {
				swapColors1: 'swapColors1 6s ease-in-out infinite',
				swapColors2: 'swapColors2 6s ease-in-out infinite',
				swapColors3: 'swapColors3 6s ease-in-out infinite'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	darkMode: "class",
	plugins: [heroui()]
};
export default config;
