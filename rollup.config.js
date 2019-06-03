import { writeFileSync } from 'fs'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue2'
import css from 'rollup-plugin-css-only'
import uglify from 'rollup-plugin-uglify'
import { renderSync } from 'node-sass'
import babel from 'rollup-plugin-babel'
import { minify } from 'csso'


const plugins = [
	vue({
		autoStyles: false,
		styleToImport: true
	}),
	css({
		output(sass) {
			const css = renderSync({
				data: sass
			}).css.toString()
			const source = minify(css).css
			const path = `./dist/index.min.css`

			writeFileSync(path, source)
		}
	}),
	buble(),
	babel({
		exclude: 'node_modules/**' // 只编译我们的源代码
	}),
	uglify()
]

export default {
	entry: './src/index.js',
	plugins,
	output: {
		file: './dist/index.min.js',
		format: 'umd',
		name: 'vueZToast'
	}
}