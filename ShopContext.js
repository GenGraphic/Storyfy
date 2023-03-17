import React, {createContext, useState} from "react";

//Sories
import DansulVesel from "./AllStorys/DansulVesel";

const ShopContext = createContext();

export function ShopProvider ({children}) {
    const [shopItemsList, setShopItemsList] = useState([
        {
            title: 'Dansul vesel',
            description: 'O povestioara amuzanta in care animalele se intrec in diferite probe. Dar Vrand sa se distreze aceasta decid sa faca un concurs de dans. Uneori e mai bine sa ne distram in loc sa ne intrecem.',
            age: '3+',
            price: 0.99,
            thumbnail: require('./stories/DansulVesel/thumbnail.png'),
            id: 1,
            story: <DansulVesel/> 
        }
    ]);

    return (
        <ShopContext.Provider value={{shopItemsList}}>{children}</ShopContext.Provider>
    )
}

export default ShopContext;