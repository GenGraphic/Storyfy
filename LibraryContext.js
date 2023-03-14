import React, {createContext, useState} from "react";

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
            content: [
                'Intr-un sat linistit, traia un copil alaturi de familia sa. Erau oameni saraci, dar locuiau intr-o casa primitoare inconjurata de campuri intinse si paduri dese.',
                'In curte, copilul avea multe animale dragi lui, pe care le ingrijea cu multa atentie.',
                'Insa, in camera lui era intotdeauna dezordine. Jucarii si haine erau aruncate peste tot, astfel ca nici macar patul sau nu putea fi vazut.',
                'Parintii copilului erau oameni buni si iubitori, iar mama sa era mereu gata sa ii ofere sfaturi bune si intelepte. Era o femeie frumoasa si blanda, cu ochi calzi si par lung si castaniu.',
                'Copilul isi dorea o noua jucarie pe care ceilalti copii din sat o aveau, insa avea nevoie de bani pentru a o cumpara.',
                'S-a hotarat sa ceara bani de la mama sa, insa aceasta i-a spus ca va primi banii doar daca isi va face ordine in camera. Copilul nu a ascultat-o si a plecat suparat.',
                'A doua zi, copilul s-a dus din nou la mama sa sa ii ceara bani. Mama l-a intrebat daca si-a facut curat in camera, iar copilul a mintit spunand ca da. Mama, dezamagita, i-a spus ca nu va primi banii daca nu isi va face ordine in camera.',
                'Cu inima franta si fara alta solutie, copilul s-a apucat sa faca curat in camera.',
                'Sub ultima gramada de haine aruncate, a gasit exact suma de bani de care avea nevoie. Acesta si-a dat seama ca mama sa pusese banii acolo special, pentru a-l invata o lectie.',
                [
                    'Plin de uimire si recunostinta, copilul s-a dus la mama sa si a strans-o in brate.',
                    'Copilul: Multumesc, mama! Am invatat ca trebuie sa ascult de sfaturile tale si ca trebuie sa imi fac ordine in camera mea. Promit sa fiu mai ascultator de acum inainte!',
                ],
                [
                    'Mama sa l-a strans la piept si i-a zambit cu dragoste.',
                    'Mama: Ma bucur ca ai invatat aceasta lectie, dragul meu. Sunt mandra de tine si sunt sigura ca vei deveni un baiat minunat!',
                    'Si asa, copilul a invatat cat de importanta este ascultarea de parinti si cat de mult il iubesc acestia.'
                ],
            ],
            imagies: [
                require('./stories/Ascultarea/images/1.png'),
                require('./stories/Ascultarea/images/2.png'),
                require('./stories/Ascultarea/images/3.png'),
                require('./stories/Ascultarea/images/4.png'),
                require('./stories/Ascultarea/images/5.png'),
                require('./stories/Ascultarea/images/6.png'),
                require('./stories/Ascultarea/images/7.png'),
                require('./stories/Ascultarea/images/8.png'),
                require('./stories/Ascultarea/images/9.png'),
                require('./stories/Ascultarea/images/10.png'),
                require('./stories/Ascultarea/images/11.png'),
            ]
        },
        {
            name: 'Consecinta Minciunii',
            description: 'O scurta povestioara din care invatam ca minciuna aduce consecinte grave. Vedem cum miniuna spusa chair si in gluma aduce probleme.',
            price: 0,
            id: 2,
            age: '5+',
            thumbnail: require('./stories/Minciuna/images/1.png'),
            content: [
                'Felix era un baiat jucaus si mereu pus pe sotii, cu o imaginatie bogata. El avea 11 ani si era cel mai mic dintre cei 5 frati ai familiei. Locuiau intr-o casa mare si spatioasa, inconjurata de gradini si livezi. Felix era mandru de stana de oi pe care o ingrijea alaturi de fratii sai.',
                'Intr-o zi, cand a venit randul lui sa aiba grija de oi, Felix a vrut sa faca o gluma fratilor sai si sa se distreze.',
                'A alergat catre ei, mintindu-i ca un lup ataca stana de oi.',
                [
                    'Felix: Veniti, veniti! Un lup ataca stana de oi!',
                    'Fratele cel mare: Ce? Un lup? Sa mergem sa vedem!',
                    'Fratele mijlociu: Nu cred ca e un lup, Felix glumeste mereu cu noi.',
                    'Fratele cel mare: Hai sa mergem sa vedem cu ochii nostri.',
                    'Fratii sai s-au speriat si au inceput sa alearge catre stana, ingrijorati pentru siguranta animalelor.'
                ],
                [
                    'Cand au ajuns acolo, nu era niciun lup. Felix s-a distrat copios si a ramas fascinat de reactia fratilor sai.',
                    'Fratele cel mijlociu: Unde e lupul?',
                    'Felix: Ahahaha! V-am pacalit! Nu era niciun lup!',
                    'Fratele cel mare: Felix, nu mai glumi cu noi asa. E periculos daca intr-o zi chiar vine un lup.'
                ],
                'A doua zi, Felix a facut din nou aceeasi gluma, spunandu-le ca un urs ataca stana de oi.',
                [
                    'Felix: Ajutor! Un urs vine sa atace stana de oi!',
                    'Fratele mijlociu: Ce? Un urs? Hai sa mergem repede!',
                    'Fratele cel mare: Nu cred ca Felix spune adevarul. Nu se poate sa fie un urs aici.',
                    'Fratele mijlociu: Dar daca chiar e un urs? Hai sa vedem ce se intampla.',
                    'Si de aceasta data, fratii sai au alergat spre stana pentru a se asigura ca totul este in regula.'
                ],
                [
                    'Dar, cand au ajuns acolo, nu era niciun urs. Felix a ras si a glumit din nou, bucurandu-se de reactia fraților săi.',
                    'Fratele mijlociu: Unde e ursul, Felix?',
                    'Felix: Haha! V-am facut din nou o farsa.',
                    'Fratele cel mare: Felix, nu mai glumi asa. Daca o sa mai minti, o sa ai probleme.'
                ],
                'Insa a treia zi, in stana de oi chiar a aparut un lup adevarat, care a atacat animalele.',
                'Felix a fugit panicat la fratii sai, cerandu-le ajutorul. Dar fratii lui nu l-au mai crezut, considerand ca este doar o alta gluma.',
                [
                    'Felix: Fratilor, intr-adevar, vine un lup! E adevarat!',
                    'Fratele mijlociu: Ai mai glumit cu noi si acum vrei sa ne pacalesti din nou?',
                    'Felix: Nu, nu, chiar e adevarat!',
                    'Fratele cel mare: Nu te mai credem, Felix. Daca in stana e un lup, du-te tu sa il alungi.',
                    'Felix s-a intors la stana grabit si a inceput sa alunge lupul.'
                ],
                [
                    'Felix: Aaah, ajutor!',
                    'In timpul luptei, Felix a fost zgariat pe fata de catre lup. Din fericire cainele stanei a aparut si l-a salvat pe Felix de lup.'
                ],
                [
                    'Felix s-a dus la fratii sai plangand, cerandu-si iertare ca a mințit si promitand sa nu mai faca niciodata astfel de glume.',
                    'Felix: Ma doare obrazul, ma simt atat de rau. Fratilor, imi pare atat de rau ca v-am mintit mereu. Am invatat o lectie importanta astazi.',
                    ' Fratii sai l-au iertat si l-au consolat, spunandu-i ca e bine ca a invatat din greseala sa si ca e important sa spui intotdeauna adevarul.'
                ]
            ],
            imagies: [
                require('./stories/Minciuna/images/1.png'),
                require('./stories/Minciuna/images/2.png'),
                require('./stories/Minciuna/images/3.png'),
                require('./stories/Minciuna/images/4.png'),
                require('./stories/Minciuna/images/5.png'),
                require('./stories/Minciuna/images/6.png'),
                require('./stories/Minciuna/images/7.png'),
                require('./stories/Minciuna/images/8.png'),
                require('./stories/Minciuna/images/9.png'),
                require('./stories/Minciuna/images/10.png'),
                require('./stories/Minciuna/images/11.png'),
                require('./stories/Minciuna/images/12.png'),
                require('./stories/Minciuna/images/13.jpg'),
            ]
        },
        {
            name: 'Consecinta Minciunii',
            description: 'O scurta povestioara din care invatam ca minciuna aduce consecinte grave. Vedem cum miniuna spusa chair si in gluma aduce probleme.',
            price: 0,
            id: 3,
            age: '5+',
            thumbnail: require('./stories/Minciuna/images/1.png'),
            content: [
                'Felix era un baiat jucaus si mereu pus pe sotii, cu o imaginatie bogata. El avea 11 ani si era cel mai mic dintre cei 5 frati ai familiei. Locuiau intr-o casa mare si spatioasa, inconjurata de gradini si livezi. Felix era mandru de stana de oi pe care o ingrijea alaturi de fratii sai.',
                'Intr-o zi, cand a venit randul lui sa aiba grija de oi, Felix a vrut sa faca o gluma fratilor sai si sa se distreze.',
                'A alergat catre ei, mintindu-i ca un lup ataca stana de oi.',
                [
                    'Felix: Veniti, veniti! Un lup ataca stana de oi!',
                    'Fratele cel mare: Ce? Un lup? Sa mergem sa vedem!',
                    'Fratele mijlociu: Nu cred ca e un lup, Felix glumeste mereu cu noi.',
                    'Fratele cel mare: Hai sa mergem sa vedem cu ochii nostri.',
                    'Fratii sai s-au speriat si au inceput sa alearge catre stana, ingrijorati pentru siguranta animalelor.'
                ],
                [
                    'Cand au ajuns acolo, nu era niciun lup. Felix s-a distrat copios si a ramas fascinat de reactia fratilor sai.',
                    'Fratele cel mijlociu: Unde e lupul?',
                    'Felix: Ahahaha! V-am pacalit! Nu era niciun lup!',
                    'Fratele cel mare: Felix, nu mai glumi cu noi asa. E periculos daca intr-o zi chiar vine un lup.'
                ],
                'A doua zi, Felix a facut din nou aceeasi gluma, spunandu-le ca un urs ataca stana de oi.',
                [
                    'Felix: Ajutor! Un urs vine sa atace stana de oi!',
                    'Fratele mijlociu: Ce? Un urs? Hai sa mergem repede!',
                    'Fratele cel mare: Nu cred ca Felix spune adevarul. Nu se poate sa fie un urs aici.',
                    'Fratele mijlociu: Dar daca chiar e un urs? Hai sa vedem ce se intampla.',
                    'Si de aceasta data, fratii sai au alergat spre stana pentru a se asigura ca totul este in regula.'
                ],
                [
                    'Dar, cand au ajuns acolo, nu era niciun urs. Felix a ras si a glumit din nou, bucurandu-se de reactia fraților săi.',
                    'Fratele mijlociu: Unde e ursul, Felix?',
                    'Felix: Haha! V-am facut din nou o farsa.',
                    'Fratele cel mare: Felix, nu mai glumi asa. Daca o sa mai minti, o sa ai probleme.'
                ],
                'Insa a treia zi, in stana de oi chiar a aparut un lup adevarat, care a atacat animalele.',
                'Felix a fugit panicat la fratii sai, cerandu-le ajutorul. Dar fratii lui nu l-au mai crezut, considerand ca este doar o alta gluma.',
                [
                    'Felix: Fratilor, intr-adevar, vine un lup! E adevarat!',
                    'Fratele mijlociu: Ai mai glumit cu noi si acum vrei sa ne pacalesti din nou?',
                    'Felix: Nu, nu, chiar e adevarat!',
                    'Fratele cel mare: Nu te mai credem, Felix. Daca in stana e un lup, du-te tu sa il alungi.',
                    'Felix s-a intors la stana grabit si a inceput sa alunge lupul.'
                ],
                [
                    'Felix: Aaah, ajutor!',
                    'In timpul luptei, Felix a fost zgariat pe fata de catre lup. Din fericire cainele stanei a aparut si l-a salvat pe Felix de lup.'
                ],
                [
                    'Felix s-a dus la fratii sai plangand, cerandu-si iertare ca a mințit si promitand sa nu mai faca niciodata astfel de glume.',
                    'Felix: Ma doare obrazul, ma simt atat de rau. Fratilor, imi pare atat de rau ca v-am mintit mereu. Am invatat o lectie importanta astazi.',
                    ' Fratii sai l-au iertat si l-au consolat, spunandu-i ca e bine ca a invatat din greseala sa si ca e important sa spui intotdeauna adevarul.'
                ]
            ],
            imagies: [
                require('./stories/Minciuna/images/1.png'),
                require('./stories/Minciuna/images/2.png'),
                require('./stories/Minciuna/images/3.png'),
                require('./stories/Minciuna/images/4.png'),
                require('./stories/Minciuna/images/5.png'),
                require('./stories/Minciuna/images/6.png'),
                require('./stories/Minciuna/images/7.png'),
                require('./stories/Minciuna/images/8.png'),
                require('./stories/Minciuna/images/9.png'),
                require('./stories/Minciuna/images/10.png'),
                require('./stories/Minciuna/images/11.png'),
                require('./stories/Minciuna/images/12.png'),
                require('./stories/Minciuna/images/13.jpg'),
            ]
        },
        {
            name: 'Consecinta Minciunii',
            description: 'O scurta povestioara din care invatam ca minciuna aduce consecinte grave. Vedem cum miniuna spusa chair si in gluma aduce probleme.',
            price: 0,
            id: 4,
            age: '5+',
            thumbnail: require('./stories/Minciuna/images/1.png'),
            content: [
                'Felix era un baiat jucaus si mereu pus pe sotii, cu o imaginatie bogata. El avea 11 ani si era cel mai mic dintre cei 5 frati ai familiei. Locuiau intr-o casa mare si spatioasa, inconjurata de gradini si livezi. Felix era mandru de stana de oi pe care o ingrijea alaturi de fratii sai.',
                'Intr-o zi, cand a venit randul lui sa aiba grija de oi, Felix a vrut sa faca o gluma fratilor sai si sa se distreze.',
                'A alergat catre ei, mintindu-i ca un lup ataca stana de oi.',
                [
                    'Felix: Veniti, veniti! Un lup ataca stana de oi!',
                    'Fratele cel mare: Ce? Un lup? Sa mergem sa vedem!',
                    'Fratele mijlociu: Nu cred ca e un lup, Felix glumeste mereu cu noi.',
                    'Fratele cel mare: Hai sa mergem sa vedem cu ochii nostri.',
                    'Fratii sai s-au speriat si au inceput sa alearge catre stana, ingrijorati pentru siguranta animalelor.'
                ],
                [
                    'Cand au ajuns acolo, nu era niciun lup. Felix s-a distrat copios si a ramas fascinat de reactia fratilor sai.',
                    'Fratele cel mijlociu: Unde e lupul?',
                    'Felix: Ahahaha! V-am pacalit! Nu era niciun lup!',
                    'Fratele cel mare: Felix, nu mai glumi cu noi asa. E periculos daca intr-o zi chiar vine un lup.'
                ],
                'A doua zi, Felix a facut din nou aceeasi gluma, spunandu-le ca un urs ataca stana de oi.',
                [
                    'Felix: Ajutor! Un urs vine sa atace stana de oi!',
                    'Fratele mijlociu: Ce? Un urs? Hai sa mergem repede!',
                    'Fratele cel mare: Nu cred ca Felix spune adevarul. Nu se poate sa fie un urs aici.',
                    'Fratele mijlociu: Dar daca chiar e un urs? Hai sa vedem ce se intampla.',
                    'Si de aceasta data, fratii sai au alergat spre stana pentru a se asigura ca totul este in regula.'
                ],
                [
                    'Dar, cand au ajuns acolo, nu era niciun urs. Felix a ras si a glumit din nou, bucurandu-se de reactia fraților săi.',
                    'Fratele mijlociu: Unde e ursul, Felix?',
                    'Felix: Haha! V-am facut din nou o farsa.',
                    'Fratele cel mare: Felix, nu mai glumi asa. Daca o sa mai minti, o sa ai probleme.'
                ],
                'Insa a treia zi, in stana de oi chiar a aparut un lup adevarat, care a atacat animalele.',
                'Felix a fugit panicat la fratii sai, cerandu-le ajutorul. Dar fratii lui nu l-au mai crezut, considerand ca este doar o alta gluma.',
                [
                    'Felix: Fratilor, intr-adevar, vine un lup! E adevarat!',
                    'Fratele mijlociu: Ai mai glumit cu noi si acum vrei sa ne pacalesti din nou?',
                    'Felix: Nu, nu, chiar e adevarat!',
                    'Fratele cel mare: Nu te mai credem, Felix. Daca in stana e un lup, du-te tu sa il alungi.',
                    'Felix s-a intors la stana grabit si a inceput sa alunge lupul.'
                ],
                [
                    'Felix: Aaah, ajutor!',
                    'In timpul luptei, Felix a fost zgariat pe fata de catre lup. Din fericire cainele stanei a aparut si l-a salvat pe Felix de lup.'
                ],
                [
                    'Felix s-a dus la fratii sai plangand, cerandu-si iertare ca a mințit si promitand sa nu mai faca niciodata astfel de glume.',
                    'Felix: Ma doare obrazul, ma simt atat de rau. Fratilor, imi pare atat de rau ca v-am mintit mereu. Am invatat o lectie importanta astazi.',
                    ' Fratii sai l-au iertat si l-au consolat, spunandu-i ca e bine ca a invatat din greseala sa si ca e important sa spui intotdeauna adevarul.'
                ]
            ],
            imagies: [
                require('./stories/Minciuna/images/1.png'),
                require('./stories/Minciuna/images/2.png'),
                require('./stories/Minciuna/images/3.png'),
                require('./stories/Minciuna/images/4.png'),
                require('./stories/Minciuna/images/5.png'),
                require('./stories/Minciuna/images/6.png'),
                require('./stories/Minciuna/images/7.png'),
                require('./stories/Minciuna/images/8.png'),
                require('./stories/Minciuna/images/9.png'),
                require('./stories/Minciuna/images/10.png'),
                require('./stories/Minciuna/images/11.png'),
                require('./stories/Minciuna/images/12.png'),
                require('./stories/Minciuna/images/13.jpg'),
            ]
        },
        
    ]);

    return(
        <LibraryContext.Provider value={{userStories, setUserStories}}>{children}</LibraryContext.Provider>
    )
}

export default LibraryContext;