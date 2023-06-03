const dev = process.env.NODE_ENV !== 'production';

export const serverurl = dev ? 'http://localhost:3000' : 'https://kitchenhealth.vercel.app';