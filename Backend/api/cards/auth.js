import OktaJwtVerifier from '@okta/jwt-verifier';
import dotenv from 'dotenv';
dotenv.config();

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.ISSUER,
    clientId: process.env.CLIENT_ID
});

export default async function authMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization)
            throw new Error('You must send an authorization header');

        const [authType, token] = authorization.trim().split(' ');
        if (authType !== 'Bearer')
            throw new Error('Expected a bearer token, got nothing.');

        const { claims } = await oktaJwtVerifier.verifyAccessToken(token, 'api://default');
        if (!claims.scp.includes(process.env.SCOPE)) {
            throw new Error('Could not verify the proper scope');
        }
        next();
    } catch (err) {
        next(err.message);
    }
}