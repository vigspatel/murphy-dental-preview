export const info = {
    phone: {
        link: 'tel:+18288375911',
        text: '(828) 837-5911',
    },
    email: {
        link: 'mailto:laura@murphydentalcenter.com ',
        text: 'laura@murphydentalcenter.com ',
    },
    address: {
        text: '119 Natural Springs Drive, Murphy, North Carolina 28906',
        link: 'https://goo.gl/maps/qJ3GiBXL6Z5EL5ks8',
    },
    social: {
        facebook: 'https://www.facebook.com/murphydentalcenter/',
        yelp: 'https://www.yelp.com/biz/murphy-dental-center-murphy/',
        google: 'https://www.google.com/search?q=murphy+dental+center&oq=murphy+dental+center&aqs=chrome..69i57j69i60l2j0l3.2486j0j7&sourceid=chrome&ie=UTF-8#lrd=0x885ee228df1b5505:0x388da7be083d6e55,1,,,',
    },
};

export type NavLinksTypes = { text: string; link: string; links?: NavLinksTypes }[];

export const navLinks: NavLinksTypes = [
    {
        text: 'our team',
        link: '/our-team/',
    },
    {
        text: 'services',
        link: '/services/',
        links: [
            {
                text: 'general dentistry',
                link: '',
                links: [
                    {
                        text: 'emergency dentistry',
                        link: '/services/general-dentistry/emergency-dentistry/',
                    },
                    {
                        text: 'nutritional counseling',
                        link: '/services/general-dentistry/nutritional-counseling/',
                    },
                    {
                        text: 'oral cancer screening',
                        link: '/services/general-dentistry/oral-cancer-screening/',
                    },
                    {
                        text: 'dental sealants',
                        link: '/services/general-dentistry/dental-sealants/',
                    },
                    {
                        text: 'fluoride treatment',
                        link: '/services/general-dentistry/fluoride-treatment/',
                    },
                    {
                        text: 'cleanings & exams',
                        link: '/services/general-dentistry/cleanings-and-exams/',
                    },
                ],
            },
            {
                text: 'cosmetic dentistry',
                link: '',
                links: [
                    {
                        text: 'retainer repair',
                        link: '/services/cosmetic-dentistry/retainer-repair/',
                    },
                    {
                        text: 'invisalign',
                        link: '/services/cosmetic-dentistry/invisalign/',
                    },
                    {
                        text: 'teeth whitening',
                        link: '/services/cosmetic-dentistry/teeth-whitening/',
                    },
                    {
                        text: 'icon resin infiltration',
                        link: '/services/cosmetic-dentistry/icon-resin-infiltration/',
                    },
                    {
                        text: 'gummy smile treatment',
                        link: '/services/cosmetic-dentistry/gummy-smile-treatment/',
                    },
                    {
                        text: 'dental bonding',
                        link: '/services/cosmetic-dentistry/dental-bonding/',
                    },
                    {
                        text: 'smile makeovers',
                        link: '/services/cosmetic-dentistry/smile-makeovers/',
                    },
                    {
                        text: 'veneers',
                        link: '/services/cosmetic-dentistry/veneers/',
                    },
                ],
            },
            {
                text: 'restorative dentistry',
                link: '',
                links: [
                    {
                        text: 'root canal therapy',
                        link: '/services/restorative-dentistry/root-canal-therapy/',
                    },
                    {
                        text: 'dentures and partials',
                        link: '/services/restorative-dentistry/dentures-and-partials/',
                    },
                    {
                        text: 'chipped/cracked tooth repair',
                        link: '/services/restorative-dentistry/chipped-cracked-tooth-repair/',
                    },
                    {
                        text: 'inlays & onlays',
                        link: '/services/restorative-dentistry/inlays-and-onlays/',
                    },
                    {
                        text: 'dental fillings',
                        link: '/services/restorative-dentistry/dental-fillings/',
                    },
                    {
                        text: 'dental bridges',
                        link: '/services/restorative-dentistry/dental-bridges/',
                    },
                    {
                        text: 'dental crowns',
                        link: '/services/restorative-dentistry/dental-crowns/',
                    },
                ],
            },
            {
                text: 'dental implants',
                link: '',
                links: [
                    {
                        text: 'ridge augmentation',
                        link: '/services/dental-implants/ridge-augmentation/',
                    },
                    {
                        text: 'bone grafting',
                        link: '/services/dental-implants/bone-grafting/',
                    },
                    {
                        text: 'implant overdentures',
                        link: '/services/dental-implants/implant-overdentures/',
                    },
                    {
                        text: 'implant supported dentures',
                        link: '/services/dental-implants/implant-supported-dentures/',
                    },
                    {
                        text: 'single tooth implant',
                        link: '/services/dental-implants/single-tooth-implant/',
                    },
                    {
                        text: 'all-on-fours',
                        link: '/services/dental-implants/all-on-fours/',
                    },
                ],
            },
            {
                text: 'oral surgery',
                link: '',
                links: [
                    {
                        text: 'coronectomy',
                        link: '/services/oral-surgery/coronectomy/',
                    },
                    {
                        text: 'apicoectomy',
                        link: '/services/oral-surgery/apicoectomy/',
                    },
                    {
                        text: 'tooth extractions',
                        link: '/services/oral-surgery/tooth-extractions/',
                    },
                    {
                        text: 'wisdom teeth removal',
                        link: '/services/oral-surgery/wisdom-teeth-removal/',
                    },
                ],
            },
            {
                text: 'special needs dentistry',
                link: '',
                links: [
                    {
                        text: 'sleep apnea treatment',
                        link: '/services/special-needs-dentistry/sleep-apnea-treatment/',
                    },
                    {
                        text: 'fotona night lase',
                        link: '/services/special-needs-dentistry/fotona-night-lase/',
                    },
                    {
                        text: 'occlusal & sports mouthguards',
                        link: '/services/special-needs-dentistry/occlusal-and-sports-mouthguards/',
                    },
                    {
                        text: 'tmj therapy',
                        link: '/services/special-needs-dentistry/tmj-therapy/',
                    },
                ],
            },
            {
                text: 'cosmetic injectables',
                link: '',
                links: [
                    {
                        text: 'facial rejuvenation',
                        link: '/services/cosmetic-injectables/facial-rejuvenation/',
                    },
                    {
                        text: 'dermal fillers',
                        link: '/services/cosmetic-injectables/dermal-fillers/',
                    },
                    {
                        text: 'botox for cosmetic',
                        link: '/services/cosmetic-injectables/botox-for-cosmetic/',
                    },
                ],
            },
            {
                text: 'technology',
                link: '',
                links: [
                    {
                        text: 'fotona light walker',
                        link: '/services/technology/fotona-light-walker/',
                    },
                    {
                        text: 'dental microscope',
                        link: '/services/technology/dental-microscope/',
                    },
                    {
                        text: 'shining 3d ios and photogrammetry',
                        link: '/services/technology/shining-3d-ios-and-photogrammetry/',
                    },
                    {
                        text: 'cerec same day crowns',
                        link: '/services/technology/cerec-same-day-crowns/',
                    },
                    {
                        text: '3d cone beam x-ray',
                        link: '/services/technology/3d-cone-beam-x-ray/',
                    },
                    {
                        text: 'ceramill matron milling machine',
                        link: '/services/technology/ceramill-matron-milling-machine/',
                    },
                    {
                        text: 'shining 3d printer',
                        link: '/services/technology/shining-3d-printer/',
                    },
                    {
                        text: 'metismile facial 3d scanner',
                        link: '/services/technology/metismile-facial-3d-scanner/',
                    },
                    {
                        text: 'exocad',
                        link: '/services/technology/exocad/',
                    },
                ],
            },
        ],
    },

    {
        text: 'patient information',
        link: 'patient-information',
        links: [
            {
                text: 'new patient form',
                link: '/patient-information/new-patient-form/',
            },
            {
                text: 'careCredit financing',
                link: '/patient-information/carecredit-financing/',
            },
            {
                text: 'proceed financing',
                link: '/patient-information/proceed-financing/',
            },
            {
                text: 'smile gallery',
                link: '/patient-information/smile-gallery/',
            },
            {
                text: 'fAQs',
                link: '/patient-information/faqs/',
            },
        ],
    },
    {
        text: 'testimonials',
        link: '/testimonials/',
    },
    {
        text: 'contact us',
        link: '/contact-us/',
    },
    {
        text: 'appointment',
        link: '/appointment/',
    },
];

const flatLinks = (() => {
    const flat: NavLinksTypes = [];

    const pushFlat = (arr: NavLinksTypes) =>
        arr.forEach(data => {
            if (!data.links) flat.push(data);
            else {
                flat.push({
                    text: data.text,
                    link: data.link,
                });
                pushFlat(data.links);
            }
        });

    pushFlat(navLinks);
    return flat;
})();

export function getNavLink(text: string) {
    const linkObj = flatLinks.find(data => data.text.toLowerCase() === text.toLowerCase());

    if (linkObj) return linkObj.link;
    else return '';
}

export const footerNavLinks: NavLinksTypes = [
    {
        text: 'our team',
        link: getNavLink('our team'),
    },
    {
        text: 'new patient form',
        link: getNavLink('new patient form'),
    },
    {
        text: 'smile gallery',
        link: getNavLink('smile gallery'),
    },
    {
        text: 'faqs',
        link: getNavLink('faqs'),
    },
    {
        text: 'contact us',
        link: getNavLink('contact us'),
    },
    {
        text: 'privacy policy',
        link: '/privacy-policy/',
    },
];
