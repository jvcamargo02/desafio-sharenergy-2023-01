import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { SessionValidatorMiddleware } from './ensure-authenticated/ensure-authenticated.middleware';
import { ClientsController } from './clients/clients.controller';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://root:root@localhost:${process.env.DB_PORT}/teste_share_energy_joao_camargo?authSource=admin`),
    ClientsModule],
  controllers: [],
  providers: [SessionValidatorMiddleware],
})
  
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SessionValidatorMiddleware).forRoutes(ClientsController);
  }
}
