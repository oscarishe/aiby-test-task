import { lang } from "../lang/lang";
export default class Localization {
    constructor(local) {
        this.localization = local;
        this.lang = lang[local];
        console.log(lang);
    }
    setText() {
        document.querySelector('.title').innerHTML = this.lang['Unlimited Access<br>to All Features'];
        document.querySelector('.header__restore-button').innerHTML = this.lang['Restore'];
        document.querySelector('.features__item_docs').innerHTML = this.lang['Unlimited documents'];
        document.querySelector('.features__item_export').innerHTML = this.lang['Count mode'];
        document.querySelector('.features__item_ads').innerHTML = this.lang['Text recognition (OCR)'];
        document.querySelector('.item__title_monthly').innerHTML = this.lang['Monthly'];
        document.querySelector('.item__price_monthly').innerHTML = this.lang['<strong>{{price}}</strong><br>per month'].replace('{{price}}', '$9.99');
        document.querySelector('.item__info_monthly').innerHTML = this.lang['3 DAYS FREE'];
        document.querySelector('.item__subprice_montlhy').innerHTML = this.lang['{{price}}/month'].replace('{{price}}', '$9.99');
        document.querySelector('.item__title_annually').innerHTML = this.lang['Annually'];
        document.querySelector('.item__price_annually').innerHTML = this.lang['<strong>{{price}}</strong><br>per year'].replace('{{price}}', '$19.99');
        document.querySelector('.item__info_annually').innerHTML = this.lang['MOST POPULAR'];
        document.querySelector('.item__subprice_annually').innerHTML = this.lang['{{price}}/month'].replace('{{price}}', '$1.66');
        document.querySelector('.button').innerHTML = this.lang['Continue'];
        document.querySelector('.footer__title').innerHTML = this.lang['Auto-renewable. Cancel anytime.'];
        document.querySelector('.footer__legal_terms').innerHTML = this.lang['Terms of Use'];
        document.querySelector('.footer__legal_privacy').innerHTML = this.lang['Privacy Policy'];
        document.body.classList.add(`body_${this.localization}`);
        document.title = this.lang['Unlimited Access<br>to All Features'].replace('<br>', ' ');
    }
}