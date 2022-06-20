import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/user.entity"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: [UserEntity],
    dropSchema: true,
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: []
})


