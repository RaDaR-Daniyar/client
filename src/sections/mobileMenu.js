import React, { useState } from "react";
import Menu from "./Menu";

const MobileMenu = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:'Главная', href:'/'}, {value:'Каталог', href:'/shop'}, {value:'Скидки', href:'/shop?sale=true'}, {value:'Мужские часы', href:'/shop?gender=3'}, {value:'Женские часы', href:'/shop?gender=2'}, {value:'Перьевые ручки', href:'/shop?brend=1'}, {value:' Victorinox', href:'/shop?brand=15'}, {value:'О магазине', href:'/about'}, {value:'Доставка и оплата', href:'/delivery'}, {value:'Сервис центр', href:'/service'}]

    return (
        <div className="show-on-mobile">
            <nav>
                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <Menu active={menuActive} setActive={setMenuActive} header={"Меню"} items={items} />
        </div>
    )
}

export default MobileMenu