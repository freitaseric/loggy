import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/'],
	format: ['esm'],
	dts: true,
	minify: true,
	clean: true,
})
