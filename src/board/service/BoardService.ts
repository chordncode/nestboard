import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Board, BoardDocument } from "src/data/Board";

@Injectable()
export class BoardService{
    constructor(@InjectModel(Board.name) private board: Model<BoardDocument>){}


}