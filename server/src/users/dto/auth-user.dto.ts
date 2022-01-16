import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class AuthUserDto {
    @ApiProperty({example: '123', description: 'Пароль пользователя'})
    @IsString({message: 'Должен быть строкой'})
    readonly walletAddress: string;
}