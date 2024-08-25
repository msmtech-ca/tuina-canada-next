'use server'

import TransactionalMagicLinkEmail from "@/emails/TransactionalMagicLinkEmail"
import authManager from "@/src/auth"
import prisma from "@/src/database"
import { sendTransactionalEmail } from "@/src/smtp"
import { addUserSchema, caseSchema, changeCaseStatusSchema, changeRegistrationStatusSchema, deleteResourceSchema, loginInitiateSchema, registrationSchema } from "@/src/validation"
import { render } from '@react-email/components'
import { redirect } from "next/navigation"

export async function handleContactFormSubmit(prevState: any, formData: FormData) {

    console.info('Running handleContactFormSubmit action', {
        formData: formData,
    })

    const validatedFields = caseSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleContactFormSubmit action form is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    const createdCase = await prisma.case.create({
        data: {
            ...validatedFields.data,
            source: 'website-contact',
        }
    })

    const response = {
        result: {
            success: true,
        },
        errors: null,
    }

    console.info('handleContactFormSubmit action was successful', {
        formData: formData,
        createdCase: createdCase,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleLoginInitiate(prevState: any, formData: FormData) {
    console.info('Running handleLoginInitiate action', {
        formData: formData,
    })

    const validatedFields = loginInitiateSchema.safeParse({
        email: formData.get('email'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleLoginInitiate action form is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }
    
    const token = await authManager.initiate(validatedFields.data.email)

    if (!token) {
        const response = {
            result: null,
            errors: {
                email: 'We could not find an account with that email.'
            },
        }

        console.info('handleLoginInitiate action login attempt failed', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    await sendTransactionalEmail(validatedFields.data.email, 'Log in to Canadian Tui Na Association', render(TransactionalMagicLinkEmail({token: token, email: validatedFields.data.email}), { pretty: true }))

    const response = {
        result: {
            success: true,
            email: validatedFields.data.email,
        },
        errors: null,
    }

    console.info('handleLoginInitiate action was successful', {
        formData: formData,
        token: token,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleLogOut() {
    await authManager.logout()
    return redirect(`${process.env.NEXT_PUBLIC_HOST}`)
}

export async function handleAddUserSubmit(prevState: any, formData: FormData) {

    console.info('Running handleAddUserSubmit action', {
        formData: formData,
    })

    const validatedFields = addUserSchema.safeParse({
        resourceId: formData.get('resourceId'),
        title: formData.get('title'),
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        lastName: formData.get('lastName'),
        sex: formData.get('sex'),
        dateOfBirth: formData.get('dateOfBirth'),
        sin: formData.get('sin'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address1: formData.get('address1'),
        address2: formData.get('address2'),
        city: formData.get('city'),
        province: formData.get('province'),
        zip: formData.get('zip'),
        country: formData.get('country'),
        userId: formData.get('userId'),
        plan: formData.get('plan'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleAddUserSubmit action form is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }
    
    const user = await prisma.user.create({
        data: {
            title: validatedFields.data.title,
            firstName: validatedFields.data.firstName,
            middleName: validatedFields.data.middleName,
            lastName: validatedFields.data.lastName,
            sex: validatedFields.data.sex,
            dateOfBirth: new Date(validatedFields.data.dateOfBirth),
            sin: validatedFields.data.sin,
            email: validatedFields.data.email,
            phone: validatedFields.data.phone,
            address1: validatedFields.data.address1,
            address2: validatedFields.data.address2,
            city: validatedFields.data.city,
            province: validatedFields.data.province,
            zip: validatedFields.data.zip,
            country: validatedFields.data.country,
            planSubscription: {
                create: {
                    startDate: new Date(),
                    plan: {
                        connect: {
                            id: validatedFields.data.plan,
                        }
                    }
                }
            },
            userId: validatedFields.data.userId,
            role: {
                connect: {
                    title: 'MEMBER',
                }
            }
        }
    })

    const response = {
        result: {
            success: true,
            user: user,
        },
        errors: null,
    }

    console.info('handleAddUserSubmit action was successful', {
        formData: formData,
        user: user,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleEditUserSubmit(prevState: any, formData: FormData) {

    console.info('Running handleEditUserSubmit action', {
        formData: formData,
    })

    const validatedFields = addUserSchema.safeParse({
        resourceId: formData.get('resourceId'),
        title: formData.get('title'),
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        lastName: formData.get('lastName'),
        sex: formData.get('sex'),
        dateOfBirth: formData.get('dateOfBirth'),
        sin: formData.get('sin'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address1: formData.get('address1'),
        address2: formData.get('address2'),
        city: formData.get('city'),
        province: formData.get('province'),
        zip: formData.get('zip'),
        country: formData.get('country'),
        userId: formData.get('userId'),
        plan: formData.get('plan'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleEditUserSubmit action form is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }
    const userData = await prisma.user.findFirst({
        where: {
            id: validatedFields.data.resourceId || ''
        },
        include: {
            planSubscription: true,
        }
    })

    const user = await prisma.user.update({
        where: {
            id: userData?.id,
            deleted: false,
        },
        data: {
            title: validatedFields.data.title,
            firstName: validatedFields.data.firstName,
            middleName: validatedFields.data.middleName,
            lastName: validatedFields.data.lastName,
            sex: validatedFields.data.sex,
            dateOfBirth: new Date(validatedFields.data.dateOfBirth),
            sin: validatedFields.data.sin,
            email: validatedFields.data.email,
            phone: validatedFields.data.phone,
            address1: validatedFields.data.address1,
            address2: validatedFields.data.address2,
            city: validatedFields.data.city,
            province: validatedFields.data.province,
            zip: validatedFields.data.zip,
            country: validatedFields.data.country,
            planSubscription: {
                upsert: {
                    update: {
                        id: userData?.planSubscription?.id,
                        startDate: new Date(),
                        plan: {
                            connect: {
                                id: validatedFields.data.plan,
                            }
                        },
                    },
                    create: {
                        startDate: new Date(),
                        plan: {
                            connect: {
                                id: validatedFields.data.plan,
                            }
                        },
                    }
                }
            },
            userId: validatedFields.data.userId,
            role: {
                connect: {
                    title: 'MEMBER',
                }
            }
        }
    })

    const response = {
        result: {
            success: true,
            user: user,
        },
        errors: null,
    }

    console.info('handleEditUserSubmit action was successful', {
        formData: formData,
        user: user,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleDeleteUser(prevState: any, formData: FormData) {

    console.info('Running handleDeleteUser action', {
        formData: formData,
    })

    const validatedFields = deleteResourceSchema.safeParse({
        resourceId: formData.get('resourceId'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleDeleteUser action is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    const user = await prisma.user.update({
        where: {
            id: validatedFields.data.resourceId,
        },
        data: {
            deleted: true,
        }
    })

    const response = {
        result: {
            success: true,
            user: user,
        },
        errors: null,
    }

    console.info('handleDeleteUser action was successful', {
        formData: formData,
        user: user,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleDeleteCase(prevState: any, formData: FormData) {

    console.info('Running handleDeleteCase action', {
        formData: formData,
    })

    const validatedFields = deleteResourceSchema.safeParse({
        resourceId: formData.get('resourceId'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleDeleteCase action is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    const caseData = await prisma.case.update({
        where: {
            id: validatedFields.data.resourceId,
        },
        data: {
            deleted: true,
        }
    })

    const response = {
        result: {
            success: true,
            case: caseData,
        },
        errors: null,
    }

    console.info('handleDeleteCase action was successful', {
        formData: formData,
        case: caseData,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleChangeCaseStatus(prevState: any, formData: FormData) {

    console.info('Running handleChangeCaseStatus action', {
        formData: formData,
    })

    const validatedFields = changeCaseStatusSchema.safeParse({
        resourceId: formData.get('resourceId'),
        status: formData.get('status'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleChangeCaseStatus action is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    const caseData = await prisma.case.update({
        where: {
            id: validatedFields.data.resourceId,
        },
        data: {
            status: validatedFields.data.status,
        }
    })

    const response = {
        result: {
            success: true,
            case: caseData,
        },
        errors: null,
    }

    console.info('handleChangeCaseStatus action was successful', {
        formData: formData,
        case: caseData,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleAddRegistration(prevState: any, formData: FormData) {

    console.info('Running handleAddRegistration action', {
        formData: formData,
    })

    const validatedFields = registrationSchema.safeParse({
        title: formData.get('title'),
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        lastName: formData.get('lastName'),
        sex: formData.get('sex'),
        dateOfBirth: formData.get('dateOfBirth'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address1: formData.get('address1'),
        address2: formData.get('address2'),
        city: formData.get('city'),
        province: formData.get('province'),
        zip: formData.get('zip'),
        country: formData.get('country'),
        userId: formData.get('userId'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleAddRegistration action form is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }
    
    const registration = await prisma.registration.create({
        data: {
            title: validatedFields.data.title,
            firstName: validatedFields.data.firstName,
            middleName: validatedFields.data.middleName,
            lastName: validatedFields.data.lastName,
            sex: validatedFields.data.sex,
            dateOfBirth: new Date(validatedFields.data.dateOfBirth),
            email: validatedFields.data.email,
            phone: validatedFields.data.phone,
            address1: validatedFields.data.address1,
            address2: validatedFields.data.address2,
            city: validatedFields.data.city,
            province: validatedFields.data.province,
            zip: validatedFields.data.zip,
            country: validatedFields.data.country,
        }
    })

    const response = {
        result: {
            success: true,
            registration: registration,
        },
        errors: null,
    }

    console.info('handleAddRegistration action was successful', {
        formData: formData,
        registration: registration,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function handleChangeRegistrationStatus(prevState: any, formData: FormData) {

    console.info('Running handleChangeRegistrationStatus action', {
        formData: formData,
    })

    const validatedFields = changeRegistrationStatusSchema.safeParse({
        resourceId: formData.get('resourceId'),
        status: formData.get('status'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {

        const response = {
            result: null,
            errors: validatedFields.error.flatten().fieldErrors,
        }

        console.info('handleChangeRegistrationStatus action is invalid', {
            formData: formData,
            result: response.result,
            errors: response.errors,
        })

        return response
    }

    const registration = await prisma.registration.update({
        where: {
            id: validatedFields.data.resourceId,
        },
        data: {
            status: validatedFields.data.status,
        }
    })

    const response = {
        result: {
            success: true,
            registration: registration,
        },
        errors: null,
    }

    console.info('handleChangeRegistrationStatus action was successful', {
        formData: formData,
        registration: registration,
        result: response.result,
        errors: response.errors,
    })

    return response
}