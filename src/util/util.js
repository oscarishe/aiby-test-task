export const getLang = () => {
    const lang = new URLSearchParams(window.location.search).get('lang') || navigator.language.slice(0,2) || 'en';
    return lang;
}