export type CitySection = {
  heading: string;
  text: string;
};

export type CityPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  services: string[];
  sections: CitySection[];
  contactLine: string;
  directions: string;
};

export const CITIES: Record<string, CityPage> = {
  // ─── existing 5 cities (meta updated to match brand doc) ─────────────────

  geraardsbergen: {
    slug: "geraardsbergen",
    city: "Geraardsbergen",
    metaTitle: "Nagelstudio Geraardsbergen | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio dicht bij Geraardsbergen? Elite Nails in Sint-Martens-Lierde, op 10 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio in de buurt van Geraardsbergen — Elite Nails Lierde",
    intro: [
      "Ben je op zoek naar een professionele nagelstudio dichtbij Geraardsbergen? Elite Nails bevindt zich in Sint-Martens-Lierde, op amper 10 minuten rijden van Geraardsbergen. Ons cozy studio biedt een volledig gamma aan nagelbehandelingen, met als specialiteit de Russische manicure — een techniek die precisie en hygiëne naar een hoger niveau tilt.",
      "Veel klanten uit Geraardsbergen, Idegem, Moerbeke en de omliggende deelgemeenten kiezen bewust voor Elite Nails. Niet alleen door de korte rijafstand, maar ook omdat de kwaliteit spreekt voor zich. Bij ons sta je centraal: geen haast, geen compromissen op het vlak van veiligheid of afwerking.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "De Russische manicure: dé specialiteit van Elite Nails",
        text: "De Russische manicure is een droge manicuretechniek die geen water gebruikt. Hierdoor hecht de nagellak of gel beter, duurt het resultaat langer, en is de behandeling hygiënischer dan de traditionele manicure. We werken met gecertificeerde uitrusting en letten op elk detail — van de cuticula tot de afwerking van elke nagel.",
      },
      {
        heading: "BIAB: de oplossing voor zwakke nagels",
        text: "Worstelt u met nagels die breken of snel afschilferen? BIAB (Builder In A Bottle) is de ideale behandeling. Deze versterkende gel wordt aangebracht op de natuurlijke nagel en zorgt voor extra stevigheid zonder kunststof toe te voegen. Populair bij klanten uit heel de regio — van Geraardsbergen tot Ninove.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions: "Via de N42 richting Lierde bent u er in een tiental minuten.",
  },

  ninove: {
    slug: "ninove",
    city: "Ninove",
    metaTitle: "Nagelstudio Ninove | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Russian manicure dicht bij Ninove? Elite Nails in Sint-Martens-Lierde, op 15 min. BIAB, gelnagels, wimpers & wenkbrauwen lamineren. Boek nu!",
    h1: "Nagelstudio dicht bij Ninove — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Ninove of omstreken en op zoek naar een nagelstudio die kwaliteit bovenaan stelt? Elite Nails in Sint-Martens-Lierde is op circa 15 minuten van Ninove bereikbaar en staat bekend om haar specialisatie in de Russische manicure. Ons studio verwelkomt dagelijks klanten uit Ninove, Pollare, Appelterre-Eichem en de bredere Ninoofse regio.",
      "Bij Elite Nails werken we in een kleine, persoonlijke setting. U krijgt de tijd en aandacht die uw nagels verdienen. 'Where Precision Meets Beauty' — dat is onze belofte aan elke klant.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure vanuit Ninove: reis even, win veel",
        text: "De Russische manicure is een techniek die uw nagels intens verzorgt zonder gebruik van water. Dit zorgt voor een langdurig resultaat, betere hechting van gel of lak, en een schone, veilige behandeling. Bij Elite Nails wordt elke behandeling uitgevoerd met professioneel gecertificeerd materiaal en extreme aandacht voor detail.",
      },
      {
        heading: "BIAB — builder gel voor nagels die versterking nodig hebben",
        text: "De BIAB-behandeling is ideaal voor wie last heeft van brosse of zwakke nagels. Een speciale gel wordt aangebracht op de natuurlijke nagel en geeft stevigheid van binnenuit. Geen kunstnagels, maar versterkte echte nagels — een populaire keuze bij klanten uit de gehele regio Ninove.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N8 en N42 bereikt u ons in Sint-Martens-Lierde in circa 15 minuten.",
  },

  brakel: {
    slug: "brakel",
    city: "Brakel",
    metaTitle: "Nagelstudio Brakel | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio dicht bij Brakel? Elite Nails in Sint-Martens-Lierde, op 10 min. Russische manicure, BIAB, gelnagels, lash & brow laminatie. Boek nu!",
    h1: "Nagelstudio dicht bij Brakel — Elite Nails Lierde",
    intro: [
      "Ben je op zoek naar een kwalitatieve nagelstudio dicht bij Brakel? Elite Nails in Sint-Martens-Lierde verwelkomt u op amper 10 minuten van Brakel. Ons studio is gespecialiseerd in de Russische manicure — een droge, hygiënische techniek die superieure resultaten levert — en biedt daarnaast een ruim aanbod aan nagelbehandelingen voor klanten uit Brakel, Elst, Zegelsem, Michelbeke en de ruimere regio.",
      "Elite Nails is de enige gespecialiseerde studio voor Russische manicure in de regio Lierde-Brakel. U rijdt minder dan 10 minuten en belandt in een cozy studio waar precisie en comfort hand in hand gaan.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "De Russische manicure: wat maakt het anders?",
        text: "Anders dan de traditionele natte manicure, werkt de Russische manicure volledig droog. Dit heeft aanzienlijke voordelen: de cuticula wordt preciezer bewerkt, de nagellak of gel hecht beter en het resultaat gaat langer mee. Iedere behandeling wordt uitgevoerd met gecertificeerd professioneel materiaal.",
      },
      {
        heading: "Meer dan alleen nagels — lash & brow laminatie",
        text: "Naast nagelbehandelingen biedt Elite Nails ook lash- en brow laminatie aan. Wimpers lamineren geeft uw wimperlijn een gebogen, volle look zonder dagelijkse mascara. Wenkbrauw laminatie zorgt voor een strakke, gedefinieerde boog. Twee behandelingen die steeds populairder worden bij klanten uit de Brakel-regio.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions: "Vlot bereikbaar vanuit Brakel via de N8.",
  },

  ronse: {
    slug: "ronse",
    city: "Ronse",
    metaTitle: "Nagelstudio Ronse | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio bij Ronse? Elite Nails in Sint-Martens-Lierde, op 20 min. Russische manicure, BIAB, gelnagels, lash & brow laminatie. Boek nu!",
    h1: "Nagelstudio in de buurt van Ronse — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Elite Nails in Sint-Martens-Lierde is een gespecialiseerde nagelstudio op circa 20 minuten van Ronse, en dé bestemming voor wie op zoek is naar een Russische manicure in de regio. Onze klanten komen uit Ronse, Kluisbergen, Maarkedal, Horebeke en omliggende gemeenten voor de precisie, hygiëne en persoonlijke aanpak die ons studio kenmerken.",
      "Bij Elite Nails draait alles om precisie en verzorging. We nemen de tijd voor elke klant en werken met gecertificeerd professioneel materiaal. U merkt het verschil al bij de eerste behandeling.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "De Russische manicure in de regio Ronse",
        text: "De Russische manicure is een droge manicuretechniek die intens werkt op de nagel en cuticula. Het gebruik van geen water betekent een betere hechting van gel of lak, een schoner resultaat, en een behandeling die langer meegaat. Het is dé manicure voor wie kwaliteit boven alles stelt — en steeds vaker de keuze van klanten uit de regio Ronse-Kluisbergen.",
      },
      {
        heading: "BIAB voor klanten uit Ronse: sterk en naturel",
        text: "BIAB (Builder In A Bottle) is een versterkende behandeling waarbij een speciale gel op de natuurlijke nagel wordt aangebracht. Ideaal voor wie brosse nagels heeft of beschermde nagels wil zonder het kunstmatige uiterlijk van acryl. BIAB is combineerbaar met kleurgelpolish voor een complete look.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N36 of N60 richting Lierde bent u er in circa 20 minuten.",
  },

  zottegem: {
    slug: "zottegem",
    city: "Zottegem",
    metaTitle: "Nagelstudio Zottegem | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio dicht bij Zottegem? Elite Nails in Sint-Martens-Lierde, op 15 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Zottegem — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Zottegem of een nabijgelegen gemeente en ben je op zoek naar een nagelstudio gespecialiseerd in de Russische manicure? Elite Nails in Sint-Martens-Lierde ligt op slechts 15 minuten rijden van Zottegem en verwelkomt klanten uit Zottegem, Sint-Lievens-Houtem, Herzele, Grotenberge en de ruimere regio.",
      "Elite Nails is een klein, persoonlijk studio waar elke klant de volle aandacht krijgt. We werken zonder haast, met oog voor detail — of het nu gaat om een simpele nagelverzorging of een volledige behandeling met BIAB en lash laminatie.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Waarom klanten uit Zottegem naar Elite Nails komen",
        text: "In de regio Zottegem zijn er weinig studio's die zich toeleggen op de Russische manicure — een droge, nauwkeurige techniek die de nagelverzorging naar een professioneel niveau tilt. De behandeling is hygiënischer, het resultaat duurzamer, en de afwerking merkbaar preciezer dan bij een traditionele manicure.",
      },
      {
        heading: "Een cozy studio met een persoonlijke aanpak",
        text: "Klanten uit de regio Zottegem omschrijven Elite Nails als een plek waar rust en kwaliteit samenkomen. U krijgt de volle aandacht, het materiaal is professioneel gecertificeerd, en het resultaat spreekt voor zich. 'Where Precision Meets Beauty' — we maken het elke keer waar.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Volg de N42 richting Lierde — na 15 minuten staat uw afspraak te wachten.",
  },

  // ─── 9 new city pages ────────────────────────────────────────────────────

  horebeke: {
    slug: "horebeke",
    city: "Horebeke",
    metaTitle: "Nagelstudio Horebeke | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio vlakbij Horebeke? Elite Nails in Sint-Martens-Lierde op 5 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio vlakbij Horebeke — Elite Nails Lierde",
    intro: [
      "Woon je in Horebeke en ben je op zoek naar een professionele nagelstudio? Elite Nails in Sint-Martens-Lierde is letterlijk om de hoek — op slechts 5 minuten rijden. Ons studio is gespecialiseerd in de Russische manicure en biedt een volledig aanbod aan nagelbehandelingen in een rustige, persoonlijke sfeer.",
      "Klanten uit Sint-Maria-Horebeke en Sint-Kornelis-Horebeke zijn bij Elite Nails altijd van harte welkom. De korte afstand en de hoge kwaliteit maken ons de logische keuze voor iedereen uit de buurt van Horebeke die op zoek is naar verzorgde, mooie nagels.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Zo dichtbij — zo'n verschil",
        text: "Vanuit Horebeke hoef je nauwelijks 5 minuten te rijden om de beste Russische manicure van de regio te ervaren. Deze droge techniek werkt nauwkeuriger dan een traditionele manicure: geen water, betere hechting van gel of lak, en een resultaat dat weken mooi blijft. Elite Nails maakt het verschil.",
      },
      {
        heading: "BIAB en wimpers lamineren vlak bij Horebeke",
        text: "Naast de Russische manicure is Elite Nails gespecialiseerd in BIAB — een versterkende gelbehandeling voor de natuurlijke nagel — en wimpers lamineren. Beide behandelingen zijn populair bij klanten uit Horebeke en de omliggende deelgemeenten. Boek eenvoudig via Instagram.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Horebeke rijdt u via de N8 of de N459 — na 5 minuten bent u er.",
  },

  herzele: {
    slug: "herzele",
    city: "Herzele",
    metaTitle: "Nagelstudio Herzele | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio dicht bij Herzele? Elite Nails in Sint-Martens-Lierde, op 12 min. Russische manicure, BIAB, gelnagels, lash & brow laminatie. Boek!",
    h1: "Nagelstudio dicht bij Herzele — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Herzele, Borsbeke, Ressegem of een deelgemeente in de buurt en op zoek naar een professionele nagelstudio? Elite Nails in Sint-Martens-Lierde ligt op circa 12 minuten van Herzele en is gespecialiseerd in de Russische manicure — een droge techniek die zorgt voor langdurige, perfect gehechte nagels.",
      "Ons kleine, persoonlijke studio is een plek waar kwaliteit en rust centraal staan. Klanten uit Herzele rijden graag even voor een behandeling die het verschil maakt. Van BIAB tot lash laminatie — bij Elite Nails vind je alles onder één dak.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure vanuit Herzele: 12 minuten, topkwaliteit",
        text: "De Russische manicure is geen gewone manicure. Zonder gebruik van water werkt de techniek preciezer en levert ze een resultaat dat langer meegaat. De cuticula wordt met elektrische vijlen behandeld, gel of lak hecht beter, en de algehele afwerking is merkbaar verfijnder. Elite Nails brengt deze techniek naar de regio Herzele.",
      },
      {
        heading: "BIAB en brow laminatie voor klanten uit Herzele",
        text: "Worstelt u met brosse nagels of wilt u uw wenkbrauwen in vorm laten brengen? BIAB versterkt de natuurlijke nagel met een dunne gellaag, terwijl brow laminatie uw wenkbrauwen een strakke, volle look geeft die weken meegaat. Twee topbehandelingen, bereikbaar op amper 12 minuten van Herzele.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Herzele neemt u de N42 richting Lierde — na circa 12 minuten rijden bent u er.",
  },

  zwalm: {
    slug: "zwalm",
    city: "Zwalm",
    metaTitle: "Nagelstudio Zwalm | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Zwalm? Elite Nails in Sint-Martens-Lierde, op 12 min. Russische manicure, BIAB, gelnagels, lash & brow laminatie. Boek nu!",
    h1: "Nagelstudio in de buurt van Zwalm — Elite Nails Lierde",
    intro: [
      "Op zoek naar een kwalitatieve nagelstudio dicht bij Zwalm? Elite Nails in Sint-Martens-Lierde verwelkomt klanten uit Zwalm, Munkzwalm, Rozebeke, Nederzwalm en de omliggende deelgemeenten. Ons studio ligt op circa 12 minuten en is gespecialiseerd in de Russische manicure — de droge nagelbehandelingstechniek die steeds populairder wordt in de regio.",
      "Bij Elite Nails kies je voor kwaliteit en persoonlijke aandacht. We werken op afspraak, zonder haast, en met oog voor elk detail. Van de eerste consultatie tot de laatste hand aan je nagels.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure in de buurt van Zwalm",
        text: "De Russische manicure onderscheidt zich door een droge aanpak: geen water, nauwkeurige bewerking van de cuticula, en een perfecte basis voor gel of lak. Het resultaat gaat beduidend langer mee dan bij een traditionele natte manicure. Klanten uit Zwalm rijden graag de 12 minuten naar Elite Nails voor dit verschil.",
      },
      {
        heading: "Gelnagels en wimpers lamineren bij Zwalm",
        text: "Naast de Russische manicure en BIAB biedt Elite Nails ook gelnagels en wimpers lamineren aan. Gelnagels gaan drie tot vier weken mee zonder afbladderen. Wimpers lamineren geeft je wimpers een gebogen, volle look zonder dagelijks mascaragebruik. Boek via Instagram voor beschikbaarheid.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Zwalm rijdt u via de N459 naar Sint-Martens-Lierde — op circa 12 minuten.",
  },

  maarkedal: {
    slug: "maarkedal",
    city: "Maarkedal",
    metaTitle: "Nagelstudio Maarkedal | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Maarkedal? Elite Nails in Sint-Martens-Lierde, op 12 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio dicht bij Maarkedal — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Maarkedal of een nabijgelegen gemeente zoals Schorisse, Nukerke of Etikhove? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en biedt een volledig aanbod aan professionele nagelbehandelingen. Ons studio is gespecialiseerd in de Russische manicure — een techniek die je nagels grondig en hygiënisch verzorgt.",
      "Elite Nails trekt klanten uit Maarkedal en de ruimere Oudenaarde-regio aan dankzij kwaliteit, precisie en een persoonlijke aanpak. Boek je afspraak via Instagram.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Droge manicuretechniek voor klanten uit Maarkedal",
        text: "De Russische manicure gebruikt geen water — dit maakt de behandeling hygiënischer en de resultaten duurzamer. Gel of lak hecht beter op een droog behandelde nagel, en de cuticula wordt met meer precisie bewerkt. Klanten uit Maarkedal en Nukerke merkten dit verschil al bij hun eerste bezoek.",
      },
      {
        heading: "BIAB en lash laminatie vlak bij Maarkedal",
        text: "BIAB is de perfecte keuze voor wie zijn eigen nagels wil versterken zonder kunstnagels. De builder gel biedt stevigheid van binnenuit. Combineer dit met lash laminatie voor een complete beauty-behandeling op slechts 12 minuten van Maarkedal.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Maarkedal rijdt u via de N36 richting Lierde — na circa 12 minuten bent u er.",
  },

  bever: {
    slug: "bever",
    city: "Bever",
    metaTitle: "Nagelstudio Bever | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio bij Bever? Elite Nails in Sint-Martens-Lierde, op 12 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio dicht bij Bever — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Bever of de omgeving en ben je op zoek naar een nagelstudio met echte specialisatie? Elite Nails in Sint-Martens-Lierde ligt op circa 12 minuten van Bever en biedt de Russische manicure — een droge, nauwkeurige techniek die superieure resultaten levert. Onze klanten komen uit de ruime regio, ook vanuit de Vlaamse rand en het Pajottenland.",
      "In ons cozy studio staat kwaliteit centraal. We werken met gecertificeerd professioneel materiaal en nemen de tijd voor elke behandeling. Boek via Instagram voor beschikbaarheid.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure vanuit Bever: precisie op 12 minuten",
        text: "De Russische manicure is een droge techniek waarbij elektrische vijlen de cuticula en het nageloppervlak precies bewerken. Zonder water hecht gel of lak beter en gaat het resultaat langer mee. Voor klanten uit Bever is Elite Nails de dichtstbijzijnde studio die deze techniek professioneel uitvoert.",
      },
      {
        heading: "BIAB en wimpers lamineren voor klanten uit Bever",
        text: "BIAB versterkt de natuurlijke nagel zonder kunstnagels toe te voegen — ideaal voor wie sterke, verzorgde nagels wil. Wimpers lamineren geeft je wimpers een lift die tot acht weken meegaat. Twee behandelingen, één studio — op amper 12 minuten van Bever.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Bever rijdt u via de N28 of via Geraardsbergen en de N42 naar Sint-Martens-Lierde.",
  },

  kluisbergen: {
    slug: "kluisbergen",
    city: "Kluisbergen",
    metaTitle: "Nagelstudio Kluisbergen | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Kluisbergen? Elite Nails in Sint-Martens-Lierde, op 15 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Kluisbergen — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Klanten uit Kluisbergen, Berchem, Ruien en Kerkhove kiezen steeds vaker voor Elite Nails in Sint-Martens-Lierde — op circa 15 minuten. Ons studio is gespecialiseerd in de Russische manicure en staat bekend om zijn persoonlijke aanpak en hoge kwaliteitsstandaard. 'Where Precision Meets Beauty' is geen slogan, het is een belofte.",
      "Of je nu op zoek bent naar de Russische manicure, BIAB, gelnagels of wimpers lamineren — bij Elite Nails vind je alles in één cozy, hygiënisch studio. Boek je afspraak via Instagram.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "De Russische manicure in de regio Kluisbergen",
        text: "De Russische manicure is populair bij klanten die op zoek zijn naar een hygiënische, langdurige nagelbehandeling. De droge techniek zorgt voor een betere hechting van gel of lak, een nauwkeurigere cuticula-behandeling en een resultaat dat weken meegaat. Klanten uit Kluisbergen rijden de 15 minuten graag voor dit niveau van precisie.",
      },
      {
        heading: "BIAB voor sterke nagels, wimpers lamineren voor een open blik",
        text: "BIAB (Builder In A Bottle) is de ideale oplossing voor brosse of zwakke nagels. De gel versterkt de natuurlijke nagel zonder er kunststof aan toe te voegen. Wimpers lamineren zorgt voor een gebogen, volle wimperrand zonder dagelijkse mascara. Beide behandelingen zijn populair bij klanten uit de regio Kluisbergen-Ronse.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N36 vanuit Kluisbergen richting Ronse en verder naar Lierde — circa 15 minuten.",
  },

  galmaarden: {
    slug: "galmaarden",
    city: "Galmaarden",
    metaTitle: "Nagelstudio Galmaarden | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Galmaarden? Elite Nails in Sint-Martens-Lierde, op 15 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio dicht bij Galmaarden — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Galmaarden, Vollezele of Tollembeek en op zoek naar een kwalitatieve nagelstudio? Elite Nails in Sint-Martens-Lierde is op circa 15 minuten bereikbaar via de N255 of via Geraardsbergen. Ons studio is gespecialiseerd in de Russische manicure en verwelkomt klanten uit het Pajottenland en de Vlaamse Ardennen.",
      "Bij Elite Nails staat kwaliteit boven kwantiteit. We nemen de tijd voor elke behandeling en werken met gecertificeerd materiaal. Klanten uit Galmaarden ontdekken hoe groot het verschil is met een gewone nagelstudio.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure: van Galmaarden naar Lierde in 15 minuten",
        text: "De Russische manicure is een droge techniek die de nagels grondig en nauwkeurig behandelt zonder gebruik van water. Het resultaat is een langdurige, perfect gehechte gel- of laklaag en een hygiënisch verzorgde cuticula. Klanten uit Galmaarden en het Pajottenland rijden graag even voor dit verschil in kwaliteit.",
      },
      {
        heading: "Meer behandelingen in één studio",
        text: "Naast de Russische manicure biedt Elite Nails ook BIAB voor versterkende nagelverzorging, gelnagels voor langdurige kleur, en lash laminatie voor een open, volle wimperrand. Combineer meerdere behandelingen in één bezoek — handig voor klanten uit Galmaarden die de rit graag maximaal benutten.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via Geraardsbergen en de N42 richting Lierde, of via de N255 — circa 15 minuten.",
  },

  "wortegem-petegem": {
    slug: "wortegem-petegem",
    city: "Wortegem-Petegem",
    metaTitle: "Nagelstudio Wortegem-Petegem | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Wortegem-Petegem? Elite Nails in Sint-Martens-Lierde, op 17 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Wortegem-Petegem — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Wortegem-Petegem, Elsegem of Moregem en op zoek naar een professionele nagelstudio? Elite Nails in Sint-Martens-Lierde ligt op circa 17 minuten en is gespecialiseerd in de Russische manicure. Onze klanten uit de Oudenaardse regio rijden de kleine omweg graag voor de kwaliteit en persoonlijke aanpak die Elite Nails biedt.",
      "Of je nu kiest voor de Russische manicure, BIAB of gelnagels — bij Elite Nails word je altijd persoonlijk geholpen in een rustige studio. Boek via Instagram voor je volgende behandeling.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure op 17 minuten van Wortegem-Petegem",
        text: "De Russische manicure is een droge, hygiënische techniek die je nagels met precisie behandelt. Door geen water te gebruiken hecht de gel beter en gaat het resultaat langer mee. Elite Nails is de dichtstbijzijnde gespecialiseerde studio voor klanten uit Wortegem-Petegem en de Leie-regio.",
      },
      {
        heading: "BIAB en gelnagels voor klanten uit Wortegem-Petegem",
        text: "BIAB versterkt de natuurlijke nagel met een dunne maar krachtige gellaag — ideaal voor wie brosse nagels heeft. Gelnagels gaan drie tot vier weken mee zonder afbladderen. Beide behandelingen worden uitgevoerd met gecertificeerd materiaal en de volle aandacht die uw nagels verdienen.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N60 richting Oudenaarde en verder naar Lierde — circa 17 minuten rijden.",
  },

  oudenaarde: {
    slug: "oudenaarde",
    city: "Oudenaarde",
    metaTitle: "Nagelstudio Oudenaarde | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Oudenaarde? Elite Nails in Sint-Martens-Lierde, op 18 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Oudenaarde — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Op zoek naar een nagelstudio in de buurt van Oudenaarde die gespecialiseerd is in de Russische manicure? Elite Nails in Sint-Martens-Lierde ligt op circa 18 minuten van Oudenaarde en trekt klanten aan uit Oudenaarde, Bevere, Eine, Mater en de bredere regio. Ons studio staat bekend om precisie, hygiëne en een persoonlijke aanpak.",
      "Oudenaarde heeft een rijke traditie in vakmanschap — en dat past perfect bij de filosofie van Elite Nails. Bij ons staat elk detail centraal, van de behandeling van de cuticula tot de afwerking van de laatste nagel. Boek je afspraak via Instagram.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "De Russische manicure voor klanten uit Oudenaarde",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die bekendstaat om haar precisie en hygiëne. Zonder gebruik van water wordt de cuticula nauwkeurig behandeld en hecht gel of lak aanzienlijk beter. Klanten uit Oudenaarde rijden de 18 minuten naar Elite Nails voor een resultaat dat weken meegaat.",
      },
      {
        heading: "BIAB en lash laminatie vlak bij Oudenaarde",
        text: "Elite Nails biedt een volledig gamma aan beautybehandelingen: van BIAB voor versterkende nagelverzorging tot lash laminatie voor een dramatische wimperrand. Alles in één cozy studio, op amper 18 minuten van Oudenaarde. Combineer behandelingen voor maximaal gemak.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N60 of N453 vanuit Oudenaarde richting Lierde — circa 18 minuten rijden.",
  },

  "sint-lievens-houtem": {
    slug: "sint-lievens-houtem",
    city: "Sint-Lievens-Houtem",
    metaTitle: "Nagelstudio Sint-Lievens-Houtem | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Sint-Lievens-Houtem? Elite Nails op 18 min in Sint-Martens-Lierde. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Sint-Lievens-Houtem — Elite Nails Lierde",
    intro: [
      "Klanten uit Sint-Lievens-Houtem, Vlierzele, Bavegem en de omgeving rijden regelmatig naar Elite Nails in Sint-Martens-Lierde — op circa 18 minuten via de N42. Ons studio is gespecialiseerd in de Russische manicure en biedt een volledig aanbod aan nagelbehandelingen en beautyservices in een rustige, persoonlijke sfeer.",
      "Bij Elite Nails staat de klant altijd centraal. We werken op afspraak, zonder haast, en met oog voor elk detail. Van BIAB tot wimpers lamineren — alles in één studio.",
    ],
    services: [
      "Russische manicure",
      "BIAB (Builder In A Bottle) — versterkende gel op de natuurlijke nagel",
      "Gelnagels",
      "Pedicure",
      "Wimpers lamineren",
      "Wenkbrauwen lamineren",
    ],
    sections: [
      {
        heading: "Russische manicure vanuit Sint-Lievens-Houtem",
        text: "De Russische manicure onderscheidt zich van andere nagelbehandelingen door zijn droge aanpak en nauwkeurige resultaten. De cuticula wordt precies behandeld, gel of lak hecht beter, en het resultaat gaat significant langer mee. Klanten uit Sint-Lievens-Houtem zijn al snel overtuigd na hun eerste bezoek aan Elite Nails.",
      },
      {
        heading: "BIAB en gelnagels op 18 minuten van Sint-Lievens-Houtem",
        text: "BIAB is de ideale behandeling voor wie de eigen nagels wil versterken zonder kunstnagels. Gelnagels bieden langdurige, glanzende kleur tot drie à vier weken. Beide behandelingen worden vakkundig uitgevoerd bij Elite Nails in Sint-Martens-Lierde, vlot bereikbaar vanuit Sint-Lievens-Houtem via de N42.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Sint-Lievens-Houtem richting Zottegem en verder naar Lierde — circa 18 minuten.",
  },
};
