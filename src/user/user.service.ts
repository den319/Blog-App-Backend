import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
    ) {}

    async getUser(dto: GetUserDto) {
        const user= await this.prismaService.user.findUnique({
            where: {
                id: dto.id,
            },
            include: {
                posts: true,
            }
        });

        if(!user) throw new BadRequestException("Something went wrong! Please try again...");

        // console.log({posts: user.posts});

        return {
            user: {...user},
            posts: user.posts,
        };
    }
}
