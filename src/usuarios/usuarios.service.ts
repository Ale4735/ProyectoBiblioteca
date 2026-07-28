import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';

@Injectable()

export class UsuariosService {

  constructor(

    @InjectRepository(Usuario)

    private usuarioRepository: Repository<Usuario>,

  ) {}

  crear(usuario: Usuario) {

    return this.usuarioRepository.save(usuario);

  }

  listar() {

    return this.usuarioRepository.find();

  }

}