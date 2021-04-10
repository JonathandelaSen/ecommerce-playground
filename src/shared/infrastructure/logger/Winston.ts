
import winston  from 'winston';
import appRoot from 'app-root-path';

export default class Winston implements Logger {

    private logger: winston.Logger;

    constructor() {
        const options = {
            file: {
                level: 'info',
                filename: `${appRoot}/logs/app-info.log`,
                handleExceptions: true,
                json: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                colorize: false,
            },
            fileError: {
                level: 'error',
                filename: `${appRoot}/logs/app-error.log`,
                handleExceptions: true,
                json: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                colorize: false,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true,
            },
        };
        
        this.logger = winston.loggers.add('ecommerce', {
            level: 'info',
            //format: winston.format.json(),
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File(options.file),
                new winston.transports.File(options.fileError),
                new winston.transports.Console(options.console)
            ],
            exitOnError: false, // do not exit on handled exceptions
        });
    }


    setTesting() {
        this.logger.transports.forEach((t) => {
            t.silent = true; 
        });
    }



    error(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    warn(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    help(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    data(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    info(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    debug(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    prompt(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    http(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    verbose(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    input(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };
    silly(...args: [message: string, callback: LogCallback] | [message: string, meta: any, callback: LogCallback] | [message: string, ...meta: any[]] | [message: any]): Logger {
        return this.logger.warn(args);
    };

}
