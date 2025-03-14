export const createDateWithMonth = ({ time = "", locale}: {time?: string, locale: string}) => {
    const date = new Date(time || Date.now()); 
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}