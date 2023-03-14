import React, {createContext, useState} from "react";

const ShopContext = createContext();

export function ShopProvider ({children}) {
    const [shopItemsList, setShopItemsList] = useState([
        {
            title: 'Test storry',
            description: 'This is a test story, used to test the functionality of the Aplicattion. This has to be deleted after development.',
            age: '4+',
            price: 0.99,
            thumbnail: require('./assets/images/testStory.png'),
            id: 1 
        }
    ]);

    return (
        <ShopContext.Provider value={{shopItemsList}}>{children}</ShopContext.Provider>
    )
}

export default ShopContext;