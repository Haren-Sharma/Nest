import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true //validator will strip validated (returned) object of any properties that do not use any validation decorators.
    }),
  );
  await app.listen(3000);
}
bootstrap();
