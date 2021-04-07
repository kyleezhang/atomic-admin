/**
 * 用户信息实体
 */
import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Default,
} from 'sequelize-typescript';
import { NOW } from 'sequelize';

@Table({
  timestamps: false,
  tableName: 'user_info',
})
export class UserInfoModule extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.TINYINT,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    field: 'account_name',
    comment: '账户名称',
    defaultValue: '',
  })
  account: string;

  @Column({
    type: DataType.STRING,
    field: 'real_name',
    comment: '真实名称',
    defaultValue: '',
  })
  realName: string;

  @Column({
    type: DataType.STRING,
    comment: '加密后密码',
    defaultValue: '',
  })
  password: string;

  @Column({
    type: DataType.STRING,
    field: 'password_salt',
    comment: '密码盐',
    defaultValue: '',
  })
  passwordSalt: string;

  @Column({
    type: DataType.STRING,
    comment: '手机号',
    defaultValue: '',
  })
  telephone: string;

  @Column({
    type: DataType.CHAR(20),
    comment: '邮箱',
    defaultValue: null,
  })
  email: string;

  @Column({
    type: DataType.TINYINT,
    comment: '用户角色，普通用户: 0,管理用户: 1;',
    defaultValue: 0,
  })
  role: number;

  @Column({
    type: DataType.TINYINT,
    field: 'user_status',
    comment: '用户状态，正常状态：0,冻结状态：1；',
    defaultValue: 0,
  })
  status: number;

  @Column({
    type: DataType.STRING,
    field: 'created_by',
    comment: '创建者，通过自己注册则默认为空',
    defaultValue: null,
  })
  createdBy: string;

  @Default(NOW)
  @Column({
    type: 'TIMESTAMP',
    field: 'created_time',
    comment: '创建时间',
  })
  createdTime: string;

  @Column({
    type: DataType.STRING,
    field: 'updated_by',
    comment: '更新人',
  })
  updatedBy: string;

  @Default(NOW)
  @Column({
    field: 'update_time',
    type: 'TIMESTAMP',
    comment: '更新时间',
  })
  updateTime: string;
}
