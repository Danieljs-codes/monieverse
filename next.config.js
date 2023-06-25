/** @type {import('next').NextConfig} */
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const path = require('path')
const runtimeCaching = require('next-pwa/cache')
const isDev = process.env.NODE_ENV === 'development'

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	disable: isDev,
	buildExcludes: [/middleware-manifest.json$/],
	maximumFileSizeToCacheInBytes: 4000000,
})

const nextConfig = {
	// runtime: 'edge',
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		optimizeCss: true,
		legacyBrowsers: false,
		nextScriptWorkers: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development',
	},
	images: {
		// ADD in case you need to import SVGs in next/image component
		// dangerouslyAllowSVG: true,
		contentSecurityPolicy: 'default-src "self"; script-src "none"; sandbox;',
		domains: ['res.cloudinary.com'],
		formats: ['image/avif', 'image/webp'],
	},

	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: '@import "scss/import.scss";',
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(frag|vert)$/,
			type: 'asset/source',
		}),
			config.module.rules.push({
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							memo: true,
							dimensions: false,
							svgoConfig: {
								multipass: true,
								plugins: [
									'removeDimensions',
									'removeOffCanvasPaths',
									'reusePaths',
									'removeElementsByAttr',
									'removeStyleElement',
									'removeScriptElement',
									'prefixIds',
									'cleanupIDs',
									{
										name: 'cleanupNumericValues',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'convertPathData',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'convertTransform',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'cleanupListOfValues',
										params: {
											floatPrecision: 1,
										},
									},
								],
							},
						},
					},
				],
			})
		config.plugins.push(new DuplicatePackageCheckerPlugin())

		return config
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		]
	},
	redirects: async () => {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		]
	},
}

module.exports = () => {
	const plugins = [withBundleAnalyzer, withPWA]
	return plugins.reduce((acc, plugin) => plugin(acc), {
		...nextConfig,
	})
}
