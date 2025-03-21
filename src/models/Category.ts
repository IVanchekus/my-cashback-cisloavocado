import { BaseModel } from "./BaseModel";

export class Category extends BaseModel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    super();
    this.id = id;
    this.name = name;
  }

  static async create(name: string): Promise<void> {
    await this.createRecord('Categories', ['name'], [name])
  }

}