import { Module } from "@nestjs/common";
import { ProdutoController } from "./controller/produto.controller";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "../categoria/categoria.module";
import { CategoriaService } from "../categoria/services/categoria.service";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule { }