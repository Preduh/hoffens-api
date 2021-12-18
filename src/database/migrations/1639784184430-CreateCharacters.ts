import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCharacters1639784184430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "characters",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "hero",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "identity",
            type: "varchar",
          },
          {
            name: "secret_identity",
            type: "boolean",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "age",
            type: "numeric",
          },
          {
            name: "height",
            type: "numeric",
          },
          {
            name: "weight",
            type: "numeric",
          },
          {
            name: "eyes",
            type: "varchar",
          },
          {
            name: "hair",
            type: "varchar",
          },
          {
            name: "affiliate_group",
            type: "varchar",
          },
          {
            name: "base_of_operations",
            type: "varchar",
          },
          {
            name: "power_level",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_characters_user",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("characters");
  }
}
