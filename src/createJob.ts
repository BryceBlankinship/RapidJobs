/**
 * This file acts as a REST API for creating jobs in the database, and then displaying that jobs in the universal feed
 * Going to be using a universal feed, no tailored data since nobody is using the application yet :(
 * Only POST operations will be allowed at this time
 * 
 * Also this is my first time using TypeScript so bear with me
 * I chose TS for its static typing, so only certain variable types can be accepted over HTTP
 */

import { Request, Response, NextFunction } from 'express';
import axios, {AxiosResponse} from 'axios';

interface Post {
    uuid: Number;
    id: Number;
    title: String;
    body: String;
}

const getPost = async(req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;

    let result: AxiosResponse = await axios.get("");
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

const addPost = async(req: Request, res: Response, next: NextFunction) => {
    let title: string = req.body.title;
    let body: string = req.body.body;
    let response: AxiosResponse = await axios.post("", {
        title,
        body
    });

    return res.status(200).json({
        message: response.data
    });
};

export default { getPost, addPost };