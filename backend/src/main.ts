import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }))
  
  const options = new DocumentBuilder().setTitle("Teste Técnico Share Energy").setDescription("API para cadastro de Admins e Clientes").setVersion("1.0").build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.API_PORT || 4000);
}
bootstrap();
