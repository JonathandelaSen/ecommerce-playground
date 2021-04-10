import mongoose from 'mongoose';
import { MongoError } from 'mongodb';
//import Winston from '../config/wiston';

import PersistenceConnexionError from '../errors/PersistenceConnexionError'

class MongoClient implements PersistenceClient {

    private url: string;

    
    constructor(url: string) {
        this.url = url
    }

    static create(url: string): MongoClient {
        return new MongoClient(url);
    }

    connect(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            mongoose.connect(this.url, (err: MongoError) => {
                if (err) {
                    //Winston.error("Error connecting DB")
                    //Winston.error(err)
                    throw new PersistenceConnexionError()
                }
                //Winston.info("* DB connected")
                resolve();
            });
        });
    }
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}