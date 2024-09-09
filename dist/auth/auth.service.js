"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bycrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prismaService, jwtSerivce, configService) {
        this.prismaService = prismaService;
        this.jwtSerivce = jwtSerivce;
        this.configService = configService;
    }
    async createToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = await this.configService.get("JWT_SECRET");
        const token = await this.jwtSerivce.signAsync(payload, {
            secret: secret,
            expiresIn: "60m",
        });
        return token;
    }
    async register(dto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (user)
            throw new common_1.BadRequestException("This email has already been taken!");
        const hash = await bycrypt.hash(dto.password, 10);
        const newUser = await this.prismaService.user.create({
            data: {
                ...dto,
                password: hash,
            }
        });
        if (!newUser)
            throw new common_1.BadRequestException("Something went wrong! Please try again...");
        return newUser;
    }
    async login(dto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user)
            throw new common_1.BadRequestException("Email does not exists!");
        const passwordMatch = await bycrypt.compare(dto.password, user.password);
        if (!passwordMatch)
            throw new common_1.BadRequestException("Incorrect password!");
        const token = await this.createToken(user.id, user.email);
        const mappedUser = {
            ...user,
        };
        return {
            user: mappedUser,
            accessToken: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map