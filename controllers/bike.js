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

  searchSelect: ( req, res ) => {
    //select stores.store_name, products.product_id, products.product_name, sum(stocks.quantity) as quantity from stocks inner join products on stocks.product_id = products.product_id inner join stores on stocks.store_id = stores.store_id inner join categories on categories.category_id = products.category_id inner join brands on brands.brand_id = products.brand_id group by stores.store_name, products.product_id, stores.store_id, categories.category_id, brands.brand_id having stores.store_id = 1 and categories.category_id = 1 and brands.brand_id = 2;
    pool.connect( async ( err_connect, client, release ) => {
      const query = `select stores.store_name, products.product_id, products.product_name, sum(stocks.quantity) as quantity from stocks inner join products on stocks.product_id = products.product_id inner join stores on stocks.store_id = stores.store_id inner join categories on categories.category_id = products.category_id inner join brands on brands.brand_id = products.brand_id group by stores.store_name, products.product_id, stores.store_id, categories.category_id, brands.brand_id having stores.store_id = $1 and categories.category_id = $2 and brands.brand_id = $3;`
      const SQLQuery = {
        text: query,
        values: Object.values(req.params),
      };

      try {
        const response = await client.query(SQLQuery);
        const data = response.rows;
        console.log(data);
        res.send(data);
      } catch ( err ) {
        console.log(err.message);
      } finally {
        release();
      };
    } );
  },
};
