import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  // Default connection
  connection: Env.get('DB_CONNECTION'),

  // List of available connections
  connections: {
    pg: {
      client: 'pgt',
      connection: {
        host: Env.get('PGT_HOST'),
        port: Env.get('PGT_PORT'),
        user: Env.get('PGT_USER'),
        password: Env.get('PGT_PASSWORD', ''),
        database: Env.get('PGT_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
  }
}

export default databaseConfig
