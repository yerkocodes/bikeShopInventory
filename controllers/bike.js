const pool = require('../db/init').getPoolInstance();

module.exports = {
  //Database queries
  getStores: ( req, res ) => {
    pool.connect( async ( err_connect, client, release ) => {

      const SQLQuery = `select * from stores`;
      try {
        const response = await client.query(SQLQuery);
        const stores = response.rows;
        //console.log(stores);
        res.send(stores);
      } catch ( err ) {
        console.log(err.message);
      } finally {
        release();
      };
    } );

  },

  getCategories: ( req, res ) => {
    pool.connect( async ( err_connect, client, release ) => {
      const SQLQuery = `select * from categories`;

      try {
        const response = await client.query(SQLQuery);
        const categories = response.rows;
        res.send(categories);
      } catch ( err ) {
        console.log(err.message);
      } finally {
        release()
      };
    } );
  },

  getBrands: ( req, res ) => {
    pool.connect( async ( err_connect, client, release ) => {
      const SQLQuery = `select * from brands`;

      try {
        const response = await client.query(SQLQuery);
        const brands = response.rows;
        res.send(brands);
      } catch ( err ) {
        console.log(err.message);
      } finally {
        release();
      };
    } );
  },
};
