import { ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string;
        password: string;
        phone: string;
    }[]>;
    findOne(id: ParseIntPipe): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
        phone: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        phone: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        phone: string;
    }>;
}
