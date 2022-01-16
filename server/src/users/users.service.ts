import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {AuthUserDto} from "./dto/auth-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async auth(dto: AuthUserDto) {
        try {
            const [user, created] = await User.findOrCreate({
                where: {walletAddress: dto.walletAddress},
            })
            return user
        } catch (e) {
            throw new HttpException('Ошибка', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
