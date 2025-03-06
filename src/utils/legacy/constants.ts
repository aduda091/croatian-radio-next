export default {
    playerContainerId: '#fp_latest_news_player',
    playerId: '#jp_audio_0',
    channels: {
        hr1: {
            pageUrl: 'https://radio.hrt.hr/prvi-program',
            predecessorClass: '.fp_content',
            rootUrl: 'https://radio.hrt.hr',
            slug: 'vijesti'
        },
        pula: {
            pageUrl: 'https://radio.hrt.hr/radio-pula',
            predecessorClass: '.fp_content',
            rootUrl: 'https://radio.hrt.hr',
            slug: 'vijesti-radio-pule'
        }
    },
    shows: {
        pulaZupanijskiDnevnik: {
            listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/zupanijski-dnevnik-radio-pule/277/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'zupanijski-dnevnik-radio-pule'
        },
        aktualnoU17: {
            //listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/zupanijski-dnevnik-radio-pule/277/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'aktualno-u-17'
        },
        radioTrznica: {
            listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/radiotrznica/401/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'radiotrznica'
        },
        sjoraSpija: {
            listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/sjora-spija/402/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'sjora-spija'
        },
        radioKalendar: {
            listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/radio-kalendar/1323/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'radio-kalendar'
        },
        skovacera: {
            listPageUrl: 'https://radio.hrt.hr/radio-pula/emisija/skovacera/347/',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'skovacera'
        },
        explora: {
            listPageUrl: 'https://radio.hrt.hr/slusaonica/explora',
            latestShowSelector: 'h4.media-heading a',
            downloadLinkSelector: '.download-section a',
            slug: 'explora'
        }
    }
};
