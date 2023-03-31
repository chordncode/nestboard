import { Module } from "@nestjs/common";
import { BoardController } from "./controller/BoardController";
import { BoardService } from "./service/BoardService";
import { Board, BoardSchema } from "src/data/Board";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Board.name, schema: BoardSchema}])
    ],
    controllers: [BoardController],
    providers: [BoardService]
})
export class BoardModule {}