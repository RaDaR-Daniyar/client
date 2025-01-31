import React from "react";
import '../sections/style.css'

const ProductsSort = ({ setSortOrder, status }) => {
    return (
        <div className="d-flex justify-content-between mt-1" style={{marginRight: '15px'}}>
          {!status && <p style={{marginTop: '4px', marginLeft: '15px', fontFamily: 'Book Antiqua'}}>Сортировать:</p>}
          <select
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ width: "70%", height: 37, flexDirection: 'center' , borderRadius: '5px', marginLeft: '15px', borderColor: '#1200ba', fontFamily: 'Book Antiqua' }}
            >
            <option value="">По умолчанию</option>
            <option value="less">По возрастанию цены</option>
            <option value="more">По убыванию цены</option>
          </select>
        </div>
    );
}

export default ProductsSort;