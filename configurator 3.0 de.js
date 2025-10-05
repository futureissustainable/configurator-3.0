(function() {
// Universal Images
let blindsImage = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4341f5b9b2742863461ef_375fa4b4b9988f686d5a21cdfd58a106_Blinds.avif";
const ventilationImage = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4379c1a20245ff5d081ea_Ventilation.avif";
const yakisugiIconUrl = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6891f60b4a12d16a97258f9e_8090eb60385f013115bc5f0f57d370f7_Yakisugi%20Modular.avif";
const lunawoodIconUrl = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6891f60a87823a871ab57392_2ae606770a59238d22e79f8573f47452_Lunawood%20Modular.avif";
const osbIconUrl = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/682781bf8f050a99912807bd_8168f669e43e0dce4cc4a44c5e6fa5a9_Raw%2BOSB.avif";
const cashmereIconUrl = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/682781fe749314ab971e22b6_a163b084d45d85d3dc6c99c8ccf00203_Cashmere.avif";
const hazelnutIconUrl = "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6827826189d9a03adacb10fc_0f99c5082da56476985be14a8d96df3d_Hazelnut.avif";

const yakisugiImageUrl = ""; // This remains empty to use the main model image as a fallback

// Price breakdown data
const priceBreakdowns = {
    'nomad-24': {
        title: 'Nomad – 24 m²',
        beforeConstruction: {
            title: 'Vor Baubeginn',
            items: [
                { name: 'Vermesser + Lageplan', price: '1.500–2.000' },
                { name: 'Geotechnisches Gutachten', price: '1.500–2.000' },
                { name: 'Architekt HOAI LPH 1–5', price: '3.000–4.000' },
                { name: 'Bauantragsgebühr', price: '1.000–1.500' },
                { name: 'Netzanschluss Strom Antrag', price: '500–500' },
                { name: 'Wasseranschluss Antrag', price: '500–500' },
                { name: 'Statische Berechnung', price: '1.000–1.500' },
                { name: 'Bauleitung HOAI LPH 6–8', price: '1.500–2.000' }
            ],
            total: 10500
        },
        duringConstruction: {
            title: 'Während Bau',
            items: [
                { name: 'Schraubfundamente (6 Stk)', price: '2.800–4.000' },
                { name: 'Hausanschlüsse lokal', price: '2.000–4.000' },
                { name: 'Autokran + Straßensperrung', price: '1.500–3.000' },
                { name: 'Elektriker nach Aufwand', price: '500–1.500' },
                { name: 'Erdarbeiten', price: '2.000–10.000' },
                { name: 'Zähleranschlusssäule (HAK)', price: '1.000–3.000' },
                { name: 'Entwässerung/Schächte/Leerrohre', price: '1.000–10.000' },
                { name: 'Außenanschlussverteiler', price: '2.000–3.000' }
            ],
            total: 12800
        },
        afterConstruction: {
            title: 'Nach Bau',
            items: [
                { name: 'Kontrollschacht Wasser', price: '1.000–1.500' },
                { name: 'Außenanlagen minimal (Terrasse)', price: '1.500–2.000' },
                { name: 'Unvorhergesehenes', price: '500–1.500' }
            ],
            total: 3000
        },
        grandTotal: 26300
    },
    'wanderlust-48': {
        title: 'Wanderlust – 48 m²',
        beforeConstruction: {
            title: 'Vor Baubeginn',
            items: [
                { name: 'Architekt HOAI LPH 1–5', price: '5.000–6.000' },
                { name: 'Bauleitung HOAI LPH 6–8', price: '3.000–4.000' },
                { name: 'Bauantragsgebühr', price: '1.500–2.000' },
                { name: 'Energieberater', price: '3.000–5.500' },
                { name: 'Vermesser + Lageplan', price: '2.000–2.500' },
                { name: 'Statische Berechnung', price: '1.500–2.000' },
                { name: 'Geotechnisches Gutachten', price: '1.500–2.000' }
            ],
            total: 17500
        },
        duringConstruction: {
            title: 'Während Bau',
            items: [
                { name: 'Schraubfundamente (12 Stk)', price: '5.000–6.500' },
                { name: 'Hausanschlüsse lokal', price: '4.000–8.000' },
                { name: 'Autokran + Straßensperrung', price: '3.000–8.000' },
                { name: 'Netzanschluss Strom Antrag', price: '500–500' },
                { name: 'Wasseranschluss Antrag', price: '500–500' },
                { name: 'Kontrollschacht Wasser', price: '1.000–1.500' },
                { name: 'Elektriker nach Aufwand', price: '1.000–2.000' },
                { name: 'Außenanschlussverteiler', price: '2.000–4.000' }
            ],
            total: 17000
        },
        afterConstruction: {
            title: 'Nach Bau',
            items: [
                { name: 'Küche', price: '3.000–8.000' },
                { name: 'Außenanlagen', price: '0–0' },
                { name: 'Unvorhergesehenes', price: '500–2.000' },
                { name: 'Terrasse', price: '2.000–3.000' }
            ],
            total: 5500
        },
        grandTotal: 40000
    },
    'serenity-95': {
        title: 'Serenity – 95 m²',
        beforeConstruction: {
            title: 'Vor Baubeginn',
            items: [
                { name: 'Architekt HOAI LPH 1–5', price: '8.000–10.000' },
                { name: 'Bauleitung HOAI LPH 6–8', price: '4.000–5.000' },
                { name: 'Bauantragsgebühr', price: '1.500–2.500' },
                { name: 'Energieberater', price: '3.000–5.500' },
                { name: 'Vermesser + Lageplan', price: '2.000–2.500' },
                { name: 'Statische Berechnung', price: '1.500–2.500' },
                { name: 'Geotechnisches Gutachten', price: '1.500–2.000' },
                { name: 'Netzanschluss Strom Antrag', price: '500–500' },
                { name: 'Wasseranschluss Antrag', price: '500–500' }
            ],
            total: 22500
        },
        duringConstruction: {
            title: 'Während Bau',
            items: [
                { name: 'Schraubfundamente (18 Stk)', price: '8.280–12.000' },
                { name: 'Träger (2 Stk)', price: '6.800–8.000' },
                { name: 'Hausanschlüsse lokal', price: '5.000–15.000' },
                { name: 'Autokran + Straßensperrung', price: '3.000–4.000' },
                { name: 'Kontrollschacht Wasser', price: '1.000–1.500' },
                { name: 'Elektriker nach Aufwand', price: '1.000–2.000' },
                { name: 'Außenanschlussverteiler', price: '2.000–6.000' }
            ],
            total: 27080
        },
        afterConstruction: {
            title: 'Nach Bau',
            items: [
                { name: 'Küche', price: '5.000–12.000' },
                { name: 'Außenanlagen', price: '0–0' },
                { name: 'Unvorhergesehenes', price: '500–2.000' },
                { name: 'Terrasse', price: '2.000–3.500' }
            ],
            total: 7500
        },
        grandTotal: 57080
    },
    'sanctuary-142': {
        title: 'Sanctuary – 142 m²',
        beforeConstruction: {
            title: 'Vor Baubeginn',
            items: [
                { name: 'Architekt HOAI LPH 1–5', price: '11.000–13.000' },
                { name: 'Bauleitung HOAI LPH 6–8', price: '5.000–6.000' },
                { name: 'Bauantragsgebühr', price: '2.000–2.500' },
                { name: 'Energieberater', price: '4.500–5.500' },
                { name: 'Vermesser + Lageplan', price: '2.000–2.500' },
                { name: 'Statische Berechnung', price: '1.500–2.500' },
                { name: 'Geotechnisches Gutachten', price: '1.500–2.000' },
                { name: 'Netzanschluss Strom Antrag', price: '500–500' },
                { name: 'Wasseranschluss Antrag', price: '500–500' }
            ],
            total: 28500
        },
        duringConstruction: {
            title: 'Während Bau',
            items: [
                { name: 'Schraubfundamente (24 Stk)', price: '11.000–18.000' },
                { name: 'Träger (2 Stk)', price: '6.000–9.000' },
                { name: 'Tiefbauarbeiten', price: '5.000–15.000' },
                { name: 'Autokran + Straßensperrung', price: '5.000–10.000' },
                { name: 'Hausanschlüsse lokal', price: '2.000–5.000' },
                { name: 'Elektriker nach Aufwand', price: '1.000–2.000' },
                { name: 'Außenanschlussverteiler', price: '3.000–7.000' }
            ],
            total: 33000
        },
        afterConstruction: {
            title: 'Nach Bau',
            items: [
                { name: 'Küche', price: '7.000–18.000' },
                { name: 'Außenanlagen', price: '0–0' },
                { name: 'Unvorhergesehenes', price: '500–2.000' },
                { name: 'Terrasse', price: '2.500–4.000' }
            ],
            total: 10000
        },
        grandTotal: 71500
    }
};


let config = {
    'nomad-24' : {
        "image" : "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
        "name": "Nomad", "energy": 34920, "basePriceText": "Ab 39.800 €",
        "options" : [
            { 'slug' : 'semi-finished', 'name' : 'Teilmontiert', "price" : 39800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif',
                'images': [
                    { 'src' : 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif', 'alt' : 'Nomad Teilmontiert Oben'},
                    { 'src' : 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif', 'alt' : 'Nomad Teilmontiert Unten'}
                ],
                'upgrades' : [
                    [ { 'slug' : "parquet-raw-osb", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif", 'icon' : osbIconUrl, 'price': 0, 'included': true, 'name': "OSB"},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388b838ef609a824c885_24m2%20Nomad%20OSB%20%2B%20Cashmere%204.0.avif", 'price': 1800, 'included': false, 'name': "Kaschmirparkett", 'icon' : cashmereIconUrl},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388ba91d0f79d44ce0d2_24m2%20Nomad%20OSB%20%2B%20Hazelnut%204.0.avif", 'price': 1800, 'included': false, 'name': "Haselnussparkett", 'icon' : hazelnutIconUrl} ],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [ { 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 4800, 'included': false, 'name': "Lüftungsanlage + Leitungen"} ],
                    [ { 'slug' : "blinds", 'image': blindsImage, 'price': 2000, 'included': false, 'name': "Intelligente Jalousien"} ] ]
            },
            { 'slug': 'turnkey', 'name': 'Schlüsselfertig', "price" : 59800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif',
                'images': [
                    { 'src' : 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif', 'alt' : 'Nomad Schlüsselfertig Oben'},
                    { 'src' : 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif', 'alt' : 'Nomad Schlüsselfertig Unten'}
                ],
                'upgrades' : [
                    [
                        { 'slug' : "parquet-raw-osb", 'image': "", 'price': 0, 'included': true, 'name': "OSB", 'icon' : osbIconUrl},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif", 'price': 0, 'included': true, 'name': "Kaschmirparkett", 'icon' : cashmereIconUrl},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43ad5d75d99a4806d7d4b_24m2%20Nomad%20Interior%20Hazelnut%204.0.avif", 'price': 0, 'included': false, 'name': "Haselnussparkett", 'icon' : hazelnutIconUrl} ],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [ { 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 0, 'included': true, 'name': "Lüftungsanlage + Leitungen"} ],
                    [ { 'slug' : "blinds", 'image': blindsImage, 'price': 0, 'included': true, 'name': "Intelligente Jalousien"} ] ]
            }
        ],
        "floorplan" : [
            { 'slug' : "floorplan-a", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif", 'price': 0, 'name': 'Grundriss A', 'modal': "<h3>24m² Grundriss A</h3><br><p>Innen: 5.70m x 3.10m x 2.50m</p><p>Außen: 6.40m x 3.80m x 3.20m</p><h4>Räume</h4><p>Schlafzimmer: 14.20m²</p><p>Badezimmer: 2.65m²</p><p>Abstellraum / Kochnische: 0.80m²</p>" },
            { 'slug' : "floorplan-b", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif", 'price': 0, 'name': 'Grundriss B', 'modal': "<h3>24m² Grundriss B</h3><br><p>Innen: 5.70m x 3.10m x 2.50m</p><p>Außen: 6.40m x 3.80m x 3.20m</p><h4>Räume</h4><p>Schlafzimmer: 14.20m²</p><p>Badezimmer: 2.65m²</p><p>Abstellraum / Kochnische: 0.80m²</p>" } ] },
    'wanderlust-48' : {
        "image" : "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
        "name": "Wanderlust", "energy": 69840, "basePriceText": "Ab 59.800 €",
        "options" : [
            { 'slug' : 'semi-finished', 'name' : 'Teilmontiert', "price" : 59800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif',
                'images': [
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif', 'alt':'Wanderlust Teilmontiert Oben'},
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif', 'alt':'Wanderlust Teilmontiert Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif", 'price': 0, 'included': true, 'icon' : osbIconUrl, 'name': "OSB"},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834f6342091f39dfedb_48m2%20Wanderlust%20OSB%20%2B%20Cashmere%204.0.avif", 'price': 3800, 'included': false, 'icon' : cashmereIconUrl, 'name': "Kaschmirparkett"},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283416e5d5e698aa09c6_48m2%20Wanderlust%20OSB%20%2B%20Hazelnut%204.0.avif", 'price': 3800, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 7800, 'included': false, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 4000, 'included': false, 'name': "Intelligente Jalousien"}] ]
            },
            { 'slug': 'turnkey', 'name': 'Schlüsselfertig', "price" : 109800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif',
                'images': [
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif', 'alt':'Wanderlust Schlüsselfertig Oben'},
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif', 'alt':'Wanderlust Schlüsselfertig Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "", 'price': 0, 'included': true, 'name': "OSB", 'icon' : osbIconUrl},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif", 'price': 0, 'included': true, 'name': "Kaschmirparkett", 'icon' : cashmereIconUrl},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f1a20245ff5ca4510_48m2%20Wanderlust%20Interior%20Hazelnut%204.0.avif", 'price': 0, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 0, 'included': true, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 0, 'included': true, 'name': "Intelligente Jalousien"}] ]
            }
        ],
        "floorplan" : [
            { 'slug' : "floorplan-a", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png", 'price': 0, 'name': 'Grundriss A', 'modal': "<h3>48m² Grundriss A</h3><br><p>Innen: 11.80m x 3.10m x 2.50m</p><p>Außen: 12.60m x 3.80m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 19.90m²</p><br><p>1. Schlafzimmer: 11.80m²</p><br><p>1. Badezimmer: 4.50m²</p>"},
            { 'slug' : "floorplan-b", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png", 'price': 0, 'name': 'Grundriss B', 'modal': "<h3>48m² Grundriss B</h3><br><p>Innen: 11.80m x 3.10m x 2.50m</p><p>Außen: 12.60m x 3.80m x 3.20m</p><h4>Räume</h4><p>1. Schlafzimmer: 11.80m²</p><p>2. Schlafzimmer: 11.80m²</p><br><p>1. Badezimmer: 4.50m²</p><p>2. Badezimmer: 3.50m²</p><p>Flur: 3.50m²</p>" } ] },
    'serenity-95' : {
        "image" : "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
        "name": "Serenity", "energy": 138225, "basePriceText": "Ab 109.800 €",
        "options" : [
            { 'slug' : 'semi-finished', 'name' : 'Teilmontiert', "price" : 109800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif',
                'images': [
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif', 'alt':'Serenity Teilmontiert Oben'},
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif', 'alt':'Serenity Teilmontiert Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif", 'price': 0, 'included': true, 'icon' : osbIconUrl, 'name': "OSB"},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283456778eb848b0ef0a_95m2%20Serenity%20OSB%20%2B%20Cashmere%204.0.avif", 'price': 7800, 'included': false, 'icon' : cashmereIconUrl, 'name': "Kaschmirparkett"},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c8e49bed391084c_95m2%20Serenity%20OSB%20%2B%20Hazelnut%204.0.avif", 'price': 7800, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 9800, 'included': false, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 7000, 'included': false, 'name': "Intelligente Jalousien"}] ]
            },
            { 'slug': 'turnkey', 'name': 'Schlüsselfertig', "price" : 189800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif',
                'images': [
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif', 'alt':'Serenity Schlüsselfertig Oben'},
                    {'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif', 'alt':'Serenity Schlüsselfertig Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "", 'price': 0, 'included': true, 'name': "OSB", 'icon' : osbIconUrl},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif", 'price': 0, 'included': true, 'name': "Kaschmirparkett", 'icon' : cashmereIconUrl},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f8de7c20305542612_95m2%20Serenity%20Hazelnut%204.0.avif", 'price': 0, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 0, 'included': true, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 0, 'included': true, 'name': "Intelligente Jalousien"}] ]
            }
        ],
        "floorplan" : [
            { 'slug' : "floorplan-a", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png", 'price': 0, 'name': 'Grundriss A', 'modal': "<h3>95m² Grundriss A</h3><br><p>Innen: 11.80m x 6.80m x 2.50m</p><p>Außen: 12.60m x 7.60m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 19.90m²</p><br><p>1. Schlafzimmer: 11.80m²</p><br><p>1. Badezimmer: 4.50m²</p>"},
            { 'slug' : "floorplan-b", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png", 'price': 0, 'name': 'Grundriss B', 'modal': "<h3>95m² Grundriss B</h3><br><p>Innen: 11.80m x 6.80m x 2.50m</p><p>Außen: 12.60m x 7.60m x 3.20m</p><h4>Räume</h4><p>1. Schlafzimmer: 11.80m²</p><p>2. Schlafzimmer: 11.80m²</p><br><p>1. Badezimmer: 4.50m²</p><p>2. Badezimmer: 3.50m²</p><p>Flur: 3.50m²</p>"},
            { 'slug' : "floorplan-c", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png", 'price': 0, 'name': 'Grundriss C', 'modal': "<h3>95m² Grundriss C</h3><br><p>Innen: 11.80m x 6.80m x 2.50m</p><p>Außen: 12.60m x 7.60m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 53.70m²</p><br><p>1. Schlafzimmer: 13.10m²</p><br><p>1. Badezimmer: 3.75m²</p><p>2. Badezimmer: 4.35m²</p>"} ] },
    'sanctuary-142' : {
        "image" : "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
        "name": "Sanctuary", "energy": 175285, "basePriceText": "Ab 159.800 €",
        "options" : [
            { 'slug' : 'semi-finished', 'name' : 'Teilmontiert', "price" : 159800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif',
                'images': [
                    { 'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif', 'alt':'Sanctuary Teilmontiert Oben'},
                    { 'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif', 'alt':'Sanctuary Schlüsselfertig Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif", 'price': 0, 'included': true, 'icon' : osbIconUrl, 'name': "OSB"},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551ad361e009f1da6e_142m2%20Sanctuary%20OSB%20%2B%20Cashmere%204.0.avif", 'price': 11800, 'included': false, 'icon' : cashmereIconUrl, 'name': "Kaschmirparkett"},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055c519f4722b8ef029_142m2%20Sanctuary%20OSB%20%2B%20Hazelnut%204.0.avif", 'price': 11800, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 9800, 'included': false, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 9000, 'included': false, 'name': "Intelligente Jalousien"}] ]
            },
            { 'slug': 'turnkey', 'name': 'Schlüsselfertig', "price" : 279800,
                'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif',
                'images': [
                    { 'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif', 'alt':'Sanctuary Schlüsselfertig Oben'},
                    { 'src':'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif', 'alt':'Sanctuary Schlüsselfertig Unten'}
                ],
                'upgrades' : [
                    [{ 'slug' : "parquet-raw-osb", 'image': "", 'price': 0, 'included': true, 'name': "OSB", 'icon' : osbIconUrl},
                        { 'slug' : "parquet-cashmere", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif", 'price': 0, 'included': true, 'icon' : cashmereIconUrl, 'name': "Kaschmirparkett"},
                        { 'slug' : "parquet-hazelnut", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055256a682dd59e9ad7_142m2%20Sanctuary%20Interior%20Hazelnut%204.0.avif", 'price': 0, 'included': false, 'icon' : hazelnutIconUrl, 'name': "Haselnussparkett"}],
                    [ { 'slug' : "facade-yakisugi", 'image': yakisugiImageUrl, 'icon' : yakisugiIconUrl, 'price': 0, 'included': true, 'name': "Yakisugi Außenfassade"},
                        { 'slug' : "facade-lunawood", 'image': 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif', 'icon' : lunawoodIconUrl, 'price': 0, 'included': true, 'name': "Lunawood Außenfassade"} ],
                    [{ 'slug' : "ventilation-system", 'image': ventilationImage, 'price': 0, 'included': true, 'name': "Lüftungsanlage + Leitungen"}],
                    [{ 'slug' : "blinds", 'image': blindsImage, 'price': 0, 'included': true, 'name': "Intelligente Jalousien"}] ]
            }
        ],
        "floorplan" : [
            { 'slug' : "floorplan-a", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png", 'price': 0, 'name': 'Grundriss A', 'modal': "<h3>142m² Grundriss A</h3><br><p>Innen: 11.80m x 10.60m x 2.50m</p><p>Außen: 12.60m x 11.30m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 62.90m²</p><br><p>1. Schlafzimmer: 12.40m²</p><p>2. Schlafzimmer: 12.20m²</p><p>3. Schlafzimmer: 12.40m²</p><p>4. Schlafzimmer: 13.10m²</p><br><p>1. Badezimmer: 3.75m²</p><p>2. Badezimmer: 4.35m²</p>"},
            { 'slug' : "floorplan-b", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png", 'price': 0, 'name': 'Grundriss B', 'modal': "<h3>142m² Grundriss B</h3><br><p>Innen: 11.80m x 10.60m x 2.50m</p><p>Außen: 12.60m x 11.30m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 75.30m²</p><br><p>1. Schlafzimmer: 12.20m²</p><p>2. Schlafzimmer: 12.40m²</p><p>3. Schlafzimmer: 13.10m²</p><br><p>1. Badezimmer: 3.75m²</p><p>2. Badezimmer: 4.35m²</p>"},
            { 'slug' : "floorplan-c", 'image': "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png", 'price': 0, 'name': 'Grundriss C', 'modal': "<h3>142m² Grundriss C</h3><br><p>Innen: 11.80m x 10.60m x 2.50m</p><p>Außen: 12.60m x 11.30m x 3.20m</p><h4>Räume</h4><p>Wohnen + Küche: 87.50m²</p><br><p>1. Schlafzimmer: 12.40m²</p><p>2. Schlafzimmer: 13.10m²</p><br><p>1. Badezimmer: 3.75m²</p><p>2. Badezimmer: 4.35m²</p>"} ] }
};

const turnkeyMaterialItemsRaw = `
MODULARES UPGRADE // TITLE
Neue Generation<split>MODULAR, jetzt perfektioniert mit vom Passivhaus-Institut aus Darmstadt, Deutschland zertifizierten Aluminiumrahmen, ultra-organischer Holzfaserdämmung, einer optimierten, widerstandsfähigeren Struktur und einer exklusiven Auswahl an Premium-Oberflächen. Entwickelt für Komfort, Langlebigkeit und Effizienz auf höchstem Niveau.
STRUKTUR // TITLE
Das MODULARE Struktursystem<split>Kombiniert bemerkenswerte mechanische Festigkeit mit beispielloser Effizienz und eliminiert Wärmebrücken vollständig. Zertifiziert für Energieeffizienz vom Passivhaus-Institut aus Darmstadt, Deutschland mit 0,15 W/(m²K) und für Nachhaltigkeit von EPD (International).
C24 Holzrahmenstruktur BIOBUILDS<split>FSC/PEFC-zertifiziertes Holz, außergewöhnliche Belastbarkeit.
STEICO Holzfaserdämmung<split>Organisch, nachhaltig und ultra-effizient (λ ≈ 0,036 W/m·K), CE-zertifiziert.
ECO OSB 3 Platte (AGEPAN, Deutschland)<split>Formaldehyd- und VOC-frei, vom Passivhaus-Institut aus Darmstadt, Deutschland zugelassen, CE-zertifiziert.
DWD Platte (AGEPAN, Deutschland)<split>Lässt die Wände „atmen“ und erhält die äußere Luftdichtheit; CE-zertifiziert.
Intelligente Membran<split>Sorgt für innere Luftdichtheit mit kontrollierter Dampfdiffusion nach außen.
AUSSENVERKLEIDUNGEN // TITLE
Hinterlüftete Fassade aus Yakisugi/Lunawood-Holz<split>Wärmebehandeltes Naturholz mit deutlich reduziertem Wartungsaufwand, ausgezeichneter Feuerbeständigkeit, langlebig, mit besonderer Ästhetik und nachhaltiger Herkunft.
Hinterlüftetes Flachdach<split>Überlegene Wärmeleistung, verlängerte Lebensdauer durch Verhinderung von Feuchtigkeitsansammlungen und Überhitzung. Das Dach hat eine unsichtbare Neigung (~5°), ist mit einer Premium-Membran wasserdicht gemacht, mindestens 10 Jahre Herstellergarantie.
Integriertes Regenwassersammelsystem<split>Versteckte Rinnen, dezent in die Fassade integriert, bereit für die nachhaltige Sammlung von Regenwasser.
AUSSENFENSTER UND -TÜREN // TITLE
Genesis 90 Aluminiumprofile<split>Stabile, ultra-effiziente Profile, zertifiziert für Passivhäuser (Uwi ≤ 0,85 W/m²K), CE-zertifiziert.
Dreifach-Verbund-Sicherheitsglas<split>Außergewöhnliche Effizienz und Sicherheit (U = 0,50 W/m²K), laminiert für zusätzlichen Schutz.
KÜCHE // TITLE
Kücheninstallationen<split>Vormontierte Installationen, bereit für Ihre Möbel und Geräte.
TECHNISCHE INSTALLATIONEN // TITLE
Elektrische Installation<split>Kompletter Schaltschrank, konform mit den strengen EU-Normen. Schalter und Schutzvorrichtungen entsprechen den örtlichen Vorschriften, einschließlich AFDD-Technologie.
Sanitärinstallation<split>Hochwertige Rohre und Fittings (PPR/PEX), kompatibel mit allen lokalen und EU-Vorschriften.
KOMPLETTE INNENAUSSTATTUNG // TITLE
Holzlatten-Decke + Filz<split>Naturholz und recycelter Filz; ausgezeichnete Schallabsorption.
Glasfasertapete<split>Sehr hohe Zugfestigkeit und Verschleißfestigkeit; waschbar; modernes Aussehen.
Dreischichtiges Naturholzparkett<split>Dicke 9–14 mm; FSC/PEFC-zertifiziertes Holz; sehr langlebige Oberfläche.
Schneider-Steckdosen<split>Premium-Steckdosen hergestellt in Deutschland; CE/VDE-zertifiziert.
INNENTÜREN // TITLE
S10 Innentüren<split>CE-zertifiziert; Massivkern.
KOMPLETTE BADEZIMMERAUSSTATTUNG // TITLE
Steinverbundplatten<split>Premium-Großformatplatten von 2,5 × 1,2 m; 100% wasserdicht; sehr hohe Langlebigkeit.
Waschbecken im italienischen Design<split>Premium-Verbundwerkstoff; ultradünn, modern und langlebig.
Grohe Wand-WC<split>Hergestellt in Deutschland; minimalistisches, modernes Design.
Ariston Velis Warmwasserbereiter<split>Ultraschlankes Design; hohe Energieeffizienz.
Begehbare Dusche<split>Entworfen in Frankreich; minimalistisches, modernes Design.
SMART-SYSTEME // TITLE
Beleuchtungsschiene<split>Flexible Konfiguration für LEDs und Spots; moderne Ästhetik.
Intelligente Beleuchtung<split>Philips HUE oder IKEA TRÅDFRI; einfache Smart-Konfiguration.
Intelligente Außenjalousien<split>Blockieren > 95% der Sonnenstrahlung; App-/manuelle Steuerung; zertifiziert vom Passivhaus-Institut aus Darmstadt, Deutschland; CE-zertifiziert.
Genvex Premium Preheat 250<split>Bis zu 95% Wärmerückgewinnung; integrierte Wärmepumpe zum Heizen und Kühlen.
ZERTIFIZIERUNGEN UND GARANTIEN // TITLE
Passivhaus-Zertifizierung<split>Ausgestellt vom Passivhaus-Institut aus Darmstadt, Deutschland, bescheinigt beispiellose Energieeffizienz, außergewöhnlichen Komfort. Für ein dauerhaftes Zuhause, das nach den strengsten internationalen Standards gebaut wurde.
EPD-Zertifizierung<split>Ausgestellt von EPD International, bestätigt ein CO2-negatives Produkt und verantwortungsvolle Baupraktiken.
CE-Kennzeichnung<split>Alle Komponenten entsprechen den EU-Vorschriften für Bauprodukte.
Standard-EU-Garantie<split>24 Monate für Wohngebäude. 12 Monate für gewerbliche Nutzung. Garantieerweiterungsoptionen auf Anfrage erhältlich.
Herstellergarantien<split>Begünstigte erhalten vollen Schutz durch die Garantien der einzelnen Lieferanten.
HAFTUNGSAUSSCHLUSS // TITLE
Technische Leistung<split>Die genannten Leistungen (einschließlich Energieverbrauch) werden gemäß den Standardbedingungen des Passivhaus-Instituts aus Darmstadt, Deutschland berechnet. Die tatsächlichen Ergebnisse können je nach Klima, Ausrichtung des Hauses, Abmessungen und Nutzung variieren. Für genaue Details konsultieren Sie die PHPP-Berechnungen (Passive House Planning Package) des Projekts.
`;
const semiTurnkeyMaterialItemsRaw = `
MODULARES UPGRADE // TITLE
Neue Generation<split>MODULAR, jetzt perfektioniert mit vom Passivhaus-Institut aus Darmstadt, Deutschland zertifizierten Aluminiumrahmen, ultra-organischer Holzfaserdämmung und einer optimierten Struktur. Entwickelt für Komfort, Langlebigkeit und Effizienz auf höchstem Niveau.
STRUKTUR // TITLE
Das MODULARE Struktursystem<split>Kombiniert bemerkenswerte mechanische Festigkeit mit beispielloser Effizienz und eliminiert Wärmebrücken vollständig. Zertifiziert für Energieeffizienz vom Passivhaus-Institut aus Darmstadt, Deutschland mit 0,15 W/(m²K) und für Nachhaltigkeit von EPD (International).
C24 Holzrahmenstruktur BIOBUILDS<split>FSC/PEFC-zertifiziertes Holz, außergewöhnliche Belastbarkeit.
STEICO Holzfaserdämmung<split>Organisch, nachhaltig und ultra-effizient (λ ≈ 0,036 W/m·K), CE-zertifiziert.
ECO OSB 3 Platte (AGEPAN, Deutschland)<split>Formaldehyd- und VOC-frei, vom Passivhaus-Institut aus Darmstadt, Deutschland zugelassen, CE-zertifiziert.
DWD Platte (AGEPAN, Deutschland)<split>Lässt die Wände „atmen“ und erhält die äußere Luftdichtheit; CE-zertifiziert.
Intelligente Membran<split>Sorgt für innere Luftdichtheit mit kontrollierter Dampfdiffusion nach außen.
AUSSENVERKLEIDUNGEN // TITLE
Hinterlüftete Fassade aus Yakisugi/Lunawood-Holz<split>Wärmebehandeltes Naturholz mit deutlich reduziertem Wartungsaufwand, ausgezeichneter Feuerbeständigkeit, langlebig, mit besonderer Ästhetik und nachhaltiger Herkunft.
Hinterlüftetes Flachdach<split>Überlegene Wärmeleistung, verlängerte Lebensdauer durch Verhinderung von Feuchtigkeitsansammlungen und Überhitzung. Das Dach hat eine unsichtbare Neigung (~5°), ist mit einer Premium-Membran wasserdicht gemacht, mindestens 10 Jahre Herstellergarantie.
Integriertes Regenwassersammelsystem<split>Versteckte Rinnen, dezent in die Fassade integriert, bereit für die nachhaltige Sammlung von Regenwasser.
AUSSENFENSTER UND -TÜREN // TITLE
Genesis 90 Aluminiumprofile<split>Stabile, ultra-effiziente Profile, zertifiziert für Passivhäuser (Uwi ≤ 0,85 W/m²K), CE-zertifiziert.
Dreifach-Verbund-Sicherheitsglas<split>Außergewöhnliche Effizienz und Sicherheit (U = 0,50 W/m²K), laminiert für zusätzlichen Schutz.
KÜCHE // TITLE
Kücheninstallationen<split>Vormontierte Installationen, bereit für Ihre Möbel und Geräte.
TECHNISCHE INSTALLATIONEN // TITLE
Elektrische Installation<split>Kompletter Schaltschrank, konform mit den strengen EU-Normen. Schalter und Schutzvorrichtungen entsprechen den örtlichen Vorschriften, einschließlich AFDD-Technologie.
Sanitärinstallation<split>Hochwertige Rohre und Fittings (PPR/PEX), kompatibel mit allen lokalen und EU-Vorschriften.
ZERTIFIZIERUNGEN UND GARANTIEN // TITLE
Passivhaus-Zertifizierung<split>Ausgestellt vom Passivhaus-Institut aus Darmstadt, Deutschland, bescheinigt beispiellose Energieeffizienz, außergewöhnlichen Komfort. Für ein dauerhaftes Zuhause, das nach den strengsten internationalen Standards gebaut wurde.
EPD-Zertifizierung<split>Ausgestellt von EPD International, bestätigt ein CO2-negatives Produkt und verantwortungsvolle Baupraktiken.
CE-Kennzeichnung<split>Alle Komponenten entsprechen den EU-Vorschriften für Bauprodukte.
Standard-EU-Garantie<split>24 Monate für Wohngebäude. 12 Monate für gewerbliche Nutzung. Garantieerweiterungsoptionen auf Anfrage erhältlich.
Herstellergarantien<split>Begünstigte erhalten vollen Schutz durch die Garantien der einzelnen Lieferanten.
HAFTUNGSAUSSCHLUSS // TITLE
Technische Leistung<split>Die genannten Leistungen (einschließlich Energieverbrauch) werden gemäß den Standardbedingungen des Passivhaus-Instituts aus Darmstadt, Deutschland berechnet. Die tatsächlichen Ergebnisse können je nach Klima, Ausrichtung des Hauses, Abmessungen und Nutzung variieren. Für genaue Details konsultieren Sie die PHPP-Berechnungen (Passive House Planning Package) des Projekts.
`;

function parseItemLine(line) {
    if (!line || line.trim() === "") return null;
    const delimiter = "<split>";
    const delimiterIndex = line.indexOf(delimiter);

    if (delimiterIndex !== -1) {
        const materialPart = line.substring(0, delimiterIndex).trim();
        const charPart = line.substring(delimiterIndex + delimiter.length).trim().replace(/<end of materials spec>/g, '').trim();
        if (materialPart) {
            return { material: materialPart, characteristics: charPart };
        }
    }
    const trimmedLine = line.replace(/\s*\/\/ TITLE$/,'').trim().replace(/<end of materials spec>/g, '').trim();
    if (trimmedLine) {
        return { material: trimmedLine, characteristics: "" };
    }
    return null;
}


function parseMaterialData(rawDataString) {
    const lines = rawDataString.trim().split('\n');
    const items = [];
    let currentSection = "";
    const sectionOrder = [];

    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.length === 0) return;

        const isAllUpper = trimmedLine === trimmedLine.toUpperCase();
        const hasTitleComment = /\s*\/\/ TITLE$/.test(line);
        const cleanPotentialTitle = trimmedLine.replace(/\s*\/\/ TITLE$/,'').trim();

        const isSectionHeader = (isAllUpper && cleanPotentialTitle.length > 3 && !cleanPotentialTitle.includes("<split>") && !/\d/.test(cleanPotentialTitle)) ||
                                (hasTitleComment && cleanPotentialTitle.length > 0 && !cleanPotentialTitle.includes("<split>"));


        if (isSectionHeader) {
            currentSection = cleanPotentialTitle;
            if (!sectionOrder.includes(currentSection)) {
                sectionOrder.push(currentSection);
            }
        } else if (currentSection || items.length === 0) {
            const parsedItem = parseItemLine(line);
            if(parsedItem && parsedItem.material) {

                let sectionToAssign = currentSection;
                if (!sectionToAssign && items.length === 0 && sectionOrder.length === 0 && parsedItem.material.toUpperCase() !== cleanPotentialTitle.toUpperCase()) {
                }

                items.push({
                    section: sectionToAssign || "General",
                    material: parsedItem.material,
                    characteristics: parsedItem.characteristics
                });
                 if ( (sectionToAssign || "General") === "General" && !sectionOrder.includes("General")){
                     sectionOrder.unshift("General");
                }
            }
        }
    });
    return { items, sectionOrder };
}

const euCountries = ["Österreich","Belgien","Bulgarien","Kroatien","Zypern","Tschechische Republik","Dänemark","Estland","Finnland","Frankreich","Deutschland","Griechenland","Ungarn","Irland","Italien","Lettland","Litauen","Luxemburg","Malta","Niederlande","Polen","Portugal","Rumänien","Slowakei","Slowenien","Spanien","Schweden"];

let totalPrice = 0;
let type = getUrlParameter('SQF_TYPE');
if(type === null || !config[type]) {
    const validTypes = Object.keys(config);
    type = validTypes.includes('sanctuary-142') ? 'sanctuary-142' : (validTypes.length > 0 ? validTypes[0] : 'nomad-24');
}

let queryArgs = {};

const stickyImg1 = document.getElementById('stickyImg1');
const stickyImg2 = document.getElementById('stickyImg2');
let currentStickyImage = stickyImg1;

const modalInnerContent = document.querySelector("#modalOverlay .modal-inner");
const modalOverlay = document.getElementById('modalOverlay');
const formTabsNodeList = document.querySelectorAll('.form-tab');
const formTabsArray = Array.from(formTabsNodeList);
const rightContentElement = document.querySelector('.config .right-content');

const btn = document.getElementById('finalContinueBtn');
const box = document.getElementById('priceBox');
let currentScrollTarget;

let referralDiscountActive = false;
const REFERRAL_DISCOUNT_RATE = 0.04;
const VALID_REFERRAL_CODES = ["BUHNICI", "MATEUS"];

function handleStickyBottomAnimation(){
    if (!btn || !box) return;

    let scrollTop, scrollHeight, clientHeight;
    const isDesktop = window.innerWidth > 768;

    if (isDesktop && rightContentElement) {
        scrollTop = rightContentElement.scrollTop;
        scrollHeight = rightContentElement.scrollHeight;
        clientHeight = rightContentElement.clientHeight;
    } else {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = document.documentElement.clientHeight;
    }

    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercent = (scrollableHeight <= 0) ? 100 : (scrollTop / scrollableHeight) * 100;

    if (scrollPercent >= 70) {
        btn.disabled = false;
        btn.classList.add('active');
        box.classList.add('raise');
    } else {
        btn.disabled = true;
        btn.classList.remove('active');
        box.classList.remove('raise');
    }
}

function updateScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar-bottom');
    if (!progressBar) return;

    let scrollTop, scrollHeight, clientHeight;
    const isDesktop = window.innerWidth > 768;

    if (isDesktop && rightContentElement) {
        scrollTop = rightContentElement.scrollTop;
        scrollHeight = rightContentElement.scrollHeight;
        clientHeight = rightContentElement.clientHeight;
    } else {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = document.documentElement.clientHeight;
    }

    const scrollableHeight = scrollHeight - clientHeight;
    if (scrollableHeight <= 0) {
        progressBar.style.width = '100%';
        return;
    }

    const scrollPercent = (scrollTop / scrollableHeight) * 100;
    const activationThreshold = 85;

    const progressBarWidth = Math.min(100, (scrollPercent / activationThreshold) * 100);
    progressBar.style.width = `${progressBarWidth}%`;
}


function unifiedScrollHandler() {
    handleStickyBottomAnimation();
    updateScrollProgressBar();
}

function setupUnifiedScrollListener() {
    const newIsDesktop = window.innerWidth > 768;
    if (currentScrollTarget) {
        currentScrollTarget.removeEventListener('scroll', unifiedScrollHandler);
    }
    currentScrollTarget = (newIsDesktop && rightContentElement) ? rightContentElement : window;
    currentScrollTarget.addEventListener('scroll', unifiedScrollHandler, { passive: true });
    setTimeout(unifiedScrollHandler, 250);
}

const upgradeRenderConfig = [
    { groupIndex: 0, queryParam: 'SQF_PARQUET', type: 'parquet', defaultName: 'Parkett' },
    { groupIndex: 1, queryParam: 'SQF_FACADE', type: 'parquet', defaultName: 'Fassade' },
    { groupIndex: 2, queryParam: 'SQF_VENTILATION', type: 'checkbox', defaultName: 'Lüftungsanlage' },
    { groupIndex: 3, queryParam: 'SQF_BLINDS', type: 'checkbox', defaultName: 'Intelligente Jalousien' }
];

const optionTemplate = (labelClass, inputType, inputName, inputValue, optionName, rawPrice, context = "upgrades", isDisabled = false, isChecked = false, fullOptionObject = null) => {
    let priceDisplayHTML = '';
    let effectiveLabelClass = labelClass;
    let inputAttributes = '';

    const isTurnkey = queryArgs['SQF_FINISH'] === 'turnkey' || (fullOptionObject && fullOptionObject.slug && fullOptionObject.slug.includes('turnkey'));
    const isVentOrBlinds = (inputValue === 'ventilation-system' || inputValue === 'blinds');
    let specialPriceText = "";

    if (isTurnkey && isVentOrBlinds && (inputName === 'SQF_VENTILATION' || inputName === 'SQF_BLINDS')) {
        const upgradeData = findUpgradeInCurrentFinish(inputValue);
        if (upgradeData && upgradeData.included && upgradeData.price === 0) {
            specialPriceText = "In Schlüsselfertig enthalten";
            isDisabled = true;
            isChecked = true;
            if(queryArgs[inputName] !== inputValue) queryArgs[inputName] = inputValue;
        }
    }

    if (isDisabled) {
        effectiveLabelClass += ' disabled-option';
        inputAttributes += ' disabled';
    }
    if (isChecked) {
        inputAttributes += ' checked';
    }

    if (specialPriceText) {
        priceDisplayHTML = `<span class="option-price">${specialPriceText}</span>`;
    } else if (rawPrice === 0) {
        priceDisplayHTML = `<span class="option-price">Inbegriffen</span>`;
    } else {
        priceDisplayHTML = `<span class="option-price">${formatCurrency(rawPrice)} + MwSt.</span>`;
    }

    return `
        <label class="${effectiveLabelClass}">
            <input type="${inputType}" name="${inputName}" price="${rawPrice}" value="${inputValue}" ${inputAttributes} />
            <span class="option-name">${optionName}</span>
            ${priceDisplayHTML}
        </label>
    `;
};

const optionsWrapper = (content, className) => `<div class="${className}">${content}</div>`;

const parquetOption = (inputType, inputName, price, inputValue, displayName, checkboxImage, isCheckedByDefault) => {
    let displayPriceText;
    if (price === 0) {
        displayPriceText = "Inbegriffen";
    } else {
        displayPriceText = `${formatCurrency(price)} + MwSt.`;
    }

    return `
    <div class="checkbox-container">
        <input id="${inputValue}" class="custom-checkbox" type="${inputType}" name="${inputName}" price="${price}" value="${inputValue}"
                                             data-display-label="${displayName}" data-display-price="${displayPriceText}" ${isCheckedByDefault ? "checked=\"checked\"" : ""}/>
        <label for="${inputValue}" class="checkbox-label">
            <img src="${checkboxImage || ''}" alt="Icon für ${displayName}" class="checkbox-image" onerror="this.onerror=null; this.src='';">
        </label>
    </div>`;
};

function generateNewDetailedMaterialModalContent(houseTypeKey) {
    const houseData = config[houseTypeKey];
    if (!houseData) return "<p>Details nicht verfügbar.</p>";

    let modalHtml = `<img src="${houseData.image}" alt="Hauptbild von ${houseData.name}" style="width:100%; max-height: 300px; object-fit: cover; margin-bottom: 20px; border-radius: 4px;" onerror="this.onerror=null; this.src='';">`;

    let currentFinishSlug = queryArgs['SQF_FINISH'] || (config[type]?.options[0]?.slug);
    let itemsToUse, sectionOrderToUse;
    let rawDataString;

    if (currentFinishSlug === 'turnkey') {
        rawDataString = turnkeyMaterialItemsRaw;
    } else {
        rawDataString = semiTurnkeyMaterialItemsRaw;
    }

    const parsedData = parseMaterialData(rawDataString);
    itemsToUse = parsedData.items;
    sectionOrderToUse = parsedData.sectionOrder;

    const categorizedItems = itemsToUse.reduce((acc, item) => {
        const sectionKey = item.section;
        if (!acc[sectionKey]) {
            acc[sectionKey] = [];
        }
        acc[sectionKey].push({ material: item.material, characteristics: item.characteristics });
        return acc;
    }, {});


    sectionOrderToUse.forEach(sectionKey => {
        if (categorizedItems.hasOwnProperty(sectionKey)) {
            const items = categorizedItems[sectionKey];
            if (items.length > 0) {
                const sectionTitle = sectionKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                modalHtml += `<h3 class="modal-section-title">${sectionTitle}</h3>`;

                items.forEach(item => {
                    modalHtml += '<div class="modal-material-item">';
                    modalHtml += `<div class="material-name"><p>${item.material}</p></div>`;
                    modalHtml += `<div class="material-chars"><p>${item.characteristics}</p></div>`;
                    modalHtml += '</div>';
                });
            }
        }
    });
    return modalHtml;
}

// Function to generate price breakdown modal
function generatePriceBreakdownModalContent(houseTypeKey) {
    const modelKey = Object.keys(priceBreakdowns).find(key => houseTypeKey.startsWith(key.split('-')[0]));
    const data = priceBreakdowns[modelKey];
    if (!data) return '<p>Preisaufschlüsselung nicht verfügbar.</p>';

    let html = `<div class="price-breakdown-modal-content"><h2>${data.title}</h2>`;

    const renderSection = (section) => {
        let sectionHtml = `<h3>${section.title}</h3>`;
        sectionHtml += '<div class="price-table">';
        sectionHtml += '<div class="price-table-header"><div class="price-table-col">Leistung</div><div class="price-table-col">Geschätzter Preis (€)</div></div>';
        section.items.forEach(item => {
            sectionHtml += `<div class="price-table-row"><div class="price-table-col">${item.name}</div><div class="price-table-col">${item.price}</div></div>`;
        });
        sectionHtml += `<div class="price-table-total"><div class="price-table-col">Summe Kapitel</div><div class="price-table-col">${formatCurrency(section.total)}</div></div>`;
        sectionHtml += '</div>';
        return sectionHtml;
    };

    html += renderSection(data.beforeConstruction);
    html += renderSection(data.duringConstruction);
    html += renderSection(data.afterConstruction);

    html += `<div class="grand-total-section">`;
    html += `<h4>Gesamtsumme ${data.title.split('–')[1].trim()} (Nebenkosten): ${formatCurrency(data.grandTotal)}</h4>`;

    const modularPrice = sumCheckedPrices();
    const finalDiscountedPrice = referralDiscountActive ? modularPrice * (1 - REFERRAL_DISCOUNT_RATE) : modularPrice;

    html += `<h4>Aktueller Konfigurationspreis (Modular): ${formatCurrency(finalDiscountedPrice)}</h4>`;

    const totalPrice = finalDiscountedPrice + data.grandTotal;
    html += `<h3>GESAMTPREIS (geschätzt, Modular + alle möglichen Kosten): ${formatCurrency(totalPrice)}</h3>`;
    html += `</div>`;

    html += `
        <div class="price-notes-section">
            <h4>Variablen, die das Budget beeinflussen können</h4>
            <ul>
                <li>Entfernung zu den Versorgungsleitungen, HAK-Notwendigkeit, Zählertyp, verfügbare Kapazitäten</li>
                <li>Schwieriger Boden (Lehm, Stein, Grundwasserspiegel, Hänge) → zusätzliche Erdarbeiten, klassisches Fundament</li>
                <li>Lokale Vorschriften für Straßensperrungen und Kran (Dauer, Beschilderung)</li>
                <li>Umfangreiche Außenanlagen (große Terrasse, Wege, Beleuchtung, Zäune)</li>
            </ul>
            <h4>Nächste Schritte</h4>
            <ul>
                <li>Grundstücksprüfung (Fotos, Katasterplan, Anschlusspunkte)</li>
                <li>HOAI-Set & Bauantrag: Architekt + Statik + Gutachten</li>
                <li>Fundamentlayout (Schraubfundamente + Träger) und Logistikplan (Kran, Zugang)</li>
                <li>Angebote von lokalen Partnern einholen und Liefertermin für das Modul planen</li>
            </ul>
        </div>
    </div>`;

    return html;
}


document.addEventListener("DOMContentLoaded", function() {
    // Inject CSS for price breakdown modal
    const modalStyles = `
        .price-breakdown-modal-content h2, .price-breakdown-modal-content h3 { margin-bottom: 1em; }
        .price-table { display: flex; flex-direction: column; margin-bottom: 2em; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
        .price-table-row, .price-table-header, .price-table-total { display: flex; border-bottom: 1px solid #eee; align-items: center; }
        .price-table-row:last-child { border-bottom: none; }
        .price-table-col { padding: 10px 15px; flex: 1; }
        .price-table-col:last-child { text-align: right; flex-basis: 150px; flex-grow: 0; font-weight: bold; }
        .price-table-header { background-color: #f9f9f9; font-weight: bold; }
        .price-table-total { background-color: #f9f9f9; font-weight: bold; border-top: 2px solid #ddd; }
        .grand-total-section { margin-top: 2em; padding-top: 1em; border-top: 2px solid #ccc; }
        .grand-total-section h3 { font-size: 1.2em; color: #333; margin-top: 1em; }
        .grand-total-section h4 { margin-top: 0.5em; }
        .price-notes-section { margin-top: 2em; font-size: 0.9em; color: #555; }
        .price-notes-section h4 { margin-top: 1.5em; margin-bottom: 0.5em; }
        .price-notes-section ul { list-style-position: inside; padding-left: 0; }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = modalStyles;
    document.head.appendChild(styleSheet);


    queryArgs['SQF_TYPE'] = type;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
        if (key !== 'SQF_TYPE') {
            queryArgs[key] = value;
        }
    });

    let houseData = config[type];
    if (!houseData) {
        console.error("Konfiguration für Haustyp '" + type + "' nicht gefunden. Initialisierung wird abgebrochen.");
        document.body.innerHTML = "<p style='text-align:center;padding:20px;'>Fehler: Die Konfiguration für das ausgewählte Modell konnte nicht geladen werden.</p>";
        return;
    }

    const houseModelNameEl = document.getElementById('houseModelName');
    if (houseModelNameEl) houseModelNameEl.textContent = houseData.name;

    const finalContinueBtn = document.getElementById('finalContinueBtn');
    if (finalContinueBtn) {
        finalContinueBtn.disabled = true;
    }
    
    // Inject Transport Tab
    const referralTab = document.getElementById('step-5-referral');
    if (referralTab) {
        const transportTab = document.createElement('div');
        transportTab.className = 'form-tab';
        transportTab.id = 'step-4-transport';
        transportTab.innerHTML = `
            <div class="form-tab-header">
                <h2 id="transportStepTitle">Transport & Nebenkosten</h2>
            </div>
            <div class="options-container">
                <p style="margin-bottom: 15px; font-size: 0.9em; color: #555;">Obwohl der MODULAR-Preis fest und transparent ist (wir dürfen den Preis während Ihres Bauprozesses ethisch und vertraglich niemals erhöhen), hängen zusätzliche Kosten wie Fundament und Anschlüsse stark von Ihrem Grundstücksstandort ab. Um vollständig transparent zu sein, haben wir eine erweiterte Schätzung für alles gemacht, damit Sie von Anfang an alles wissen. Keine versteckten Kosten.</p>
                <button id="priceBreakdownBtn" class="feature-details-link" style="display:inline-block; width:auto; cursor:pointer;">Alle möglichen Preise transparent aufgeschlüsselt</button>
            </div>
        `;
        referralTab.parentNode.insertBefore(transportTab, referralTab);
    }


    generateOptions(houseData.options, 'step-1', 'SQF_FINISH', true, 'radio');

    let effectiveFinishSlug = queryArgs['SQF_FINISH'];
    let finishRadio = document.querySelector(`.multistep-form input[name="SQF_FINISH"][value="${effectiveFinishSlug}"]`);

    if (!effectiveFinishSlug || !finishRadio) {
        if (houseData.options && houseData.options.length > 0) {
            effectiveFinishSlug = houseData.options[0].slug;
            queryArgs['SQF_FINISH'] = effectiveFinishSlug;
            finishRadio = document.querySelector(`.multistep-form input[name="SQF_FINISH"][value="${effectiveFinishSlug}"]`);
        }
    }
    if (finishRadio) {
        finishRadio.checked = true;
    }

    if (queryArgs['SQF_FINISH'] === 'turnkey') {
        const turnkeyData = houseData.options.find(opt => opt.slug === 'turnkey');
        if (turnkeyData && turnkeyData.upgrades) {
            turnkeyData.upgrades.forEach(group => {
                group.forEach(upgrade => {
                    if ((upgrade.slug === 'ventilation-system' || upgrade.slug === 'blinds') && upgrade.included && upgrade.price === 0) {
                        if(upgrade.slug === 'ventilation-system') queryArgs['SQF_VENTILATION'] = upgrade.slug;
                        if(upgrade.slug === 'blinds') queryArgs['SQF_BLINDS'] = upgrade.slug;
                    }
                });
            });
        }
    }

    if (effectiveFinishSlug) {
        render_upgrades(effectiveFinishSlug);
    } else {
        const step3Container = document.getElementById('step-3')?.querySelector('.options-container');
        if (step3Container) step3Container.innerHTML = '';
    }
    render_floorplan();
    updateModelDescription();

    addSectionSpecificModalButtons();
    setInitialImage();

    addEventListeners();
    setTabTitles();

    referralDiscountActive = false;
    const referralCodeInput = document.getElementById('referral-code-input');
    const initialReferralCodeFromUrl = getUrlParameter('SQF_REFERRAL_CODE');

    if (initialReferralCodeFromUrl && VALID_REFERRAL_CODES.includes(initialReferralCodeFromUrl.toUpperCase())) {
        referralDiscountActive = true;
        if(referralCodeInput) referralCodeInput.value = initialReferralCodeFromUrl;
    } else {
        const initialReferralFromInput = referralCodeInput ? referralCodeInput.value.trim().toUpperCase() : "";
        if (initialReferralFromInput && VALID_REFERRAL_CODES.includes(initialReferralFromInput)) {
            referralDiscountActive = true;
        } else if (referralCodeInput && initialReferralFromInput) {
            referralDiscountActive = false;
        }
    }

    applyReferralDiscountAndRender();
    render_economy_price();
    updateURL();

    setupUnifiedScrollListener();

    window.addEventListener('resize', () => {
        setupUnifiedScrollListener();
    }, { passive: true });

    const finalContinueBtnRef = document.getElementById('finalContinueBtn');
    if(finalContinueBtnRef) finalContinueBtnRef.textContent = "WEITER";
    const backBtnElement = document.querySelector('.config .go-back-btn');
    if (backBtnElement) backBtnElement.remove();
});

function updateModelDescription() {
    const descriptionEl = document.getElementById('modelDescription');
    if (!descriptionEl) return;

    const modelDescriptions = {
        'sanctuary': '142m² - 4 Schlafzimmer',
        'serenity': '95m² - 3 Schlafzimmer',
        'wanderlust': '48m² - 1 oder 2 Schlafzimmer',
        'nomad': '24m² - 1 Schlafzimmer'
    };

    const modelName = type.split('-')[0];
    const descriptionText = modelDescriptions[modelName] || '';
    descriptionEl.textContent = descriptionText;
}

function addSectionSpecificModalButtons() {
    formTabsArray.forEach(tab => {
        const existingLink = tab.querySelector('.feature-details-link');
        if (existingLink) existingLink.remove();

        const tabId = tab.id;
        let buttonText = "";
        let modalContentProvider = null;

        switch (tabId) {
            case 'step-1':
                const currentFinishSlugForLink = queryArgs['SQF_FINISH'] || (config[type]?.options.length > 0 ? config[type].options[0].slug : null);
                const finishDataForLink = currentFinishSlugForLink ? config[type].options.find(o => o.slug === currentFinishSlugForLink) : null;
                const finishName = finishDataForLink ? finishDataForLink.name : 'Ihrer Auswahl';
                buttonText = `Entdecken Sie, was in ${finishName} enthalten ist`;
                modalContentProvider = () => generateNewDetailedMaterialModalContent(type);
                break;
            case 'step-2':
                const currentFloorplanSlug = queryArgs['SQF_FLOORPLAN'] || (config[type]?.floorplan?.[0]?.slug);
                const floorplanData = currentFloorplanSlug ? config[type]?.floorplan?.find(f => f.slug === currentFloorplanSlug) : null;
                const planLetter = floorplanData ? floorplanData.name.replace('Grundriss ','') : 'A';
                buttonText = `Details zu Grundriss ${planLetter} anzeigen`;
                modalContentProvider = () => {
                    const floorplanSlugForModal = queryArgs['SQF_FLOORPLAN'] || (config[type]?.floorplan?.[0]?.slug);
                    const floorplanDataForModal = config[type]?.floorplan?.find(f => f.slug === floorplanSlugForModal);
                    if (!floorplanDataForModal) {
                         return "<p>Bitte wählen Sie einen Grundriss aus, um die Details anzuzeigen.</p>";
                    }

                    let modalHtml = `<img src="${floorplanDataForModal.image}" alt="Grundriss ${floorplanDataForModal.name}" style="width:100%; max-height: 400px; object-fit: contain; margin-bottom: 20px; border-radius: 4px; onerror="this.onerror=null; this.src='';">`;
                    modalHtml += floorplanDataForModal.modal;

                    return modalHtml;
                };
                break;
        }

        if (buttonText && modalContentProvider) {
            const detailsLink = document.createElement('a');
            detailsLink.href = "#";
            detailsLink.className = 'feature-details-link';
            detailsLink.textContent = buttonText;
            detailsLink.dataset.tabId = tabId;

            detailsLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (!modalInnerContent || !modalOverlay) return;

                let content = modalContentProvider();
                modalInnerContent.innerHTML = content;
                modalOverlay.style.display = 'flex';
            });
            tab.appendChild(detailsLink);
        }
    });
}

function setTabTitles() {
    let currentHouseData = config[type];
    if (!currentHouseData) return;
    setTabTitle('Grundriss', 'step-2', 'floorplanStepTitle');
    setTabTitle('Upgrades', 'step-3', 'upgradesStepTitle');
    setTabTitle('Empfehlungscode', 'step-5-referral', 'referralCodeStepTitle');
}

function switchToSingleImageView() {
    document.querySelector('.image-wrapper').style.display = 'block';
    document.querySelector('.stacked-image-container').style.display = 'none';
}

function switchToStackedImageView() {
    document.querySelector('.image-wrapper').style.display = 'none';
    document.querySelector('.stacked-image-container').style.display = 'flex';
}

function updateMainDisplayImage() {
    const houseData = config[type];
    if (!houseData) return;

    const currentFinishSlug = queryArgs['SQF_FINISH'];
    const finishData = houseData.options.find(opt => opt.slug === currentFinishSlug);

    const stackedImgTop = document.getElementById('stackedImgTop');
    const stackedImgBottom = document.getElementById('stackedImgBottom');

    if (finishData && (currentFinishSlug === 'turnkey' || currentFinishSlug === 'semi-finished') && finishData.images && finishData.images.length === 2) {
        switchToStackedImageView();
        stackedImgTop.src = finishData.images[0].src;
        stackedImgTop.alt = finishData.images[0].alt || 'Oberes Bild';
        stackedImgBottom.src = finishData.images[1].src;
        stackedImgBottom.alt = finishData.images[1].alt || 'Unteres Bild';

        stickyImg1.classList.remove('active-sticky-image');
        stickyImg2.classList.remove('active-sticky-image');
        stickyImg1.classList.remove('object-fit-contain');
        stickyImg2.classList.remove('object-fit-contain');
    } else {
        switchToSingleImageView();
        let singleImageSrc = finishData?.image || houseData.image;
        if (singleImageSrc) {
            crossfadeStickyImage(singleImageSrc, false);
        } else {
            crossfadeStickyImage(houseData.image || "", false);
        }
    }
}

function crossfadeStickyImage(newSrc, isFloorplan = false) {
    if (!newSrc || newSrc === "") {
        newSrc = config[type]?.image;
        if (!newSrc || newSrc === "") return;
    }

    if (currentStickyImage.src === newSrc && currentStickyImage.classList.contains('active-sticky-image') &&
        ((isFloorplan && currentStickyImage.classList.contains('object-fit-contain')) || (!isFloorplan && !currentStickyImage.classList.contains('object-fit-contain')))) {
        return;
    }

    const imageToLoad = (currentStickyImage === stickyImg1) ? stickyImg2 : stickyImg1;
    const imageToFadeOut = currentStickyImage;

    if (isFloorplan) {
        imageToLoad.classList.add('object-fit-contain');
    } else {
        imageToLoad.classList.remove('object-fit-contain');
    }

    imageToLoad.onload = () => {
        imageToFadeOut.classList.remove('active-sticky-image');
        imageToLoad.classList.add('active-sticky-image');
        currentStickyImage = imageToLoad;
    };
    imageToLoad.onerror = function() {
        this.onerror=null;
        console.warn("Fehler beim Laden des Bildes:", newSrc, ". Standardbild wird angezeigt.");
        const width = this.naturalWidth > 0 ? this.naturalWidth : (this.width > 0 ? this.width : 800) ;
        const height = this.naturalHeight > 0 ? this.naturalHeight : (this.height > 0 ? this.height : 600);
        this.src = ``;
        if (isFloorplan) {
            this.classList.add('object-fit-contain');
        } else {
            this.classList.remove('object-fit-contain');
        }
    };
    imageToLoad.src = newSrc;
}

function changeImages(value, context = "unknown") {
    const house = config[type];
    if (!house) return;

    if (context === "finish") {
        updateMainDisplayImage();
    } else {
        switchToSingleImageView();
        let selectedOptionData;
        let imageToDisplaySrc = "";
        let applyContainFit = false;

        if (context === "floorplan") {
            selectedOptionData = house.floorplan.find(option => option.slug === value);
            imageToDisplaySrc = selectedOptionData?.image;
            applyContainFit = true;
        } else {
            selectedOptionData = findUpgrade(value, queryArgs['SQF_FINISH'] || house.options[0]?.slug);
            if (value === 'facade-yakisugi') {
                imageToDisplaySrc = house.image;
            } else {
                imageToDisplaySrc = selectedOptionData?.image;
            }
            applyContainFit = false;
        }

        let finalImageToDisplay = imageToDisplaySrc;
        if (!finalImageToDisplay || finalImageToDisplay === "") {
            finalImageToDisplay = house.image;
            applyContainFit = false;
        }

        if (finalImageToDisplay && finalImageToDisplay !== "") {
            crossfadeStickyImage(finalImageToDisplay, applyContainFit);
        }
    }
}

function setInitialImage() {
    updateMainDisplayImage();

    const currentFinishSlug = queryArgs['SQF_FINISH'];
    const finishData = config[type]?.options.find(opt => opt.slug === currentFinishSlug);

    if (!(finishData && (currentFinishSlug === 'turnkey' || currentFinishSlug === 'semi-finished') && finishData.images && finishData.images.length === 2)) {
        let imageToShow = config[type]?.image;
        let applyContainFit = false;

        const floorplanSlugFromUrl = queryArgs['SQF_FLOORPLAN'];
        let upgradeImageFromUrl = null;
        const upgradeImageOrder = ['SQF_PARQUET', 'SQF_FACADE', 'SQF_BLINDS', 'SQF_VENTILATION'];

        for (const paramKey of upgradeImageOrder) {
            const slug = queryArgs[paramKey];
            if (slug) {
                const finishContextForUpgrade = currentFinishSlug || config[type]?.options[0]?.slug;
                let upgradeData = findUpgrade(slug, finishContextForUpgrade);
                if (slug === 'facade-yakisugi' && config[type]) {
                    upgradeImageFromUrl = config[type].image;
                } else if (upgradeData && upgradeData.image && upgradeData.image !== "") {
                    upgradeImageFromUrl = upgradeData.image;
                }
                if (upgradeImageFromUrl) break;
            }
        }

        if (upgradeImageFromUrl) {
            imageToShow = upgradeImageFromUrl;
            applyContainFit = false;
        } else if (floorplanSlugFromUrl) {
            const floorplanData = config[type]?.floorplan?.find(f => f.slug === floorplanSlugFromUrl);
            if (floorplanData?.image && floorplanData.image !== "") {
                imageToShow = floorplanData.image;
                applyContainFit = true;
            }
        } else if (finishData?.image && finishData.image !== "") {
             imageToShow = finishData.image;
             applyContainFit = false;
        }

        if (imageToShow && imageToShow !== "") {
             switchToSingleImageView();
             crossfadeStickyImage(imageToShow, applyContainFit);
        } else {
            switchToSingleImageView();
            crossfadeStickyImage(config[type]?.image || "", false);
        }
    }
}

function render_upgrades(finishSlugValue){
    let houseConfig = config[type];
    let step3Container = document.getElementById('step-3')?.querySelector('.options-container');
    if (!step3Container || !houseConfig) {
        if(step3Container) step3Container.innerHTML = ''; return;
    }
    step3Container.innerHTML = '';
    if (!finishSlugValue) return;

    let selectedFinishOption = houseConfig.options.find(obj => obj.slug === finishSlugValue);
    if (!selectedFinishOption || !selectedFinishOption.upgrades) return;

    const isTurnkeySelected = (finishSlugValue === 'turnkey');

    upgradeRenderConfig.forEach(cfg => {
        if (selectedFinishOption.upgrades[cfg.groupIndex] && selectedFinishOption.upgrades[cfg.groupIndex].length > 0) {
            const originalUpgradeGroup = selectedFinishOption.upgrades[cfg.groupIndex];
            let optionsToRender = JSON.parse(JSON.stringify(originalUpgradeGroup));

            if (isTurnkeySelected && cfg.queryParam === 'SQF_PARQUET') {
                optionsToRender = optionsToRender.filter(opt => opt.slug !== 'parquet-raw-osb');
            }
            if (!optionsToRender || optionsToRender.length === 0) {
                const existingWrapperClass = cfg.queryParam.toLowerCase().replace(/_/g, '-');
                const existingSectionWrapper = step3Container.querySelector(`.parquet-section-wrapper.${existingWrapperClass}`);
                if (existingSectionWrapper) existingSectionWrapper.remove();
                const existingRadioGroup = step3Container.querySelector(`.radio-group.${existingWrapperClass}`);
                if(existingRadioGroup) existingRadioGroup.remove();
                return;
            }

            if (cfg.type === 'parquet') {
                generateParquetOptions(optionsToRender, 'step-3', cfg.queryParam, true, cfg.defaultName);
            } else if (cfg.type === 'checkbox' || cfg.type === 'radio') {
                generateOptions(optionsToRender, 'step-3', cfg.queryParam, true, cfg.type);
            }

            if (cfg.type === 'parquet' || cfg.type === 'radio') {
                let currentSelection = queryArgs[cfg.queryParam];
                let inputToSelect = step3Container.querySelector(`input[name="${cfg.queryParam}"][value="${currentSelection}"]`);

                if (!inputToSelect || (inputToSelect && inputToSelect.closest('.parquet-section-wrapper, .radio-group').offsetParent === null) ) {
                    const defaultIncludedFree = optionsToRender.find(opt => opt.included && opt.price === 0);
                    const firstOption = optionsToRender[0];
                    let defaultSlug = defaultIncludedFree ? defaultIncludedFree.slug : (firstOption ? firstOption.slug : null);

                    if (defaultSlug) {
                        inputToSelect = step3Container.querySelector(`input[name="${cfg.queryParam}"][value="${defaultSlug}"]`);
                        if (inputToSelect && (!currentSelection || !optionsToRender.find(opt => opt.slug === currentSelection)) ) {
                            queryArgs[cfg.queryParam] = inputToSelect.value;
                        }
                    }
                }
                if (inputToSelect && !inputToSelect.disabled) {
                    inputToSelect.checked = true;
                    if (cfg.type === 'parquet') {
                        updateParquetPriceAndLabel(inputToSelect);
                    }
                } else if (inputToSelect && inputToSelect.disabled && inputToSelect.checked) {
                    queryArgs[cfg.queryParam] = inputToSelect.value;
                     if (cfg.type === 'parquet') {
                        updateParquetPriceAndLabel(inputToSelect);
                    }
                }
            } else if (cfg.type === 'checkbox') {
                const inputElements = step3Container.querySelectorAll(`input[name="${cfg.queryParam}"]`);
                inputElements.forEach(inputEl => {
                    const optionData = optionsToRender.find(opt => opt.slug === inputEl.value);
                    if (isTurnkeySelected && (cfg.queryParam === 'SQF_VENTILATION' || cfg.queryParam === 'SQF_BLINDS')) {
                        if (optionData && optionData.included && optionData.price === 0) {
                            inputEl.checked = true;
                            inputEl.disabled = true;
                            queryArgs[cfg.queryParam] = inputEl.value;
                        } else {
                            inputEl.checked = queryArgs[cfg.queryParam] === inputEl.value;
                            inputEl.disabled = false;
                        }
                    } else if (queryArgs[cfg.queryParam] === inputEl.value) {
                        inputEl.checked = true;
                    } else if (!queryArgs[cfg.queryParam] && optionData && optionData.included && optionData.price === 0 && !isTurnkeySelected) {
                         inputEl.checked = true;
                         queryArgs[cfg.queryParam] = inputEl.value;
                    }
                    else {
                        inputEl.checked = false;
                    }
                });
            }
        } else {
            const existingWrapperClass = cfg.queryParam.toLowerCase().replace(/_/g, '-');
            const existingSectionWrapper = step3Container.querySelector(`.parquet-section-wrapper.${existingWrapperClass}`);
            if (existingSectionWrapper) existingSectionWrapper.remove();
            const existingRadioGroup = step3Container.querySelector(`.radio-group.${existingWrapperClass}`);
            if(existingRadioGroup) existingRadioGroup.remove();
        }
    });
}

function render_floorplan() {
    if (!config[type] || !config[type].floorplan) return;
    let options = config[type].floorplan;
    generateOptions(options, 'step-2', "SQF_FLOORPLAN", false, 'radio');
    const floorplanFromURL = queryArgs['SQF_FLOORPLAN'];
    let floorplanInput = document.querySelector(`input[name="SQF_FLOORPLAN"][value="${floorplanFromURL}"]`);

    if (floorplanInput) {
        floorplanInput.checked = true;
    } else {
        const firstFloorplanRadio = document.querySelector('#step-2 input[name="SQF_FLOORPLAN"]');
        if (firstFloorplanRadio) {
            firstFloorplanRadio.checked = true;
            queryArgs['SQF_FLOORPLAN'] = firstFloorplanRadio.value;
        }
    }
    const floorplanDetailsLink = document.querySelector('#step-2 .feature-details-link');
    if(floorplanDetailsLink){
        const currentFloorplanSlug = queryArgs['SQF_FLOORPLAN'];
        const floorplanData = config[type]?.floorplan?.find(f => f.slug === currentFloorplanSlug);
        if (floorplanData && floorplanData.name) {
            floorplanDetailsLink.textContent = `Details zu Grundriss ${floorplanData.name.replace('Grundriss ', '')} anzeigen`;
        } else {
            floorplanDetailsLink.textContent = "Grundrissdetails anzeigen";
        }
    }
}

function setTabTitle(tabTitle, tabID, elementId) {
    const targetElement = elementId ? document.getElementById(elementId) : document.querySelector(`#${tabID} h2`);
    if (targetElement) targetElement.innerHTML = tabTitle;
}

function render_economy_price(){
    if (!config[type]) return;
    let savings = config[type].energy;
    savings = formatCurrency(savings);
    const economyWrapper = document.querySelectorAll('.price-box .p2');
    economyWrapper.forEach(economy => economy.innerHTML = "Gesch. Energieeinsparung (50 Jahre): " + savings);
}

function render_price(finalPriceToShow, isDiscounted = false, originalPriceBeforeDiscount = null) {
    const priceBoxH4 = document.querySelector('.price-box h4');
    if (!priceBoxH4) return;

    if (!config[type] || !config[type].options || config[type].options.length === 0) {
        priceBoxH4.innerHTML = "Preis nicht verfügbar <span class='tva-label'> + MwSt.</span>";
        return;
    }

    let displayHTML;
    const tvaLabelHtml = " <span class='tva-label'>+ MwSt.</span>";

    if (isDiscounted && originalPriceBeforeDiscount !== null && originalPriceBeforeDiscount > finalPriceToShow) {
        const formattedOldPrice = formatCurrency(originalPriceBeforeDiscount);
        const formattedNewPrice = formatCurrency(finalPriceToShow);
        displayHTML = `<span class="old-price">${formattedOldPrice}</span><span class="new-price">${formattedNewPrice}</span>`;
    } else {
        const formattedPrice = formatCurrency(finalPriceToShow);
        displayHTML = `<span class="new-price">${formattedPrice}</span>`;
    }
    priceBoxH4.innerHTML = displayHTML + tvaLabelHtml;
}

function applyReferralDiscountAndRender() {
    const originalPrice = sumCheckedPrices();
    const discountMessageEl = document.getElementById('discount-message');
    let finalPrice = originalPrice;
    let isDiscounted = false;

    if (referralDiscountActive) {
        finalPrice = originalPrice * (1 - REFERRAL_DISCOUNT_RATE);
        isDiscounted = true;
        if (discountMessageEl) {
            discountMessageEl.style.display = 'block';
        }
    } else {
        if (discountMessageEl) {
            discountMessageEl.style.display = 'none';
        }
    }

    render_price(finalPrice, isDiscounted, originalPrice);

    queryArgs['SQF_PRICE'] = Math.round(finalPrice);
}


function generateOptions(options, tabID, inputName, append = false, inputType = 'radio') {
    let tab = document.getElementById(tabID);
    if (!tab) return;
    let container = tab.querySelector('.options-container');
    if (!container) return;

    if (!options || options.length === 0 ) {
             if (!append) {
                const existingGroup = container.querySelector(`.radio-group.${inputName.toLowerCase().replace(/_/g, '-')}`);
                if (existingGroup) existingGroup.remove();
            }
            return;
    }

    let optionString = "";
    const isTurnkey = queryArgs['SQF_FINISH'] === 'turnkey';

    options.forEach(option => {
        let isDisabled = false;
        let isChecked = queryArgs[inputName] === option.slug;

        const context = (inputName === "SQF_FINISH") ? "finishes" : (inputName === "SQF_FLOORPLAN" ? "floorplans" : "upgrades");

        if (isTurnkey && (option.slug === 'ventilation-system' || option.slug === 'blinds') &&
            (inputName === 'SQF_VENTILATION' || inputName === 'SQF_BLINDS')) {
            const upgradeData = findUpgradeInCurrentFinish(option.slug);
            if (upgradeData && upgradeData.included && upgradeData.price === 0) {
                isDisabled = true;
                isChecked = true;
            }
        } else if (inputName === 'SQF_VENTILATION' || inputName === 'SQF_BLINDS') {
             isChecked = queryArgs[inputName] === option.slug;
        }
        optionString += optionTemplate("radio-card", inputType, inputName, option.slug, option.name, option.price, context, isDisabled, isChecked, option);
    });

    let wrapperClass = 'radio-group ' + inputName.toLowerCase().replace(/_/g, '-') + (inputName === 'SQF_FINISH' ? ' sqf-finish' : '');
    if (inputType === 'checkbox') wrapperClass += ' checkbox-group';

    let fullGroupHTML = optionsWrapper(optionString, wrapperClass);

    if (optionString.trim() !== "") {
        if(!append) {
            const existingGroup = container.querySelector(`div.${inputName.toLowerCase().replace(/_/g, '-')}`);
            if (existingGroup) {
                existingGroup.remove();
            }
        }
        container.insertAdjacentHTML('beforeend', fullGroupHTML);
    } else if (!append) {
             const existingGroup = container.querySelector(`div.${inputName.toLowerCase().replace(/_/g, '-')}`);
             if (existingGroup) existingGroup.remove();
    }
}

function generateParquetOptions(options, tabID, inputName, append = false, groupDefaultName = "Optionen"){
    let tab = document.getElementById(tabID);
    if (!tab) return;
    let container = tab.querySelector('.options-container');
    if (!container) return;

    if (!options || options.length === 0) {
        const existingWrapperClass = inputName.toLowerCase().replace(/_/g, '-');
        const existingSectionWrapper = container.querySelector(`.parquet-section-wrapper.${existingWrapperClass}`);
        if (existingSectionWrapper) {
            existingSectionWrapper.remove();
        }
        return;
    }

    let optionString = "";
    let firstName = "", firstPriceText = "";
    let defaultCheckedSlug = queryArgs[inputName];

    if (!defaultCheckedSlug || !options.find(opt => opt.slug === defaultCheckedSlug)) {
        const includedFreeOption = options.find(opt => opt.included && opt.price === 0);
        defaultCheckedSlug = includedFreeOption ? includedFreeOption.slug : (options.length > 0 ? options[0].slug : null);
    }

    if (defaultCheckedSlug && queryArgs[inputName] !== defaultCheckedSlug) {
            queryArgs[inputName] = defaultCheckedSlug;
    }

    options.forEach((option) => {
        let isDefaultChecked = (option.slug === defaultCheckedSlug);
        optionString += parquetOption('radio', inputName, option.price, option.slug, option.name, option.icon, isDefaultChecked);
        if (isDefaultChecked) {
            firstName = option.name;
            if (option.price === 0 && option.included) { firstPriceText = "Inbegriffen"; }
            else if (option.price === 0) { firstPriceText = "Inbegriffen"; }
            else { firstPriceText = `${formatCurrency(option.price)} + MwSt.`; }
        }
    });

    if(optionString.trim() !== "") {
        const sectionWrapperClass = 'parquet-section-wrapper ' + inputName.toLowerCase().replace(/_/g, '-');
        const existingOldWrapper = container.querySelector(`.${sectionWrapperClass.replace(/\s/g,'.')}`);
        if(existingOldWrapper && !append) {
            existingOldWrapper.remove();
        }

        const parquetSectionWrapper = document.createElement('div');
        parquetSectionWrapper.className = sectionWrapperClass;
        parquetSectionWrapper.dataset.groupName = inputName;

        const groupTitleElement = document.createElement('h4');
        groupTitleElement.textContent = groupDefaultName || inputName.replace('SQF_', '').replace(/_/g, ' ');
        groupTitleElement.style.marginBottom = '10px';

        let parquetIconsGroupHTML = optionsWrapper(optionString, 'radio-group parquet-checkboxes ' + inputName.toLowerCase().replace(/_/g, '-'));
        let displayLabelId = `display-label-${inputName}`;
        let displayPriceId = `display-price-${inputName}`;
        let parquetLabelsHTML = `<div class="p-wrapper"><p id="${displayLabelId}">${firstName}</p><p id="${displayPriceId}" class="option-price">${firstPriceText}</p></div>`;

        parquetSectionWrapper.appendChild(groupTitleElement);
        parquetSectionWrapper.insertAdjacentHTML('beforeend', parquetIconsGroupHTML + parquetLabelsHTML);

        if (append) {
                container.appendChild(parquetSectionWrapper);
        } else {
                container.appendChild(parquetSectionWrapper);
        }
    }
}

function updateParquetPriceAndLabel(target) {
    const displayLabelText = target.getAttribute('data-display-label');
    const displayPriceText = target.getAttribute('data-display-price');
    const inputName = target.name;
    const wrapper = target.closest('.parquet-section-wrapper');
    if (!wrapper) return;
    const labelEl = wrapper.querySelector(`#display-label-${inputName}`);
    const priceEl = wrapper.querySelector(`#display-price-${inputName}`);
    if(labelEl) labelEl.textContent = displayLabelText || '';
    if(priceEl) priceEl.textContent = displayPriceText || '';
}

function addEventListeners() {
    const form = document.querySelector('.multistep-form');
    if (form) {
        form.addEventListener('change', (event) => {
            const target = event.target;
            if ((target.tagName === 'INPUT' || target.tagName === 'SELECT') && !target.disabled) {
                if (target.name === 'SQF_MODEL_SELECT') return;

                const currentFormTab = target.closest('.form-tab');
                if (currentFormTab) removeNotification(currentFormTab);

                let optionContext = "upgrade";
                if (target.name === 'SQF_FINISH') optionContext = "finish";
                else if (target.name === 'SQF_FLOORPLAN') optionContext = "floorplan";

                if (target.name === 'SQF_FINISH') {
                    queryArgs['SQF_FINISH'] = target.value;
                    const upgradeParamsToClear = ['SQF_PARQUET', 'SQF_FACADE', 'SQF_VENTILATION', 'SQF_BLINDS'];
                    upgradeParamsToClear.forEach(key => {
                        delete queryArgs[key];
                    });
                    if (queryArgs['SQF_FINISH'] === 'turnkey') {
                        const houseData = config[type];
                        const turnkeyData = houseData.options.find(opt => opt.slug === 'turnkey');
                        if (turnkeyData && turnkeyData.upgrades) {
                            turnkeyData.upgrades.forEach(group => {
                                group.forEach(upgrade => {
                                    if ((upgrade.slug === 'ventilation-system' || upgrade.slug === 'blinds') && upgrade.included && upgrade.price === 0) {
                                        if(upgrade.slug === 'ventilation-system') queryArgs['SQF_VENTILATION'] = upgrade.slug;
                                        if(upgrade.slug === 'blinds') queryArgs['SQF_BLINDS'] = upgrade.slug;
                                    }
                                });
                            });
                        }
                    }
                    render_upgrades(target.value);

                    const finishDetailsLink = document.querySelector('#step-1 .feature-details-link');
                    const newFinishDataForLink = config[type].options.find(o => o.slug === target.value);
                    if (finishDetailsLink && newFinishDataForLink) {
                        finishDetailsLink.textContent = `Entdecken Sie, was in ${newFinishDataForLink.name} enthalten ist`;
                    }
                } else if (target.classList.contains('custom-checkbox')) {
                    updateParquetPriceAndLabel(target);
                } else if (target.name === 'SQF_FLOORPLAN') {
                    const floorplanData = config[type].floorplan.find(f => f.slug === target.value);
                    const floorplanDetailsLink = document.querySelector('#step-2 .feature-details-link');
                    if(floorplanDetailsLink && floorplanData && floorplanData.name){
                        floorplanDetailsLink.textContent = `Details zu Grundriss ${floorplanData.name.replace('Grundriss ', '')} anzeigen`;
                    } else if (floorplanDetailsLink) {
                        floorplanDetailsLink.textContent = "Grundrissdetails anzeigen";
                    }
                    updateModelDescription();
                }

                if (target.type === 'checkbox' && (target.name === 'SQF_VENTILATION' || target.name === 'SQF_BLINDS')) {
                    if (target.checked) {
                        queryArgs[target.name] = target.value;
                    } else {
                        const isTurnkey = queryArgs['SQF_FINISH'] === 'turnkey';
                        const upgradeInfo = findUpgradeInCurrentFinish(target.value);
                        if (!(isTurnkey && upgradeInfo && upgradeInfo.included && upgradeInfo.price === 0)) {
                            delete queryArgs[target.name];
                        }
                    }
                } else if (target.type === 'checkbox') {
                    if (target.checked) queryArgs[target.name] = target.value;
                    else delete queryArgs[target.name];
                }
                else {
                    queryArgs[target.name] = target.value;
                }

                changeImages(target.value, optionContext);
                applyReferralDiscountAndRender();
                updateURL();
            }
        });

        form.addEventListener('click', (event) => {
            let target = event.target;
            let inputElement = null;

            if (target.tagName === 'LABEL') {
                const forId = target.getAttribute('for');
                if (forId) inputElement = document.getElementById(forId);
                else inputElement = target.querySelector('input[type="radio"], input[type="checkbox"]');
            } else if (target.closest('label')) {
                const parentLabel = target.closest('label');
                const forId = parentLabel.getAttribute('for');
                if (forId) inputElement = document.getElementById(forId);
                else inputElement = parentLabel.querySelector('input[type="radio"], input[type="checkbox"]');
            } else if (target.tagName === 'INPUT' && (target.type === 'radio' || target.type === 'checkbox')) {
                inputElement = target;
            }

            if (inputElement && inputElement.checked && !inputElement.disabled) {
                let optionContext = "upgrade";
                if (inputElement.name === 'SQF_FINISH') optionContext = "finish";
                else if (inputElement.name === 'SQF_FLOORPLAN') optionContext = "floorplan";

                changeImages(inputElement.value, optionContext);
            }
        });
    }
    
    // Price breakdown modal listener
    const priceBreakdownBtn = document.getElementById('priceBreakdownBtn');
    if (priceBreakdownBtn) {
        priceBreakdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!modalInnerContent || !modalOverlay) return;
            const content = generatePriceBreakdownModalContent(type);
            modalInnerContent.innerHTML = content;
            modalOverlay.style.display = 'flex';
        });
    }


    const referralInput = document.getElementById('referral-code-input');
    if (referralInput) {
        referralInput.addEventListener('input', () => {
            const enteredCode = referralInput.value.trim().toUpperCase();
            referralDiscountActive = VALID_REFERRAL_CODES.includes(enteredCode);
            applyReferralDiscountAndRender();
            updateURL();
        });
    }

    if(modalOverlay) modalOverlay.addEventListener('click', (evt) => { if (evt.target === modalOverlay) modalOverlay.style.display = 'none'; });
    document.body.addEventListener('click', function(event){ if(event.target && event.target.id === 'closeModal' && modalOverlay) modalOverlay.style.display = 'none'; });

     const finalContinueBtnRef = document.getElementById('finalContinueBtn');
     if (finalContinueBtnRef) {
         finalContinueBtnRef.addEventListener('click', () => {
             let allValid = true;

             if (!queryArgs['SQF_FINISH']) {
                 showNotification(document.getElementById('step-1'), "Bitte wählen Sie eine Ausbau-Stufe.");
                 allValid = false;
             }

             if (!queryArgs['SQF_FLOORPLAN']) {
                 showNotification(document.getElementById('step-2'), "Bitte wählen Sie einen Grundriss.");
                 allValid = false;
             }

             const upgradeContainer = document.getElementById('step-3');
             if (upgradeContainer) {
                 const visibleRadioUpgradeInputs = upgradeContainer.querySelectorAll('.options-container .radio-group:not([style*="display: none"]) input[type="radio"], .options-container .parquet-checkboxes input[type="radio"]');
                 const uniqueVisibleRadioNames = new Set();

                 visibleRadioUpgradeInputs.forEach(radio => {
                     const parentGroup = radio.closest('.radio-group, .parquet-checkboxes');
                     const sectionWrapper = radio.closest('.parquet-section-wrapper');
                     if ((parentGroup && parentGroup.offsetParent !== null) || (sectionWrapper && sectionWrapper.offsetParent !== null)) {
                         if(!radio.name.includes("SQF_VENTILATION") && !radio.name.includes("SQF_BLINDS")){
                             uniqueVisibleRadioNames.add(radio.name);
                         }
                     }
                 });

                 uniqueVisibleRadioNames.forEach(name => {
                     const isRenderedRadioOrParquet = upgradeRenderConfig.some(cfg => cfg.queryParam === name && (cfg.type === 'radio' || cfg.type === 'parquet'));
                     if (isRenderedRadioOrParquet && !queryArgs[name] && !document.querySelector(`input[name="${name}"]:checked`)) {
                         const problemGroup = document.querySelector(`input[name="${name}"]`).closest('.parquet-section-wrapper, .radio-group');
                         const titleElement = problemGroup ? problemGroup.querySelector('h4') : null;
                         const groupTitle = titleElement ? titleElement.textContent : name.replace('SQF_', '').replace(/_/g, ' ');
                         showNotification(document.getElementById('step-3'), `Bitte treffen Sie eine Auswahl für ${groupTitle}.`);
                         allValid = false;
                     }
                 });
             }

             if (!allValid) {
                 const firstInvalid = document.querySelector('.notification')?.closest('.form-tab');
                 if (firstInvalid) {
                     if (rightContentElement && window.innerWidth > 768) {
                         rightContentElement.scrollTo({ top: firstInvalid.offsetTop - 20, behavior: 'smooth' });
                     } else {
                         window.scrollTo({ top: firstInvalid.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
                     }
                 }
                 return;
             }

             const targetUrlParams = new URLSearchParams();
             const targetOrderedKeys = ['SQF_TYPE', 'SQF_FINISH', 'SQF_FLOORPLAN', 'SQF_PARQUET', 'SQF_FACADE', 'SQF_VENTILATION', 'SQF_BLINDS', 'SQF_PRICE'];
             targetOrderedKeys.forEach(key => {
                 if (queryArgs[key] !== null && queryArgs[key] !== undefined && String(queryArgs[key]).trim() !== "") {
                     targetUrlParams.set(key, queryArgs[key]);
                 }
             });

             for (const key in queryArgs) {
                 if (!targetOrderedKeys.includes(key) && queryArgs[key] !== null && queryArgs[key] !== undefined && String(queryArgs[key]).trim() !== "") {
                     if (key !== 'SQF_REFERRAL_CODE' && key !== 'SQF_REFERRAL_NAME' && key !== 'SQF_REFERRAL_VALID') {
                         targetUrlParams.set(key, queryArgs[key]);
                     }
                 }
             }

             const currentReferralCodeInput = document.getElementById('referral-code-input');
             const currentReferralCodeValue = currentReferralCodeInput ? currentReferralCodeInput.value.trim() : "";

             if (currentReferralCodeValue) {
                 const enteredCodeUpper = currentReferralCodeValue.toUpperCase();
                 if (referralDiscountActive && VALID_REFERRAL_CODES.includes(enteredCodeUpper)) {
                     const capitalizedName = currentReferralCodeValue.charAt(0).toUpperCase() + currentReferralCodeValue.slice(1).toLowerCase();
                     targetUrlParams.set('SQF_REFERRAL_NAME', capitalizedName);
                     targetUrlParams.set('SQF_REFERRAL_VALID', 'yes4');
                 }
             }

             window.location.href = '/design/form/' + (targetUrlParams.toString() ? '?' + targetUrlParams.toString() : '');
         });
     }

const leftImagesPanel = document.querySelector('.config .left-images');
if (leftImagesPanel && rightContentElement && window.innerWidth > 768) {
        leftImagesPanel.addEventListener('wheel', function(event) {
            if (rightContentElement.scrollHeight > rightContentElement.clientHeight) {
                rightContentElement.scrollTop += event.deltaY;
                event.preventDefault();
            }
        }, { passive: false });
}

}

function showNotification(sectionElementOrId, text = "") {
let sectionElement = (typeof sectionElementOrId === 'string') ? document.getElementById(sectionElementOrId) : sectionElementOrId;
if (!sectionElement) return;
removeNotification(sectionElement);
let notification = document.createElement('div');
notification.classList.add('notification');
notification.textContent = text || 'Bitte treffen Sie eine Auswahl.';


const optionsContainer = sectionElement.querySelector('.options-container');
if (optionsContainer) {
    const firstGroup = optionsContainer.querySelector('.radio-group, .parquet-section-wrapper, .checkbox-group, h4, .custom-text-input, .model-select-wrapper');
    if(firstGroup) {
        optionsContainer.insertBefore(notification, firstGroup);
    } else {
        optionsContainer.prepend(notification);
    }
}
else {
    sectionElement.prepend(notification);
}

}

function removeNotification(sectionElementOrId) {
let sectionElement = (typeof sectionElementOrId === 'string') ? document.getElementById(sectionElementOrId) : sectionElementOrId;
if (!sectionElement) return;
const notification = sectionElement.querySelector('.notification');
if (notification) notification.remove();
}

function getUrlParameter(name) {
const params = new URLSearchParams(window.location.search);
return params.get(name) || null;
}

function formatCurrency(amount) {
if (typeof amount === 'string' && isNaN(parseFloat(amount))) return amount;
return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits:0 }).format(amount);
}

function sumCheckedPrices() {
let sum = 0;
const selectedFinishSlug = queryArgs['SQF_FINISH'];
if (selectedFinishSlug && config[type]) {
    const finishData = config[type].options.find(opt => opt.slug === selectedFinishSlug);
    if (finishData && typeof finishData.price === 'number') {
        sum += finishData.price;
    }
}

const upgradeKeys = ['SQF_PARQUET', 'SQF_FACADE', 'SQF_VENTILATION', 'SQF_BLINDS'];
upgradeKeys.forEach(key => {
    const selectedUpgradeSlug = queryArgs[key];
    if (selectedUpgradeSlug) {
        const upgradeData = findUpgradeInCurrentFinish(selectedUpgradeSlug);
        const inputElement = document.querySelector(`.multistep-form input[name="${key}"][value="${selectedUpgradeSlug}"]`);
        if (upgradeData && typeof upgradeData.price === 'number' && upgradeData.price > 0 && inputElement && !inputElement.disabled) {
            sum += upgradeData.price;
        }
    }
});
return sum;

}

function updateURL() {
const params = new URLSearchParams();
const orderedKeys = ['SQF_TYPE', 'SQF_FINISH', 'SQF_FLOORPLAN', 'SQF_PARQUET', 'SQF_FACADE', 'SQF_VENTILATION', 'SQF_BLINDS', 'SQF_PRICE'];
orderedKeys.forEach(key => {
if (queryArgs[key] !== null && queryArgs[key] !== undefined && String(queryArgs[key]).trim() !== "") {
params.set(key, queryArgs[key]); }
});
for (const key in queryArgs) {
    if (!orderedKeys.includes(key) && queryArgs[key] !== null && queryArgs[key] !== undefined && String(queryArgs[key]).trim() !== "") {
        params.set(key, queryArgs[key]); }
}

const referralCodeInputEl = document.getElementById('referral-code-input');
const referralCodeValueFromInput = referralCodeInputEl ? referralCodeInputEl.value.trim() : "";

if (referralDiscountActive && referralCodeValueFromInput && VALID_REFERRAL_CODES.includes(referralCodeValueFromInput.toUpperCase())) {
    params.set('SQF_REFERRAL_CODE', referralCodeValueFromInput.toUpperCase());
} else {
    params.delete('SQF_REFERRAL_CODE');
}

const newSearch = params.toString() ? '?' + params.toString() : '';
if (window.location.search !== newSearch) {
    history.replaceState(null, '', window.location.pathname + newSearch);
}

}

function findUpgrade(slug, finishContextSlug) {
let finishSlugToSearch = finishContextSlug || queryArgs['SQF_FINISH'];
if (!finishSlugToSearch || !config[type] || !config[type].options) return null;
const currentFinishOption = config[type].options.find(opt => opt.slug === finishSlugToSearch);
if (!currentFinishOption || !currentFinishOption.upgrades) return null;

for (let upgradeGroup of currentFinishOption.upgrades) {
    if (Array.isArray(upgradeGroup)) {
        const upgrade = upgradeGroup.find(item => item.slug === slug);
        if (upgrade) return upgrade;
    }
}
return null;

}

function findUpgradeInCurrentFinish(upgradeSlug) {
let currentFinishSlug = queryArgs['SQF_FINISH'] || (config[type] && config[type].options.length > 0 ? config[type].options[0].slug : null);
if (!currentFinishSlug) return null;
const finishData = config[type].options.find(opt => opt.slug === currentFinishSlug);

if (!finishData || !finishData.upgrades) return null;
for (let upgradeGroup of finishData.upgrades) {
    if (Array.isArray(upgradeGroup)) {
        const upgrade = upgradeGroup.find(item => item.slug === upgradeSlug);
        if (upgrade) return upgrade;
    }
}

return null;

}

})();

