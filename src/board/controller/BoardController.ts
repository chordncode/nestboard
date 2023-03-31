import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Board } from "src/data/Board";

@Controller()
export class BoardController {

    @Get('board/:boardSn')
    selectBoard(@Req() req: Request, @Res() res: Response, @Param('boardSn') boardSn: number){
        return res.send(boardSn);
    }

    @Post('board')
    insertBoard(@Body() board: Board, @Res() res: Response){
        return res.json(board);
    }

}