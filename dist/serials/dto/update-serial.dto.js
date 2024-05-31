"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSerialDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_serial_dto_1 = require("./create-serial.dto");
class UpdateSerialDto extends (0, mapped_types_1.PartialType)(create_serial_dto_1.CreateSerialDto) {
}
exports.UpdateSerialDto = UpdateSerialDto;
//# sourceMappingURL=update-serial.dto.js.map