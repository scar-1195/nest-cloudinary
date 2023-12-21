import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
