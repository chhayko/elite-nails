import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";

type ServiceEntry = {
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  steps: { title: string; desc: string }[];
};

type LocaleData = Record<string, ServiceEntry>;

const serviceData: Record<string, LocaleData> = {
  en: {
    "russische-manicure": {
      name: "Russian Manicure",
      subtitle: "PRECISION CUTICLE CARE",
      description:
        "The Russian manicure is a professional dry technique where nails and cuticles are treated with extreme precision. Using specialized electric drills, dead skin cells are removed without water — allowing gel or polish to adhere far longer. The result: clean, elegant nails that stay perfect for weeks.",
      duration: "75–90 min",
      price: "from €45",
      steps: [
        { title: "Preparation", desc: "Nails are cleaned and the desired shape is determined." },
        { title: "Dry treatment", desc: "Cuticles and dead skin are removed without water." },
        { title: "Filing & polishing", desc: "Electric drills create a flawless surface." },
        { title: "Finishing", desc: "Color or strengthening treatment for a long-lasting result." },
      ],
    },
    biab: {
      name: "BIAB",
      subtitle: "BUILDER IN A BOTTLE",
      description:
        "BIAB (Builder In A Bottle) is a revolutionary treatment that strengthens your natural nails with a thin but resilient gel layer. Unlike acrylics, BIAB doesn't damage your nails — it protects and allows them to grow. Perfect for brittle or breaking nails.",
      duration: "60–75 min",
      price: "from €50",
      steps: [
        { title: "Nail preparation", desc: "Nails are cleaned and lightly buffed." },
        { title: "Primer & base", desc: "Adhesion is optimised with a professional primer." },
        { title: "BIAB application", desc: "The builder gel is built up layer by layer and cured." },
        { title: "Color & top coat", desc: "Color or natural finish, sealed with a durable top coat." },
      ],
    },
    gelnagels: {
      name: "Gel Nails",
      subtitle: "LONG-LASTING COLOR",
      description:
        "Gel nails are the perfect choice for long-lasting, glossy results. The gel polish is cured under a UV/LED lamp and lasts three to four weeks without chipping or peeling. Available in dozens of colors — from classic nude to bold accents.",
      duration: "60 min",
      price: "from €40",
      steps: [
        { title: "Cleaning & shaping", desc: "Nails are cleaned and filed to the desired shape." },
        { title: "Cuticle care", desc: "Cuticles are treated for a neat finish." },
        { title: "Gel application", desc: "Color is applied layer by layer and cured under UV/LED." },
        { title: "Finishing", desc: "Top coat for high gloss and lasting protection." },
      ],
    },
    pedicure: {
      name: "Pedicure",
      subtitle: "COMPLETE FOOT CARE",
      description:
        "A professional pedicure at Elite Nails includes complete care for your feet and toenails. From removing calluses and dry skin to treating cuticles and filing nails. Optionally finished with gel polish. Your feet deserve the best.",
      duration: "60–75 min",
      price: "from €40",
      steps: [
        { title: "Foot bath", desc: "Feet are soaked in a nourishing bath." },
        { title: "Callus & skin care", desc: "Calluses and dry skin are gently removed." },
        { title: "Nail care", desc: "Toenails are filed and cuticles treated." },
        { title: "Massage & finishing", desc: "Hydrating massage and optional gel polish on toenails." },
      ],
    },
    "wimper-wenkbrauw": {
      name: "Lash & Brow",
      subtitle: "LIFT, DEFINE & SHAPE",
      description:
        "Our lash and brow treatments give your gaze definition and depth. Lash lamination lifts and curls your natural lashes for an open-eyed look lasting weeks. Brow lamination smooths and sets brow hairs into a full, groomed shape. Both treatments use your own natural hair — no extensions needed.",
      duration: "45–60 min",
      price: "from €35",
      steps: [
        { title: "Consultation", desc: "Desired shape and lift are discussed." },
        { title: "Cleansing", desc: "Lashes and brows are thoroughly cleaned." },
        { title: "Lifting & lamination", desc: "Professional products lift, curl and set." },
        { title: "Tinting & finishing", desc: "Optional tint for extra depth and definition." },
      ],
    },
  },
  nl: {
    "russische-manicure": {
      name: "Russische Manicure",
      subtitle: "PRECISION CUTICLE CARE",
      description:
        "De Russische manicure is een professionele techniek waarbij de nagels en nagelriemen met extreme precisie worden verzorgd. Met gespecialiseerde elektrische vijlen worden dode huidcellen verwijderd zonder gebruik van water, waardoor de lak- of gellaag veel langer hecht. Het resultaat: verzorgde, elegante nagels die weken mooi blijven.",
      duration: "75–90 min",
      price: "vanaf €45",
      steps: [
        { title: "Voorbereiding", desc: "De nagels worden gereinigd en de vorm wordt bepaald." },
        { title: "Droge behandeling", desc: "Zonder water worden nagelriemen en dode huid verwijderd." },
        { title: "Vijlen & polijsten", desc: "Elektrische vijlen zorgen voor een perfecte oppervlakte." },
        { title: "Afwerking", desc: "Kleur of versterking naar keuze voor een langdurig resultaat." },
      ],
    },
    biab: {
      name: "BIAB",
      subtitle: "BUILDER IN A BOTTLE",
      description:
        "BIAB (Builder In A Bottle) is een revolutionaire behandeling die je natuurlijke nagels versterkt met een dunne maar sterke gellaag. Anders dan kunstnagels beschadigt BIAB je eigen nagels niet — het beschermt ze juist en laat ze groeien. Ideaal voor wie brosse of afbrekende nagels heeft.",
      duration: "60–75 min",
      price: "vanaf €50",
      steps: [
        { title: "Nagelvoorbereiding", desc: "Reiniging en lichte buffeuring van het nageloppervlak." },
        { title: "Primer & base", desc: "Hechting wordt geoptimaliseerd met een professionele primer." },
        { title: "BIAB aanbrengen", desc: "De builder gel wordt laag voor laag opgebouwd en uitgehard." },
        { title: "Kleur & top coat", desc: "Kleur of naturel finish naar wens, afgesloten met een duurzame topcoat." },
      ],
    },
    gelnagels: {
      name: "Gelnagels",
      subtitle: "LONG-LASTING COLOR",
      description:
        "Gelnagels zijn de perfecte keuze voor wie langdurig mooie, glanzende nagels wil. De gelpolish wordt onder een UV/LED-lamp uitgehard en gaat drie tot vier weken mee zonder af te bladderen of te schilferen. Beschikbaar in tientallen kleuren — van klassiek nude tot opvallende accenten.",
      duration: "60 min",
      price: "vanaf €40",
      steps: [
        { title: "Reiniging & vorming", desc: "Nagels worden gereinigd en in de gewenste vorm gevijld." },
        { title: "Cuticle care", desc: "Nagelriemen worden verzorgd voor een nette finish." },
        { title: "Gel applicatie", desc: "Kleur wordt laag voor laag aangebracht en uitgehard onder UV/LED." },
        { title: "Afwerking", desc: "Topcoat voor hoogglans en bescherming die weken meegaat." },
      ],
    },
    pedicure: {
      name: "Pedicure",
      subtitle: "COMPLETE FOOT CARE",
      description:
        "Een professionele pedicure bij Elite Nails omvat volledige verzorging van je voeten en teenagels. Van het verwijderen van eelt en droge huid tot het verzorgen van nagelriemen en het vijlen van teenagels. Optioneel met gelpolish voor de afwerking. Je voeten verdienen de beste zorg.",
      duration: "60–75 min",
      price: "vanaf €40",
      steps: [
        { title: "Voetenbad", desc: "Voeten worden geweekt in een verzorgend bad." },
        { title: "Eelt & huidverzorging", desc: "Eelt en droge huid worden voorzichtig verwijderd." },
        { title: "Nagelverzorging", desc: "Teenagels worden gevijld, nagelriemen verzorgd." },
        { title: "Massage & afwerking", desc: "Hydraterende massage en optioneel gelpolish op de teenagels." },
      ],
    },
    "wimper-wenkbrauw": {
      name: "Wimper & Wenkbrauw",
      subtitle: "LIFT, DEFINE & SHAPE",
      description:
        "Onze wimper- en wenkbrauwbehandelingen geven je blik definitie en diepte. Wimperlifting tilt en krult je eigen wimpers voor een oogopslag die weken meegaat. Wenkbrauwlamination sust en fixeert de wenkbrauwhaartjes in een volle, verzorgde vorm. Beide behandelingen zijn zonder extensions — volledig met je eigen haar.",
      duration: "45–60 min",
      price: "vanaf €35",
      steps: [
        { title: "Consultatie", desc: "Gewenste vorm en lift worden besproken." },
        { title: "Reiniging", desc: "Wimpers en wenkbrauwen worden grondig gereinigd." },
        { title: "Lifting & lamination", desc: "Professionele producten tillen, krullen en fixeren." },
        { title: "Kleuren & finishing", desc: "Optionele tinten voor extra diepte en definitie." },
      ],
    },
  },
  fr: {
    "russische-manicure": {
      name: "Manucure Russe",
      subtitle: "PRECISION CUTICLE CARE",
      description:
        "La manucure russe est une technique professionnelle à sec dans laquelle les ongles et les cuticules sont traités avec une précision extrême. Grâce à des fraises électriques spécialisées, les cellules mortes sont éliminées sans eau — ce qui permet au gel ou au vernis d'adhérer bien plus longtemps. Résultat : des ongles élégants et soignés qui restent parfaits pendant des semaines.",
      duration: "75–90 min",
      price: "à partir de €45",
      steps: [
        { title: "Préparation", desc: "Les ongles sont nettoyés et la forme est déterminée." },
        { title: "Traitement à sec", desc: "Les cuticules et la peau morte sont éliminés sans eau." },
        { title: "Limage & polissage", desc: "Les fraises électriques créent une surface parfaite." },
        { title: "Finition", desc: "Couleur ou soin renforçant au choix pour un résultat durable." },
      ],
    },
    biab: {
      name: "BIAB",
      subtitle: "BUILDER IN A BOTTLE",
      description:
        "Le BIAB (Builder In A Bottle) est un traitement révolutionnaire qui renforce vos ongles naturels avec une fine couche de gel résistante. Contrairement aux faux ongles, le BIAB ne les abîme pas — il les protège et leur permet de pousser. Idéal pour les ongles cassants ou fragiles.",
      duration: "60–75 min",
      price: "à partir de €50",
      steps: [
        { title: "Préparation des ongles", desc: "Nettoyage et légère ponçage de la surface de l'ongle." },
        { title: "Primer & base", desc: "L'adhérence est optimisée avec un primer professionnel." },
        { title: "Application du BIAB", desc: "Le gel builder est appliqué couche par couche et polymérisé." },
        { title: "Couleur & top coat", desc: "Finition colorée ou naturelle, scellée avec un top coat durable." },
      ],
    },
    gelnagels: {
      name: "Ongles en Gel",
      subtitle: "LONG-LASTING COLOR",
      description:
        "Les ongles en gel sont le choix parfait pour un résultat brillant et durable. Le gel-polish est polymérisé sous lampe UV/LED et tient trois à quatre semaines sans s'écailler. Disponible en dizaines de couleurs — du nude classique aux accents audacieux.",
      duration: "60 min",
      price: "à partir de €40",
      steps: [
        { title: "Nettoyage & mise en forme", desc: "Les ongles sont nettoyés et limés selon la forme souhaitée." },
        { title: "Soin des cuticules", desc: "Les cuticules sont soignées pour une finition nette." },
        { title: "Application du gel", desc: "La couleur est appliquée couche par couche et polymérisée sous UV/LED." },
        { title: "Finition", desc: "Top coat pour brillance et protection durables." },
      ],
    },
    pedicure: {
      name: "Pédicure",
      subtitle: "COMPLETE FOOT CARE",
      description:
        "Une pédicure professionnelle chez Elite Nails comprend les soins complets de vos pieds et ongles d'orteil. De l'élimination des callosités et de la peau sèche au soin des cuticules et au limage. En option avec gel-polish pour la finition. Vos pieds méritent les meilleurs soins.",
      duration: "60–75 min",
      price: "à partir de €40",
      steps: [
        { title: "Bain de pieds", desc: "Les pieds sont trempés dans un bain nourrissant." },
        { title: "Soin des callosités", desc: "Les callosités et la peau sèche sont doucement éliminées." },
        { title: "Soin des ongles", desc: "Les ongles d'orteil sont limés, les cuticules soignées." },
        { title: "Massage & finition", desc: "Massage hydratant et gel-polish en option sur les ongles d'orteil." },
      ],
    },
    "wimper-wenkbrauw": {
      name: "Cils & Sourcils",
      subtitle: "LIFT, DEFINE & SHAPE",
      description:
        "Nos soins cils et sourcils donnent du caractère à votre regard. Le lifting des cils relève et boucle vos cils naturels pour un regard ouvert qui dure des semaines. La lamination des sourcils lisse et fixe les poils pour une forme pleine et soignée. Les deux traitements utilisent vos propres cils — sans extensions.",
      duration: "45–60 min",
      price: "à partir de €35",
      steps: [
        { title: "Consultation", desc: "La forme et le lift souhaités sont discutés." },
        { title: "Nettoyage", desc: "Les cils et sourcils sont soigneusement nettoyés." },
        { title: "Lifting & lamination", desc: "Des produits professionnels lèvent, bouclent et fixent." },
        { title: "Teinture & finition", desc: "Teinte optionnelle pour plus de profondeur et de définition." },
      ],
    },
  },
  ru: {
    "russische-manicure": {
      name: "Русский Маникюр",
      subtitle: "PRECISION CUTICLE CARE",
      description:
        "Русский маникюр — профессиональная сухая техника, при которой ногти и кутикула обрабатываются с исключительной точностью. С помощью специализированных электрических фрез омертвевшие клетки кожи удаляются без воды — это позволяет гелю или лаку держаться значительно дольше. Результат: ухоженные, элегантные ногти, которые остаются безупречными неделями.",
      duration: "75–90 мин",
      price: "от €45",
      steps: [
        { title: "Подготовка", desc: "Ногти очищаются, определяется желаемая форма." },
        { title: "Сухая обработка", desc: "Кутикула и омертвевшая кожа удаляются без воды." },
        { title: "Опиловка и полировка", desc: "Электрические фрезы создают идеальную поверхность." },
        { title: "Завершение", desc: "Цвет или укрепление на выбор для долговременного результата." },
      ],
    },
    biab: {
      name: "BIAB",
      subtitle: "BUILDER IN A BOTTLE",
      description:
        "BIAB (Builder In A Bottle) — революционная процедура, укрепляющая натуральные ногти тонким, но прочным слоем геля. В отличие от наращивания, BIAB не повреждает ногти — он защищает и укрепляет их. Идеально для ломких или слоящихся ногтей.",
      duration: "60–75 мин",
      price: "от €50",
      steps: [
        { title: "Подготовка ногтей", desc: "Очистка и лёгкая полировка поверхности ногтя." },
        { title: "Праймер и база", desc: "Адгезия оптимизируется профессиональным праймером." },
        { title: "Нанесение BIAB", desc: "Гель наносится послойно и полимеризуется под лампой." },
        { title: "Цвет и топ", desc: "Цветное или натуральное покрытие, закреплённое топ-слоем." },
      ],
    },
    gelnagels: {
      name: "Гель-лак",
      subtitle: "LONG-LASTING COLOR",
      description:
        "Гель-лак — идеальный выбор для долговечного блестящего результата. Покрытие отверждается под UV/LED лампой и держится три-четыре недели без скалывания. Доступен в десятках цветов — от классического нюд до ярких акцентов.",
      duration: "60 мин",
      price: "от €40",
      steps: [
        { title: "Очистка и форма", desc: "Ногти очищаются и придаётся желаемая форма." },
        { title: "Уход за кутикулой", desc: "Кутикула обрабатывается для аккуратного результата." },
        { title: "Нанесение геля", desc: "Цвет наносится послойно и полимеризуется под UV/LED." },
        { title: "Завершение", desc: "Топ для блеска и защиты, которая держится неделями." },
      ],
    },
    pedicure: {
      name: "Педикюр",
      subtitle: "COMPLETE FOOT CARE",
      description:
        "Профессиональный педикюр в Elite Nails включает полный уход за стопами и ногтями. От удаления мозолей и сухой кожи до обработки кутикулы и опиловки ногтей. По желанию — гель-лак для завершения. Ваши ноги заслуживают лучшего.",
      duration: "60–75 мин",
      price: "от €40",
      steps: [
        { title: "Ванночка для ног", desc: "Ноги замачиваются в питательной ванночке." },
        { title: "Уход за кожей", desc: "Мозоли и сухая кожа аккуратно удаляются." },
        { title: "Уход за ногтями", desc: "Ногти опиливаются, кутикула обрабатывается." },
        { title: "Массаж и завершение", desc: "Увлажняющий массаж и гель-лак по желанию." },
      ],
    },
    "wimper-wenkbrauw": {
      name: "Ресницы и Брови",
      subtitle: "LIFT, DEFINE & SHAPE",
      description:
        "Наши процедуры для ресниц и бровей придают взгляду выразительность и глубину. Ламинирование ресниц поднимает и завивает натуральные ресницы — эффект открытого взгляда сохраняется неделями. Ламинирование бровей фиксирует волоски в аккуратной пышной форме. Обе процедуры выполняются с вашими собственными волосками — без наращивания.",
      duration: "45–60 мин",
      price: "от €35",
      steps: [
        { title: "Консультация", desc: "Обсуждается желаемая форма и степень подъёма." },
        { title: "Очищение", desc: "Ресницы и брови тщательно очищаются." },
        { title: "Ламинирование", desc: "Профессиональные продукты поднимают, завивают и фиксируют." },
        { title: "Окрашивание и финиш", desc: "Окрашивание по желанию для глубины и выразительности." },
      ],
    },
  },
};

