const dev = process.env.NODE_ENV !== 'production';

export const serverurl = dev ? 'http://localhost:3000' : 'https://fourtress-ppl-1-orpin.vercel.app/';