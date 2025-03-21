import "reflect-metadata";
import { DataSource } from "typeorm";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

let AppDataSource: DataSource;

const initializeDatabase = async () => {
  const sqlite = new SQLiteConnection(CapacitorSQLite);
  
  const db = await sqlite.createConnection("mycashback", false, "no-encryption", 1, false);
  await db.open();

  AppDataSource = new DataSource({
    type: "capacitor",
    driver: db,
    database: "mycashback",
    entities: [],
    synchronize: true
  })

  await AppDataSource.initialize();
  return true;
}

const database = async () => {
  return AppDataSource;
}

export { initializeDatabase, database }