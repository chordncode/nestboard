import { Module } from '@nestjs/common';
import { BoardController } from './board/controller/BoardController';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board/BoardModule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestboard'),
    BoardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
