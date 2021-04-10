import Winston from "./Winston";

export default class LoggerStream {

	private logger: Winston;

	constructor(logger: Winston) {
		this.logger = logger;
	}
	
	write(message: string) {
		this.logger.info(message.substring(0, message.lastIndexOf("\n")));
	}
}
