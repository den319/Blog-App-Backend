import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const formattedErrors= errors.reduce((accumulator, error) => {
          accumulator[error.property]= Object.values(error.constraints).join(", ");
          return accumulator;
        }, {});

        throw new BadRequestException(formattedErrors);
      },
    }),
  );

  await app.listen(5000);
}
bootstrap();
