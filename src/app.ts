import Fastify from "fastify";

const NODE_ENV = process.env.NODE_ENV ?? "production";

const loggerOpt =
    NODE_ENV === "development" ?
        { transport: { target: "pino-pretty", options: { colorize: true } }, enabled: true } :
        true;

const fastify = Fastify({
    logger: loggerOpt
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
