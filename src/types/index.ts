import { Prisma, User, UserRole } from '@prisma/client';

export interface ActionResponse<R, E> {
    result: R;
    errors: E;
}

export interface Auth {
    accessToken: string|null;
    user: Prisma.UserGetPayload<{
        include: { role: true }
    }>;
}