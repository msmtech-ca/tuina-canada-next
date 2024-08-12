import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create roles
    const adminRole = await prisma.role.create({
        data: {
            title: 'ADMIN',
            accessLevel: 1,
        },
    });

    const memberRole = await prisma.role.create({
        data: {
            title: 'MEMBER',
            accessLevel: 0,
        },
    });

    // Create plans
    const plan1 = await prisma.plan.create({
        data: {
            title: 'Basic Plan',
            description: 'Basic membership plan',
            price: 100,
            frequency: 'MONTHLY',
        },
    });

    const plan2 = await prisma.plan.create({
        data: {
            title: 'Standard Plan',
            description: 'Standard membership plan',
            price: 200,
            frequency: 'MONTHLY',
        },
    });

    const plan3 = await prisma.plan.create({
        data: {
            title: 'Premium Plan',
            description: 'Premium membership plan',
            price: 500,
            frequency: 'YEARLY',
        },
    });

    // Create users
    const adminUser = await prisma.user.create({
        data: {
            userId: 1,
            title: 'Mr.',
            firstName: 'Admin',
            lastName: 'User',
            sex: 'M',
            dateOfBirth: new Date('1980-01-01'),
            email: 'test@msmtech.ca',
            phone: '123-456-7890',
            sin: '123-45-6789',
            active: true,
            address1: '123 Admin Street',
            city: 'Admin City',
            province: 'ON',
            zip: 'A1B 2C3',
            country: 'Canada',
            role: {
                connect: { id: adminRole.id },
            },
        },
    });

    const memberUser = await prisma.user.create({
        data: {
            userId: 2,
            title: 'Mr.',
            firstName: 'Member',
            lastName: 'User',
            sex: 'M',
            dateOfBirth: new Date('1990-01-01'),
            email: 'test1@msmtech.ca',
            phone: '987-654-3210',
            sin: '987-65-4321',
            active: true,
            address1: '456 Member Avenue',
            city: 'Member City',
            province: 'ON',
            zip: 'D4E 5F6',
            country: 'Canada',
            role: {
                connect: { id: memberRole.id },
            },
        },
    });

    // Create subscriptions for the member user
    await prisma.planSubscription.create({
        data: {
            startDate: new Date(),
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            active: true,
            user: {
                connect: { id: memberUser.id },
            },
            plan: {
                connect: { id: plan1.id },
            },
        },
    });

    console.log('Database seeded successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });