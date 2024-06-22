import { guestInstance, authInstance } from './index.js'

export const createCategory = async (category) => {
    const { data } = await authInstance.post('category/create', category);
    return data;
};
export const updateCategory = async (id, category) => {
    const { data } = await authInstance.put(`category/update/${id}`, category);
    return data;
};
export const deleteCategory = async (id) => {
    const { data } = await authInstance.delete(`category/delete/${id}`);
    return data;
};
export const fetchCategories = async () => {
    const { data } = await guestInstance.get('category/getall');
    return data;
};
export const fetchCategory = async (id) => {
    const { data } = await guestInstance.get(`category/getone/${id}`);
    return data;
};

export const createBrand = async (brand) => {
    const { data } = await authInstance.post('brand/create', brand);
    return data;
};
export const updateBrand = async (id, brand) => {
    const { data } = await authInstance.put(`brand/update/${id}`, brand);
    return data;
};
export const deleteBrand = async (id) => {
    const { data } = await authInstance.delete(`brand/delete/${id}`);
    return data;
};
export const fetchBrands = async () => {
    const { data } = await guestInstance.get('brand/getall');
    return data;
};
export const fetchBrand = async (id) => {
    const { data } = await guestInstance.get(`brand/getone/${id}`);
    return data;
};

export const createMehanizm = async (mehanizm) => {
    const { data } = await authInstance.post('mehanizm/create', mehanizm);
    return data;
};
export const updateMehanizm = async (id, mehanizm) => {
    const { data } = await authInstance.put(`mehanizm/update/${id}`, mehanizm);
    return data;
};
export const deleteMehanizm = async (id) => {
    const { data } = await authInstance.delete(`mehanizm/delete/${id}`);
    return data;
};
export const fetchMehanizms = async () => {
    const { data } = await guestInstance.get('mehanizm/getall');
    return data;
};
export const fetchMehanizm = async (id) => {
    const { data } = await guestInstance.get(`mehanizm/getone/${id}`);
    return data;
};

export const createGender = async (gender) => {
    const { data } = await authInstance.post('gender/create', gender);
    return data;
};
export const updateGender = async (id, ender) => {
    const { data } = await authInstance.put(`gender/update/${id}`, ender);
    return data;
};
export const deleteGender = async (id) => {
    const { data } = await authInstance.delete(`gender/delete/${id}`);
    return data;
};
export const fetchGenders = async () => {
    const { data } = await guestInstance.get('gender/getall');
    return data;
};
export const fetchGender = async (id) => {
    const { data } = await guestInstance.get(`gender/getone/${id}`);
    return data;
};

export const createShape = async (shape) => {
    const { data } = await authInstance.post('shape/create', shape);
    return data;
};
export const updateShape = async (id, shape) => {
    const { data } = await authInstance.put(`shape/update/${id}`, shape);
    return data;
};
export const deleteShape = async (id) => {
    const { data } = await authInstance.delete(`shape/delete/${id}`);
    return data;
};
export const fetchShapes = async () => {
    const { data } = await guestInstance.get('shape/getall');
    return data;
};
export const fetchShape = async (id) => {
    const { data } = await guestInstance.get(`shape/getone/${id}`);
    return data;
};

export const createMaterial = async (material) => {
    const { data } = await authInstance.post('material/create', material);
    return data;
};
export const updateMaterial = async (id, material) => {
    const { data } = await authInstance.put(`material/update/${id}`, material);
    return data;
};
export const deleteMaterial = async (id) => {
    const { data } = await authInstance.delete(`material/delete/${id}`);
    return data;
};
export const fetchMaterials = async () => {
    const { data } = await guestInstance.get('material/getall');
    return data;
};
export const fetchMaterial = async (id) => {
    const { data } = await guestInstance.get(`material/getone/${id}`);
    return data;
};

