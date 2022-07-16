import {
  Column, DataType, Default, Model, PrimaryKey, Table, Unique,
} from 'sequelize-typescript';

export interface IUser {
  id: string;
  cpf: string;
  password: string;
  name: string;
  createdAt: Date;
  state: string;
  country: string;
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
    id!: string;

  @Unique
  @Column(DataType.STRING)
    cpf!: string;

  @Column(DataType.STRING)
    password!: string;

  @Column(DataType.STRING)
    name!: string;

  @Default(new Date())
  @Column(DataType.DATE)
    createdAt!: Date;

  @Column(DataType.STRING)
    state!: string;

  @Column(DataType.STRING)
    country!: string;
}
