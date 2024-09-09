"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: [
            "Accepted",
            "Authorization",
            "Content-Type",
            "X-requested-with",
            "apollo-require-preflight",
        ],
        methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        exceptionFactory: (errors) => {
            const formattedErrors = errors.reduce((accumulator, error) => {
                accumulator[error.property] = Object.values(error.constraints).join(", ");
                return accumulator;
            }, {});
            throw new common_1.BadRequestException(formattedErrors);
        },
    }));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map