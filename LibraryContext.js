import React, {createContext, useState} from "react";

//Sories
import Ascultarea from './AllStorys/Ascultarea';
import Minciunica from "./AllStorys/Minciunica";
import DansulVesel from "./AllStorys/DansulVesel";

const LibraryContext = createContext();

export function  LibraryProvider ({children})  {
    const [userStories, setUserStories] = useState([
        {
            name: 'Ascultarea',
            description: 'O scurta povestioara care subliniaza importanta ascultarii de parinti. si cum ascultand de parinti aduce mereu lucruri bune',
            price: 0,
            id: 1,
            age: '4+',
            thumbnail: require('./stories/Ascultarea/images/1.png'),
            story: <Ascultarea/>
        },
        {
            name: 'Consecinta Minciunii',
            description: 'O scurta povestioara din care invatam ca minciuna aduce consecinte grave. Vedem cum miniuna spusa chair si in gluma aduce probleme.',
            price: 0,
            id: 2,
            age: '5+',
            thumbnail: require('./stories/Minciuna/images/1.png'),
            story: <Minciunica/>
        },
        {
            name: 'Dansul vesel',
            description: 'This is a test story, used to test the functionality of the Aplicattion. This has to be deleted after development.',
            price: 0.99,
            id: 3,
            age: '4+',
            thumbnail: require('./stories/DansulVesel/thumbnail.png'),
            story: <DansulVesel/>
        },
        
    ]);

    return(
        <LibraryContext.Provider value={{userStories, setUserStories}}>{children}</LibraryContext.Provider>
    )
}

export default LibraryContext;