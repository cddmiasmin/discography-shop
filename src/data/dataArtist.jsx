/* 
{
    id: ,
    name: '',
    icon: '',
    banner: '',
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
        icon: 'src/assets/images/dataArtist/icon/florenceandthemachine.jpg',
        banner: 'https://premiojovem.com.br/wp-content/uploads/2022/03/FNb8NmQWUAYMn47-scaled-e1648495272736.jpeg',
        album: [
            {
                id: 1,
                cover: [
                    {id: 1, cover: "src/assets/images/dataArtist/album/Lungs.jpg", shortDescription: 'CAPA PRINCIPAL',
                    format: [{type:'CD', situation: '0'},{type:'VINIL', situation: '1'},{type:'CASSETE', situation: '0'}]}
                ],
                name:  "Lungs",
                year:"2009"
            }, 
            {
                id: 2,
                cover: [
                    {id: 1, cover: "src/assets/images/dataArtist/album/Ceremonials.jpg", shortDescription: 'CAPA PRINCIPAL',
                    format: [{type:'VINIL', situation: '1'}]}
                ],
                name:  "Ceremonials",
                year:"2011"
            }, 
            {
                id: 3,
                cover: [
                    { id: 1, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 1.jpg", shortDescription: 'CAPA PRINCIPAL | DELUXE',
                        format: [{type:'CD', situation: '1'},{type:'VINIL', situation: '1'},{type:'CASSETE', situation: '0'}, {type:'BOX', situation: '1'}]},
                    { id: 2, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 2.jpg", shortDescription: 'CAPA ALTERNATIVA 1',
                        format: [{type:'VINIL', situation: '1'}]},
                    { id: 3, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 3.jpg", shortDescription: 'CAPA ALTERNATIVA 2',
                        format: [{type:'VINIL', situation: '0'}]}
                ],
                name:  "How Big, How Blue, How Beautiful",
                year: "2015"
            }, 
            {
                id: 4,
                cover: [{id: 1, cover: "src/assets/images/dataArtist/album/High As Hope.jpg"}],
                name:  "High As Hope",
                year:"2018"
            }, 
            {
                id: 5,
                cover: [
                    {   
                        id: 1, cover:'src/assets/images/dataArtist/album/Dance Fever.jpg', shortDescription: 'CAPA PRINCIPAL',
                        format: [{type:'CD', situation: '1'},{type:'VINIL', situation: '0'},{type:'CASSETE', situation: '0'}, {type:'BOX', situation: '1'}]
                    },
                    {  
                        id: 2, cover:'src/assets/images/dataArtist/album/Dance Fever 1.jpg', shortDescription: 'CAPA ALTERNATIVA',
                        format: [{type:'CD', situation: '1'}]
                    },
                    {   
                        id: 3, cover:'src/assets/images/dataArtist/album/Dance Fever 2.jpg', shortDescription: 'VERSÃO DELUXE',
                        format: [{type:'VINIL', situation: '1'}]
                    }
                ],
                name:  "Dance Fever",
                year:"2022"
            }
        ]
    }, 
    {
        id: 2,
        name: 'Taylor Swift',
        icon: 'src/assets/images/dataArtist/taylorswift.jpg',
        banner: 'https://asset-a.grid.id/crop/60x612:1068x1080/x/photo/2022/08/29/fbtnzmrxgai50lsjpg-20220829043409.jpg',
        album : [
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
                cover:"https://upload.wikimedia.org/wikipedia/pt/0/00/Taylor_Swift_-_Speak_Now.jpg",
                name:"Speak Now",
                year:"2010"
            },
            {
                id: 4,
                cover:"https://taylorswift.com.br/wp-content/uploads/2009/01/Taylor_Swift_-_Red.png",
                name:"Red",
                year:"2012"
            },
            {
                id: 5,
                cover:"https://m.media-amazon.com/images/I/41DDvvI+lIL._AC_SY450_.jpg",
                name:"1989",
                year:"2014"
            },
            {
                id: 6,
                cover:"https://upload.wikimedia.org/wikipedia/pt/f/f2/Taylor_Swift_-_Reputation.png",
                name:"Reputation",
                year:"2017"
            },
            {
                id: 7,
                cover:"https://s2.glbimg.com/SU_BSXqpPmQUSzzE4y_OagBC-3o=/0x0:1400x1400/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/z/s/FSHmXFTV2xJoT2Hz4gNA/lover-taylor.jpg",
                name:"Lover",
                year:"2019"
            },
            {
                id: 8,
                cover:"https://upload.wikimedia.org/wikipedia/pt/f/f8/Taylor_Swift_-_Folklore.png",
                name:"Folklore",
                year:"2020"
            },
            {
                id: 9,
                cover:"https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
                name:"Evermore",
                year:"2020"
            },
            {
                id: 10,
                cover:"https://m.media-amazon.com/images/I/71sTuVRDUuL._AC_SY450_.jpg",
                name:"Fearless (Taylor's Version)",
                year:"2021",
            },
            {
                id: 11,
                cover:"https://images-na.ssl-images-amazon.com/images/I/71zXQIRcbbL.jpg",
                name:"Red (Taylor's Version)",
                year:"2021"
            },
            {
                id: 12,
                cover:"https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto,c_limit,w_990,h_990/image-uploads/entry-image/jpeg/83bb334c4d728ffa1e80c7c8a5d8cb6f.jpg",
                name:"Midnights",
                year:"2022"
            }
        ]
    },
    {
        id: 3,
        name: 'Demi Lovato',
        icon: 'https://br.paipee.com/wp-content/uploads/2022/05/467031-demi-lovato-skin-of-my-teeth-ganha-da-700x700-3.jpg',
        banner: 'https://estereofonica.com/wp-content/uploads/2022/06/demi-lovato-estrena-holy-fvck-su-octavo-album_descarga-3.jpg',
        album: [],
    },
    {
        id: 4,
        name: 'Lady Gaga',
        icon: 'https://i.scdn.co/image/ab67616d00001e02348a8b432f3e8e02f342056e',
        banner: 'https://images4.alphacoders.com/113/1133669.jpg',
        album: [],
    },
    {
        id: 5,
        name: 'Beyoncé',
        icon: 'https://i.pinimg.com/originals/d5/e2/c7/d5e2c721ed87eaabcc02b34808d6dbab.jpg',
        banner: 'https://media.gq-magazine.co.uk/photos/62bed80f1e96714691fd64e7/64:25/w_2943,h_1149,c_limit/Beyonce.jpeg',
        album: [],
    },
    {
        id: 6,
        name: 'Selena Gomez',
        icon: 'https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828',
        banner: 'https://1.bp.blogspot.com/-iM8Qh8bFYZ0/YKaMstqs9dI/AAAAAAAAyBY/yZ36270iqTk-yVG3n40qkVk5NwPx5WfDACLcBGAsYHQ/s1605/img18052021_111.jpg',
        album: [],
    },
    {
        id: 7,
        name: 'Miley Cyrus',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb02651b19050d8bf64b18d40a',
        banner: 'https://okdiario.com/img/2022/03/28/miley-cyrus..jpg',
        album: [],
    },
    {
        id: 8,
        name: 'Lana Del Rey',
        icon: 'https://i.scdn.co/image/ab6761610000e5ebc5903678d3db18e271e42be0',
        banner: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Lana-Del-Rey-Backgrounds.jpg',
        album: [],
    },
    {
        id: 9,
        name: 'Ariana Grande',
        icon: 'https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952',
        banner: '',
        album: [],
    },
    {
        id: 10,
        name: 'Adele',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17',
        banner: '',
        album: [],
    },
    {
        id: 11,
        name: 'Britney Spears',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb4e7e6ded87a4e0f65b5afcec',
        banner: '',
        album: [],
    },
    {
        id: 12,
        name: 'Katy Perry',
        icon: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/09/01/0/6/f/2/1598941770952_600.jpg',
        banner: '',
        album: [],
    },
    {
        id: 13,
        name: 'Isabella Summers',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb076f66b2dabe3ac04a211804',
        banner: '',
        album: [],
    },
    {
        id: 14,
        name: 'Madonna',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb034a19a2d576c696b5be94a5',
        banner: '',
        album: [],
    },
    {
        id: 15,
        name: 'Rihanna',
        icon: 'https://i.scdn.co/image/ab6761610000e5eb019d6873a01987cbe35888cd',
        banner: '',
        album: [],
    },
    {
        id: 16,
        name: 'Winona Oak',
        icon: 'https://resources.tidal.com/images/e32d17f4/ee93/4b9b/80fe/d02dfeeac141/750x750.jpg',
        banner: '',
        album: [],
    },
    {
        id: 17,
        name: 'Rosalía',
        icon: 'https://i.scdn.co/image/ab6761610000e5ebd7bb678bef6d2f26110cae49',
        banner: '',
        album: [],
    },
]
