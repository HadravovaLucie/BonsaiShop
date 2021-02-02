// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Pinus thunbergii - Borovice thunbergova",
    category: "Bonsai group 1",
    price: 4800,
    description:
      "Černé borovice mohou dosáhnout výšky 40 m, ale zřídka dosahuje této velikosti mimo svůj přirozený areál. Jehly jsou ve dvou svazcích s bílým pouzdrem na základně, dlouhé 7–12 cm; ženské šišky jsou 4–7 cm dlouhé, šupinaté, s malými hroty na špičkách šupin, zrání trvá dva roky. Samčí šišky jsou 1–2 cm dlouhé, nesené ve shlucích 12–20 na špičkách jarního růstu. Kůra je šedá na mladých stromech a malých větvích, mění se na černou a pokovenou na větších větvích a kmeni; na starších kmenech docela zesláblo.",
    popular: true,
    imageUrls: [
      "./images/Pinus thunbergii - Borovice thunbergova.jpeg"  
    ]
  },
  {
    id: 2,
    name: "Pinus parviflora - Borovice drobnokvětá",
    category: "Bonsai group 2", 
    price: 3200,
    description:
      "Venkovní bonsai. Menší, 10-15(20)m vysoký strom. Koruna široce kuželovitá, s borkou dlouho hladkou, černošedou, později šupinatou. Větve široce rozložené, letorosty zelenohnědé, krátce chlupaté. Pupeny malé (5 mm), vejčité, zúžené, hnědožluté. Jehlice po 5, na konci větví chvostovitě nahloučené, 3-8 cm dlouhé, s bílými řadami průduchů, tenké a zakřivené. V našich podmínkách pouze 1 – 3 ročníky jehlic na větvích. Brzy plodí, šišky jednotlivě i ve skupinách, vodorovně odstávající a přisedlé, protáhlé, 5-10 x 3-4 cm. Plodní šupiny silné, kožovitě dřevnaté, červenohnědé, se štítky popelavými, kosočtverečnými a dovnitř ohnutým pupkem. Semena vejčitě elipsoidní, s tenkým (zakrnělým – viz taxonomie) křídlem.",
    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai - Pinus parviflora - Borovice drobnokvětá.jpeg"
    ]
  },
  {
    id: 3,
    name: "Ulmus Glabra-Jílm tuhý",
    category: "Bonsai group 3",
    price: 7800,
    description:
    "Ulmus glabra, česky jilm horský, je strom rozšířený v Evropě a západní Asii. Řadí se do čeledi Ulmaceae – jilmovité. U nás roste velmi vzácně v nížinách. Druh 'Fastigiata' je středně velký strom dorůstající do výšky 20 metrů. Má dekorativní tvar se zploštělou korunou a převislými větvemi. Listy má velké, obvejčité, tuhé a tmavě zelené, na podzim opadávají. Kvete v březnu ještě před rozvinutím listů květy seskupenými v hustých svazečcích.Výhody jilmu horského: Krásny solitérní strom. Snáší teploty do -25°C. Nenáročný na pěstování. Jilm horský má rád slunná místa nebo světlý polostín chráněný před silnými větry.",
    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai-Ulmus Glabra-Jílm tuhý.jpeg"
    ]
  },
  {
    id: 4,
    name: "Pseudolarix amabilis - Pamodřín",
    category: "Bonsai group 2",
    price: 4800,
    description:
      "Jsou to opadavé stromy vysoké až 40 m a jejich rovný, štíhlý kmen mívá výčetní tloušťku okolo 150 cm. Drsná, šupinatá šedohnědá kůra se u starších jedinců odlupuje. Kónická nebo kupolovitá otevřená koruna je široce klenutá a často nepravidelná. Větvičky jsou dvoutvaré. Dlouhé větvičky rostou až 2 roky a mají paprskovitě odstávající jehlice seřazené do spirál, krátké se vyvíjejí s axiálních pupenů na dlouhých větvičkách a jehlice na jejich koncích jsou uspořádané ve zdánlivých přeslenech po 10 až 30. Většina krátkých větviček nedorůstá do délky větší než 3,5 cm. Zploštělé, mírně zakřivené ohebné jehlice jsou zelené, před opadem získají zlatožlutou barvu. Tvar mají úzce čárkovitý, obkopinatý, dlouhé bývají 2,5 až 5,5 cm a široké 2 až 4 mm. Jsou rozděleny středním žebrem (cévním svazkem), po okrajích mají většinou 2 nebo 3 pryskyřičné kanálky. ",

    popular: true,
    imageUrls: [
      "./images/Venkovní bonsai - Pseudolarix amabilis - Pamodřín.jpeg"
    ]
  },
  {
    id: 5,
    name: "Pokojová bonsai -Eleagnus - Hlošina",
    category: "Bonsai group 2",
    price: 3800,
    description:
      "Hlošiny jsou opadavé nebo stálezelené stromy, keře nebo výjimečně i dřevnaté liány s jednoduchými střídavými listy. Charakteristické je pro ně stříbřité až hnědavé odění z hvězdovitých až štítnatých chlupů. Některé druhy mají trny vzniklé přeměnou zkrácených větévek. Listy jsou jednoduché a většinou celokrajné, řapíkaté. Květy jsou pravidelné, oboupohlavné, jednotlivé nebo častěji nahloučené na zkrácených větévkách, často vonné. Kalich je srostlý, trubkovitý, čtyřčetný (výjimečně více, až osmičetný), zakončený rozestálými cípy. Kalich bývá z vnitřní strany barevný (bílý, smetanový nebo žlutý) a nahrazuje chybějící korunu. Tyčinky jsou 4, jsou připojeny v ústí kališní trubky a střídají se s kališními cípy. Semeník je svrchní, s jedním pouzdrem obsahujícím jediné vajíčko. Čnělka je čárkovitá a nevyčnívá z květu. Plod je kulovitá až oválná pseudopeckovice obklopená zdužnatělou kališní trubkou.",

    popular: true,
    imageUrls: [
      "./images/Pokojová bonsai -Eleagnus - Hlošina.jpeg"
    ]
  },

  {
    id: 7,
    name: "Venkovní bonsai - Pseudolarix amabilis - Pamodřín - lesík 5 stromů",
    category: "Bonsai group 2",
    price: 3800,
    description: "Jsou to opadavé stromy vysoké až 40 m a jejich rovný, štíhlý kmen mívá výčetní tloušťku okolo 150 cm. Drsná, šupinatá šedohnědá kůra se u starších jedinců odlupuje. Kónická nebo kupolovitá otevřená koruna je široce klenutá a často nepravidelná. Větvičky jsou dvoutvaré. Dlouhé větvičky rostou až 2 roky a mají paprskovitě odstávající jehlice seřazené do spirál, krátké se vyvíjejí s axiálních pupenů na dlouhých větvičkách a jehlice na jejich koncích jsou uspořádané ve zdánlivých přeslenech po 10 až 30. Většina krátkých větviček nedorůstá do délky větší než 3,5 cm. Zploštělé, mírně zakřivené ohebné jehlice jsou zelené, před opadem získají zlatožlutou barvu. Tvar mají úzce čárkovitý, obkopinatý, dlouhé bývají 2,5 až 5,5 cm a široké 2 až 4 mm. Jsou rozděleny středním žebrem (cévním svazkem), po okrajích mají většinou 2 nebo 3 pryskyřičné kanálky. ",
    popular: true,
    imageUrls: [
      "./images/Venkovní bonsai - Pseudolarix amabilis - Pamodřín - lesík 5 stromů.jpeg"
    ]
  },
  {
    id: 8,
    name: "Venkovní bonsai - Lípa srdčitá - Tilia cordata",
    category: "Bonsai group 3",
    price: 12800,
    description: "Dřevina pochází z čeledi Tiliaceae – lípovité a rodu Tilia. Lípa srdčitá je vysoký strom, který dorůstá do výšky až 25m. Vytváří hustě větvenou vejčitou až kulovitou korunu. Listy jsou srdčité, tmavě zelené. Na podzim se barví do žlutohněda. V červnu rozkvétají světle žlutá, vonná květenství. Preferuje vlhčí, dobře propustné, humózní půdy. Stanoviště může být slunné i polostinné. Vysazuje se do parků, stromořadí nebo jako solitéra do velkých zahrad. Je velmi mrazuodolná, ale citlivá na posypové soli.",
    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai - Lípa srdčitá - Tilia cordata.jpeg"
    ]
  },
  {
    id: 9,
    name: "Venkovní bonsai - Taxus bacata - Tis červený",
    category: "Bonsai group 1",
    price: 3200,
    description: "Tis červený je dvoudomá stálezelená jehličnatá dřevina z čeledi tisovitých. Je stínomilná, velmi pomalu rostoucí, vyskytuje se ve formě keře či relativně nízkého stromu. Jde o silně ohrožený třetihorní relikt, ve většině zemí náleží mezi přísně chráněné druhy. Má nádherné husté dřevo, jedno z nejtěžších u českých domácích dřevin, s širokým červenohnědým jádrem a úzkou světlejší bělí. Náleží mezi nejcennější dřeva na severní polokouli, ve středověku sloužilo mimo jiné k výrobě slavných velšských luků. Až na červený dužnatý nepravý míšek (epimatium) je celá rostlina prudce jedovatá.",
    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai - Taxus bacata - Tis červený.jpeg"
    ]
  },
  {
    id: 10,
    name: "Venkovní bonsai - Pinus Mugo - Borovice kleč",
    category: "Bonsai group 3",
    price: 3200,
    description: "Borovice kleč (Pinus mugo), kosodřevina, je jehličnatý strom klečovitého, řidčeji křovitého vzrůstu, bez hlavního kořene. Dorůstá do výšky 1–2 metry a vyskytuje se převážně v horských oblastech nad horní hranicí lesa, popř. v nižších polohách na rašeliništích či vrchovištích. ",

    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai - Pinus Mugo - Borovice kleč.jpeg"
    ]
  },
  {
    id: 11,
    name: "Pokojová bonsai - Olea europaea sylvestris -Oliva evropská drobnolistá",
    category: "Bonsai group 3",
    price: 3800,
    description:
      "",
    popular: false,
    imageUrls: [
      "./images/Pokojová bonsai - Olea europaea sylvestris -Oliva evropská drobnolistá .jpeg"
    ]
  },
  {
    id: 12,
    name: "Venkovní bonsai - Olše lepkavá - Alnus glutinosa",
    category: "Bonsai group 1",
    price: 5900,
    description:
      "Koruna je vejčitě podlouhlá, u starších jedinců až jehlanovitá; ve tvorbě koruny varíruje. Plnodřevnatý kmen, dřevo sytě žlutočervené s tmavými zónami, měkké, jemně pórovité, s četnými dřeňovými paprsky. Trvanlivost dřeva pod vodou je téměř neomezená. Borka v mládí hladká, šedavá, ve stáří černohnědá, rozpraskaná na přibližně čtvercové destičky. Letorosty zelené nebo světle purpurové, s nápadnými oranžově červenými lenticelami. Má velmi přizpůsobivý srdčitý kořenový systém, ale též s 1–2 m hlubokým kořenem kůlovým. Prostřednictvím kořenových hlízek s nitrogenními bakteriemi obohacuje půdu vázaným dusíkem. U olše se neprojevuje kořenová výmladnost, zato výmladnost pařezová je velmi silná. V prvním roce rostou olše velmi pomalu, v následujících letech rychle. Dospělosti dosahuje v zápoji ve 40 letech, jako solitér ve 12–20 letech.",

    popular: false,
    imageUrls: [
      "./images/Venkovní bonsai - Olše lepkavá - Alnus glutinosa.jpeg"
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
