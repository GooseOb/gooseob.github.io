/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	experimental: {
		appDir: true
	},
	images: {
		unoptimized: true
	}
};

module.exports = nextConfig;
