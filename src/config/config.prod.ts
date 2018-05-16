import { IConfigOptions } from "../types";

let config: IConfigOptions =  {
  version: '2.3',
  serve: {
    port: 8333,
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'gy07@Lovexam08',
    database: 'rap',
    pool: {
      max: 80,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
    logging: false
  },
  redis: {}
}

export default config
