import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from '../app/app.controller';

// 데코레이터 
// 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
// 그냥 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면 된다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {} 
// AppModule은 비어 있는 클래스
// 모든 것의 루트 모듈 <- 하나의 모듈에서 어플리케이션을 생성
