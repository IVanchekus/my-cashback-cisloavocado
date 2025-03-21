import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from "@capacitor-community/sqlite";

export abstract class BaseModel {
  protected static sqlite: SQLiteConnection | null = null;
  protected static dbName: string = 'my_cashback'

  protected static async getDBConnection(): Promise<SQLiteDBConnection> {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    const db = await this.sqlite.createConnection(this.dbName, false, 'no-encryption', 1, false);
    await db.open();
    return db;
  }

  protected static async closeDBConnection(): Promise<void> {
    await this.sqlite?.closeConnection(this.dbName, false);
    this.sqlite = null;
  }

  protected static async runOperation<T>(operation: (db: SQLiteDBConnection) => Promise<T>): Promise<T> {
    const db = await this.getDBConnection();
    try {
      const result = await operation(db);
      return result;
    } finally {
      await this.closeDBConnection();
    }
  }

  protected static async createRecord(tableName: string, fields: string[], values: any[]): Promise<void> {
    const placeholders = fields.map(() => '?').join(', ');
    const query = `INSERT INTO ${tableName} (${fields.join(', ')}) VALUES (${placeholders});`;
    
    await this.runOperation(async (db) => {
      await db.run(query, values);
    })
  }
}