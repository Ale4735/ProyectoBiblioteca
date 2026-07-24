package com.biblioteca.usuarios.repository;

import com.biblioteca.usuarios.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio encargado de acceder a la tabla usuarios.
 * Spring Data JPA implementa automáticamente los métodos básicos.
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}