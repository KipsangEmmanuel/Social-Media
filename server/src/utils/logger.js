import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorizes: true,
            ignore: 'pid, hostname',
        },
    },
});

export default logger;