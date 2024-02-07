import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const dataSource = new DataSource({
    url: process.env.TYPEORM_URL, 
    type: 'postgres',
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: process.env.TYPEORM_SYN === 'true',
    migrations: [process.env.TYPEORM_MIGRATIONS],
});