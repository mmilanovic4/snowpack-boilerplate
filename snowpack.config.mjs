export default {
	buildOptions: {
		out: 'dist'
	},
	mount: {
		src: { url: '/' },
		static: { url: '/' }
	},
	optimize: {
		bundle: true,
		minify: true,
		target: 'es2018'
	},
	plugins: ['@snowpack/plugin-sass'],
	devOptions: {
		port: 1234
	}
};
