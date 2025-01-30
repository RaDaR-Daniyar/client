import React, { useState } from "react";
import Menu from "./Menu";

const MobileMenu = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:'Главная', href:'/index.html'}, {value:'Мужские часы', href:'/shop.html?gender=3'}, {value:'Женские часы', href:'/shop.html?gender=2'}, 
        {value:'Скидки', href:'/shop.html?sale=true'},
        {value:'Перьевые ручки', href:'/shop.html?brend=1'}, {value:'Шариковые ручки', href:'/shop.html?brend=2'}, {value:'Роллер-ручки', href:'/shop.html?brend=3'},
        {value:' Victorinox', href:'/shop.html?brand=15'}, {value:'Напольные часы', href:'/shop.html?gender=9'}, {value:'Настеные часы', href:'/shop.html?gender=10'},
        {value:'Настольные часы', href:'/shop.html?gender=11'}, {value:'Глобус-бары', href:'/shop.html?brend=70'}, {value:'Статуэтки', href:'/shop.html?brend=68'}]

    return (
        <div className="show-on-mobile" style={{fontFamily: 'Book Antiqua'}}>
            <nav>
                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <Menu active={menuActive} setActive={setMenuActive} header={""} items={items} />
        </div>
    )
}

export default MobileMenu