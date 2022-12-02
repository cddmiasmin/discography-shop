const ShowcaseService = require('../services/ShowcaseService');

module.exports = {
    Showcase: async (req, res) => {
        let json = {error: '', result: {
            banner: [], 
            preorder: [],
            releases: [],
            bestSellers: [],
            national: []
        }}

        let banners = await ShowcaseService.PromotionalBanner();
        let preorder = await ShowcaseService.PreOrder();
        let releases = await ShowcaseService.Releases();
        let sellers = await ShowcaseService.BestSellers();
        let national = await ShowcaseService.National();

        for(let b in banners) {
            json.result.banner.push({
                code: banners[b].cd_promotional_banner,
                albumSlug: banners[b].slug_album,
                artistSlug: banners[b].slug_artist,
                bannerMobile: banners[b].url_mobile,
                bannerDesktop: banners[b].url_desktop
            });
        }

        const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        for(let i in preorder) {

            let dateOriginal = new Date(preorder[i].dt_album);
            let dateFormated = ((dateOriginal.getDate()+"/"+months[(dateOriginal.getMonth())] + "/" + dateOriginal.getFullYear()));

            json.result.preorder.push ({
                artistName: preorder[i].nm_artist,
                artistSlug: preorder[i].slug_artist,
                albumCode: preorder[i].cd_album,
                albumSlug: preorder[i].slug_album,
                albumName: preorder[i].nm_album,
                releaseDate: dateFormated,
                cover: preorder[i].img_cover
            });
        }

        for(let i in releases) {

            let dateOriginal = new Date(releases[i].dt_album);
            let dateFormated = ((months[(dateOriginal.getMonth())] + "/" + dateOriginal.getFullYear()));

            json.result.releases.push ({
                artistName: releases[i].nm_artist,
                artistSlug: releases[i].slug_artist,
                albumCode: releases[i].cd_album,
                albumSlug: releases[i].slug_album,
                albumName: releases[i].nm_album,
                releaseDate: dateFormated,
                cover: releases[i].img_cover,
            });
        }
        
        for(let i in sellers) {

            json.result.bestSellers.push ({
                artistName: sellers[i].nm_artist,
                artistSlug: sellers[i].slug_artist,
                albumCode: sellers[i].cd_album,
                albumSlug: sellers[i].slug_album,
                albumName: sellers[i].nm_album,
                releaseDate: sellers[i].dt_album,
                cover: sellers[i].img_cover,
            });
        }

        for(let i in national) {

            json.result.national.push ({
                artistName: national[i].nm_artist,
                artistSlug: national[i].slug_artist,
                albumCode: national[i].cd_album,
                albumSlug: national[i].slug_album,
                albumName: national[i].nm_album,
                releaseDate: national[i].dt_album,
                cover: national[i].img_cover,
            });
        }

        res.json(json);
    },
}