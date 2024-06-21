import { Logger } from './logger'

export * as loggy from './logger'
export * from './colors'

export default new Logger({
	verbosity: 2,
})
