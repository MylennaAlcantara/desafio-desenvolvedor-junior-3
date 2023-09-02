import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioModel } from "src/usuario/usuario.model";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService{
    constructor(
        private readonly usuarioRepository: UsuarioService,
        private jwtService: JwtService
    ){}

    async validarUsuario(id: number, senha: string){
        const user = await this.usuarioRepository.getUsuarioId(id);
        if(!user){
            throw new UnauthorizedException("Usuario e/ou senha invalidos!")
        }
        if(user.senha === senha){
            return await this.gerarToken(user);
        }
        throw new UnauthorizedException("Usuario e/ou senha invalidos!")
    }

    async gerarToken(payload: UsuarioModel){
        return {
            access_token: this.jwtService.sign(
              { id: payload.id },
              {
                secret: '123456abcd',
                expiresIn: '120s',
              },
            ),
          };
    }

}