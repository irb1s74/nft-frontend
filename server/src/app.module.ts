import {Module} from "@nestjs/common";
import {ServeStaticModule} from "@nestjs/serve-static";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from './users/users.module';

import * as path from 'path';
import {User} from "./users/users.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // for images download
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        //
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWOD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true,
        }),
        UsersModule,
    ],
})

export class AppModule {
}