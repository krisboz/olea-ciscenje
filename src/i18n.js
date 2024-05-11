import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "hr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    hr: {
      translation: {
        title: "Servis za čišćenje Olea",
        titleSubtext: "Apartmani, Kuće i Ville",
        home: "Naslovna",
        homeBtnVal: "Otkrijte cijene i kontaktirajte nas",
        about: "O nama",
        bedroom: "Spavaća Soba",
        bedroomPlural: "Spavaće Sobe",
        wc: "Kupaonica",
        wcPlural: "Kupaonice",
        and: "i",
        smallApartments: "do 35m2",
        hitno: "**Hitne intervencije prema dogovoru",
        udaljenost: "Do 10 km udaljenosti bez putne nadoplate",
        pricelistTitle: "CJENIK",
        pricelistTableHeaderOne: "Veličina nekretnine",
        pricelistTableHeaderTwo: "Cijena",
        contactTitle: "Kontaktirajte nas!",
        servicesTitle: "Naše Usluge",
        servicesPOne:
          "Naše usluge uključuju sve što je potrebno kako biste uživali u čistom i svježem prostoru. ",
        servicesPTwo:
          "Počevši od brisanja prašine sa svih vidljivih površina i uklanjanja paučine, preko usisavanja podova i tepiha, pranja podova, čišćenja kupaonica i toaleta te dezinfekcije sanitarija, pa sve do brisanja kuhinjskih elemenata izvana i ogledala.",
        servicesPThree:
          " Također, iznosimo smeće i peremo prozore (izuzev grilja i roleta) kako biste mogli uživati u kristalno čistom pogledu iz svog doma. Na kraju, završavamo mijenjanjem posteljine kako biste se mogli opustiti u udobnom i čistom okruženju.",

        servicesPFour:
          " Vaša udobnost i zadovoljstvo su naša najveća briga, stoga nam se s povjerenjem obratite kako bismo Vaš dom učinili blistavim.",

        termsMainHeading: "Opći uvjeti poslovanja",
        termsSubHeading1: "Uvjeti korištenja usluga",
        termsPara1:
          "Uvjeti korištenja naših usluga se odnose na obveze definirane prethodno sklopljenim Ugovorom o poslovnoj suradnji. Obveze se utvrđuju prilikom dogovora oko sklapanja usluge čišćenja. Obveze su jasno istaknute u ponudi koju Klijent u znak prihvaćanja potpisuje i ovjerava. Na temelju ovjerene ponude se izrađuje Ugovor o poslovnoj suradnji sa Klijentom. Ugovor o poslovnoj suradnji se potpisuje i ovjerava pečatom od strane Izvođača radova i Klijenta prije samog početka pružanja definirane usluge čišćenja.",
        termsPara2:
          "      Općenito korištenje naših usluga može biti: jednokratno, tjedno, mjesečno ili prema dogovoru.",
        termsSubHeading2: "UVJETI RADA",
        termsPara3:
          "U slučaju da je za našeg djelatnika ugrožena sigurnost rada, slobodni smo ga opozvati sa mjesta pružanja usluge čišćenja.",
        termsSubHeading3: "Oprema i sredstva za čišćenje",
        termsPara4:
          "Za rad koristimo svoju opremu za čišćenje te sredstva za čišćenje koja su ekološki prihvatljiva te nisu štetna za zdravlje čovjeka. Također se mogu koristiti sredstva za čišćenje koja osigurava Klijent, ukoliko je tako utvrđeno prilikom dogovora oko sklapanja usluge čišćenja.",
        termsSubHeading4: "Obveze Klijenta",
        termsPara5:
          "Klijent treba osigurati toplu vodu i struju. Također u dogovorenom terminu čišćenja treba osigurati pristup lokaciji odnosno predati ključeve objekta za čišćenje te onesposobiti alarmni sustav ukoliko ga ima.",

        termsPara6:
          "Ukoliko je našim djelatnicima onemogućen ulaz na dogovorenu lokaciju, zadržavamo pravo naplate dogovorene usluge.",

        termsPara7:
          "U slučaju otkazivanja dogovorenog termina, Klijent nas je u obvezi obavijestiti o tome 48 sati prije dogovorenog termina.",

        termsPara8:
          "Poslije naših obavljenih usluga, Klijent je u obvezi provjeriti kvalitetu našeg obavljenog posla te nas je u slučaju nezadovoljstva ili nepravilnosti u radu, dužan obavijestiti o tome unutar 24 sata.",
        agbs: "Opći uvjeti",
      },
    },
    en: {
      translation: {
        title: "Olea Cleaning Service",
        titleSubtext: "Apartments, Houses, Villas",

        home: "Home",
        homeBtnVal: "Explore prices and contact us",

        about: "About us",
        bedroom: "Bedroom",
        bedroomPlural: "Bedrooms",
        wc: "Bathroom",
        wcPlural: "Bathrooms",
        and: "&",
        smallApartments: "up to 35m2",
        hitno: "**Emergency appointments as per agreement",
        udaljenost: "No travel surcharge within a 10 km radius",
        pricelistTitle: "PRICE LIST",
        pricelistTableHeaderOne: "Real Estate Size",
        pricelistTableHeaderTwo: "Price",
        contactTitle: "Get in touch!",
        servicesTitle: "Our Services",
        servicesPOne:
          "Our services include everything necessary to enjoy a clean and fresh space.  We also take the trash out and wash the windows (excluding blinds) so you can enjoy a crystal-clear view from your home. Finally, we finish by changing the bedding so you can relax in a comfortable and clean environment. Your comfort and satisfaction are our greatest concern, so entrust us to  make your home shine brightly.",
        servicesPTwo:
          "Starting from dusting all visible surfaces and removing cobwebs, to vacuuming floors and carpets, washing floors, cleaning bathrooms and toilets and disinfecting the sanitary facilities, all the way to wiping kitchen elements externally and mirrors.",
        servicesPThree:
          "We also take the trash out and wash the windows (excluding blinds) so you can enjoy a crystal-clear view from your home. Finally, we finish by changing the bedding so you can relax in a comfortable and clean environment. ",

        servicesPFour:
          "Your comfort and satisfaction are our greatest concern, so entrust us to  make your home shine brightly.",

        termsMainHeading: "General Terms of Business",
        termsSubHeading1: "Terms of Service",
        termsPara1:
          "The terms of service for our services relate to the obligations defined in the previously concluded Business Cooperation Agreement. Obligations are determined when negotiating the provision of cleaning services. Obligations are clearly outlined in the offer that the Client signs and certifies as accepted. Based on the certified offer, a Business Cooperation Agreement is prepared with the Client. The Business Cooperation Agreement is signed and certified with a seal by the Contractor and the Client before the commencement of the defined cleaning service.",
        termsPara2:
          "Generally, the usage of our services can be: one-time, weekly, monthly, or as agreed upon.",
        termsSubHeading2: "Terms of Work",
        termsPara3:
          "In the event the safety of our employee is compromised, we reserve the right to recall them from the cleaning service location.",
        termsSubHeading3: "Equipment and Cleaning Materials",
        ptermsPara4:
          "We use our own cleaning equipment and environmentally friendly cleaning agents that are not harmful to human health. Client-provided cleaning agents may also be used if agreed upon when arranging the cleaning service.",
        termsSubHeading4: "Client Obligations",
        termsPara5:
          "The Client must provide hot water and electricity. Also, during the agreed cleaning time, access to the location must be ensured, including handing over keys to the cleaning location and disabling the alarm system if present.",
        termsPara6:
          "If our employees are unable to access the agreed location, we reserve the right to charge for the agreed-upon service.",
        termsPara7:
          "In the event of cancellation of the agreed appointment, the Client is obligated to notify us 48 hours prior to the agreed appointment.",
        termsPara8:
          "After our services have been completed, the Client is obligated to check the quality of our work, and in case of dissatisfaction or irregularities in the work, notify us within 24 hours.",
        agbs: "Terms and Conditions",
      },
    },
    de: {
      translation: {
        title: "Olea Reinigungsdienst",
        titleSubtext: "Wohnungen, Häuser, Villen",

        home: "Home",
        homeBtnVal: "Preise erkunden und uns kontaktieren",

        about: "Über uns",
        bedroom: "Schlafzimmer",
        bedroomPlural: "Schlafzimmer",
        wc: "Badezimmer",
        wcPlural: "Badezimmer",
        and: "und",
        smallApartments: "bis 35 m2",
        hitno: "**Notfalleinsätze nach Vereinbarung",
        udaljenost: "Bis zu 10 km Entfernung kein Reisezuschlag",

        pricelistTitle: "PREISLISTE",
        pricelistTableHeaderOne: "Immobilien Grösse",
        pricelistTableHeaderTwo: "Preis",
        contactTitle: "Kontaktieren Sie uns!",
        servicesTitle: "Unsere Dienstleistungen",
        servicesPOne:
          "Unsere Dienstleistungen umfassen alles, was nötig ist, damit Sie eine saubere und frische Umgebung genießen können.  Außerdem bringen wir den Müll raus und reinigen die Fenster (außer Gittern und Jalousien), damit Sie eine kristallklare Sicht von Ihrem Zuhause aus genießen können. Abschließend wechseln wir die Bettwäsche, damit Sie sich in einer komfortablen und sauberen Umgebung entspannen können. Ihr Komfort und Ihre Zufriedenheit liegen uns am Herzen, daher vertrauen Sie uns, um Ihr Zuhause strahlen zu lassen.",
        servicesPTwo:
          "Angefangen beim Abstauben aller sichtbaren Oberflächen und Entfernen von Spinnweben, über das Staubsaugen von Böden und Teppichen, das Wischen von Böden, die Reinigung von Badezimmern und Toiletten sowie die Desinfektion von Sanitäreinrichtungen, bis hin zum Abwischen der Küchenelemente außen und der Spiegel.",
        servicesPThree:
          "Außerdem bringen wir den Müll raus und reinigen die Fenster (außer Gittern und Jalousien), damit Sie eine kristallklare Sicht von Ihrem Zuhause aus genießen können. Abschließend wechseln wir die Bettwäsche, damit Sie sich in einer komfortablen und sauberen Umgebung entspannen können.",
        servicesPFour:
          " Ihr Komfort und Ihre Zufriedenheit liegen uns am Herzen, daher vertrauen Sie uns, um Ihr Zuhause strahlen zu lassen.",

        termsMainHeading: "Allgemeine Geschäftsbedingungen",
        termsSubHeading1: "Nutzungsbedingungen",
        termsPara1:
          "Die Nutzungsbedingungen für unsere Dienstleistungen beziehen sich auf die im zuvor abgeschlossenen Geschäftskooperationsvertrag definierten Verpflichtungen. Die Verpflichtungen werden bei der Vereinbarung der Bereitstellung von Reinigungsdiensten festgelegt. Die Verpflichtungen sind deutlich in dem Angebot dargelegt, das der Kunde unterschreibt und als akzeptiert bestätigt. Basierend auf dem bestätigten Angebot wird ein Geschäftskooperationsvertrag mit dem Kunden erstellt. Der Geschäftskooperationsvertrag wird vom Auftragnehmer und dem Kunden vor Beginn des definierten Reinigungsdienstes unterschrieben und mit einem Siegel beglaubigt.",
        termsPara2:
          "Im Allgemeinen kann die Nutzung unserer Dienstleistungen einmalig, wöchentlich, monatlich oder nach Vereinbarung erfolgen.",
        termsSubHeading2: "Arbeitsbedingungen",
        termsPara3:
          "Im Falle einer Gefährdung der Sicherheit unserer Mitarbeiter behalten wir uns das Recht vor, sie vom Reinigungsort zurückzurufen.",
        termsSubHeading3: "Ausrüstung und Reinigungsmaterialien",
        termsPara4:
          "Wir verwenden unsere eigenen Reinigungsgeräte und umweltfreundliche Reinigungsmittel, die für die menschliche Gesundheit nicht schädlich sind. Vom Kunden bereitgestellte Reinigungsmittel können ebenfalls verwendet werden, wenn dies bei der Vereinbarung der Reinigungsdienstleistung vereinbart wurde.",
        termsSubHeading4: "Kundenverpflichtungen",
        termsPara5:
          "Der Kunde muss heißes Wasser und Strom bereitstellen. Auch während der vereinbarten Reinigungszeit muss der Zugang zum Standort sichergestellt werden, einschließlich der Übergabe von Schlüsseln zum Reinigungsort und der Deaktivierung der Alarmanlage, falls vorhanden.",
        termsPara6:
          "Wenn unsere Mitarbeiter keinen Zugang zum vereinbarten Standort haben, behalten wir uns das Recht vor, für den vereinbarten Service zu berechnen.",
        termsPara7:
          "Im Falle der Stornierung des vereinbarten Termins ist der Kunde verpflichtet, uns 48 Stunden vor dem vereinbarten Termin zu benachrichtigen.",
        termsPara8:
          "Nach Abschluss unserer Dienstleistungen ist der Kunde verpflichtet, die Qualität unserer Arbeit zu überprüfen und uns bei Unzufriedenheit oder Unregelmäßigkeiten in der Arbeit innerhalb von 24 Stunden zu benachrichtigen.",
        agbs: "AGB",
      },
    },
  },
});

export default i18n;
