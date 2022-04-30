import axios from 'axios';
import constants from './constants';

export const getUrls = async () => {
    try {
        const hr1NewsUrl = await findLatestShowUrl(constants.channels.hr1);
        const pulaNewsUrl = await findLatestShowUrl(constants.channels.pula);

        const pulaZupanijskiDnevnikUrl = await findLatestShowUrl(constants.shows.pulaZupanijskiDnevnik);
        const radioTrznicaUrl = await findLatestShowUrl(constants.shows.radioTrznica);
        const sjoraSpijaUrl = await findLatestShowUrl(constants.shows.sjoraSpija);
        const radioKalendarUrl = await findLatestShowUrl(constants.shows.radioKalendar);
        const skovaceraUrl = await findLatestShowUrl(constants.shows.skovacera);
        const exploraUrl = await findLatestShowUrl(constants.shows.explora);

        return {
            hr1NewsUrl,
            pulaNewsUrl,
            pulaZupanijskiDnevnikUrl,
            radioTrznicaUrl,
            sjoraSpijaUrl,
            radioKalendarUrl,
            skovaceraUrl,
            exploraUrl
        };
    } catch (err) {
        console.error(err);
        return err;
    }
};

const backendUrl = slug => `https://radio.hrt.hr/api/getEpisodes?slug=${slug}&offset=0`;

const findLatestShowUrl = async ({ slug }) => {
    try {
        const targetUrl = backendUrl(slug);
        const response = await axios.get(targetUrl);
        const lastEpisodes = response.data.data.lastAvailableEpisodes;
        const latestEpisode = lastEpisodes[0];
        const metadata = latestEpisode.audio.metadata[0];

        const mp3Path = metadata.path;
        return mp3Path;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const findLatestShows = async slug => {
    try {
        const targetUrl = backendUrl(slug);
        const response = await axios.get(targetUrl);
        const lastEpisodes = response.data.data.lastAvailableEpisodes;
        const shows = lastEpisodes.map(episode => ({
            id: episode.contentItemId,
            title: episode.caption,
            audioFile: episode.audio.metadata[0].path
        }));
        return shows;
    } catch (err) {
        console.error(err);
        return err;
    }
};
