import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
i18next.
    use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        fallbackLng: 'cn',
        debug: false,
        interpolation: {    //XSS防护
            escapeValue: false
        },
        backend: {
           loadPath: `/locales/{{lng}}/{{ns}}.json`,
           reloadInterval: false
        }
    })

export default i18next