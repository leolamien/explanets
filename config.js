const PgUser = 'postgres';
const PgHost = 'localhost';
const PgDb = DATABASE_URL;
const PgPassword = 'ipl';
const PgPort = 5432;

module.exports = {
    ConnectionString: 'postgres://' + PgUser + ':' + PgPassword + '@' + PgHost + ':' + PgPort + '/' + PgDb
};
