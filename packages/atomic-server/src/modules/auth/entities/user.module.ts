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
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'user_info',
})
export class UserInfoModule extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.BIGINT })
  id: number;

  @Column({
    type: DataType.STRING,
    field: 'account_name',
    comment: '账户名称',
  })
  accountName: string;

  @Column({
    type: DataType.STRING,
    field: 'real_name',
    comment: '真实名称',
  })
  realName: string;

  @Column({
    type: DataType.STRING,
    comment: '加密后密码',
  })
  password: string;

  @Column({
    type: DataType.STRING,
    field: 'password_salt',
    comment: '密码盐',
  })
  passwordSalt: string;

  @Column({
    type: DataType.STRING,
    comment: '手机号',
  })
  telephone: string;

  @Column({
    type: DataType.TINYINT,
    comment: '用户角色',
  })
  role: number;

  @Column({
    type: DataType.TINYINT,
    field: 'user_status',
    comment: '用户状态，默认登出状态',
    defaultValue: 0,
  })
  userStatus: number;

  @Column({
    type: DataType.STRING,
    field: 'created_by',
    comment: '创建者',
  })
  createdBy: string;

  @Column({
    type: DataType.DATE,
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

  @Column({
    type: DataType.DATE,
    field: 'update_time',
    comment: '更新时间',
  })
  updateTime: string;
}
