import React, { useState } from "react";
import '../sections/style.css'
import { Form } from "react-bootstrap";

const SearchField = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchInput);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit} className="d-flex justify-content-between mt-3">
        <input
            class="input"
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Поиск"
            style={{ width: "83%", height: 37, borderRadius: '5px' }}
        />
        <button class="button" type="submit"style={{ width: "15%", height: 37, backgroundColor: '#1200ba', color: 'white', borderRadius: '5px' }}>Найти</button>
        </Form>
    );
}

export default SearchField