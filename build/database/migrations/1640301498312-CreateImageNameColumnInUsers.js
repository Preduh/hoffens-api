"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImageNameColumnInUsers1640301498312 = void 0;
const typeorm_1 = require("typeorm");
class CreateImageNameColumnInUsers1640301498312 {
    async up(queryRunner) {
        await queryRunner.addColumn("users", new typeorm_1.TableColumn({
            name: "image_name",
            type: "varchar",
            isUnique: true,
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn("users", "image_name");
    }
}
exports.CreateImageNameColumnInUsers1640301498312 = CreateImageNameColumnInUsers1640301498312;
