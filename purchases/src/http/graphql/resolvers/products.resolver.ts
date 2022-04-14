import {  Query, Resolver } from "@nestjs/graphql";
import {UseGuards} from '@nestjs/common';
import { AuthorizationGuard } from "../../auth/authorization.guard";
import {PrismaService} from "../../../database/prisma/prisma.service";
import { Product } from "../models/product";

@Resolver()
export class ProductsResolver {
    constructor(private prisma: PrismaService) {}
 @Query(() => [Product])
 @UseGuards(AuthorizationGuard)
 product() {
     return this.prisma.product.findMany()
 }
}