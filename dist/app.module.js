"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const post_module_1 = require("./post/post.module");
const auth_strategy_1 = require("./auth/strategy/auth.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                context: ({ req }) => ({ req }),
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), "src/schema.gql"),
                sortSchema: true,
                playground: false,
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()]
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            post_module_1.PostModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_strategy_1.JwtStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map