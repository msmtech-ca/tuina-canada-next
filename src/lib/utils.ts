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