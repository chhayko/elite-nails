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
  geraardsbergen: {
    slug: "geraardsbergen",
    city: "Geraardsbergen",
    metaTitle:
      "Nagelstudio Geraardsbergen | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio dicht bij Geraardsbergen? Elite Nails in Sint-Martens-Lierde ligt op slechts 10 minuten. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
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
    metaTitle:
      "Nagelstudio Ninove | Russian Manicure & BIAB | Elite Nails Lierde",
    metaDescription:
      "Russian manicure dicht bij Ninove? Elite Nails in Sint-Martens-Lierde ligt op 15 min. BIAB, gelnagels, wimpers & wenkbrauwen lamineren. Boek uw afspraak!",
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
    metaTitle:
      "Nagelstudio Brakel | Russian Manicure & Gelnagels | Elite Nails",
    metaDescription:
      "Zoek je een nagelstudio dicht bij Brakel? Elite Nails ligt op 10 min in Sint-Martens-Lierde. Russische manicure, BIAB, gelnagels, lash & brow laminatie. Boek nu!",
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
    metaTitle:
      "Nagelstudio Ronse | Russian Manicure & BIAB | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Ronse met Russian manicure? Elite Nails in Sint-Martens-Lierde, op 20 min van Ronse. BIAB, gelnagels, lash laminatie, brow laminatie. Boek nu!",
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
    metaTitle:
      "Nagelstudio Zottegem | Russian Manicure & Gelnagels | Elite Nails",
    metaDescription:
      "Kwalitatieve nagelstudio dicht bij Zottegem? Elite Nails in Sint-Martens-Lierde, op 15 min. Russische manicure, BIAB, gelnagels, brow & lash laminatie. Boek nu!",
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
        heading:
          "Waarom klanten uit Zottegem naar Elite Nails komen",
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
};
