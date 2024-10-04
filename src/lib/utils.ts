import crypto from 'crypto';
import { INSECURE_SECRET } from './constants';

if (!process.env.APP_SECRET) console.warn('No APP_SECRET env was provided! Using default INSECURE_SECRET...')

const algorithm = 'aes-256-cbc';
const ENCRYPTION_KEY = process.env.APP_SECRET || INSECURE_SECRET;
const IV_LENGTH = 16;

export function encrypt(text: string) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(text: string) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift() || '', 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm, ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

export function toInputDate(date: Date) {
    return date.toISOString().split('T')[0]
}

/**
 * Get the pathname from the metadata state
 * This dives into async storage of promise state to get the pathname
 *
 * This is much more performant that using headers() from next as this doesn't opt out from the cache
 * @param state
 */
export const getPathnameFromMetadataState = (state: any): string | undefined => {
    const res = Object.getOwnPropertySymbols(state || {})
        .map(p => state[p])
        .find(state => state?.hasOwnProperty?.("urlPathname"))

    return res?.urlPathname.replace(/\?.+/, "")
}