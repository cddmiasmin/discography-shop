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
        icon: 'src/assets/images/dataArtist/florenceandthemachine.jpg',
        banner: 'https://premiojovem.com.br/wp-content/uploads/2022/03/FNb8NmQWUAYMn47-scaled-e1648495272736.jpeg',
        album: [
            {
                id: 1,
                cover: "src/assets/images/dataArtist/album/Lungs.jpg",
                name:  "Lungs",
                year:"2009"
            }, 
            {
                id: 2,
                cover: "src/assets/images/dataArtist/album/Ceremonials.jpg",
                name:  "Ceremonials",
                year:"2011"
            }, 
            {
                id: 3,
                cover: [
                    { id: 1, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 1.jpg"},
                    { id: 2, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 2.jpg"},
                    { id: 3, cover: "src/assets/images/dataArtist/album/How Big How Blue How Beautiful 3.jpg"}
                ],
                name:  "How Big, How Blue, How Beautiful",
                year: "2015"
            }, 
            {
                id: 4,
                cover: "src/assets/images/dataArtist/album/High As Hope.jpg",
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
                        format: [{type:'CD', situation: '0'}]
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
        icon: 'https://styles.redditmedia.com/t5_2rlwe/styles/communityIcon_c94var5z5wk91.png',
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
        icon: 'https://i.em.com.br/PXObD5d-XeHMu68JEo8m_MVkT6Q=/1200x1200/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/06/07/1371825/demi-lovato_1_30298.jpg',
        banner: 'https://estereofonica.com/wp-content/uploads/2022/06/demi-lovato-estrena-holy-fvck-su-octavo-album_descarga-3.jpg',
        album: [],
    },
    {
        id: 4,
        name: 'Lady Gaga',
        icon: 'https://i.pinimg.com/originals/cb/bd/29/cbbd291a39210cb3c7ea24f0e0bc460f.jpg',
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
        icon: 'https://assets.vogue.com/photos/6000ddad19218e8ec8d93238/master/pass/sg-promo.jpg',
        banner: 'https://1.bp.blogspot.com/-iM8Qh8bFYZ0/YKaMstqs9dI/AAAAAAAAyBY/yZ36270iqTk-yVG3n40qkVk5NwPx5WfDACLcBGAsYHQ/s1605/img18052021_111.jpg',
        album: [],
    },
    {
        id: 7,
        name: 'Miley Cyrus',
        icon: 'https://lastfm.freetls.fastly.net/i/u/770x0/826d0b2b3cf55a0209101eedc49df50e.jpg#826d0b2b3cf55a0209101eedc49df50e',
        banner: 'https://okdiario.com/img/2022/03/28/miley-cyrus..jpg',
        album: [],
    },
    {
        id: 8,
        name: 'Lana Del Rey',
        icon: 'https://64.media.tumblr.com/185df292353564e8e2f0280beeca3206/tumblr_px61i2s3aJ1x1ko3mo8_400.jpg',
        banner: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Lana-Del-Rey-Backgrounds.jpg',
        album: [],
    },
]
