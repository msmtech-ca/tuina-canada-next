import { CaseStatus, RegistrationStatus } from '@prisma/client';
import { z } from 'zod';

// Define the Case schema using Zod
export const caseSchema = z.object({
    name: z
        .string({
            invalid_type_error: 'form.name.errors.invalid_type',
        })
        .min(1, 'form.name.errors.empty'),
    email: z
        .string({
            invalid_type_error: 'form.email.errors.invalid_type',
        })
        .email('form.email.errors.invalid')
        .min(1, 'form.email.errors.empty'),
    phone: z
        .string({
            invalid_type_error: 'form.phone.errors.invalid_type',
        })
        .min(1, 'form.phone.errors.empty'),
    subject: z
        .string({
            invalid_type_error: 'form.subject.errors.invalid_type',
        })
        .min(1, 'form.subject.errors.empty'),
    message: z
        .string({
            invalid_type_error: 'form.message.errors.invalid_type',
        })
        .min(1, 'form.message.errors.empty'),
});

export const loginInitiateSchema = z.object({
    email: z
        .string({
            invalid_type_error: 'form.email.errors.invalid_type',
        })
        .email('form.email.errors.invalid')
        .min(1, 'form.email.errors.empty'),
})

export const addUserSchema = z.object({
    resourceId: z
        .string()
        .nullable(),
    title: z
        .string({
            invalid_type_error: 'Title is invalid.'
        })
        .min(1, 'Title cannot be empty.'),
    firstName: z
        .string({
            invalid_type_error: 'First name is invalid.'
        })
        .min(1, 'First name cannot be empty.'),
    middleName: z
        .string({
            invalid_type_error: 'Middle Name is invalid.'
        })
        .nullable(),
    lastName: z
        .string({
            invalid_type_error: 'Last name is invalid.'
        })
        .min(1, 'Last name cannot be empty.'),
    sex: z
        .string({
            invalid_type_error: 'Sex is invalid.'
        })
        .min(1, 'Sex cannot be empty.'),
    dateOfBirth: z
        .string({
            invalid_type_error: 'Date is invalid.'
        })
        .date(),
    sin: z
        .string({
            invalid_type_error: 'Social insurance number is invalid.'
        })
        .regex(/^[0-9]*$/g)
        .min(9, 'Social insurance number must be 9 characters.'),
    email: z
        .string({
            invalid_type_error: 'Email is invalid.'
        })
        .email()
        .min(1, 'Email cannot be empty.'),
    phone: z
        .string({
            invalid_type_error: 'Phone is invalid.'
        })
        .min(1, 'Phone cannot be empty.'),
    address1: z
        .string({
            invalid_type_error: 'Address is invalid.'
        })
        .min(1, 'Address cannot be empty.'),
    address2: z
        .string({
            invalid_type_error: 'Apt./Suite is invalid.'
        })
        .nullable(),
    city: z
        .string({
            invalid_type_error: 'City is invalid.'
        })
        .min(1, 'City cannot be empty.'),
    province: z
        .string({
            invalid_type_error: 'Province is invalid.'
        })
        .min(1, 'Province cannot be empty.'),
    zip: z
        .string({
            invalid_type_error: 'Postal/zip code is invalid.'
        })
        .min(1, 'Postal/zip code cannot be empty.'),
    country: z
        .string({
            invalid_type_error: 'Country is invalid.'
        })
        .min(1, 'Country cannot be empty.'),
    plan: z
        .string({
            invalid_type_error: 'Plan selection is invalid.'
        })
        .min(1, 'Plan selection cannot be empty.'),
    userId: z
        .coerce
        .number({
            invalid_type_error: 'Member no. is invalid.'
        })
        .min(0, 'Member no. cannot be empty.'),
})

export const deleteResourceSchema = z.object({
    resourceId: z
        .string({
            invalid_type_error: 'Resource id is invalid.'
        })
        .min(1, 'Resource id cannot be empty.'),
})

export const changeCaseStatusSchema = z.object({
    resourceId: z
        .string({
            invalid_type_error: 'Resource id is invalid.'
        })
        .min(1, 'Resource id cannot be empty.'),
    status: z
        .nativeEnum(CaseStatus),
})

export const changeRegistrationStatusSchema = z.object({
    resourceId: z
        .string({
            invalid_type_error: 'Resource id is invalid.'
        })
        .min(1, 'Resource id cannot be empty.'),
    status: z
        .nativeEnum(RegistrationStatus),
})

export const registrationSchema = z.object({
    title: z
        .string({
            invalid_type_error: 'form.title.errors.invalid_type',
        })
        .min(1, 'form.title.errors.empty'),
    firstName: z
        .string({
            invalid_type_error: 'form.first_name.errors.invalid_type',
        })
        .min(1, 'form.first_name.errors.empty'),
    middleName: z
        .string({
            invalid_type_error: 'form.middle_name.errors.invalid_type',
        })
        .nullable(),
    lastName: z
        .string({
            invalid_type_error: 'form.last_name.errors.invalid_type',
        })
        .min(1, 'form.last_name.errors.empty'),
    sex: z
        .string({
            invalid_type_error: 'form.sex.errors.invalid_type',
        })
        .min(1, 'form.sex.errors.empty'),
    dateOfBirth: z
        .string({
            invalid_type_error: 'form.date_of_birth.errors.invalid_type',
        })
        .date('form.date_of_birth.errors.date'),
    email: z
        .string({
            invalid_type_error: 'form.email.errors.invalid_type',
        })
        .email('form.email.errors.invalid')
        .min(1, 'form.email.errors.empty'),
    phone: z
        .string({
            invalid_type_error: 'form.phone.errors.invalid_type',
        })
        .min(1, 'form.phone.errors.empty'),
    address1: z
        .string({
            invalid_type_error: 'form.address.errors.invalid_type',
        })
        .min(1, 'form.address.errors.empty'),
    address2: z
        .string({
            invalid_type_error: 'form.address2.errors.invalid_type',
        })
        .nullable(),
    city: z
        .string({
            invalid_type_error: 'form.city.errors.invalid_type',
        })
        .min(1, 'form.city.errors.empty'),
    province: z
        .string({
            invalid_type_error: 'form.province.errors.invalid_type',
        })
        .min(1, 'form.province.errors.empty'),
    zip: z
        .string({
            invalid_type_error: 'form.zip.errors.invalid_type',
        })
        .min(1, 'form.zip.errors.empty'),
    country: z
        .string({
            invalid_type_error: 'form.country.errors.invalid_type',
        })
        .min(1, 'form.country.errors.empty'),
});
