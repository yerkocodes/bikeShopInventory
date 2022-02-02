const selectStore = document.getElementById('selectStore');
const selectCategory = document.getElementById('selectCategory');
const selectBrand = document.getElementById('selectBrand');

const btnSelect = document.getElementById('buttonSelect');
const messageError = document.getElementById('messageError');
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

const searchSelect = async () => {
  const response = await fetch(`${URL}/api/search/${selectStore.value}/${selectCategory.value}/${selectBrand.value}`);
  const data = await response.json();
  //console.log(data);
  return data;
};

btnSelect.addEventListener('click', async () => {
  const tableBody = document.getElementById('tableBody');
  const dataSearch = await searchSelect();
  //const data = dataSearch.json();
  //console.log(dataSearch);
  messageError.innerHTML = "";

  if( dataSearch.length !== 0){
    tableBody.innerHTML = "";
    //console.log('OK');
    for(i = 0; i < dataSearch.length; i++){
      tableBody.innerHTML += `
        <tr>
          <td>${dataSearch[i].store_name}</td>
          <td>${dataSearch[i].product_id}</td>
          <td>${dataSearch[i].product_name}</td>
          <td>${dataSearch[i].quantity}</td>
          <td><button>Ver</button></td>
        </tr>
      `;
    };
  } else {
    console.log('NO');
    tableBody.innerHTML = "";
    messageError.innerHTML = `<p class="text-danger mt-3">No se encontraron resultados para esta busqueda</p>`;
  }
});

(async () => {
  await getDataStores();
  //console.log(stores);

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
