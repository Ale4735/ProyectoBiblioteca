import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({

      type: 'mysql',

      host: 'localhost',

      port: 3306,

      username: 'root',

      password: 'DAMI',

      database: 'biblioteca_usuarios',

      autoLoadEntities: true,

      synchronize: true,

    }),

    UsuariosModule,

  ],

})
export class AppModule {}
