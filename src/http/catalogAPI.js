import { guestInstance, authInstance } from "./index.js";

export const fetchCategories = async () => {
  const { data } = await guestInstance.get("category/getall");
  return data;
};
export const fetchCategory = async (id) => {
  const { data } = await guestInstance.get(`category/getone/${id}`);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await guestInstance.get("brand/getall");
  return data;
};
export const fetchBrand = async (id) => {
  const { data } = await guestInstance.get(`brand/getone/${id}`);
  return data;
};

export const fetchMehanizms = async () => {
  const { data } = await guestInstance.get("mehanizm/getall");
  return data;
};
export const fetchMehanizm = async (id) => {
  const { data } = await guestInstance.get(`mehanizm/getone/${id}`);
  return data;
};

export const fetchGenders = async () => {
  const { data } = await guestInstance.get("gender/getall");
  return data;
};
export const fetchGender = async (id) => {
  const { data } = await guestInstance.get(`gender/getone/${id}`);
  return data;
};

export const fetchShapes = async () => {
  const { data } = await guestInstance.get("shape/getall");
  return data;
};
export const fetchShape = async (id) => {
  const { data } = await guestInstance.get(`shape/getone/${id}`);
  return data;
};

export const fetchMaterials = async () => {
  const { data } = await guestInstance.get("material/getall");
  return data;
};
export const fetchMaterial = async (id) => {
  const { data } = await guestInstance.get(`material/getone/${id}`);
  return data;
};

export const fetchGlasses = async () => {
  const { data } = await guestInstance.get("glass/getall");
  return data;
};
export const fetchGlass = async (id) => {
  const { data } = await guestInstance.get(`glass/getone/${id}`);
  return data;
};

export const fetchStraps = async () => {
  const { data } = await guestInstance.get("strap/getall");
  return data;
};
export const fetchStrap = async (id) => {
  const { data } = await guestInstance.get(`strap/getone/${id}`);
  return data;
};

export const fetchPowers = async () => {
  const { data } = await guestInstance.get("power/getall");
  return data;
};
export const fetchPower = async (id) => {
  const { data } = await guestInstance.get(`power/getone/${id}`);
  return data;
};

export const fetchWaters = async () => {
  const { data } = await guestInstance.get("water/getall");
  return data;
};
export const fetchWater = async (id) => {
  const { data } = await guestInstance.get(`water/getone/${id}`);
  return data;
};

export const fetchBrends = async () => {
  const { data } = await guestInstance.get("brend/getall");
  return data;
};
export const fetchBrend = async (id) => {
  const { data } = await guestInstance.get(`brend/getone/${id}`);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await authInstance.post("product/create", product);
  return data;
};
export const updateProduct = async (id, product) => {
  const { data } = await authInstance.put(`product/update/${id}`, product);
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await authInstance.delete(`product/delete/${id}`);
  return data;
};

export const fetchAllProducts = async (
  searchTerm = "",
  categoryId = null,
  brandId = null,
  mehanizmId = null,
  genderId = null,
  shapeId = null,
  materialId = null,
  glassId = null,
  strapId = null,
  powerId = null,
  waterId = null,
  brendId = null,
  page = 1,
  limit = 4,
  sortOrder = "",
  minPrice = null,
  maxPrice = null,
  sale = null
) => {
  const { data } = await guestInstance.get("product/getall", {
    params: {
      searchTerm,
      page,
      limit,
      sortOrder,
      sale,
      minPrice,
      maxPrice,
      categoryId,
      brandId,
      mehanizmId,
      genderId,
      shapeId,
      materialId,
      glassId,
      strapId,
      powerId,
      waterId,
      brendId
    },
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await guestInstance.get(`product/getone/${id}`);
  return data;
};
export const fetchCategoryProducts = async (id) => {
  const { data } = await guestInstance.get(`similar-categories/${id}`);
  return data;
};
export const fetchGenderProducts = async (id) => {
  const { data } = await guestInstance.get(`similar-categories/gender/${id}`);
  return data;
};
export const fetchBrendProducts = async (id) => {
  const { data } = await guestInstance.get(`similar-categories/brend/${id}`);
  return data;
};

export const fetchProdRating = async (id) => {
  const { data } = await guestInstance.get(`rating/product/${id}`);
  return data;
};

export const createProperty = async (productId, property) => {
  const { data } = await authInstance.post(
    `product/${productId}/property/create`,
    property
  );
  return data;
};

export const updateProperty = async (productId, id, property) => {
  const { data } = await authInstance.put(
    `product/${productId}/property/update/${id}`,
    property
  );
  return data;
};

export const deleteProperty = async (productId, id) => {
  const { data } = await authInstance.delete(
    `product/${productId}/property/delete/${id}`
  );
  return data;
};

export const getRandom = async () => {

  const { data } = await guestInstance.get('catalog/getrandom');
  return data;
}