export const createGlass = async (glass) => {
    const { data } = await authInstance.post('glass/create', glass);
    return data;
};
export const updateGlass = async (id, glass) => {
    const { data } = await authInstance.put(`glass/update/${id}`, glass);
    return data;
};
export const deleteGlass = async (id) => {
    const { data } = await authInstance.delete(`glass/delete/${id}`);
    return data;
};
export const fetchGlasses = async () => {
    const { data } = await guestInstance.get('glass/getall');
    return data;
};
export const fetchGlass = async (id) => {
    const { data } = await guestInstance.get(`glass/getone/${id}`);
    return data;
};

export const createStrap = async (strap) => {
    const { data } = await authInstance.post('strap/create', strap);
    return data;
};
export const updateStrap = async (id, strap) => {
    const { data } = await authInstance.put(`strap/update/${id}`, strap);
    return data;
};
export const deleteStrap = async (id) => {
    const { data } = await authInstance.delete(`strap/delete/${id}`);
    return data;
};
export const fetchStraps = async () => {
    const { data } = await guestInstance.get('strap/getall');
    return data;
};
export const fetchStrap = async (id) => {
    const { data } = await guestInstance.get(`strap/getone/${id}`);
    return data;
};

export const createPower = async (power) => {
    const { data } = await authInstance.post('power/create', power);
    return data;
};
export const updatePower = async (id, power) => {
    const { data } = await authInstance.put(`power/update/${id}`, power);
    return data;
};
export const deletePower = async (id) => {
    const { data } = await authInstance.delete(`power/delete/${id}`);
    return data;
};
export const fetchPowers = async () => {
    const { data } = await guestInstance.get('power/getall');
    return data;
};
export const fetchPower = async (id) => {
    const { data } = await guestInstance.get(`power/getone/${id}`);
    return data;
};

export const createWater = async (water) => {
    const { data } = await authInstance.post('water/create', water);
    return data;
};
export const updateWater = async (id, water) => {
    const { data } = await authInstance.put(`water/update/${id}`, water);
    return data;
};
export const deleteWater = async (id) => {
    const { data } = await authInstance.delete(`water/delete/${id}`);
    return data;
};
export const fetchWaters = async () => {
    const { data } = await guestInstance.get('water/getall');
    return data;
};
export const fetchWater = async (id) => {
    const { data } = await guestInstance.get(`water/getone/${id}`);
    return data;
};

export const createBrend = async (brend) => {
    const { data } = await authInstance.post('brend/create', brend);
    return data;
};
export const updateBrend = async (id, brend) => {
    const { data } = await authInstance.put(`brend/update/${id}`, brend);
    return data;
};
export const deleteBrend = async (id) => {
    const { data } = await authInstance.delete(`brend/delete/${id}`);
    return data;
};
export const fetchBrends = async () => {
    const { data } = await guestInstance.get('brend/getall');
    return data;
};
export const fetchBrend = async (id) => {
    const { data } = await guestInstance.get(`brend/getone/${id}`);
    return data;
};

export const updateProduct = async (id, product) => {
    const { data } = await authInstance.put(`product/update/${id}`, product)
    return data
}

export const deleteProduct = async (id) => {
    const { data } = await authInstance.delete(`product/delete/${id}`)
    return data
}

export const fetchAllProducts = async (categoryId = null, brandId = null, page = 1, limit = 3, searchTerm = '') => {
    let url = 'catalog/getall'
    if (categoryId) url = url + '/categoryId/' + categoryId
    if (brandId) url = url + '/brandId/' + brandId
    const { data } = await guestInstance.get(
        url,
        {params: {
            page, limit, searchTerm
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await guestInstance.get(`product/getone/${id}`)
    return data
}

export const fetchProdRating = async (id) => {
    const { data } = await guestInstance.get(`rating/product/${id}`)
    return data
}

export const createProperty = async (productId, property) => {
    const { data } = await authInstance.post(`product/${productId}/property/create`, property)
    return data
}

export const updateProperty = async (productId, id, property) => {
    const { data } = await authInstance.put(`product/${productId}/property/update/${id}`, property)
    return data
}

export const deleteProperty = async (productId, id) => {
    const { data } = await authInstance.delete(`product/${productId}/property/delete/${id}`)
    return data
}