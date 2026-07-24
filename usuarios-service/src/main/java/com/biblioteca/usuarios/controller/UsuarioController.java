package com.biblioteca.usuarios.controller;
import com.biblioteca.usuarios.model.Usuario;
import com.biblioteca.usuarios.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para gestionar las operaciones de usuarios.
 */
@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*") // Permite conexiones desde el frontend
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    /**
     * Registrar un nuevo usuario.
     */
    @PostMapping
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    }

    /**
     * Consultar todos los usuarios registrados.
     */
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioService.listarUsuarios();
    }
}