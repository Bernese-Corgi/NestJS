import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // await NestFactory.create(AppModule)을 호출하고
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, // 유저가 보낸 값을 원하는 타입으로 변환?
  }))
  await app.listen(3000); // 어플리케이션은 3000번의 포트를 리스닝
}
bootstrap();
