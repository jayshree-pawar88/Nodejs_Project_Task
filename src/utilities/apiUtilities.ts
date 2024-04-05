import { NextFunction, Request, Response } from 'express';
const extractQueryForRequest = (req: Request, query: string) => {
    if (req.query[query]) {
        // @ts-ignore
        return JSON.parse(req.query[query]);
    }
    return [];
};

const extractCookieFromRequest = (req: Request, key: string) => {
    console.log(req.headers)
    if (req.headers[key]) {
        return req.headers[key];
    }
    return null;
};

export {
    extractQueryForRequest,
    extractCookieFromRequest,
};
