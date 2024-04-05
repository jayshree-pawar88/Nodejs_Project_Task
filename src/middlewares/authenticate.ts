import express from 'express';
import Encryption from '../utilities/Encryption';
import application from '../constant/application'
import { extractCookieFromRequest } from '../utilities/apiUtilities';
const acl = require('../constant/acl')

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const authorizationIgnorePath: string[] = application.authorizationIgnorePath;
   
    if (authorizationIgnorePath.indexOf(
        `${req.originalUrl}`
    ) === -1
    ) {
        const authorizationHeader = extractCookieFromRequest(
            req, 'authorization'
        );
       console.log("authorizationHeader ->", authorizationHeader);
        if (authorizationHeader) {
            //console.log("authorizationHeader",authorizationHeader)
            const decoded = await new Encryption().verifyJwtToken(authorizationHeader);
         console.log("Decoded -",decoded)
            // @ts-ignore
            if (decoded) {
                //@ts-ignore
                req.user = decoded;
                console.log('TOKEN --->s Verified Successfully');
                //if role_id and endpoint from config
                console.log(decoded);
                console.log(acl[req.originalUrl],req.originalUrl);
                
            //     if(!acl[req.originalUrl]){
            //     if(!acl[req.originalUrl].includes(decoded.role_id)){
            //             res.status(400).send({statusCode:400, error:"UNAUTHORIZED"});
            //     }
            // }

            if (acl[req.originalUrl]) {
                if (acl[req.originalUrl].includes(decoded.role_id)) {
                    next(); 
                } else {
                    res.status(400).send({statusCode: 400, error: "UNAUTHORIZED"});
                }
            } else {
                res.status(404).send({statusCode: 404, error: "URL Not Found"});
            }
                
               
            } else {
               // next();
               console.log("Inside Else 1");
               
               res.status(400).send({statusCode:400, error:"UNAUTHORIZED"})
              // console.log("you are not valid user to access")
              //  return;
            }
        } else {
            // next();
            console.log("Inside Else 2");
            res.status(400).send({statusCode:400, error:"UNAUTHORIZED"})
            // apiResponse.error(res, httpStatusCodes.FORBIDDEN);
            // return;
        }
    }
    next();    
};





