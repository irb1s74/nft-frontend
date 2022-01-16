import {Column, Table, DataType, Model} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    walletAddress: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Индификатор пользователя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '0x1231...', description: 'Email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    walletAddress: string;

    @ApiProperty({example: 'irb1s', description: 'Никнэйм пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    nickname: string;

    @ApiProperty({example: "Я люблю пить чай", description: "Информация о пользователе"})
    @Column({type: DataType.STRING, allowNull: true,})
    about: string;

    @ApiProperty({example: 'Avatar url', description: 'Аватар пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    avatar: string;

    @ApiProperty({example: 'banner url', description: 'Банер пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    banner: string;

    //
    // @HasMany(() => Post)
    // posts: Post[];
    //
    // @HasMany(() => likes)
    // likes: []

}