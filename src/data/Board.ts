import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

@Schema()
export class Board{

    @Prop()
    boardSn: number;

    @Prop()
    boardTitle: string;

    @Prop()
    boardContent: string;

    @Prop()
    boardWriter: string;

    @Prop()
    boardHit: number;

    @Prop()
    boardPw: string;

    @Prop({default: new Date(), type: mongoose.Schema.Types.Date})
    boardDt: Date;

}

export const BoardSchema = SchemaFactory.createForClass(Board);
export type BoardDocument = Board & Document;