const imageMap: Record<string, string> = {
  "russische-manicure": "/services/russian-manicure.jpg",
  biab: "/services/biab.jpg",
  gelnagels: "/services/gel-nails.jpg",
  pedicure: "/services/pedicure.jpg",
  "wimper-wenkbrauw": "/services/lash-lamination.jpg",
};

// SEO-optimised titles & descriptions for NL service pages (from brand guidelines)
const nlSeoMeta: Record<string, { title: string; description: string }> = {
  "russische-manicure": {
    title: "Russische Manicure Lierde | Droge Techniek | Elite Nails",
    description:
      "Professionele Russische manicure bij Elite Nails in Sint-Martens-Lierde. Droge techniek voor perfect gehechte gel en langdurig resultaat. Boek nu!",
  },
  biab: {
    title: "BIAB Nagels Lierde | Builder In A Bottle | Elite Nails",
    description:
      "BIAB bij Elite Nails — versterkende gel op de natuurlijke nagel voor stevige, mooie nagels. Studio in Sint-Martens-Lierde. Boek via Instagram.",
  },
  gelnagels: {
    title: "Gelnagels Lierde | Professionele Gelmanicure | Elite Nails",
    description:
      "Prachtige gelnagels bij Elite Nails in Sint-Martens-Lierde — gecombineerd met Russische manicuretechniek voor langdurig, perfect resultaat. Boek!",
  },
  pedicure: {
    title: "Pedicure Lierde | Professionele Voetverzorging | Elite Nails",
    description:
      "Professionele pedicure bij Elite Nails in Sint-Martens-Lierde. Verzorgde, mooie voeten in een cozy studio. Op 10 min van Geraardsbergen. Boek nu!",
  },
  "wimper-wenkbrauw": {
    title: "Wimpers Lamineren Lierde | Lash Lift | Elite Nails",
    description:
      "Wimpers lamineren bij Elite Nails in Sint-Martens-Lierde. Volle, gebogen wimpers zonder dagelijkse mascara. Professioneel & langdurig resultaat.",
  },
};

