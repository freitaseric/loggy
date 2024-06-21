import c from 'chalk'
import { LogLevel } from './logger'

export const colors = {
	null: c.reset,
	objects: {
		level: (level: LogLevel) => {
			if (level === LogLevel.DEBUG) return c.hex('#ff00ff')('DEBUG')
			if (level === LogLevel.ERROR) return c.hex('#ff0000')('ERROR')
			if (level === LogLevel.INFO) return c.hex('#00ffff')('INFO')
			if (level === LogLevel.SUCCESS) return c.hex('#00ff00')('SUCCESS')
			if (level === LogLevel.WARNING) return c.hex('#ffd700')('WARNING')
		},
		date: c.hex('#00bfff'),
		time: c.hex('#008b8b'),
		separator: c.hex('#c0c0c0'),
	},
	types: {
		string: c.hex('#daa520'),
		number: c.hex('#bc8f8f'),
		boolean: (...texts: boolean[]) => {
			const result: string[] = []
			for (const text of texts) {
				if (text) result.push(c.hex('#32cd32')(text))
				else result.push(c.hex('#dc143c')(text))
			}
			return result.join(' ')
		},
		object: c.hex('#7b68ee'),
	},
}

const color = c

export default color
