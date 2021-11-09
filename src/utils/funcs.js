import i18n from '@/plugins/i18n';

export const windDirection = (deg) => {
    const directions = i18n.t('weather.windDirection');
    const index = Math.round(deg / 45) % 8;
    return directions[index];
}
