"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacters1639784184430 = void 0;
const typeorm_1 = require("typeorm");
class CreateCharacters1639784184430 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("characters");
    }
}
exports.CreateCharacters1639784184430 = CreateCharacters1639784184430;
