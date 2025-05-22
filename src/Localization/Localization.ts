import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
i18n.
    use(I18nextBrowserLanguageDetector)
    .init({
        defaultNS: 'translation',
        fallbackLng: 'cn',
        debug: false,
        interpolation: {    //XSS防护
            escapeValue: true
        },
        backend: {
           loadPath: `${import.meta.env.BASE_URL || ''}/locales/{{lng}}/{{ns}}.json`
        }
    }).then(()=> {
        
    })

export default i18n