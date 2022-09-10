import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // await NestFactory.create(AppModule)을 호출하고
  await app.listen(3000); // 어플리케이션은 3000번의 포트를 리스닝
}
bootstrap();
