/* 
{
    id: ,
    name: '',
    icon: '',
    album: [],
},

{
    id: ,
    cover: '',
    name: '',
    year: ''
},
*/



export const dataArtist = [
    {
        id: 1,
        name: 'Florence And The Machine',
        icon: '/images/dataArtist/icon/florence-and-the-machine.jpg',
        album: [
            {
                id: 1,
                cover: [
                    {
                        id: 1, cover: "/images/dataArtist/album/Lungs.jpg", shortDescription: 'CAPA PRINCIPAL',
                        format: [{ type: 'CD', situation: '0' }, { type: 'VINIL', situation: '1' }, { type: 'CASSETE', situation: '0' }]
                    }
                ],
                name: "Lungs",
                year: "2009"
            },
            {
                id: 2,
                cover: [
                    {
                        id: 1, cover: "/images/dataArtist/album/Ceremonials.jpg", shortDescription: 'CAPA PRINCIPAL',
                        format: [{ type: 'VINIL', situation: '1' }]
                    }
                ],
                name: "Ceremonials",
                year: "2011"
            },
            {
                id: 3,
                cover: [
                    {
                        id: 1, cover: "/images/dataArtist/album/How Big How Blue How Beautiful 1.jpg", shortDescription: 'CAPA PRINCIPAL | DELUXE',
                        format: [{ type: 'CD', situation: '1' }, { type: 'VINIL', situation: '1' }, { type: 'CASSETE', situation: '0' }, { type: 'BOX', situation: '1' }]
                    },
                    {
                        id: 2, cover: "/images/dataArtist/album/How Big How Blue How Beautiful 2.jpg", shortDescription: 'CAPA ALTERNATIVA 1',
                        format: [{ type: 'VINIL', situation: '1' }]
                    },
                    {
                        id: 3, cover: "/images/dataArtist/album/How Big How Blue How Beautiful 3.jpg", shortDescription: 'CAPA ALTERNATIVA 2',
                        format: [{ type: 'VINIL', situation: '0' }]
                    }
                ],
                name: "How Big, How Blue, How Beautiful",
                year: "2015"
            },
            {
                id: 4,
                cover: [{ id: 1, cover: "/images/dataArtist/album/High As Hope.jpg" }],
                name: "High As Hope",
                year: "2018"
            },
            {
                id: 5,
                cover: [
                    {
                        id: 1, cover: '/images/dataArtist/album/Dance Fever.jpg', shortDescription: 'CAPA PRINCIPAL',
                        format: [{ type: 'CD', situation: '1' }, { type: 'VINIL', situation: '0' }, { type: 'CASSETE', situation: '0' }, { type: 'BOX', situation: '1' }]
                    },
                    {
                        id: 2, cover: '/images/dataArtist/album/Dance Fever 1.jpg', shortDescription: 'CAPA ALTERNATIVA',
                        format: [{ type: 'CD', situation: '1' }]
                    },
                    {
                        id: 3, cover: '/images/dataArtist/album/Dance Fever 2.jpg', shortDescription: 'VERSÃO DELUXE',
                        format: [{ type: 'VINIL', situation: '1' }]
                    }
                ],
                name: "Dance Fever",
                year: "2022"
            }
        ]
    },
    {
        id: 2,
        name: 'Taylor Swift',
        icon: '/images/dataArtist/icon/taylor-swift.jpg',
        album: [
            {
                id: 1,
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Taylor_Swift_%C3%81lbum.jpg",
                name: "Taylor Swift",
                year: "2006"
            },
            {
                id: 2,
                cover: "https://m.media-amazon.com/images/I/61D2Zlcj1FS._AC_SL1200_.jpg",
                name: "Fearless",
                year: "2008",
            },
            {
                id: 3,
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/00/Taylor_Swift_-_Speak_Now.jpg",
                name: "Speak Now",
                year: "2010"
            },
            {
                id: 4,
                cover: "https://taylorswift.com.br/wp-content/uploads/2009/01/Taylor_Swift_-_Red.png",
                name: "Red",
                year: "2012"
            },
            {
                id: 5,
                cover: "https://m.media-amazon.com/images/I/41DDvvI+lIL._AC_SY450_.jpg",
                name: "1989",
                year: "2014"
            },
            {
                id: 6,
                cover: "https://upload.wikimedia.org/wikipedia/pt/f/f2/Taylor_Swift_-_Reputation.png",
                name: "Reputation",
                year: "2017"
            },
            {
                id: 7,
                cover: "https://s2.glbimg.com/SU_BSXqpPmQUSzzE4y_OagBC-3o=/0x0:1400x1400/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/z/s/FSHmXFTV2xJoT2Hz4gNA/lover-taylor.jpg",
                name: "Lover",
                year: "2019"
            },
            {
                id: 8,
                cover: "https://upload.wikimedia.org/wikipedia/pt/f/f8/Taylor_Swift_-_Folklore.png",
                name: "Folklore",
                year: "2020"
            },
            {
                id: 9,
                cover: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
                name: "Evermore",
                year: "2020"
            },
            {
                id: 10,
                cover: "https://m.media-amazon.com/images/I/71sTuVRDUuL._AC_SY450_.jpg",
                name: "Fearless (Taylor's Version)",
                year: "2021",
            },
            {
                id: 11,
                cover: "https://images-na.ssl-images-amazon.com/images/I/71zXQIRcbbL.jpg",
                name: "Red (Taylor's Version)",
                year: "2021"
            },
            {
                id: 12,
                cover: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto,c_limit,w_990,h_990/image-uploads/entry-image/jpeg/83bb334c4d728ffa1e80c7c8a5d8cb6f.jpg",
                name: "Midnights",
                year: "2022"
            }
        ]
    },
    {
        id: 3,
        name: 'Demi Lovato',
        icon: '/images/dataArtist/icon/demi-lovato.jpg',
        album: [],
    },
    {
        id: 4,
        name: 'Lady Gaga',
        icon: '/images/dataArtist/icon/lady-gaga.jpg',
        album: [],
    },
    {
        id: 5,
        name: 'Beyoncé',
        icon: '/images/dataArtist/icon/beyonce.jpg',
        album: [],
    },
    {
        id: 6,
        name: 'Selena Gomez',
        icon: '/images/dataArtist/icon/selena-gomez.jpg',
        album: [],
    },
    {
        id: 7,
        name: 'Miley Cyrus',
        icon: '/images/dataArtist/icon/miley-cyrus.jpg',
        album: [],
    },
    {
        id: 8,
        name: 'Lana Del Rey',
        icon: '/images/dataArtist/icon/lana-del-rey.jpg',
        album: [],
    },
    {
        id: 9,
        name: 'Ariana Grande',
        icon: '/images/dataArtist/icon/ariana-grande.jpg',
        album: [],
    },
    {
        id: 10,
        name: 'Adele',
        icon: '/images/dataArtist/icon/adele.jpg',
        album: [],
    },
    {
        id: 11,
        name: 'Britney Spears',
        icon: '/images/dataArtist/icon/britney-spears.jpg',
        album: [],
    },
    {
        id: 12,
        name: 'Katy Perry',
        icon: '/images/dataArtist/icon/katy-perry.jpg',
        album: [],
    },
    {
        id: 13,
        name: 'Isabella Summers',
        icon: '/images/dataArtist/icon/isabella-summers.jpg',
        album: [],
    },
    {
        id: 14,
        name: 'Madonna',
        icon: '/images/dataArtist/icon/madonna.jpg',
        album: [],
    },
    {
        id: 15,
        name: 'Rihanna',
        icon: '/images/dataArtist/icon/rihanna.jpg',
        album: [],
    },
    {
        id: 16,
        name: 'Winona Oak',
        icon: '/images/dataArtist/icon/winona-oak.jpg',
        album: [],
    },
    {
        id: 17,
        name: 'Rosalía',
        icon: '/images/dataArtist/icon/rosalia.jpg',
        album: [],
    },
    {
        id: 18,
        name: 'Calcinha Preta',
        icon: '/images/dataArtist/icon/calcinha-preta.jpg',
        album: [],
    },
    {
        id: 19,
        name: 'Abba',
        icon: '/images/dataArtist/icon/abba.jpg',
        album: [],
    },
    {
        id: 20,
        name: 'Carly Rae Jepsen',
        icon: '/images/dataArtist/icon/carly-rae-jepsen.jpg',
        album: [],
    },
    {
        id: 21,
        name: 'Cher',
        icon: '/images/dataArtist/icon/cher.jpg',
        album: [],
    },
    {
        id: 22,
        name: 'Dove Cameron',
        icon: '/images/dataArtist/icon/dove-cameron.jpg',
        album: [],
    },
    {
        id: 23,
        name: 'Marina',
        icon: '/images/dataArtist/icon/marina.jpg',
        album: [],
    },
    {
        id: 24,
        name: 'Maite Perroni',
        icon: '/images/dataArtist/icon/maite-perroni.jpg',
        album: [],
    },
    {
        id: 25,
        name: 'Billie Eilish',
        icon: '/images/dataArtist/icon/billie-eilish.jpg',
        album: [],
    },
    {
        id: 26,
        name: 'Melanie Martinez',
        icon: '/images/dataArtist/icon/melanie-martinez.jpg',
        album: [],
    },
    {
        id: 27,
        name: 'Pitty',
        icon: '/images/dataArtist/icon/pitty.jpg',
        album: [],
    },
    {
        id: 28,
        name: 'Pablo Vittar',
        icon: '/images/dataArtist/icon/pablo-vittar.jpg',
        album: [],
    },
    {
        id: 29,
        name: 'Rita Lee',
        icon: '/images/dataArtist/icon/rita-lee.jpg',
        album: [],
    },
    {
        id: 30,
        name: 'The Weeknd',
        icon: '/images/dataArtist/icon/the-weeknd.jpg',
        album: [],
    },
    {
        id: 31,
        name: 'Paramore',
        icon: '/images/dataArtist/icon/paramore.jpg',
        album: [],
    },
    {
        id: 32,
        name: 'Stevie Nicks',
        icon: '/images/dataArtist/icon/stevie-nicks.jpg',
        album: [],
    },
    {
        id: 33,
        name: 'Mariah Carey',
        icon: '/images/dataArtist/icon/mariah-carey.jpg',
        album: [],
    },
    {
        id: 34,
        name: 'Kailee Morgue',
        icon: '/images/dataArtist/icon/kailee-morgue.jpg',
        album: [],
    },
    {
        id: 35,
        name: 'Maysa',
        icon: '/images/dataArtist/icon/maysa.jpg',
        album: [],
    },
    {
        id: 36,
        name: 'Avril Lavigne',
        icon: '/images/dataArtist/icon/avril-lavigne.jpg',
        album: [],
    },
    {
        id: 37,
        name: 'Sia',
        icon: '/images/dataArtist/icon/sia.jpg',
        album: [],
    },
    {
        id: 38,
        name: 'Harry Styles',
        icon: '/images/dataArtist/icon/harry-styles.jpg',
        album: [],
    },
    {
        id: 39,
        name: "Guns N' Roses",
        icon: '/images/dataArtist/icon/guns-n-roses.jpg',
        album: [],
    },
    {
        id: 40,
        name: 'Jessie J',
        icon: '/images/dataArtist/icon/jessie-j.jpg',
        album: [],
    },
    {
        id: 41,
        name: 'Nirvana',
        icon: '/images/dataArtist/icon/nirvana.jpg',
        album: [],
    },
    {
        id: 42,
        name: 'Zendaya',
        icon: '/images/dataArtist/icon/zendaya.jpg',
        album: [],
    },
]
