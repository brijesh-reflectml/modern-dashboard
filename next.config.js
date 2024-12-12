/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.deepai.org'],
  },
  mode: 'jit',
  purge: ['./src/**/*.{html,js}'],
  theme: {
      extend: {},
  },
  plugins: [],
}

module.exports = nextConfig 