const locales = ["en", "nl", "fr", "ru"];
const slugs = ["russische-manicure", "biab", "gelnagels", "pedicure", "wimper-wenkbrauw"];

// Navigation labels per locale (matches serviceData names)
function getServiceName(locale: string, slug: string): string {
  const localeData = serviceData[locale] ?? serviceData["en"];
  return localeData?.[slug]?.name ?? slug;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const localeData = serviceData[locale] ?? serviceData["en"];
  const service = localeData?.[slug];
  if (!service) return {};

  const BASE_URL = "https://www.elitenails.biz";
  const canonical = `${BASE_URL}/${locale}/diensten/${slug}`;
  const imageUrl = imageMap[slug] ?? "/services/russian-manicure.jpg";

  // Use SEO-optimised meta for NL; fall back to service data for other locales
  const nlOverride = locale === "nl" ? nlSeoMeta[slug] : undefined;
  const metaTitle = nlOverride
    ? nlOverride.title
    : `${service.name} | Elite Nails Lierde`;
  const metaDescription = nlOverride ? nlOverride.description : service.description;

  return {
    title: nlOverride ? { absolute: nlOverride.title } : service.name,
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      images: [
        {
          url: `${BASE_URL}${imageUrl}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const localeData = serviceData[locale] ?? serviceData["en"];
  const service = localeData?.[slug];
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "servicePage" });

  const imageUrl = imageMap[slug] ?? "/services/russian-manicure.jpg";

  // Prev / Next navigation
  const slugIndex = slugs.indexOf(slug);
  const prevSlug = slugIndex > 0 ? slugs[slugIndex - 1] : null;
  const nextSlug = slugIndex < slugs.length - 1 ? slugs[slugIndex + 1] : null;
  const prevName = prevSlug ? getServiceName(locale, prevSlug) : null;
  const nextName = nextSlug ? getServiceName(locale, nextSlug) : null;

  const BASE_URL = "https://www.elitenails.biz";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}/${locale}/diensten/${slug}`,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Elite Nails",
      url: BASE_URL,
      telephone: "+32494175267",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Steenweg 234b",
        addressLocality: "Sint-Martens-Lierde",
        postalCode: "9572",
        addressCountry: "BE",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: service.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    },
    areaServed: {
      "@type": "City",
      name: "Sint-Martens-Lierde",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Floating prev / next service arrows */}
      {prevSlug && (
        <Link
          href={`/${locale}/diensten/${prevSlug}`}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 group flex items-center gap-2"
          aria-label={`Previous: ${prevName}`}
        >
          <div className="flex items-center gap-2 rounded-full bg-charcoal/80 border border-white/10 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 group-hover:border-mauve/40 group-hover:bg-mauve/10">
            <span className="text-white/60 group-hover:text-white text-base leading-none transition-colors">&#8592;</span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/0 group-hover:max-w-[120px] group-hover:text-white/80 transition-all duration-300 font-sans tracking-wide">
              {prevName}
            </span>
          </div>
        </Link>
      )}
      {nextSlug && (
        <Link
          href={`/${locale}/diensten/${nextSlug}`}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-50 group flex items-center gap-2"
          aria-label={`Next: ${nextName}`}
        >
          <div className="flex items-center gap-2 rounded-full bg-charcoal/80 border border-white/10 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 group-hover:border-mauve/40 group-hover:bg-mauve/10">
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/0 group-hover:max-w-[120px] group-hover:text-white/80 transition-all duration-300 font-sans tracking-wide text-right">
              {nextName}
            </span>
            <span className="text-white/60 group-hover:text-white text-base leading-none transition-colors">&#8594;</span>
          </div>
        </Link>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
        <Link
          href={`/${locale}/#services`}
          className="text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span>
          <span>{t("backLink")}</span>
        </Link>
        <Link
          href={`/${locale}`}
          className="text-cream font-serif text-lg font-light tracking-[0.15em] uppercase"
        >
          Elite Nails
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-cream/60 hover:text-mauve text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </nav>

      <main className="bg-charcoal min-h-screen text-cream">
        <section className="relative h-[70vh] min-h-[500px] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={service.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" />
          </div>
          <div className="relative z-10 px-6 md:px-16 pb-16 w-full">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
              {service.subtitle}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-cream leading-none">
              {service.name}
            </h1>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 max-w-4xl">
          <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed mb-12">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("durationLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.duration}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("priceLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.price}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("locationLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {t("locationValue")}
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 border-t border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-12">
            {t("processLabel")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {service.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-serif text-5xl font-light text-white/10 leading-none select-none flex-shrink-0 w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-cream text-sm tracking-[0.15em] uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              {t("bookingHeading")}
            </h2>
            <p className="text-cream/60 text-sm font-light">
              {t("bookingBody")}
            </p>
          </div>
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-mauve text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-mauve/20 transition-colors duration-300"
          >
            {t("bookingCta")}
          </a>
        </section>
      </main>

      <footer className="bg-charcoal border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
          &#169; {new Date().getFullYear()} Elite Nails &#183; Lierde
        </p>
        <Link
          href={`/${locale}`}
          className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          &#8592; {t("backLink")}
        </Link>
      </footer>
    </>
  );
}
