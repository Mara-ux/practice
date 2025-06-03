import card_1 from "./images/cards/def.png"
import card_2 from "./images/cards/image.png"
import card_3 from "./images/cards/image-1.png"
import card_4 from "./images/cards/image-2.png"
import card_5 from "./images/cards/image-3.png"
import card_6 from "./images/cards/image-4.png"
import card_7 from "./images/cards/image-5.png"
import card_8 from "./images/cards/image-6.png"
import card_9 from "./images/cards/image-7.png"
import card_10 from "./images/cards/image-8.png"
import card_11 from "./images/cards/image-9.png"
import card_12 from "./images/cards/image-10.png"

const cardInfo = [
    {
        img: card_1,
        id: "c1",
        tag: "m",
        extraTags: ["preorder", "hit"],
        name: "DESIRE : UNLEASH",
        version: "STANDART",
        inerVersions: ["MAKE", "YOU", "MINE"],
        group: "ENHYPEN",
        price: "От 1 900 р",
        contents: "фотобук: make ver. (80 стр), you, mine ver (72 стр.), CD, сет марок + конверт, сложенный плакат, стикер, сет мини-фото (7 шт.), фотокарточка А (1 из 7 возможных), фотокарточка В (1 из 7 возможных)",
        gifts: {
            album: "Рандом карта (1 из 7)",
            set: "Рандом карта (2 из 7)"
        }
    },
    {
        img: card_2,
        id: "c2",
        tag: "m",
        extraTags: ["hit"],
        name: "BUTTER",
        version: "",
        inerVersions: ["CREAM", "PEACHES"],
        group: "BTS",
        price: "От 2 250 р",
        contents: "Коробка, CD-диск, Фотобук 108с, Карта с лирикой, Полароид, Фотостенд, Месседж карта, Фотокарта (1 из 8)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_3,
        id: "c3",
        tag: "m",
        extraTags: ["hit"],
        name: "THE WORLD EP.FIN: WILL",
        version: "STANDART",
        inerVersions: ["A", "DIARY", "Z"],
        group: "ATEEZ",
        price: "От 2 400 р",
        contents: "CD, фотобук (112 страниц), стикер альбома, конверт, стикер мембера (1 из 8 возможных), открытка (1 из 9 возможных), фотокарточка А (1 из 8 возможных), фотокарточка Z (1 из 8 возможных)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_4,
        id: "c4",
        tag: "m",
        extraTags: ["sale", "hit"],
        name: "SKZHOP HIPTAPE '合 (HOP)'",
        version: "HIPTAPE",
        inerVersions: ["", "", ""],
        group: "STRAY KIDS",
        price: "2 300 р",
        contents: "CD, фотобук (60 стр.), фотокарточка (1 из 8 возможных), юнитная фотокарточка (1 из 4 возможных), лист наклеек, мини плакат",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_5,
        id: "c5",
        tag: "m",
        extraTags: ["preorder"],
        name: "DESIRE : UNLEASH",
        version: "ENGENE",
        inerVersions: ["RANDOM"],
        group: "ENHYPEN",
        price: "От 1 350 р",
        contents: "внешний конверт, CD (1 из 7 возможных), CD - кейс, буклет (1 из 7 возможных), сложенный гейм-плакат, набор стикеров (2 шт.), плакат (1 из 7 возможных), карта с персонажем (1 из 7 возможных), фотокарточка А (1 из 7 возможных), фотокарточка В (1 из 7 возможных)",
        gifts: {
            album: "Карта А (1 из 7 возможных), Карта Б (1 из 7 возможных)",
            set: "Сет А карт, Сет Б карт"
        }
    },
    {
        img: card_6,
        id: "c6",
        tag: "m",
        extraTags: ["preorder"],
        name: "DESIRE : UNLEASH",
        version: "Weverse",
        inerVersions: [""],
        group: "ENHYPEN",
        price: "900 р",
        contents: "Конверт, QR карта, билет, Карта А (1 из 7), Карта Б (1 из 7), сет карт С",
        gifts: {
            album: "Холдер",
            set: ""
        }
    },
    {
        img: card_7,
        id: "c7",
        tag: "f",
        extraTags: ["preorder"],
        name: "BEEP",
        version: "(QR Album Ver.)",
        inerVersions: [""],
        group: "IZNA",
        price: "3 500 р",
        contents: "Аутбокс, QR-карта, Голосовая QR-карта, Набор концепт-фотокарт 6 шт, Фотокарты 2 из 12 (рандом), Руководство пользователя, Сумка-шоппер (BEEP TOTE BAG), Расчёска (BEEP HAIR BRUSH), Брелок в форме сердца (HEART KEYRING)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_8,
        id: "c8",
        tag: "m",
        extraTags: ["sale"],
        name: "SKZHOP HIPTAPE '合 (HOP)'",
        version: "SKZHOP",
        inerVersions: [""],
        group: "STRAY KIDS",
        price: "2 500 р",
        contents: "CD, фотобук (60 стр.), фотокарточка (1 из 8 возможных), юнитная фотокарточка (1 из 4 возможных), лист наклеек, мини плака",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_9,
        id: "c9",
        tag: "f",
        extraTags: ["sale"],
        name: "BETWEEN 1&2",
        version: "STANDART",
        inerVersions: ["Random"],
        group: "TWICE",
        price: "2 550 р",
        contents: "Фотобук, CD, коробка, полароид (1 из 9), кроссворд-открытка (1 из 9), фильм-фото-стикер (1 из 9), открытка с посланием (1 из 9), зеркало, сложенный постер (1 из 9), карта (5 из 45)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_10,
        id: "c10",
        tag: "s",
        extraTags: ["sale"],
        name: "Jack In The Box",
        version: "Weverse",
        inerVersions: [""],
        group: "j-hope",
        price: "1 000 р",
        contents: "Картхолдер (1 случайный из 2), Фотокарта A, Фотокарта B (1 из 2 возможных), QR-карта (для прослушивания альбома в приложении)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_11,
        id: "c11",
        tag: "mr",
        extraTags: [""],
        name: "P1ece MEMBERSHIP KIT",
        version: "",
        inerVersions: ["С членством", "Без членства"],
        group: "P1Harmony",
        price: "3 500 р",
        contents: "Фотобук 105стр, стенд, сет карт (24шт), биндер для карт, стикеры, брелок + сет карт (6 шт)",
        gifts: {
            album: "",
            set: ""
        }
    },
    {
        img: card_12,
        id: "c12",
        tag: "mr",
        extraTags: [""],
        name: "Dreamiez plush",
        version: "with Line Friends",
        inerVersions: ["Ын", "Джун", "Джед", "Джопу", "Кюипин", "Лимю", "Бамджи"],
        group: "NCT DREAM",
        price: "2 100 р",
        contents: "Плюшевая игрушка, селфи-карта, айди",
        gifts: {
            album: "",
            set: ""
        }
    }
];

export default cardInfo;