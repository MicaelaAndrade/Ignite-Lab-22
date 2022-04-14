import { PrismaService } from "../../../database/prisma/prisma.service";
export declare class ProductsResolver {
    private prisma;
    constructor(prisma: PrismaService);
    product(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
}
