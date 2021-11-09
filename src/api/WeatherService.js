import Api from './Api';

export const getCityByName = ({city = 'Moscow', lang = 'ru'}) => {

    return Api().get('weather', {
        params: {
            q: city,
            lang,
            units: 'metric',
            appid: 'b56bccc34af543a0ba3886235b53ac3c',
        },
    });
};
