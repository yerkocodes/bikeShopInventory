const listaMarcas = document.getElementById('listaMarcas');
const selectStore = document.getElementById('selectStore');
const selectCategory = document.getElementById('selectCategory');
const selectBrand = document.getElementById('selectBrand');
const URL = `http://localhost:3000`;

let stores = [];
let categories = [];
let brands = [];

const getDataStores = async () => {
  const response = await fetch(`${URL}/api/stores`);
  const data = await response.json();
  stores = data;
};

const getDataCategories = async () => {
  const response = await fetch(`${URL}/api/categories`);
  const data = await response.json();
  categories = data;
};

const getDataBrands = async () => {
  const response = await fetch(`${URL}/api/brands`);
  const data = await response.json();
  brands = data;
};

//getApiData('stores');
//getApiData('categories');

(async () => {
  await getDataStores();
  console.log(stores);

  await getDataCategories();
  //console.log(categories);

  await getDataBrands();
  //console.log(brands);

  stores.forEach((e, i) => {
    selectStore.innerHTML += `<option value="${e.store_id}">${e.store_name}</option>`;
  });

  categories.forEach((e, i) => {
    selectCategory.innerHTML += `<option value="${e.category_id}">${e.category_name}</option>`;
  });

  brands.forEach((e, i) => {
    selectBrand.innerHTML += `<option value="${e.brand_id}">${e.brand_name}</option>`;
  });

})();
