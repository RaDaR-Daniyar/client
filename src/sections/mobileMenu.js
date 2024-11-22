import React, { useState } from "react";
import Menu from "./Menu";

const MobileMenu = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:'Главная', href:'/index.html'}, {value:'Мужские часы', href:'/shop?gender=3'}, {value:'Женские часы', href:'/shop?gender=2'}, 
        {value:'Скидки', href:'/shop?sale=true'},
        {value:'Перьевые ручки', href:'/shop?brend=1'}, {value:'Шариковые ручки', href:'/shop?brend=2'}, {value:'Роллер-ручки', href:'/shop?brend=3'},
        {value:' Victorinox', href:'/shop?brand=15'}, {value:'Напольные часы', href:'/shop?gender=9'}, {value:'Настеные часы', href:'/shop?gender=10'},
        {value:'Настольные часы', href:'/shop?gender=11'}, {value:'Глобус-бары', href:'/shop?brend=70'}, {value:'Статуэтки', href:'/shop?brend=68'}]

    return (
        <div className="show-on-mobile">
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