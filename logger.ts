import { colors } from './colors'

export interface LoggerOptions {
	verbosity: number
	locale?: string
	pretty?: boolean
}

export enum LogLevel {
	DEBUG = 0,
	ERROR = 1,
	INFO = 2,
	SUCCESS = 3,
	WARNING = 4,
}

export class Logger {
	private _verbosity: number
	private _locale: string | undefined
	private _pretty: boolean | undefined

	constructor(options: Partial<LoggerOptions>) {
		this._verbosity = options.verbosity ?? 2
		this._locale = options.locale
		this._pretty = options.pretty
	}

	public debug(...messages: (string | number | boolean | object)[]) {
		this.log(LogLevel.DEBUG, ...messages)
	}
	public error(...messages: (string | number | boolean | object)[]) {
		this.log(LogLevel.ERROR, ...messages)
	}
	public info(...messages: (string | number | boolean | object)[]) {
		this.log(LogLevel.INFO, ...messages)
	}
	public success(...messages: (string | number | boolean | object)[]) {
		this.log(LogLevel.SUCCESS, ...messages)
	}
	public warning(...messages: (string | number | boolean | object)[]) {
		this.log(LogLevel.WARNING, ...messages)
	}

	public log(
		level: LogLevel,
		...tokens: (string | number | boolean | object)[]
	): void {
		const parsedObjects = this._parseObjects(level)
		const parsedMessage = this._parseMessage(tokens)

		console.info(parsedObjects, parsedMessage)
	}

	private _parseMessage(tokens: (string | number | boolean | object)[]) {
		const coloredTokens: string[] = []

		for (const token of tokens) {
			if (typeof token === 'string') {
				coloredTokens.push(colors.types.string(token))
			} else if (typeof token === 'number') {
				coloredTokens.push(colors.types.number(token))
			} else if (typeof token === 'boolean') {
				coloredTokens.push(colors.types.boolean(token))
			} else if (typeof token === 'object') {
				coloredTokens.push(
					colors.types.object(
						this._pretty
							? `\n${JSON.stringify(token, null, 2)}\n`
							: JSON.stringify(token),
					),
				)
			} else {
				coloredTokens.push(colors.null(token))
			}
		}

		return coloredTokens.join(' ')
	}

	private _parseObjects(level: LogLevel) {
		const now = new Date()
		let parsedObjects = ''

		if (this._verbosity === 0) {
			const time = colors.objects.date(now.toLocaleTimeString(this._locale))

			parsedObjects = `${colors.objects.separator('[')}${colors.objects.level(level)}${colors.objects.separator(']')} ${time} ${colors.objects.separator('|')}`
		} else if (this._verbosity === 1) {
			const date = colors.objects.date(now.toLocaleDateString(this._locale))
			const time = colors.objects.date(now.toLocaleTimeString(this._locale))

			parsedObjects = `${colors.objects.separator('[')}${colors.objects.level(level)}${colors.objects.separator(']')} ${date} ${time} ${colors.objects.separator('|')}`
		} else if (this._verbosity === 2) {
			const date = colors.objects.date(now.toLocaleDateString(this._locale))
			const time = colors.objects.date(now.toLocaleTimeString(this._locale))

			parsedObjects = `${colors.objects.level(level)} ${colors.objects.separator('-')} ${date} ${time} ${colors.objects.separator('|')}`
		} else {
			const date = colors.objects.date(now.toLocaleDateString(this._locale))
			const time = colors.objects.date(now.toLocaleTimeString(this._locale))

			parsedObjects = `${colors.objects.level(level)} ${colors.objects.separator('-')} ${date} ${colors.objects.separator('at')} ${time} ${colors.objects.separator('|')}`
		}

		return parsedObjects
	}
}
