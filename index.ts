import { MightLogger } from './logger'

export * as loggy from './logger'
export * from './colors'

export default new MightLogger({
	verbosity: 2,
})
