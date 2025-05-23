import i18n from './Localization'
i18n.on('initialized', ()=> {
    updateContent()
    setupButton()  
})

function updateContent() {

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')
        el.textContent = i18n.t(key!)
    })
}

function setupButton() {
    const langButton = document.getElementById("changeLanguage")
    langButton?.addEventListener('click', () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    })
}

i18n.on('languageChanged', updateContent);