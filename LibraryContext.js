import React, {createContext, useState} from "react";

//Sories
import Ascultarea from './AllStorys/Ascultarea';
import Minciunica from "./AllStorys/Minciunica";

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
    ]);

    const addStory = (name, description, price, age, thumbnail, story) => {
        //make copy of userStories
        const newUserStory = userStories;

        //create newStory with variable provided
        const newStory = {
            name: name,
            description: description,
            price: price,
            id: userStories.length + 1,
            age: age,
            thumbnail: thumbnail,
            story: story
        }

        //add the newStory to copy userStories
        newUserStory.push(newStory);

        //set userStories the copy list
        setUserStories(newUserStory);

        alert('Thank you for buying from us.')
    }

    return(
        <LibraryContext.Provider value={{userStories, setUserStories, addStory}}>{children}</LibraryContext.Provider>
    )
}

export default LibraryContext;