// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Tlustice - Portulacaria Afra 418 2. jakost",
    category: "Bonsai group 1",
    price: 55,
    description:
      "Tlustice se řadí mezi sukulentní bonsaje, čili se pěstuje stejně jako jiné sukulenty a kaktusy - téměř žádná zálivka. Výška bonsaje 35 cm, stáří bonsaje 7 let. Rostlina shodila lístečky a bude obrůstat, jako sukulent jí to chvíli trvá.",
    popular: true,
    imageUrls: [
      "./images/podocarpus-kamenny-tis-324_730_8065.jpg",
      "./images/podocarpus-kamenny-tis-324_730_8065.jpg"
    ]
  },
  {
    id: 2,
    name: "Metasequoia - sekvoj 499 - venkovní bonsaje",
    category: "Bonsai group 2", 
    price: 101,
    description:
      "Sekvojec, známý strom, který není zcela běžně k dostání, proto je svým způsobem raritní. Sekvoj je o výšce bonsaje 30 cm a stáří stromu 3 let.",
    popular: false,
    imageUrls: [
      "./images/sequoi 479.jpg",
      "./images/sequoi 479.jpg"
    ]
  },
  {
    id: 3,
    name: "Punica grantum - granátovník 362",
    category: "Bonsai group 3",
    price: 200,

    popular: false,
    imageUrls: [
      "./images/punica-grantum-granatovnik-362_1396_8103.jpg",
      "./images/punica-grantum-granatovnik-362_1396_8103.jpg"
    ]
  },
  {
    id: 4,
    name: "Podocarpus - Kamenný tis 324",
    category: "Bonsai group 2",
    price: 102,
    description:
      "Téměř jediná jehličnatá pokojová bonsai, která samozřejmě může být i mezi venkovníma bonsajema. Výška bonsai 37 cm a stáří bonsaje 9 let.",

    popular: true,
    imageUrls: [
      "./images/podocarpus-kamenny-tis-324_730_8065.jpg"
    ]
  },
  {
    id: 5,
    name: "Podocarpus - Kamenný tis 326",
    category: "Bonsai group 2",
    price: 102,
    description:
      "Téměř jediná jehličnatá pokojová bonsai, která samozřejmě může být i mezi venkovníma bonsajema. Výška bonsaje 39 cm a stáří bonsaje 9 let.",

    popular: true,
    imageUrls: [
      "./images/podocarpus-kamenny-tis-327_726_8067.jpg",
      "./images/podocarpus-kamenny-tis-327_726_8067.jpg"
    ]
  },

  {
    id: 7,
    name: "Pinus halepensis 989 - venkovní bonsaje",
    category: "Bonsai group 2",
    price: 200,
    description: "Pinus halepensis neboli Borovice je krásná bonsai, která by neměla chybět v žádné zahradě. Výška bonsaje 37 cm. Stáří bonsaje 10 let.",
    popular: false,
    imageUrls: [
      "./images/pinus-halepensis-989-venkovni-bonsaje_1340_7808.jpg"
    ]
  },
  {
    id: 8,
    name: "Punica grantum - granátovník 363",
    category: "Bonsai group 3",
    price: 55,
    description: "Granátové jablíčko je jedna z těch nejvzácnějších bonsají, která krásně kvete, plodí granátové jablka. Výška bonsaje 25 cm a stáří bonsaje 7 let.",
    popular: false,
    imageUrls: [
      "./images/punica-grantum-granatovnik-363_1395_8104.jpg",
      "./images/punica-grantum-granatovnik-363_1395_8104.jpg"
    ]
  },
  {
    id: 9,
    name: "Pyracantha 340 - venkovní bonsaje",
    category: "Bonsai group 1",
    price: 55,
    description: "Venkovní bonsaj, která má malé hezké pevné lístečky. Obvykle velmi hezky tvarovaná. Výška bonsai je 40 cm a stáří 12 let.",
    popular: false,
    imageUrls: [
      "./images/pyracantha-340-venkovni-bonsaje_1046_8080.jpg"
    ]
  },
  {
    id: 10,
    name: "Podocarpus - Kamenný tis 336",
    category: "Bonsai group 3",
    price: 120,
    description: "Téměř jediná jehličnatá pokojová bonsai, která samozřejmě může být i mezi venkovníma bonsajema. Výška bonsai 29 cm a stáří bonsaje 7 let.",

    popular: false,
    imageUrls: [
      "./images/podocarpus-kamenny-tis-336_677_8076.jpg"
    ]
  },
  {
    id: 11,
    name: "Pinus halepensis 377 - venkovní bonsaje",
    category: "Bonsai group 3",
    price: 220,
    description:
      "Pinus halepensis neboli Borovice je krásná bonsai, která by neměla chybět v žádné zahradě. Výška bonsaje 33 cm. Stáří bonsaje 8 let.",
    popular: false,
    imageUrls: [
      "./images/pinus-halepensis-377-venkovni-bonsaje_1339_8118.jpg"
    ]
  },
  {
    id: 12,
    name: "Bambus střední keř",
    category: "Bonsai group 1",
    price: 130,
    description:
      "Bambus o výšce cca 75 cm. Vhodný do všech zahrad nejen japonských, k zahradním jezírkům apod. Bambus je mrazuvzdorný, čili bez problémů přezimuje u nás venku. Květináč šířka 23 cm.",

    popular: false,
    imageUrls: [
      "./images/bambus-stredni-ker_1093_1814.jpg",
      "./images/bambus-stredni-ker_1093_1814.jpg"
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "Všechny kategorie",
    icon: "list"
  },
  {
    name: "Bonsai group 1",
    icon: "group"
  },
  {
    name: "Bonsai group 2",
    icon: "watch"
  },
  {
    name: "Bonsai group 3",
    icon: "menu_book"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Domů", url: "/", icon: "home", id: 0 },
  {
    name: "Všechny kategorie",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
