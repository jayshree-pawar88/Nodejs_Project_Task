import mysql = require('mysql2/promise');
require('dotenv').config()
import {Pool, Connection} from "mysql2";
// import { env }  from '../index';
// import process.env from '../process.env';

//console.log("process.env", process.env)
// Object.keys(process.env)
//   .filter(key => !key.startsWith("NODE_") && !key.startsWith("PWD") && !key.startsWith("_"))
//   .forEach(key => console.log(`${key}: ${process.env[key]}`));
  
export default class connection {
    private static _instance : connection;
    poolConnection : Pool;
    connected: boolean = false;
    constructor(){
        // @ts-ignore
        this.poolConnection = mysql.createPool(
            {
                    connectionLimit: 10,
                    host:process.env.DATABASE_HOST,
                    user:process.env.DATABASE_USER,
                    password:process.env.DATABASE_PASSWORD,
                    database:process.env.DATABASE 
                  });
        this.connect();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static async getConnection(){
        // @ts-ignore
        return this.instance.poolConnection.getConnection()
    };

    public static async execute_query( query:string, params : any){
        // @ts-ignore
        const [rows,fields] = await this.instance.poolConnection.query(query, params);
        return rows;
    }

    public static async execute_query_transaction( sqlClient : Connection, query:string, params : any){
        // @ts-ignore
        const [rows,fields] = await sqlClient.query(query, params);
        return rows;
    }

    async connect() {
        this.poolConnection.getConnection((err: any, conn: any) =>{
            if(conn) conn.release();
            if (err) {
                console.log("database not connected")
                return false;
            } else {
                this.connected = true;
            console.log("database connected")
                return true;
            }
        });
    }
}

