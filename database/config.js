const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'onclicksell.com'
    },
    // pool: {
    //     afterCreate: function (conn, done) {
    //       // in this example we use pg driver's connection API
    //       conn.query('SET timezone="UTC";', function (err) {
    //         if (err) {
    //           // first query failed, return error and don't try to make next query
    //           done(err, conn);
    //         } else {
    //           // do the second query...
    //           conn.query('SELECT set_limit(0.01);', function (err) {
    //             // if err is not falsy, connection is discarded from pool
    //             // if connection aquire was triggered by a query the error is passed to query promise
    //             done(err, conn);
    //           });
    //         }
    //       });
    //     }
    //   },
    pool: { min: 0, max: 10 },
      acquireConnectionTimeout: 10000,
    //   postProcessResponse: (result) => {
    //     // TODO: add special case for raw results (depends on dialect)
    //     if (Array.isArray(result)) {
    //       return result.map(row => convertToCamel(row));
    //     } else {
    //       return convertToCamel(result);
    //     }
    //   }
  });

  // db.destroy();

module.exports = knex;