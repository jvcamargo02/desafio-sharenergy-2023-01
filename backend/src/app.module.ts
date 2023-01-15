import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://root:root@localhost:${process.env.DB_PORT}/teste_share_energy_joao_camargo?authSource=admin`),
    ClientsModule],
  controllers: [],
  providers: [],
})
  
export class AppModule {}
