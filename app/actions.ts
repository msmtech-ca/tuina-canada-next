'use server'

import { addUserSchema, caseSchema, loginInitiateSchema } from "@/src/validation"
import prisma from "@/src/database"
import authManager from "@/src/auth"
import { sendTransactionalEmail } from "@/src/smtp"
import { render } from '@react-email/components'
import TransactionalMagicLinkEmail from "@/emails/TransactionalMagicLinkEmail"
import sessionManager from "@/src/session"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"

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
            source: 'website-contact',
            ...validatedFields.data,
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
    
    const createdUser = await prisma.user.create({
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
            createdUser: createdUser,
        },
        errors: null,
    }

    console.info('handleAddUserSubmit action was successful', {
        formData: formData,
        createdUser: createdUser,
        result: response.result,
        errors: response.errors,
    })

    return response
}

export async function toastTest() {
    console.log('toastTest action')
    return {
        success: true,
    }
}