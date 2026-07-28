import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsuariosService } from './usuarios.service';

import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')

export class UsuariosController {

  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()

  crear(@Body() usuario: Usuario) {

    return this.usuariosService.crear(usuario);

  }

  @Get()

  listar() {

    return this.usuariosService.listar();

  }

}