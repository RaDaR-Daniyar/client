import React, { useState, useEffect } from "react";
import { Row, Pagination } from "react-bootstrap";
import ProductItem from "./ProductItem.js";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { observer } from "mobx-react-lite";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductList = observer(() => {
    const { catalog } = useContext(AppContext);
    const navigate = useNavigate();
    console.log(catalog.pages)
    // size observer
    const { 0: width, 1: setWidth } = useState();

    const resizeWindow = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    });

    const handleFirstPage = () => {
        // change page
        handleClick(1);
    };

    const handleLastPage = () => {
        // change page
        handleClick(catalog.pages);
    };

    const handleNextPage = () => {
        if (catalog.page < catalog.pages) {
            // change page
            handleClick(catalog.page + 1);
        }
    };

    const handlePrevPage = () => {
        if (catalog.page > 1) {
            // change page
            handleClick(catalog.page - 1);
        }
    };

    const handleClick = (page) => {
        if (width > 767) {
            //scroll top for pc
            window.scrollTo(0, 0);
        }
        // change page
        catalog.page = page;
        const params = {};
        if (catalog.brand) params.brand = catalog.brand;
        if (catalog.mehanizm) params.mehanizm = catalog.mehanizm;
        if (catalog.gender) params.gender = catalog.gender;
        if (catalog.shape) params.shape = catalog.shape;
        if (catalog.material) params.material = catalog.material;
        if (catalog.glass) params.glass = catalog.glass;
        if (catalog.strap) params.strap = catalog.strap;
        if (catalog.power) params.power = catalog.power;
        if (catalog.water) params.water = catalog.water;
        if (catalog.brend) params.brend = catalog.brend;
        if (catalog.page > 1) params.page = catalog.page;
        navigate({
            pathname: "/shop",
            search: "?" + createSearchParams(params),
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageButtons = 4;
        const halfMaxButtons = Math.floor(maxPageButtons / 2);
        const totalPages = catalog.pages;

        let startPage = Math.max(1, catalog.page - halfMaxButtons);
        let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

        if (startPage > 1) {
            pageNumbers.push(
                <Pagination.Ellipsis key="ellipsis-start" onClick={() => handleClick(startPage - 1)} />
            );
        }

        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(
                <Pagination.Item
                    key={page}
                    active={page === catalog.page}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            pageNumbers.push(
                <Pagination.Ellipsis key="ellipsis-end" onClick={() => handleClick(endPage + 1)} />
            );
        }

        return pageNumbers;
    };

    return (
        <>
            <Helmet>
                <title>Купить наручные часы в Алматы | Купить часы в Алматы</title>
                <meta name="description" content="Онлайн магазин наручных часов"/>
                <meta name="keywords" content="магазин швейцарских часов, магазин наручных часов, купить швейцарские часы, купить наручные часы в Алматы, наручные часы в Алматы,
                    часы в Алматы, купить наручные часы, наручные часы, часы, часы Anne Klein в Алматы, часы Calvin Klein в Алматы, часы Orinet в Алматы,
                    часы Citizen в Алматы, часы Diesel в Алматы, часы Swatch в Алматы, купить мужские часы, купить женские часы" />
            </Helmet>
            <Row className="mb-1">
                {catalog.products.length ? (
                    catalog.products.map((item) => (
                        <ProductItem key={`${item.id}_${catalog.page}`} data={item} />
                    ))
                ) : (
                    <p className="m-3">По вашему запросу ничего не найдено</p>
                )}
            </Row>
            <div className="d-flex justify-content-center">
                {catalog.pages > 1 && width > 767 && (
                    <Pagination>
                        <Pagination.First onClick={handleFirstPage} />
                        <Pagination.Prev onClick={handlePrevPage} />
                        {renderPageNumbers()}
                        <Pagination.Next onClick={handleNextPage} />
                        <Pagination.Last onClick={handleLastPage} />
                    </Pagination>
                )}
                {catalog.pages > catalog.page && width <= 767 && (
                    <button
                        style={{
                            height: '37px',
                            padding: ' 0 20px',
                            borderRadius: '5px',
                            marginBottom: '55px',
                            borderColor: '#1200ba',
                            backgroundColor: 'white'
                        }}
                        onClick={handleNextPage}
                    >
                        Загрузить ещё
                    </button>
                )}
            </div>
        </>
    );
});

export default ProductList;