import winston from "winston";

export function getLogger(name: string) {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: name },
    transports: [
      new winston.transports.File({
        filename: `error-${name}.log`,
        level: "error",
      }),
      new winston.transports.File({ filename: `combined-${name}.log` }),
    ],
  });

  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
  return logger;
}
