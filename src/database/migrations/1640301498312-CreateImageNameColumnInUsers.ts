import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateImageNameColumnInUsers1640301498312
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "image_name",
        type: "varchar",
        isUnique: true,
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "image_name");
  }
}
