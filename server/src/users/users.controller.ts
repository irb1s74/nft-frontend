import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {AuthUserDto} from "./dto/auth-user.dto";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post('/auth')
    auth(@Body() userDto: AuthUserDto) {
        return this.usersService.auth(userDto)
    }
}
