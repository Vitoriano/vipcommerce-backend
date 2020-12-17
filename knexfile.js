module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `./src/database.sqlite`,
      timezone: 'UTC-3',
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
    useNullAsDefault: true,
  }
  
}
