import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./model/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Senac@2021",
  database: "midia_social",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
