export type CitySection = {
  heading: string;
  text: string;
};

export type CityFaq = {
  question: string;
  answer: string;
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
  faq?: CityFaq[];
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
        heading: "BIAB: de oplossing voor brosse nagels",
        text: "Heb je last van nagels die breken of snel afschilferen? BIAB (Builder In A Bottle) is de ideale behandeling. Deze versterkende gel wordt aangebracht op de natuurlijke nagel en zorgt voor extra stevigheid zonder kunststof toe te voegen. Populair bij klanten uit Geraardsbergen, Idegem, Moerbeke en de ruimere regio.",
      },
      {
        heading: "Gelnagels in Geraardsbergen",
        text: "Op zoek naar gelnagels in Geraardsbergen? Elite Nails in Sint-Martens-Lierde ligt op amper 10 minuten rijden van het centrum — een vlotte rit via de N42. Bij ons combineren we gelnagels met de Russische manicure-techniek: een droge werkwijze waarbij de nagelriem precies wordt teruggewerkt zonder vocht, zodat de gel direct op de nagelplaat hecht. Dat zorgt voor minder lifting, een strakker resultaat en een houdbaarheid van drie tot vijf weken. We werken uitsluitend met professionele gelproducten en bieden een breed kleurenpalet — van klassieke nudes tot felle accenten en nail art op maat. Klanten die op zoek zijn naar gelnagels geraardsbergen weten steeds vaker de weg naar Elite Nails te vinden. Kwaliteit en hygiëne staan bij ons op de eerste plaats. Bij twijfel over welke behandeling het best past, adviseren we je graag vrijblijvend.",
      },
      {
        heading: "BIAB Nagels in Geraardsbergen",
        text: "BIAB geraardsbergen — Builder In A Bottle is de behandeling voor wie niet alleen mooie maar ook gezonde nagels wil. BIAB is een versterkende opbouwgel die flexibel hecht op de eigen nagelplaat en haar de kracht geeft om te groeien zonder te breken. Anders dan acryl of harde gel beschadigt BIAB de nagel niet — integendeel, elke behandeling maakt de nagels sterker. Bij Elite Nails combineren we BIAB met de Russische manicure-voorbehandeling voor maximale hechting en een verzorgde nagelriem. Klanten die rijden vanuit Geraardsbergen zijn er in 10 minuten — en ze komen keer op keer terug. Want eens je het verschil hebt gevoeld, nagels die écht sterker worden bij elke beurt, is er geen weg terug. Biab geraardsbergen is voor velen inmiddels de vanzelfsprekende keuze. Onze nagelstyliste begeleidt je graag bij je eerste BIAB-ervaring.",
      },
    ],
    faq: [
      {
        question: "Is Elite Nails gemakkelijk bereikbaar vanuit Geraardsbergen?",
        answer:
          "Absoluut. Ons studio in Sint-Martens-Lierde ligt op slechts 10 minuten rijden van Geraardsbergen via de N42. Er is gratis parkeerruimte vlak bij de studio. Veel klanten uit Geraardsbergen, Idegem en Moerbeke rijden ons graag even voorbij — voor een behandeling die de moeite meer dan waard is.",
      },
      {
        question: "Wat is het verschil tussen BIAB en gelnagels?",
        answer:
          "Gelnagels geven kleur en glans, maar versterken de eigen nagel niet structureel. BIAB (Builder In A Bottle) is een opbouwgel die de nagelplaat actief versterkt terwijl je hem draagt. BIAB is ideaal als je brosse nagels hebt of je eigen nagels wilt laten groeien. Gewone gelnagels zijn perfect als je nagels al stevig zijn en je primair een mooie, langdurige kleur wilt.",
      },
      {
        question: "Hoe lang duurt een behandeling bij Elite Nails?",
        answer:
          "Een Russische manicure duurt gemiddeld 60 tot 90 minuten, afhankelijk van de toestand van de nagelriemen en de gekozen behandeling. We nemen de tijd die nodig is — haastig werken rondom de nagelriem is de voornaamste oorzaak van irritatie, dus we doen het rustig en grondig.",
      },
      {
        question: "Hoe lang houdt BIAB of een gelnagel?",
        answer:
          "Met de juiste voorbereiding en een goede thuisverzorging houdt BIAB bij Elite Nails drie tot vijf weken. Gewone gelnagels houden gemiddeld twee tot drie weken. Factoren zoals frequent handenwerk of contact met agressieve schoonmaakmiddelen kunnen de houdbaarheid beïnvloeden. We geven je bij elke behandeling concrete tips mee.",
      },
      {
        question: "Hoeveel kost een BIAB-manicure bij Elite Nails?",
        answer:
          "De prijs hangt af van de gekozen kleur, lengte en eventuele nail art. Neem contact op via Instagram voor een duidelijk overzicht van de actuele tarieven — we bezorgen je graag alle info vóór je eerste afspraak.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions: "Via de N42 richting Lierde ben je er in een tiental minuten.",
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
    metaTitle: "Nagels Zottegem | Nagelstudio & Gelnagels | Elite Nails Lierde",
    metaDescription:
      "Nagels in Zottegem? Elite Nails in Sint-Martens-Lierde, op 15 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagels bij Zottegem — Nagelstudio Elite Nails Sint-Martens-Lierde",
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
      {
        heading: "Gelnagels in Zottegem",
        text: "Op zoek naar gelnagels in Zottegem? Bij Elite Nails combineren we esthetiek met technische precisie. Onze nagelstylistes werken met de Russian manicure-techniek: een droge werkwijze waarbij de nagelriem zorgvuldig wordt teruggewerkt zonder vocht, zodat de gel rechtstreeks op de nagelplaat hecht. Het resultaat is een perfecte overgang van huid naar gel, minder lifting en een langere houdbaarheid — gemiddeld drie tot vijf weken. We gebruiken uitsluitend professionele gelproducten die de natuurlijke nagel beschermen en tegelijk een duurzame glansafwerking geven. Of je nu kiest voor een neutrale nude, een krachtige kleur of nail art op maat — bij gelnagels zottegem denken onze klanten al snel aan Elite Nails, en dat is niet toevallig. Kwaliteit, hygiëne en aandacht voor detail staan bij ons centraal. Ben je nieuw of wil je weten welke behandeling het beste bij jouw nagels past? We adviseren je graag vrijblijvend tijdens je eerste bezoek.",
      },
      {
        heading: "BIAB Nagels in Zottegem",
        text: "BIAB nagels in Zottegem — Builder In A Bottle is de behandeling die nagelgezondheid centraal stelt. In tegenstelling tot traditionele acryl of harde gel, versterkt BIAB de eigen nagelplaat in plaats van haar te verzwaren. De gel polymeerlaag hecht flexibel op de natuurlijke nagel en geeft haar de kracht om te groeien zonder te breken. Voor klanten die jarenlang last hadden van broze, afbrekende nagels is BIAB dan ook een echte gamechanger. Bij Elite Nails combineren we biab zottegem met de Russian manicure-voorbehandeling voor maximale hechting en een strakke, verzorgde nagelriem. Elke set duurt twee tot drie weken langer dan een gewone gel en beschadigt de nagel niet bij het afzetten, mits professioneel gedaan. Onze klanten uit Zottegem en omstreken kiezen keer op keer voor biab omdat ze merken dat hun eigen nagels sterker worden na elke beurt.",
      },
    ],
    faq: [
      {
        question: "Wat is het verschil tussen BIAB en gelnagels?",
        answer:
          "Gelnagels geven kleur en glans, maar versterken de eigen nagel niet structureel. BIAB (Builder In A Bottle) is een opbouwgel die de nagelplaat versterkt terwijl ze groeit. BIAB is ideaal als je broze nagels hebt of je eigen nagels wilt laten groeien; gewone gelnagels zijn perfect als je nagels al stevig zijn en je primair een mooie afwerking wilt.",
      },
      {
        question: "Hoeveel kost een BIAB-manicure bij Elite Nails?",
        answer:
          "De prijs van een BIAB-manicure hangt af van de gekozen kleur, lengte en eventuele nail art. Bekijk onze actuele tarieven op de prijzenpagina of neem contact op via Instagram — we bezorgen je graag een duidelijk overzicht vóór je afspraak.",
      },
      {
        question: "Hoe lang duurt een Russian manicure?",
        answer:
          "Een Russian manicure duurt gemiddeld 60 tot 90 minuten, afhankelijk van de staat van de nagelriemen en de gekozen behandeling. We nemen de tijd die nodig is: haastig werken rondom de nagelriem is de grootste oorzaak van irritatie en infectie, dus we doen het rustig en grondig.",
      },
      {
        question: "Hoe lang houdt een set gelnagels?",
        answer:
          "Met de juiste voorbereiding en een goede thuisverzorging houdt een gelnagel bij Elite Nails drie tot vijf weken. Factoren zoals frequent handenwerk, contact met aceton of agressieve schoonmaakmiddelen kunnen de houdbaarheid verkorten. We geven je bij elke behandeling tips mee.",
      },
      {
        question: "Is Elite Nails bereikbaar vanuit Zottegem?",
        answer:
          "Ja. Onze nagelstudio ligt in Sint-Martens-Lierde, op circa 15 minuten rijden van Zottegem via de N42. Er is gratis parkeerruimte vlak bij de studio. Veel klanten uit Zottegem, Brakel en omgeving rijden ons graag even voorbij voor een behandeling die de moeite waard is.",
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

  // ─── 27 nieuwe gemeenten ─────────────────────────────────────────────────

  nederbrakel: {
    slug: "nederbrakel",
    city: "Nederbrakel",
    metaTitle: "Nagelstudio Nederbrakel | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Nederbrakel? Elite Nails in Sint-Martens-Lierde, op 10 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Nederbrakel — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Nederbrakel of de omgeving en op zoek naar een gespecialiseerde nagelstudio? Elite Nails in Sint-Martens-Lierde ligt op amper 10 minuten van Nederbrakel en is dé studio voor de Russische manicure in de regio. Onze klanten uit Nederbrakel, Opbrakel en de rest van de Brakel-regio komen voor precisie, hygiëne en een behandeling die weken mooi blijft.",
      "Elite Nails is een klein, persoonlijk studio in Sint-Martens-Lierde waar elke behandeling met zorg en aandacht wordt uitgevoerd. Van de Russische manicure tot BIAB, gelnagels en wimpers lamineren — je vindt het hier allemaal op een steenworp van Nederbrakel.",
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
        heading: "Russische manicure vlakbij Nederbrakel",
        text: "De Russische manicure is een droge nagelbehandelingstechniek waarbij geen water wordt gebruikt. Dit zorgt voor een betere hechting van gel of lak, een preciezere cuticula-behandeling en een resultaat dat significant langer meegaat dan bij een traditionele manicure. Klanten uit Nederbrakel en Opbrakel zijn bij Elite Nails altijd welkom voor deze specialisatie.",
      },
      {
        heading: "BIAB en wimpers lamineren op 10 minuten van Nederbrakel",
        text: "Naast de Russische manicure is Elite Nails gespecialiseerd in BIAB — een versterkende gelbehandeling voor de natuurlijke nagel — en wimpers lamineren. BIAB is ideaal voor wie brosse nagels heeft en versterking zoekt zonder kunstnagels. Wimpers lamineren geeft een volle, gebogen wimperrand die weken meegaat.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions: "Via de N8 vanuit Nederbrakel richting Lierde — op circa 10 minuten.",
  },

  aalst: {
    slug: "aalst",
    city: "Aalst",
    metaTitle: "Nagelstudio Aalst | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio bij Aalst? Elite Nails in Sint-Martens-Lierde, op 30 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Aalst — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Aalst of omgeving en op zoek naar een nagelstudio met echte specialisatie? Elite Nails in Sint-Martens-Lierde ligt op circa 30 minuten van Aalst en is dé studio voor wie de Russische manicure wil ervaren zoals het hoort. Klanten uit Aalst, Erembodegem, Hofstade en de ruimere Denderstreek rijden graag voor de kwaliteit en persoonlijke aanpak die ons studio biedt.",
      "In tegenstelling tot veel nagelstudio's in Aalst werkt Elite Nails uitsluitend met gecertificeerd professioneel materiaal en een droge, hygiënische techniek. Het resultaat spreekt voor zich — nagels die weken mooi blijven en behandelingen die je huid beschermen.",
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
        heading: "De Russische manicure: vanuit Aalst de moeite waard",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die bekendstaat om zijn precisie en hygiëne. Geen water, geen compromissen. Gel of lak hecht aanzienlijk beter op een droog behandelde nagel, de cuticula wordt nauwkeurig bewerkt, en het resultaat gaat drie tot vier weken mee. Voor klanten uit Aalst is Elite Nails de bestemming voor wie het verschil wil voelen.",
      },
      {
        heading: "BIAB en lash laminatie voor klanten uit Aalst",
        text: "BIAB (Builder In A Bottle) is de ideale behandeling voor wie van zijn eigen nagels wil genieten zonder ze te beschadigen. De builder gel versterkt de natuurlijke nagel van binnenuit. Combineer dit met lash laminatie voor een volledige beauty-upgrade in één bezoek aan Sint-Martens-Lierde.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de E40 en N42 vanuit Aalst richting Sint-Martens-Lierde — circa 30 minuten.",
  },

  nazareth: {
    slug: "nazareth",
    city: "Nazareth",
    metaTitle: "Nagelstudio Nazareth | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Nazareth? Elite Nails in Sint-Martens-Lierde, op 25 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Nazareth — Elite Nails Lierde",
    intro: [
      "Op zoek naar een professionele nagelstudio vanuit Nazareth of omgeving? Elite Nails in Sint-Martens-Lierde is op circa 25 minuten bereikbaar en staat bekend om zijn specialisatie in de Russische manicure. Klanten uit Nazareth, Eke en de ruimere Leie-regio kiezen voor Elite Nails vanwege de hoge kwaliteitsstandaard en de persoonlijke aanpak.",
      "In een cozy studio in Sint-Martens-Lierde brengen we precisie en schoonheid samen. Elke behandeling wordt uitgevoerd met gecertificeerd materiaal en oog voor elk detail — dat is de belofte van Elite Nails aan iedere klant vanuit Nazareth.",
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
        heading: "Russische manicure vanuit Nazareth: 25 minuten, topresultaat",
        text: "De Russische manicure is een droge techniek die de nagels van Nazareth-klanten grondig en hygiënisch behandelt. Zonder gebruik van water hecht gel of lak beter, duurt het resultaat langer, en is de behandeling veiliger voor je huid en cuticula. Elite Nails brengt dit niveau van vakmanschap naar de Leie-regio.",
      },
      {
        heading: "BIAB en wimpers lamineren in de buurt van Nazareth",
        text: "Naast de Russische manicure biedt Elite Nails ook BIAB en wimpers lamineren aan. BIAB versterkt de eigen nagel met een builder gel, terwijl wimpers lamineren je wimpers een volle, gebogen look geeft die weken meegaat. Een complete beautybehandeling op 25 minuten van Nazareth.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de E17 en N60 of N453 vanuit Nazareth richting Sint-Martens-Lierde — circa 25 minuten.",
  },

  gavere: {
    slug: "gavere",
    city: "Gavere",
    metaTitle: "Nagelstudio Gavere | Russian Manicure & BIAB | Elite Nails",
    metaDescription:
      "Nagelstudio bij Gavere? Elite Nails in Sint-Martens-Lierde, op 20 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Gavere — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Gavere, Asper of Vurste en zoek je een nagelstudio met expertise in de Russische manicure? Elite Nails in Sint-Martens-Lierde is op circa 20 minuten bereikbaar en verwelkomt klanten uit de gehele Gavere-regio. Ons studio combineert een rustige, persoonlijke sfeer met een hoge professionele standaard.",
      "Bij Elite Nails werken we op afspraak, zonder haast, en met gecertificeerd professioneel materiaal. Klanten uit Gavere ontdekken al snel hoe groot het verschil is met een gewone nagelstudio. Boek je afspraak via Instagram.",
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
        heading: "De Russische manicure voor Gavere-klanten",
        text: "De Russische manicure onderscheidt zich door een droge aanpak die preciezer en hygiënischer is dan de traditionele manicure. De cuticula wordt grondig behandeld, gel of lak hecht beter, en het resultaat is beduidend duurzamer. Klanten uit Gavere rijden de 20 minuten graag voor dit niveau van kwaliteit bij Elite Nails.",
      },
      {
        heading: "BIAB en lash laminatie op 20 minuten van Gavere",
        text: "Elite Nails biedt naast de Russische manicure ook BIAB voor versterkende nagelverzorging en lash laminatie voor een volle, gebogen wimperrand. BIAB is ideaal voor wie zijn eigen nagels wil versterken zonder kunstnagels toe te voegen. Beide behandelingen zijn populair bij klanten uit Gavere en de Schelde-regio.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N60 richting Oudenaarde en verder richting Lierde — circa 20 minuten vanuit Gavere.",
  },

  denderleeuw: {
    slug: "denderleeuw",
    city: "Denderleeuw",
    metaTitle: "Nagelstudio Denderleeuw | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Denderleeuw? Elite Nails in Sint-Martens-Lierde, op 25 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Denderleeuw — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Denderleeuw, Iddergem of Welle en ben je op zoek naar een nagelstudio gespecialiseerd in de Russische manicure? Elite Nails in Sint-Martens-Lierde is op circa 25 minuten bereikbaar en is dé bestemming voor wie kwaliteit, precisie en hygiëne centraal stelt. Klanten uit de Denderstreek kiezen bewust voor ons studio.",
      "Bij Elite Nails nemen we de tijd voor elke klant. Geen haast, geen compromissen — alleen de beste behandeling voor jouw nagels. Of je nu kiest voor de Russische manicure, BIAB of wimpers lamineren, je bent bij ons in goede handen.",
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
        heading: "Russische manicure vanuit Denderleeuw: 25 minuten rijden",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die zorgt voor een langdurig, precies resultaat. Zonder water hecht gel of lak beter op de nagel, wordt de cuticula nauwkeuriger behandeld, en is het hygiënisch effect merkbaar superieur. Klanten uit Denderleeuw rijden graag de 25 minuten naar Elite Nails voor dit niveau van vakmanschap.",
      },
      {
        heading: "BIAB en wimpers lamineren voor klanten uit de Denderstreek",
        text: "BIAB is de populairste versterkers behandeling voor de natuurlijke nagel — een dunne builder gel geeft extra stevigheid zonder het gewone uiterlijk aan te tasten. Wimpers lamineren geeft je wimpers een gebogen, volle look die weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails, op circa 25 minuten van Denderleeuw.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N8 of N42 richting Geraardsbergen en verder naar Sint-Martens-Lierde — circa 25 minuten.",
  },

  roosdaal: {
    slug: "roosdaal",
    city: "Roosdaal",
    metaTitle: "Nagelstudio Roosdaal | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Roosdaal? Elite Nails in Sint-Martens-Lierde, op 20 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Roosdaal — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Roosdaal, Pamel of Borchtlombeek en zoek je een nagelstudio met specialisatie in de Russische manicure? Elite Nails in Sint-Martens-Lierde is op circa 20 minuten bereikbaar via de N8 en verwelkomt klanten uit het Pajottenland en de ruimere regio. Ons studio staat voor kwaliteit, hygiëne en persoonlijke aandacht.",
      "Bij Elite Nails wordt elke behandeling uitgevoerd met gecertificeerd professioneel materiaal en de aandacht die u verdient. Klanten uit Roosdaal rijden graag de 20 minuten voor een Russische manicure die weken mooi blijft.",
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
        heading: "Russische manicure op 20 minuten van Roosdaal",
        text: "De Russische manicure gebruikt geen water — dit is de sleutel tot haar succes. De cuticula wordt nauwkeurig bewerkt met professionele elektrische vijlen, gel of lak hecht beter, en het resultaat gaat beduidend langer mee. Voor klanten uit Roosdaal is Elite Nails de dichtstbijzijnde studio die deze techniek op hoog niveau uitvoert.",
      },
      {
        heading: "BIAB en lash laminatie vlak bij Roosdaal",
        text: "Naast de Russische manicure biedt Elite Nails ook BIAB voor versterkende nagelverzorging en lash laminatie voor een dramatische wimperrand. BIAB versterkt de eigen nagel zonder kunstnagels, terwijl lash laminatie je wimpers een lift geeft die acht weken meegaat. Combineer behandelingen voor maximaal gemak.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N8 richting Geraardsbergen en verder naar Sint-Martens-Lierde — circa 20 minuten vanuit Roosdaal.",
  },

  "sint-lievens-esse": {
    slug: "sint-lievens-esse",
    city: "Sint-Lievens-Esse",
    metaTitle: "Nagelstudio Sint-Lievens-Esse | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Sint-Lievens-Esse? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Sint-Lievens-Esse — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Sint-Lievens-Esse of de omgeving? Elite Nails in Sint-Martens-Lierde is op amper 12 minuten bereikbaar en biedt een volledig aanbod aan nagelbehandelingen, met als specialiteit de Russische manicure. Klanten uit Sint-Lievens-Esse rijden graag even voor een behandeling die echt het verschil maakt.",
      "Ons cozy studio in Sint-Martens-Lierde staat voor kwaliteit en persoonlijke aandacht. We werken op afspraak, zonder haast, en met gecertificeerd materiaal. Bij Elite Nails staan jouw nagels centraal.",
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
        heading: "De Russische manicure vlakbij Sint-Lievens-Esse",
        text: "De Russische manicure is een droge techniek die zorgt voor langdurige, perfect gehechte nagels. Zonder water wordt de cuticula nauwkeuriger behandeld en hecht gel of lak beter. Klanten uit Sint-Lievens-Esse ontdekken het verschil bij hun eerste bezoek aan Elite Nails in Sint-Martens-Lierde.",
      },
      {
        heading: "BIAB en gelnagels op 12 minuten van Sint-Lievens-Esse",
        text: "BIAB is de ideale behandeling voor wie de eigen nagels wil versterken. De builder gel beschermt en versterkt de natuurlijke nagel zonder kunstnagels toe te voegen. Gelnagels bieden langdurige, glanzende kleur. Beide behandelingen zijn beschikbaar bij Elite Nails, op een kleine 12 minuten van Sint-Lievens-Esse.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit de regio Herzele richting Sint-Martens-Lierde — circa 12 minuten.",
  },

  parike: {
    slug: "parike",
    city: "Parike",
    metaTitle: "Nagelstudio Parike | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio vlakbij Parike? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio vlakbij Parike — Elite Nails Lierde",
    intro: [
      "Woon je in Parike of de omgeving van Brakel? Elite Nails in Sint-Martens-Lierde is op amper 10 minuten rijden en is dé studio voor wie op zoek is naar een Russische manicure van topkwaliteit. Ons studio verwelkomt klanten uit Parike, Opbrakel, Zegelsem en de ruimere Brakel-regio.",
      "In een kleine, persoonlijke setting biedt Elite Nails behandelingen die het verschil maken. Van de Russische manicure tot BIAB en wimpers lamineren — alles op een steenworp van Parike.",
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
        heading: "Russische manicure vlakbij Parike",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die nauwkeuriger en hygiënischer is dan een traditionele manicure. De cuticula wordt precies bewerkt, gel of lak hecht beter, en het resultaat gaat weken mee. Klanten uit Parike en omgeving zijn bij Elite Nails in Sint-Martens-Lierde in de beste handen.",
      },
      {
        heading: "BIAB op 10 minuten van Parike",
        text: "BIAB (Builder In A Bottle) is een versterkende gelbehandeling die de natuurlijke nagel beschermt en verstevigt. Ideaal voor wie last heeft van brosse nagels of gewoon zijn eigen nagels extra liefde wil geven. Elite Nails biedt deze behandeling aan op slechts 10 minuten van Parike.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N8 richting Lierde vanuit Parike — na circa 10 minuten bent u er.",
  },

  "sint-maria-oudenhove": {
    slug: "sint-maria-oudenhove",
    city: "Sint-Maria-Oudenhove",
    metaTitle: "Nagelstudio Sint-Maria-Oudenhove | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Sint-Maria-Oudenhove? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Sint-Maria-Oudenhove — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Sint-Maria-Oudenhove of een naburige gemeente van de Zottegem-regio? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en biedt de beste Russische manicure in de omgeving. Klanten uit Sint-Maria-Oudenhove, Elene, Strijpen en omgeving vinden bij ons een warm en professioneel welkom.",
      "Ons studio is kleinschalig en persoonlijk, met alle focus op kwaliteit. Van BIAB tot wimpers lamineren — bij Elite Nails vind je een volledig aanbod op 12 minuten van Sint-Maria-Oudenhove.",
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
        heading: "Russische manicure dicht bij Sint-Maria-Oudenhove",
        text: "De Russische manicure werkt droog en precies — geen water, geen compromissen. Gel of lak hecht beter, de cuticula wordt vakkundig behandeld, en het resultaat gaat drie tot vier weken mee. Klanten uit Sint-Maria-Oudenhove rijden de 12 minuten naar Elite Nails voor dit niveau van kwaliteit.",
      },
      {
        heading: "Gelnagels en wimpers lamineren op 12 minuten",
        text: "Naast de Russische manicure en BIAB biedt Elite Nails ook gelnagels en wimpers lamineren aan. Gelnagels zijn kleurvasthoudend tot drie à vier weken, terwijl wimpers lamineren je wimperlijn een prachtige curve geeft. Maak een afspraak via Instagram voor een behandeling die je dag compleet maakt.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Zottegem richting Lierde — op circa 12 minuten van Sint-Maria-Oudenhove.",
  },

  hemelveerdegem: {
    slug: "hemelveerdegem",
    city: "Hemelveerdegem",
    metaTitle: "Nagelstudio Hemelveerdegem | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio vlakbij Hemelveerdegem? Elite Nails in Sint-Martens-Lierde op 5 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio vlakbij Hemelveerdegem — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Hemelveerdegem? Dan woon je op slechts 5 minuten van Elite Nails in Sint-Martens-Lierde. Ons studio is gespecialiseerd in de Russische manicure en biedt een volledig aanbod aan nagelbehandelingen voor bewoners van Hemelveerdegem en de omliggende deelgemeenten van Lierde.",
      "Als buur van Hemelveerdegem is Elite Nails de meest logische keuze voor een professionele nagelbehandeling. We verwelkomen je graag in ons cozy studio voor een behandeling die je verwacht én verrast.",
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
        heading: "Elite Nails: de nagelstudio van Hemelveerdegem",
        text: "Als inwoner van Hemelveerdegem heb je het voordeel van nabijheid: Elite Nails in Sint-Martens-Lierde is letterlijk om de hoek. De Russische manicure die we aanbieden is een droge, nauwkeurige techniek die zorgt voor nagels die weken mooi blijven. Geen lange rit, maar een topresultaat.",
      },
      {
        heading: "BIAB, gelnagels en meer op 5 minuten van Hemelveerdegem",
        text: "Bij Elite Nails vind je naast de Russische manicure ook BIAB voor versterkende nagelverzorging, gelnagels voor langdurige kleur, en wimpers en wenkbrauwen lamineren voor een complete beautybehandeling. Alles op 5 minuten van Hemelveerdegem.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Hemelveerdegem bent u via de lokale verbindingswegen op 5 minuten in Sint-Martens-Lierde.",
  },

  deftinge: {
    slug: "deftinge",
    city: "Deftinge",
    metaTitle: "Nagelstudio Deftinge | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio vlakbij Deftinge? Elite Nails in Sint-Martens-Lierde op 5 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio vlakbij Deftinge — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Deftinge? Dan is Elite Nails letterlijk om de hoek. Ons studio in Sint-Martens-Lierde ligt op amper 5 minuten van Deftinge en biedt de beste Russische manicure van de regio. Als inwoner van Deftinge profiteer je van de nabijheid van een nagelstudio die kwaliteit en hygiëne hoog in het vaandel draagt.",
      "Elite Nails verwelkomt klanten uit Deftinge, Sint-Maria-Lierde, Hemelveerdegem en alle andere deelgemeenten van Lierde. Een behandeling op 5 minuten van huis — het kan niet eenvoudiger.",
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
        heading: "De beste nagelstudio op 5 minuten van Deftinge",
        text: "De Russische manicure is onze specialiteit bij Elite Nails. Deze droge techniek verzorgt de nagels nauwkeurig en hygiënisch — zonder water, zonder compromissen. Gel of lak hecht beter, de cuticula wordt precies bewerkt, en het resultaat gaat weken mee. Klanten uit Deftinge hoeven niet ver te rijden voor deze kwaliteit.",
      },
      {
        heading: "BIAB en wimpers lamineren vlakbij Deftinge",
        text: "Naast de Russische manicure biedt Elite Nails ook BIAB voor de versterking van de eigen nagel, en wimpers lamineren voor een volle, gebogen wimperrand. Beide behandelingen zijn populair bij klanten uit de Lierde-regio. Boek via Instagram.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Deftinge bent u op 5 minuten in Sint-Martens-Lierde via de lokale verbindingswegen.",
  },

  "sint-maria-lierde": {
    slug: "sint-maria-lierde",
    city: "Sint-Maria-Lierde",
    metaTitle: "Nagelstudio Sint-Maria-Lierde | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio vlakbij Sint-Maria-Lierde? Elite Nails in Sint-Martens-Lierde op 3 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio vlakbij Sint-Maria-Lierde — Elite Nails Lierde",
    intro: [
      "Woon je in Sint-Maria-Lierde? Dan is Elite Nails letterlijk je buurstudio. Ons nagelstudio in Sint-Martens-Lierde ligt op amper 3 tot 5 minuten van Sint-Maria-Lierde. Als nagelstudio van de gemeente Lierde zijn we dé lokale keuze voor de Russische manicure, BIAB, gelnagels en alle andere nagelbehandelingen.",
      "Bij Elite Nails hoef je als inwoner van Sint-Maria-Lierde niet ver te rijden voor een behandeling die echt het verschil maakt. Een cozy studio, professioneel materiaal, en volledige aandacht voor jouw nagels — dat is de belofte van Elite Nails.",
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
        heading: "De lokale nagelstudio van de gemeente Lierde",
        text: "Elite Nails in Sint-Martens-Lierde is de enige gespecialiseerde studio voor de Russische manicure in de gemeente Lierde. Als inwoner van Sint-Maria-Lierde heb je het voorrecht van nabijheid: topkwaliteit op 3 minuten. De Russische manicure — een droge, nauwkeurige techniek — levert resultaten die weken mooi blijven.",
      },
      {
        heading: "Alle behandelingen op een steenworp van Sint-Maria-Lierde",
        text: "Van BIAB tot gelnagels, van wimpers lamineren tot wenkbrauw laminatie — Elite Nails biedt een volledig aanbod aan beautybehandelingen vlak bij Sint-Maria-Lierde. Combineer behandelingen in één bezoek voor maximaal resultaat en gemak.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Elite Nails ligt in Sint-Martens-Lierde, op 3 tot 5 minuten van Sint-Maria-Lierde.",
  },

  elene: {
    slug: "elene",
    city: "Elene",
    metaTitle: "Nagelstudio Elene | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Elene? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Elene — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Elene, een deelgemeente van Zottegem, en zoek je een nagelstudio in de buurt? Elite Nails in Sint-Martens-Lierde is op circa 10 minuten bereikbaar en staat voor de Russische manicure op zijn best. Klanten uit Elene, Grotenberge, Strijpen en de andere deelgemeenten van Zottegem zijn bij ons altijd van harte welkom.",
      "In ons studio wordt elke behandeling met zorg en precisie uitgevoerd. Elite Nails is de keuze voor wie meer verwacht dan een gewone nagelstudio — boek via Instagram.",
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
        heading: "Russische manicure op 10 minuten van Elene",
        text: "De Russische manicure is een droge techniek die de nagels precies en hygiënisch behandelt. Zonder water hecht gel of lak beter, gaat het resultaat langer mee, en is de behandeling veiliger voor de huid. Klanten uit Elene en de Zottegem-regio rijden graag de 10 minuten naar Elite Nails voor dit verschil.",
      },
      {
        heading: "BIAB en wimpers lamineren vlak bij Elene",
        text: "BIAB versterkt de natuurlijke nagel met een speciale builder gel — ideaal voor wie brosse nagels heeft of bescherming zoekt. Wimpers lamineren geeft je wimpers een lift die tot acht weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails op slechts 10 minuten van Elene.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Zottegem/Elene richting Lierde — circa 10 minuten rijden.",
  },

  erwetegem: {
    slug: "erwetegem",
    city: "Erwetegem",
    metaTitle: "Nagelstudio Erwetegem | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Erwetegem? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Erwetegem — Elite Nails Lierde",
    intro: [
      "Woon je in Erwetegem, een deelgemeente van Zottegem, en ben je op zoek naar een professionele nagelstudio dichtbij? Elite Nails in Sint-Martens-Lierde is op circa 10 minuten bereikbaar en biedt de Russische manicure als specialiteit. Klanten uit Erwetegem en de buurt kiezen voor ons studio vanwege de kwaliteit en de persoonlijke sfeer.",
      "Bij Elite Nails ben je verzekerd van een behandeling die echt het verschil maakt. We werken op afspraak, met gecertificeerd materiaal en oog voor elk detail. Boek via Instagram.",
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
        heading: "De Russische manicure vlakbij Erwetegem",
        text: "De Russische manicure werkt droog en precies — de cuticula wordt vakkundig behandeld, gel of lak hecht beter, en het resultaat gaat weken mee. In de Zottegem-regio, waartoe Erwetegem behoort, is Elite Nails in Sint-Martens-Lierde de specialist voor deze techniek.",
      },
      {
        heading: "BIAB en gelnagels op 10 minuten van Erwetegem",
        text: "BIAB biedt versterkende bescherming voor de natuurlijke nagel, terwijl gelnagels zorgen voor een langdurige, glanzende kleur. Beide zijn populaire keuzes bij klanten uit Erwetegem en de Zottegem-regio. Combineer met de Russische manicure voor een complete nagelbehandeling.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Zottegem/Erwetegem richting Lierde — circa 10 minuten.",
  },

  grotenberge: {
    slug: "grotenberge",
    city: "Grotenberge",
    metaTitle: "Nagelstudio Grotenberge | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Grotenberge? Elite Nails in Sint-Martens-Lierde op 8 min. Russische manicure, BIAB, gelnagels & wimpers. Boek nu!",
    h1: "Nagelstudio bij Grotenberge — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Grotenberge of de regio Zottegem en zoek je een nagelstudio met echte expertise? Elite Nails in Sint-Martens-Lierde ligt op circa 8 minuten van Grotenberge en is gespecialiseerd in de Russische manicure. Klanten uit Grotenberge, Velzeke-Ruddershove en de omgeving rijden graag even voor een behandeling die echt iets anders is.",
      "Elite Nails is een klein maar professioneel studio waar kwaliteit bovenaan staat. Russische manicure, BIAB, gelnagels, wimpers en wenkbrauwen lamineren — alles op amper 8 minuten van Grotenberge.",
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
        heading: "Russische manicure vlakbij Grotenberge",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die door zijn precisie en hygiëne steeds populairder wordt in de regio Zottegem-Lierde. Gel of lak hecht beter op een droog behandelde nagel, de cuticula wordt nauwkeuriger bewerkt, en het resultaat gaat weken mee. Klanten uit Grotenberge zijn bij Elite Nails in de beste handen.",
      },
      {
        heading: "BIAB en wimpers lamineren op 8 minuten van Grotenberge",
        text: "BIAB versterkt de eigen nagel met een dunne maar krachtige gel — geen kunstnagels, maar beschermde, sterke echte nagels. Wimpers lamineren geeft je wimpers een gebogen look die weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails op slechts 8 minuten van Grotenberge.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Vanuit Grotenberge rijdt u via de N42 richting Lierde — circa 8 minuten.",
  },

  strijpen: {
    slug: "strijpen",
    city: "Strijpen",
    metaTitle: "Nagelstudio Strijpen | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Strijpen? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Strijpen — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Strijpen, een deelgemeente van Zottegem? Elite Nails in Sint-Martens-Lierde ligt op circa 10 minuten en biedt de Russische manicure als specialiteit. Klanten uit Strijpen, Elene en de andere deelgemeenten van Zottegem zijn bij ons welkom voor een behandeling die precisie en schoonheid combineert.",
      "Bij Elite Nails staat elke klant centraal. We werken op afspraak, met gecertificeerd professioneel materiaal, en met aandacht voor elk detail. Boek je afspraak via Instagram.",
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
        heading: "Russische manicure op 10 minuten van Strijpen",
        text: "De Russische manicure werkt droog — geen water, betere hechting, langere resultaten. De cuticula wordt nauwkeurig behandeld met professionele elektrische vijlen, en gel of lak gaat er beduidend langer mee. Voor klanten uit Strijpen is Elite Nails in Sint-Martens-Lierde de specialist in de buurt.",
      },
      {
        heading: "BIAB en gelnagels voor klanten uit Strijpen",
        text: "BIAB is de versterkende behandeling voor de eigen nagel: een builder gel die extra stevigheid biedt zonder kunstnagels toe te voegen. Gelnagels zijn kleurvasthoudend tot drie à vier weken. Combineer behandelingen bij Elite Nails op amper 10 minuten van Strijpen.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit de regio Strijpen/Zottegem richting Sint-Martens-Lierde — circa 10 minuten.",
  },

  "velzeke-ruddershove": {
    slug: "velzeke-ruddershove",
    city: "Velzeke-Ruddershove",
    metaTitle: "Nagelstudio Velzeke-Ruddershove | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Velzeke-Ruddershove? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure & BIAB. Boek nu!",
    h1: "Nagelstudio bij Velzeke-Ruddershove — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Velzeke-Ruddershove of de omgeving van Zottegem? Elite Nails in Sint-Martens-Lierde ligt op circa 12 minuten en biedt professionele nagelbehandelingen met als specialiteit de Russische manicure. Klanten uit Velzeke-Ruddershove, Grotenberge en de bredere Zottegem-regio zijn bij ons altijd welkom.",
      "Elite Nails combineert vakmanschap met een persoonlijke aanpak. In ons cozy studio in Sint-Martens-Lierde word je behandeld met gecertificeerd materiaal en de volle aandacht die je nagels verdienen.",
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
        heading: "Russische manicure vlakbij Velzeke-Ruddershove",
        text: "De Russische manicure is een droge techniek die de nagels nauwkeurig en hygiënisch behandelt. Geen water, betere hechting van gel of lak, en een resultaat dat weken mooi blijft. In de regio Zottegem, inclusief Velzeke-Ruddershove, is Elite Nails de specialist voor deze behandeling.",
      },
      {
        heading: "BIAB op 12 minuten van Velzeke-Ruddershove",
        text: "BIAB (Builder In A Bottle) versterkt de natuurlijke nagel met een speciale gel — ideaal voor wie stevigere nagels wil zonder kunstnagels. Gecombineerd met de Russische manicure of gelnagels, is BIAB een populaire keuze bij klanten uit Velzeke-Ruddershove en omgeving.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Zottegem richting Lierde, via Velzeke-Ruddershove — circa 12 minuten.",
  },

  borsbeke: {
    slug: "borsbeke",
    city: "Borsbeke",
    metaTitle: "Nagelstudio Borsbeke | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Borsbeke? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Borsbeke — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Borsbeke, een deelgemeente van Herzele, en zoek je een nagelstudio met specialisatie in de Russische manicure? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar. Klanten uit Borsbeke, Ressegem, Sint-Lievens-Esse en de andere deelgemeenten van Herzele kiezen voor onze persoonlijke aanpak en hoge kwaliteitsstandaard.",
      "In ons studio staat de klant altijd centraal. We werken op afspraak, met gecertificeerd materiaal, en zonder haast. Boek je afspraak via Instagram en ontdek het Elite Nails-verschil.",
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
        heading: "Russische manicure vlakbij Borsbeke",
        text: "De Russische manicure gebruikt geen water — dit is wat haar onderscheidt van een traditionele manicure. De droge techniek zorgt voor een betere hechting van gel of lak, een nauwkeurigere cuticula-behandeling, en een langduriger resultaat. Klanten uit Borsbeke en de Herzele-regio rijden graag de 12 minuten naar Elite Nails.",
      },
      {
        heading: "BIAB en gelnagels op 12 minuten van Borsbeke",
        text: "BIAB is de versterkende gelbehandeling voor de eigen nagel die steeds populairder wordt in de regio. Gelnagels bieden langdurige kleur zonder afbladderen. Beide behandelingen zijn beschikbaar bij Elite Nails in Sint-Martens-Lierde, vlot bereikbaar vanuit Borsbeke.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Herzele/Borsbeke richting Lierde — circa 12 minuten rijden.",
  },

  ressegem: {
    slug: "ressegem",
    city: "Ressegem",
    metaTitle: "Nagelstudio Ressegem | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Ressegem? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Ressegem — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Ressegem of de regio Herzele en zoek je een kwalitatieve nagelstudio in de buurt? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en biedt de Russische manicure als specialiteit. Klanten uit Ressegem, Borsbeke en omgeving zijn bij ons altijd van harte welkom.",
      "Een persoonlijke aanpak, gecertificeerd materiaal en oog voor detail — dat is wat Elite Nails onderscheidt van andere nagelstudio's in de regio. Boek via Instagram voor beschikbaarheid.",
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
        heading: "Russische manicure dicht bij Ressegem",
        text: "De Russische manicure is een droge, nauwkeurige techniek die superieure resultaten levert. Door geen water te gebruiken hecht gel of lak beter, gaat het resultaat langer mee, en is de behandeling hygiënischer dan een traditionele manicure. Klanten uit Ressegem en de Herzele-regio komen hiervoor naar Elite Nails.",
      },
      {
        heading: "BIAB en wimpers lamineren op 12 minuten van Ressegem",
        text: "BIAB versterkt de eigen nagel met een builder gel — geen kunstnagels, maar beschermde, sterke echte nagels. Wimpers lamineren geeft een lift die tot acht weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails op circa 12 minuten van Ressegem.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Herzele richting Lierde — circa 12 minuten vanuit Ressegem.",
  },

  munkzwalm: {
    slug: "munkzwalm",
    city: "Munkzwalm",
    metaTitle: "Nagelstudio Munkzwalm | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Munkzwalm? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Munkzwalm — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Munkzwalm of de gemeente Zwalm en op zoek naar een professionele nagelstudio? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en specialiseert zich in de Russische manicure. Klanten uit Munkzwalm, Rozebeke, Nederzwalm en de andere deelgemeenten van Zwalm zijn bij ons altijd welkom.",
      "Bij Elite Nails staat kwaliteit centraal. We werken in een kleine, persoonlijke studio met gecertificeerd materiaal en aandacht voor elk detail. Van de Russische manicure tot wimpers lamineren — alles onder één dak op 12 minuten van Munkzwalm.",
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
        heading: "Russische manicure vlakbij Munkzwalm",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die de nagels precies en hygiënisch verzorgt. De cuticula wordt vakkundig behandeld, gel of lak hecht beter, en het resultaat gaat weken mee. Klanten uit Munkzwalm en de Zwalm-regio rijden de 12 minuten graag voor dit niveau van kwaliteit bij Elite Nails.",
      },
      {
        heading: "BIAB en gelnagels op 12 minuten van Munkzwalm",
        text: "BIAB versterkt de eigen nagel met een builder gel — ideaal voor wie van zijn nagels wil genieten zonder kunstnagels. Gelnagels bieden langdurige kleur tot drie à vier weken. Beide behandelingen zijn populaire keuzes bij klanten uit de Zwalm-regio.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N459 vanuit Zwalm/Munkzwalm richting Sint-Martens-Lierde — circa 12 minuten.",
  },

  rozebeke: {
    slug: "rozebeke",
    city: "Rozebeke",
    metaTitle: "Nagelstudio Rozebeke | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Rozebeke? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Rozebeke — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Rozebeke, een deelgemeente van Zwalm? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en biedt de Russische manicure als specialiteit. Klanten uit Rozebeke, Munkzwalm en de andere deelgemeenten van Zwalm zijn bij ons altijd welkom voor een behandeling die echt het verschil maakt.",
      "Bij Elite Nails draait alles om kwaliteit en persoonlijke aandacht. We werken op afspraak, zonder haast, met gecertificeerd professioneel materiaal. Boek via Instagram voor beschikbaarheid.",
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
        heading: "Russische manicure dicht bij Rozebeke",
        text: "De Russische manicure is de specialiteit van Elite Nails: een droge techniek die nauwkeuriger en hygiënischer is dan een traditionele manicure. De cuticula wordt precies behandeld, gel of lak hecht beter, en het resultaat blijft weken mooi. Klanten uit Rozebeke en de Zwalm-regio zijn bij ons in de beste handen.",
      },
      {
        heading: "BIAB en wimpers lamineren vlakbij Rozebeke",
        text: "BIAB versterkt de eigen nagel met een dunne gellaag — geen kunstnagels, maar extra stevigheid voor de echte nagel. Wimpers lamineren geeft een lift die weken meegaat. Combineer behandelingen bij Elite Nails op amper 12 minuten van Rozebeke.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N459 vanuit Rozebeke/Zwalm richting Sint-Martens-Lierde — circa 12 minuten.",
  },

  nederzwalm: {
    slug: "nederzwalm",
    city: "Nederzwalm",
    metaTitle: "Nagelstudio Nederzwalm | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Nederzwalm? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Nederzwalm — Elite Nails Lierde",
    intro: [
      "Ben je woonachtig in Nederzwalm-Hermelgem of de gemeente Zwalm? Elite Nails in Sint-Martens-Lierde is op circa 10 minuten bereikbaar en biedt professionele nagelbehandelingen met als specialiteit de Russische manicure. Klanten uit Nederzwalm, Munkzwalm en de ruimere regio zijn bij ons welkom.",
      "In ons cozy studio in Sint-Martens-Lierde staat jouw nagelverzorging centraal. We werken met gecertificeerd materiaal, op afspraak, en met de aandacht die je verdient. Boek via Instagram.",
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
        heading: "Russische manicure op 10 minuten van Nederzwalm",
        text: "De Russische manicure werkt droog: geen water, betere hechting, langere resultaten. De cuticula wordt met precisie behandeld en gel of lak hecht beduidend beter dan bij een traditionele natte manicure. Elite Nails is de specialist in de buurt voor klanten uit Nederzwalm en de Zwalm-regio.",
      },
      {
        heading: "BIAB en gelnagels vlakbij Nederzwalm",
        text: "BIAB versterkt de eigen nagel met een builder gel — de perfecte oplossing voor brosse nagels. Gelnagels bieden glanzende, kleurvaste nagels tot drie à vier weken. Beide behandelingen zijn beschikbaar bij Elite Nails op amper 10 minuten van Nederzwalm.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N459 vanuit Nederzwalm richting Sint-Martens-Lierde — circa 10 minuten.",
  },

  anzegem: {
    slug: "anzegem",
    city: "Anzegem",
    metaTitle: "Nagelstudio Anzegem | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Anzegem? Elite Nails in Sint-Martens-Lierde, op 20 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Anzegem — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Op zoek naar een nagelstudio vanuit Anzegem of de omgeving? Elite Nails in Sint-Martens-Lierde is op circa 20 minuten bereikbaar via de N36 en biedt de Russische manicure als specialiteit. Klanten uit Anzegem, Vichte, Ingooigem en de ruimere regio rijden graag voor de kwaliteit die Elite Nails biedt.",
      "Bij Elite Nails staat precisie centraal. In een rustige, persoonlijke setting voeren we elke behandeling uit met gecertificeerd materiaal en de volle aandacht. 'Where Precision Meets Beauty' — dat is onze belofte.",
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
        heading: "Russische manicure vanuit Anzegem: 20 minuten rijden",
        text: "De Russische manicure is een droge techniek waarbij geen water wordt gebruikt. Dit zorgt voor een betere hechting van gel of lak, een nauwkeurigere cuticula-behandeling, en een resultaat dat significant langer meegaat. Klanten uit Anzegem rijden de 20 minuten graag naar Elite Nails voor dit level van vakmanschap.",
      },
      {
        heading: "BIAB en wimpers lamineren voor klanten uit Anzegem",
        text: "BIAB is ideaal voor wie zijn eigen nagels wil versterken — een builder gel geeft extra stevigheid zonder kunstnagels. Wimpers lamineren geeft je wimpers een gebogen, volle look die weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails in Sint-Martens-Lierde.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N36 vanuit Anzegem richting Ronse en verder naar Sint-Martens-Lierde — circa 20 minuten.",
  },

  kruishoutem: {
    slug: "kruishoutem",
    city: "Kruishoutem",
    metaTitle: "Nagelstudio Kruishoutem | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Kruishoutem? Elite Nails in Sint-Martens-Lierde, op 20 min. Russische manicure, BIAB, gelnagels & lash laminatie. Boek nu!",
    h1: "Nagelstudio bij Kruishoutem — Elite Nails Lierde",
    intro: [
      "Woon je in Kruishoutem, Nokere of Wannegem-Lede en zoek je een nagelstudio met echte specialisatie? Elite Nails in Sint-Martens-Lierde is op circa 20 minuten bereikbaar en staat voor de Russische manicure op zijn best. Klanten uit Kruishoutem en de ruimere Vlaamse Ardennen-regio kiezen voor ons studio vanwege de kwaliteit en persoonlijke aanpak.",
      "Bij Elite Nails word je behandeld met gecertificeerd professioneel materiaal en de volle aandacht die je verdient. Boek je afspraak via Instagram en ontdek waarom klanten uit Kruishoutem de rit naar Sint-Martens-Lierde graag maken.",
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
        heading: "Russische manicure op 20 minuten van Kruishoutem",
        text: "De Russische manicure is een droge nagelbehandelingstechniek die bekendstaat om haar precisie en hygiëne. Zonder water hecht gel of lak beter op de nagel, wordt de cuticula nauwkeuriger behandeld, en gaat het resultaat significant langer mee. Voor klanten uit Kruishoutem is Elite Nails de bestemming voor topkwaliteit.",
      },
      {
        heading: "BIAB en lash laminatie voor klanten uit Kruishoutem",
        text: "BIAB versterkt de eigen nagel met een builder gel — ideaal voor brosse nagels of extra bescherming. Lash laminatie geeft je wimpers een gebogen, dramatische look die weken meegaat. Beide behandelingen zijn populair bij klanten uit Kruishoutem en de Oudenaarde-regio.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N60 vanuit Kruishoutem richting Oudenaarde en verder naar Lierde — circa 20 minuten.",
  },

  nukerke: {
    slug: "nukerke",
    city: "Nukerke",
    metaTitle: "Nagelstudio Nukerke | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Nukerke? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB & gelnagels. Boek nu!",
    h1: "Nagelstudio bij Nukerke — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Nukerke, een deelgemeente van Maarkedal, en ben je op zoek naar een professionele nagelstudio? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en biedt de Russische manicure als specialiteit. Klanten uit Nukerke, Etikhove, Schorisse en de Maarkedal-regio zijn bij ons altijd welkom.",
      "In ons studio staat kwaliteit boven alles. We werken op afspraak, met gecertificeerd materiaal, en met aandacht voor elk detail. Elite Nails — dé nagelstudio voor klanten uit Nukerke en de Vlaamse Ardennen.",
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
        heading: "Russische manicure vlakbij Nukerke",
        text: "De Russische manicure werkt droog en precies — dat is wat haar superieur maakt. Gel of lak hecht beter op een droog behandelde nagel, de cuticula wordt vakkundig bewerkt, en het resultaat gaat beduidend langer mee. Klanten uit Nukerke en de Maarkedal-regio rijden de 12 minuten graag voor dit niveau van kwaliteit.",
      },
      {
        heading: "BIAB en gelnagels op 12 minuten van Nukerke",
        text: "BIAB is de versterkende behandeling voor de eigen nagel die steeds meer klanten uit de regio ontdekken. De builder gel geeft extra stevigheid zonder kunstnagels toe te voegen. Gecombineerd met gelnagels voor langdurige kleur, bent u bij Elite Nails voor een complete nagelbehandeling.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N36 vanuit Maarkedal/Nukerke richting Ronse en naar Lierde — circa 12 minuten.",
  },

  viane: {
    slug: "viane",
    city: "Viane",
    metaTitle: "Nagelstudio Viane | Russian Manicure | Elite Nails Lierde",
    metaDescription:
      "Nagelstudio bij Viane? Elite Nails in Sint-Martens-Lierde op 12 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Viane — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Ben je woonachtig in Viane, een deelgemeente van Geraardsbergen, en zoek je een nagelstudio met specialisatie in de Russische manicure? Elite Nails in Sint-Martens-Lierde is op circa 12 minuten bereikbaar en verwelkomt klanten uit Viane, Moerbeke, Idegem en de omgeving van Geraardsbergen.",
      "Bij Elite Nails staat kwaliteit en persoonlijke aandacht centraal. We werken met gecertificeerd professioneel materiaal en nemen de tijd voor elke behandeling. Van de Russische manicure tot wimpers lamineren — alles op 12 minuten van Viane.",
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
        heading: "Russische manicure dicht bij Viane",
        text: "De Russische manicure is een droge techniek die de nagels grondig en nauwkeurig behandelt. Zonder water hecht gel of lak beter, de cuticula wordt precies bewerkt, en het resultaat gaat weken mee. Klanten uit Viane en de Geraardsbergen-regio rijden de 12 minuten graag naar Elite Nails.",
      },
      {
        heading: "BIAB en wimpers lamineren vlakbij Viane",
        text: "BIAB versterkt de eigen nagel — ideaal voor wie last heeft van brosse nagels of extra bescherming zoekt. Wimpers lamineren geeft je wimpers een gebogen, volle look die weken meegaat. Twee topbehandelingen bij Elite Nails op amper 12 minuten van Viane.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Geraardsbergen richting Lierde — circa 12 minuten vanuit Viane.",
  },

  moerbeke: {
    slug: "moerbeke",
    city: "Moerbeke",
    metaTitle: "Nagelstudio Moerbeke | Russian Manicure | Elite Nails",
    metaDescription:
      "Nagelstudio bij Moerbeke? Elite Nails in Sint-Martens-Lierde op 10 min. Russische manicure, BIAB, gelnagels & wimpers lamineren. Boek nu!",
    h1: "Nagelstudio bij Moerbeke — Elite Nails Sint-Martens-Lierde",
    intro: [
      "Woon je in Moerbeke, een deelgemeente van Geraardsbergen, en zoek je een nagelstudio op korte afstand? Elite Nails in Sint-Martens-Lierde is op amper 10 minuten bereikbaar en biedt de Russische manicure als specialiteit. Klanten uit Moerbeke, Viane, Idegem en de ruimere omgeving van Geraardsbergen zijn bij ons altijd welkom.",
      "Elite Nails is een persoonlijk studio waar je altijd de volle aandacht krijgt. We werken op afspraak, met gecertificeerd materiaal, en met de precisie die je nagels verdienen. Boek via Instagram.",
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
        heading: "Russische manicure op 10 minuten van Moerbeke",
        text: "De Russische manicure werkt droog en precies — geen water, betere hechting, langere resultaten. De cuticula wordt vakkundig behandeld en gel of lak gaat beduidend langer mee dan bij een traditionele manicure. Klanten uit Moerbeke en de Geraardsbergen-regio zijn bij Elite Nails in de beste handen.",
      },
      {
        heading: "BIAB en wimpers lamineren vlakbij Moerbeke",
        text: "BIAB versterkt de eigen nagel met een builder gel — ideaal voor wie stevigere nagels wil zonder kunstnagels. Wimpers lamineren geeft je wimpers een gebogen, volle look die weken meegaat. Beide behandelingen zijn beschikbaar bij Elite Nails op amper 10 minuten van Moerbeke.",
      },
    ],
    contactLine:
      "Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde",
    directions:
      "Via de N42 vanuit Geraardsbergen/Moerbeke richting Sint-Martens-Lierde — circa 10 minuten.",
  },
};
