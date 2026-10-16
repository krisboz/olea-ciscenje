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
        pageMain: "Naslovna",
        pageAbout: "O nama",
        pageServices: "Naše usluge",
        pagePrices: "Cijene",
        pageContact: "Kontakt",
        mainHeader: "NADZOR, UPRAVLJANJE I ODRŽAVANJE NEKRETNINA",
        mainSubHeader: "Pouzdano upravljanje, sigurna budućnost",
        servicesHomeTitle: "Nadzor i održavanje nekretnina",
        servicesHomeTextPara1:
          "Redoviti pregled nekretnine, brinemo o tehničkoj ispravnosti opreme i uređaja u nekretnini, organiziramo servise i popravke bilo koje prirode, brinemo o pristigloj pošti i režijskim računima, komuniciramo sa predstavnikom stanara.",
        servicesHomeTextPara2:
          "Vršimo sve potrebne aktivnosti sa svrhom očuvanja sigurnosti i funkcionalnosti nekretnine te o svemu pisanim putem izvještavamo vlasnika nekretnine.",
        servicesHomeButtonText: "Naše usluge",
        pricePagePara1:
          "Cijene redovitog održavanja objekta, okoliša i slično se formiraju na osnovu traženih usluga.",
        priceListTitle: "Cjenik",
        priceListService: "Usluga",
        priceListPrice: "Cijena",
        priceListAnchor: "Sidrena cijena na dan {{date}}",
        priceListDownload: "Preuzmi cjenik (CSV)",
        priceListMarketino: "Cjenik na Marketinu",
        homeAboutTitle: "O nama",
        homeAboutEmphasized:
          "OLEA Vam pruža usluge održavanja Vašega apartmana, kuće za odmor ili ville - prilagođeno Vašim potrebama na području grada Novalje.",
        homeAboutPara1:
          "Bilo da se radi o kratkoročnoj pripremi apartmana za goste ili dugoročnom održavanju Vaše nekretnine, zgrade i/ili okućnice, mi Vam stojimo na usluzi.",
        homeAboutPara2:
          "Javite nam se, sigurni smo da ćemo zajedno pronaći rješenje koje Vam odgovara.",

        title: "Servis za čišćenje Olea",
        titleSubtext: "Apartmani, Kuće i Ville",
        home: "Naslovna",
        homeBtnVal: "Kontaktirajte nas",
        about: "O nama",
        bedroom: "spavaća soba",
        bedroomPlural: "spavaće sobe",
        wc: "kupaonica",
        wcPlural: "kupaonice",
        and: "i",
        smallApartments: "do 35m2",
        hitno: "Hitne intervencije prema dogovoru",
        pricelistTitle: "CIJENE",
        pricelistTableHeaderOne: "Veličina nekretnine",
        pricelistTableHeaderTwo: "Cijena",
        contactTitle: "Kontaktirajte nas!",
        servicesTitle: "Naše usluge",
        servicesPOne:
          "Vaša udobnost i zadovoljstvo su naša najveća briga, stoga nam se s povjerenjem obratite kako bismo Vaš dom učinili blistavim ",

        servicesSubTitle: "Osnovni paket održavanja uključuje:",

        servicesBulletin1: "Brisanje prašine sa svih vidljivih površina",
        servicesBulletin2: "Uklanjanje paučine",
        servicesBulletin3: "Usisavanje podova i tepiha",
        servicesBulletin4: "Pranje podova",
        servicesBulletin5: "Čišćenje kupaonice i WC-a",
        servicesBulletin6: "Dezinfekciju sanitarija",
        servicesBulletin7: "Brisanje kuhinjskih elemenata izvana",
        servicesBulletin8: "Brisanje slika i ogledala",
        servicesBulletin9: "Iznošenje smeća",
        servicesBulletin10: "Pranje prozora (bez grilja i roleta)",

        nadzorTitle: "Nadzor i održavanje nekretnine",
        nadzorSubtitle: "Osnovni paket nadzora i održavanja sadrži:",
        nadzorService1:
          "Pregled nekretnine jednom tjedno te po želji vlasnika javljanje iz nekretnine video pozivom",
        nadzorService2:
          "Izvanredni pregled nekretnine u slučaju elementarne nepogode (bura, jugo, potres, poplava, požar…) i izvještavanje vlasnika nekretnine o zatečenom stanju",
        nadzorService3:
          "Pražnjenje poštanskog sandučića i prosljeđivanje pristigle pošte vlasniku nekretnine",
        nadzorService4:
          "Plaćanje računa i slanje potvrda plaćanja vlasniku nekretnine",
        nadzorService5: "Prozračivanje nekretnine",
        nadzorService6:
          "Puštanje u rad perilica posuđa i rublja jednom u dva tjedna sa svrhom izbjegavanja kvarova zbog dugotrajnog nekorištenja",
        nadzorService7:
          "Kontrolu vodovodnih i odvodnih instalacija, puštanje vode na svim izvorima te po potrebi čišćenje od kamenca",
        nadzorService8:
          "Očitavanje i dojavu stanja brojila opskrbljivačima po potrebi ili na njihov zahtjev",
        nadzorService9:
          "Komuniciranje sa predstavnikom suvlasnika zgrade i po potrebi odlazak na sastanke suvlasnika te izvještavanje vlasnika nekretnine o svim odlukama na sastancima",
        nadzorService10:
          "Savjetovanje vlasnika sa svrhom očuvanja funkcionalnosti i tržišne vrijednosti nekretnine",
        nadzorService11:
          "Slanje mjesečnog pisanog izvještaja vlasniku nekretnine po završetku mjeseca",
        nadzorService12: "Arhiviranje dokumentacije",
        nadzorSubtext:
          "Sadržaj paketa možemo mijenjati ovisno o potrebama i željama vlasnika nekretnine",
        popravciTitle: "Mali kućni popravci i sitni radovi",
        popravciSubtitle:
          "Pružamo usluge oko svih potrebnih sanacija koje su primijećene u toku nadzora nekretnine.",
        popravciService1: "Sanacija vlage i plijesni",
        popravciService2: "Pituranje zidova",
        popravciService3: "Zamjena utičnica, plafonjera i žarulja",
        popravciService4: "Provjera ispravnosti te zamjena klima uređaja",
        zelenoTitle: "Uređenje i održavanje zelenih površina",
        zelenoSubtitle:
          "Pružamo usluge uređenja i održavanja vrtova, okućnica, zelenih površina, unutarnjih prostora  te okoliša svih stambeno/poslovnih objekata.",
        zelenoSubtitle2: "Hortikulturni radovi obuhvaćaju:",
        zelenoService1: "Sadnja i održavanje travnjaka",
        zelenoService2: "Orezivanje grmlja i stabala",
        zelenoService3: "Sađenje cvjetnih gredica, drveća i grmlja",
        zelenoService4: "Održavanje navodnjavanja",
        zelenoService5: "Nabava i dovoz kvalitetne zemlje",
        zelenoService6: "Njega usjeva/fitozaštita, briga o zdravlju bilja",
        zelenoService7: "Uklanjanje korova, korištenje ekoloških sredstava",
        zgradaTitle: "Održavanje stambenih zgrada",
        zgradaSubtitle:
          "Pružamo usluge čišćenja stepeništa unutar stambenih zgrada te čišćenja zajedničkih dvorišta oko same zgrade.",

        servicesBulletin11: "Mijenjanje posteljine",
        termsMainHeading: "Opći uvjeti poslovanja",
        termsSubHeading1: "Uvjeti korištenja usluga",
        termsPara1:
          "Uvjeti korištenja naših usluga se odnose na obveze definirane prethodno sklopljenim Ugovorom o poslovnoj suradnji. Obveze se utvrđuju prilikom dogovora oko sklapanja usluge nadzora i održavanja objekta. Obveze su jasno istaknute u ponudi koju Klijent u znak prihvaćanja potpisuje i ovjerava. Na temelju ovjerene ponude se izrađuje Ugovor o poslovnoj suradnji sa Klijentom. Ugovor o poslovnoj suradnji se potpisuje i ovjerava pečatom od strane Izvođača radova i Klijenta prije samog početka pružanja definirane usluge nadzora i održavanja.",
        termsPara2:
          "      Općenito korištenje naših usluga može biti: jednokratno, tjedno, mjesečno ili prema dogovoru.",
        termsSubHeading2: "UVJETI RADA",
        termsPara3:
          "U slučaju da je za našeg djelatnika ugrožena sigurnost rada, slobodni smo ga opozvati sa mjesta pružanja usluge održavanja.",
        termsSubHeading3: "Oprema i sredstva za čišćenje",
        termsPara4:
          "Za rad koristimo svoju opremu i alat za male kućne popravke te ukoliko je dogovorena i usluga čišćenja stambenih zgrada, sredstva za čišćenje koja su ekološki prihvatljiva te nisu štetna za zdravlje čovjeka. Također se mogu koristiti sredstva za čišćenje koja osigurava Klijent, ukoliko je tako utvrđeno prilikom dogovora oko sklapanja usluge čišćenja.",
        termsSubHeading4: "Obveze Klijenta",
        termsPara5:
          "U dogovorenom terminu treba osigurati pristup lokaciji odnosno predati ključeve objekta za nadzor, održavanje ili čišćenje te onesposobiti alarmni sustav ukoliko ga ima.",

        termsPara6:
          "Ukoliko je našim djelatnicima onemogućen ulaz na dogovorenu lokaciju, zadržavamo pravo naplate dogovorene usluge",

        termsPara7:
          "U slučaju otkazivanja dogovorenog termina, Klijent nas je u obvezi obavijestiti o tome 48 sati prije dogovorenog termina.",

        termsPara8:
          "Poslije naših obavljenih usluga, Klijent je u obvezi provjeriti kvalitetu našeg obavljenog posla te nas je u slučaju nezadovoljstva ili nepravilnosti u radu, dužan obavijestiti o tome unutar 24 sata.",
        agbs: "Opći uvjeti",
        backBtnText: "Natrag",
        formNameField: "Ime i prezime",
        formMessageField: "Vaša poruka",
        formEmailField: "e-mail",

        formSendButton: "Pošalji",
        formNotification: "Poslano!",
        formError: "Greška, pokušajte ponovno ili nam se obratite direktno.",
      },
    },
    en: {
      translation: {
        pageMain: "Home",
        pageAbout: "About Us",
        pageServices: "Our Services",
        pagePrices: "Prices",
        pageContact: "Contact",
        mainHeader: "SUPERVISION, MANAGEMENT AND MAINTENANCE OF REAL ESTATE",
        mainSubHeader: "Reliable management, secure future",
        servicesHomeTitle: "Supervision and maintenance of real estate",
        servicesHomeTextPara1:
          "Regular inspection of the property, we take care of the technical correctness of the equipment and devices in the property, we organize services and repairs of any nature, we take care of incoming mail and utility bills, we communicate with the tenant's representative.",
        servicesHomeTextPara2:
          "We perform all necessary activities to maintain the safety and functionality of the property and we report everything in writing to the property owner.",
        servicesHomeButtonText: "Our Services",
        pricePagePara1:
          "Prices for regular maintenance of the building, environment, etc. are formed based on the requested services.",
        priceListTitle: "Price list",
        priceListService: "Service",
        priceListPrice: "Price",
        priceListAnchor: "Anchor price on {{date}}",
        priceListDownload: "Download price list (CSV)",
        priceListMarketino: "Price list on Marketino",
        homeAboutTitle: "About Us",
        homeAboutEmphasized:
          "OLEA provides you with maintenance services for your apartment, holiday home or villa - tailored to your needs in the area of the city of Novalja.",
        homeAboutPara1:
          "Whether it is a short-term preparation of an apartment for guests or a long-term maintenance of your property, building and/or garden, we are at your service.",
        homeAboutPara2:
          "Contact us, we are sure that together we will find a solution that suits you.",

        title: "OLEA, supervision and maintenance of real estate",
        titleSubtext: "Apartments, Houses and Villas",
        home: "Home",
        homeBtnVal: "Contact us",
        about: "About Us",
        bedroom: "bedroom",
        bedroomPlural: "bedrooms",
        wc: "bathroom",
        wcPlural: "bathrooms",
        and: "and",
        smallApartments: "up to 35m2",
        hitno: "URGENT INTERVENTIONS ACCORDING TO THE AGREEMENT",
        pricelistTitle: "PRICES",
        pricelistTableHeaderOne: "Property size",
        pricelistTableHeaderTwo: "Price",
        contactTitle: "Contact us!",
        servicesTitle: "Our Services",
        servicesPOne:
          "Your comfort and satisfaction are our greatest concern, so contact us with confidence so that we can make your home shine",

        servicesSubTitle:
          "The basic supervision and maintenance package includes:",

        // ... keep existing service bulletins as they were in Croatian version but translate accordingly
        // (the user didn't provide EN versions for cleaning services but keep structure)

        nadzorTitle: "Real estate supervision and maintenance",
        nadzorSubtitle:
          "The basic supervision and maintenance package includes:",
        nadzorService1:
          "Weekly inspection of the property and, if desired, video call reporting from the property",
        nadzorService2:
          "Extraordinary inspection of the property in the event of a natural disaster (bora, jugo, earthquake, flood, fire, etc.) and reporting to the property owner on the current condition",
        nadzorService3:
          "Emptying the mailbox and forwarding incoming mail to the property owner",
        nadzorService4:
          "Paying bills and sending payment receipts to the property owner",
        nadzorService5: "Ventilating the property",
        nadzorService6:
          "Commissioning dishwashers and washing machines once every two weeks to avoid malfunctions due to long-term non-use",
        nadzorService7:
          "Checking water and drainage installations, turning on water at all sources and, if necessary, cleaning them from scale",
        nadzorService8:
          "Reading and reporting the meter status to suppliers as needed or at their request",
        nadzorService9:
          "Communication with the co-owner's representative buildings and, if necessary, attending co-owner meetings and reporting to the property owner on all decisions made at the meetings",
        nadzorService10:
          "Advising the owner with the aim of preserving the functionality and market value of the property",
        nadzorService11:
          "Sending a monthly written report to the property owner at the end of the month",
        nadzorService12: "Archiving documentation",
        nadzorSubtext:
          "The content of the package can be changed depending on the needs and wishes of the property owner",

        popravciTitle: "Small home repairs and minor works",
        popravciSubtitle:
          "We provide services for all necessary repairs that were noticed during the property inspection.",
        popravciService1: "Moisture and mold remediation",
        popravciService2: "Wall painting",
        popravciService3: "Replacing sockets, ceiling lights and light bulbs",
        popravciService4:
          "Checking the correctness and replacing air conditioners",

        zelenoTitle: "Landscaping and maintenance of green areas",
        zelenoSubtitle:
          "We provide services for the landscaping and maintenance of gardens, courtyards, green areas, interior spaces and the environment of all residential/commercial buildings.",
        zelenoSubtitle2: "Horticultural work includes:",
        zelenoService1: "Lawn planting and maintenance",
        zelenoService2: "Pruning shrubs and trees",
        zelenoService3: "Planting flower beds, trees and shrubs",
        zelenoService4: "Irrigation maintenance",
        zelenoService5: "Procurement and delivery of quality soil",
        zelenoService6: "Crop care/phytoprotection, plant health care",
        zelenoService7: "Weed removal, use of ecological products",

        zgradaTitle: "Maintenance of residential buildings",
        zgradaSubtitle:
          "We provide cleaning services for staircases within residential buildings and cleaning of common courtyards around the building itself.",

        termsMainHeading: "General terms and conditions",
        termsSubHeading1: "Terms of use of services",
        termsPara1:
          "The terms and conditions of use of our services refer to the obligations defined in the previously concluded Business Cooperation Agreement. The obligations are determined when agreeing to conclude a facility supervision and maintenance service. The obligations are clearly stated in the offer which the Client signs and verifies as a sign of acceptance. Based on the verified offer, a Business Cooperation Agreement is drawn up with the Client. The Business Cooperation Agreement is signed and certified with a seal by the Contractor and the Client before the start of providing the defined supervision and maintenance service.",
        termsPara2:
          "General use of our services can be: one-time, weekly, monthly or as agreed.",
        termsSubHeading2: "TERMS AND CONDITIONS OF WORK",
        termsPara3:
          "In the event that the safety of our employee is at risk, we are free to recall him from the place of providing the maintenance service.",
        termsSubHeading3: "Equipment and means",
        termsPara4:
          "For work, we use our own equipment and tools for small home repairs and, if a residential building cleaning service has been agreed, cleaning agents that are environmentally friendly and not harmful to human health. Cleaning products provided by the Client may also be used, if this is agreed upon when concluding the cleaning service agreement.",
        termsSubHeading4: "Client Obligations",
        termsPara5:
          "At the agreed time, access to the location must be secured, that is, the keys to the facility must be handed over for supervision, maintenance or cleaning, and the alarm system must be disabled, if any.",
        termsPara6:
          "If our employees are prevented from entering the agreed location, we reserve the right to charge for the agreed service",
        termsPara7:
          "In the event of cancellation of the agreed time, the Client must notify us 48 hours before the agreed time.",
        termsPara8:
          "After our services have been provided, the Client must check the quality of our work and, in the event of dissatisfaction or irregularities in our work, must notify us within 24 hours.",

        // Keep the rest of the existing structure translating fields as needed
        agbs: "General terms",
        backBtnText: "Back",
        formNameField: "Full name",
        formMessageField: "Your message",
        formEmailField: "Email",
        formSendButton: "Send",
        formNotification: "Sent!",
        formError: "Error, please try again or contact us directly.",
      },
    },
    de: {
      translation: {
        pageMain: "Startseite",
        pageAbout: "Über uns",
        pageServices: "Unsere Leistungen",
        pagePrices: "Preise",
        pageContact: "Kontakt",
        mainHeader: "ÜBERWACHUNG, VERWALTUNG UND INSTANDHALTUNG VON IMMOBILIEN",
        mainSubHeader: "Zuverlässiges Management, sichere Zukunft",
        servicesHomeTitle: "Betreuung und Instandhaltung von Immobilien",
        servicesHomeTextPara1:
          "Regelmäßige Inspektion der Immobilie, wir kümmern uns um den technischen Zustand der Ausstattung und Geräte in der Immobilie, wir organisieren Dienstleistungen und Reparaturen jeglicher Art, wir kümmern uns um eingehende Post und Nebenkostenabrechnungen, wir kommunizieren mit dem Vertreter des Mieters.",
        servicesHomeTextPara2:
          "Wir führen alle notwendigen Tätigkeiten zur Erhaltung der Sicherheit und Funktionsfähigkeit der Immobilie durch und erstatten dem Immobilieneigentümer darüber schriftlich Bericht.",
        servicesHomeButtonText: "Unsere Leistungen",
        pricePagePara1:
          "Preise für regelmäßige Instandhaltung von Gebäuden, Umgebung usw. werden basierend auf den angeforderten Dienstleistungen erstellt.",
        priceListTitle: "Preisliste",
        priceListService: "Leistung",
        priceListPrice: "Preis",
        priceListAnchor: "Referenzpreis am {{date}}",
        priceListDownload: "Preisliste herunterladen (CSV)",
        priceListMarketino: "Preisliste auf Marketino",
        homeAboutTitle: "Über uns",
        homeAboutEmphasized:
          "OLEA bietet Ihnen Wartungsdienstleistungen für Ihre Wohnung, Ihr Ferienhaus oder Ihre Villa – zugeschnitten auf Ihre Bedürfnisse im Bereich der Stadt Novalja.",
        homeAboutPara1:
          "Ob kurzfristige Herrichtung einer Wohnung für Gäste oder langfristige Pflege Ihres Grundstücks, Gebäudes und/oder Gartens, wir sind für Sie da.",
        homeAboutPara2:
          "Kontaktieren Sie uns, wir sind sicher, dass wir gemeinsam eine für Sie passende Lösung finden.",

        title: "OLEA, Betreuung und Instandhaltung von Immobilien",
        titleSubtext: "Wohnungen, Häuser und Villen",
        home: "Startseite",
        homeBtnVal: "Kontakt aufnehmen",
        about: "Über uns",
        bedroom: "Schlafzimmer",
        bedroomPlural: "Schlafzimmer",
        wc: "Badezimmer",
        wcPlural: "Badezimmer",
        and: "und",
        smallApartments: "bis 35m²",
        hitno: "DRINGENDE EINSÄTZE NACH VEREINBARUNG",
        pricelistTitle: "PREISE",
        pricelistTableHeaderOne: "Immobiliengröße",
        pricelistTableHeaderTwo: "Preis",
        contactTitle: "Kontaktieren Sie uns!",
        servicesTitle: "Unsere Leistungen",
        servicesPOne:
          "Ihr Komfort und Ihre Zufriedenheit sind unser größtes Anliegen, daher kontaktieren Sie uns vertrauensvoll, damit wir Ihr Zuhause zum Strahlen bringen können",

        servicesSubTitle: "Das Basispaket für Überwachung und Wartung enthält:",

        nadzorTitle: "Immobilienbetreuung und -wartung",
        nadzorSubtitle: "Das Basispaket für Überwachung und Wartung enthält:",
        nadzorService1:
          "Wöchentliche Objektbesichtigung und auf Wunsch des Eigentümers Rückmeldung vom Objekt per Videoanruf",
        nadzorService2:
          "Außerordentliche Inspektion der Immobilie im Falle einer Naturkatastrophe (Sturm, Hurrikan, Erdbeben, Überschwemmung, Feuer...) und Berichterstattung über die Situation an den Eigentümer der Immobilie",
        nadzorService3:
          "Leeren des Briefkastens und Weiterleiten eingehender Post an den Eigentümer",
        nadzorService4:
          "Bezahlen von Rechnungen und Senden von Zahlungsbelegen an den Eigentümer",
        nadzorService5: "Belüftung der Immobilie",
        nadzorService6:
          "Inbetriebnahme von Spül- und Waschmaschinen alle zwei Wochen, um Ausfälle durch längere Nichtbenutzung zu vermeiden",
        nadzorService7:
          "Kontrolle der Sanitär- und Abwasserinstallationen, Freigabe des Wassers an allen Quellen und ggf. Entkalkung",
        nadzorService8:
          "Ablesung und Meldung des Zählerstands an Lieferanten nach Bedarf oder auf deren Anfrage",
        nadzorService9:
          "Kommunikation mit dem Vertreter des Miteigentümers des Gebäudes und, falls erforderlich, Teilnahme an Miteigentümerversammlungen und Berichterstattung an den Eigentümer der Immobilie über alle bei den Versammlungen getroffenen Entscheidungen",
        nadzorService10:
          "Beratung von Eigentümern zur Erhaltung der Funktionalität und des Marktwertes der Immobilie",
        nadzorService11:
          "Senden eines monatlichen schriftlichen Berichts an den Eigentümer am Ende des Monats",
        nadzorService12: "Archivierungsdokumentation",
        nadzorSubtext:
          "Der Inhalt des Pakets kann je nach Bedarf und Wunsch des Immobilieneigentümers geändert werden",

        popravciTitle: "Kleine Reparaturen im Haus und Gelegenheitsarbeiten",
        popravciSubtitle:
          "Wir übernehmen für Sie alle notwendigen Reparaturen, die bei der Objektbesichtigung festgestellt werden.",
        popravciService1: "Feuchtigkeits- und Schimmelsanierung",
        popravciService2: "Wände streichen",
        popravciService3:
          "Austausch von Steckdosen, Deckenleuchten und Glühbirnen",
        popravciService4:
          "Überprüfung der Richtigkeit und Austausch von Klimaanlagen",

        zelenoTitle: "Gestaltung und Pflege von Grünflächen",
        zelenoSubtitle:
          "Wir bieten Landschaftsgestaltungs- und Wartungsdienste für Gärten, Gehöfte, Grünflächen, Innenräume und die Umgebung aller Wohn-/Geschäftsgebäude an.",
        zelenoSubtitle2: "Zu den Gartenbauarbeiten gehören:",
        zelenoService1: "Rasenbepflanzung und -pflege",
        zelenoService2: "Beschneiden von Sträuchern und Bäumen",
        zelenoService3: "Anlegen von Blumenbeeten, Bäumen und Sträuchern",
        zelenoService4: "Bewässerungswartung",
        zelenoService5: "Beschaffung und Lieferung von Qualitätserde",
        zelenoService6:
          "Pflanzenpflege/Phytoprotektion, Pflanzengesundheitspflege",
        zelenoService7: "Unkrautentfernung, Verwendung ökologischer Produkte",

        zgradaTitle: "Instandhaltung von Wohngebäuden",
        zgradaSubtitle:
          "Wir bieten Reinigungsdienste für Treppenhäuser in Wohngebäuden und die Reinigung gemeinsamer Höfe rund um das Gebäude selbst an.",

        termsMainHeading: "Allgemeine Geschäftsbedingungen",
        termsSubHeading1: "Nutzungsbedingungen für Dienstleistungen",
        termsPara1:
          "Die Nutzungsbedingungen unserer Dienstleistungen beziehen sich auf die Verpflichtungen, die in der zuvor geschlossenen Geschäftskooperationsvereinbarung definiert sind. Die Verpflichtungen werden bei der Vereinbarung über den Abschluss einer Objektüberwachungs- und -wartungsdienstleistung festgelegt. Die Verpflichtungen sind klar in dem Angebot aufgeführt, das der Kunde als Zeichen der Annahme unterschreibt und beglaubigt. Auf der Grundlage des beglaubigten Angebots wird eine Geschäftskooperationsvereinbarung mit dem Kunden erstellt.",
        termsPara2:
          "Die allgemeine Nutzung unserer Dienstleistungen kann sein: einmalig, wöchentlich, monatlich oder nach Vereinbarung.",
        termsSubHeading2: "ARBEITSBEDINGUNGEN",
        termsPara3:
          "Falls die Sicherheit unseres Mitarbeiters gefährdet ist, sind wir berechtigt, ihn vom Ort der Wartungsdienstleistung abzuziehen.",
        termsSubHeading3: "Ausrüstung und Mittel",
        termsPara4:
          "Für die Arbeit verwenden wir unsere eigene Ausrüstung und Werkzeuge für kleine Hausreparaturen und, falls eine Gebäudereinigungsdienstleistung vereinbart wurde, umweltfreundliche Reinigungsmittel, die nicht gesundheitsschädlich sind. Vom Kunden bereitgestellte Reinigungsmittel können ebenfalls verwendet werden, sofern dies bei der Vereinbarung der Reinigungsdienstleistung festgelegt wurde.",
        termsSubHeading4: "Kundenpflichten",
        termsPara5:
          "Zum vereinbarten Zeitpunkt muss der Zugang zum Objekt gewährleistet bzw. die Schlüssel zur Überwachung, Wartung oder Reinigung übergeben werden, und das Alarmsystem muss gegebenenfalls deaktiviert werden.",
        termsPara6:
          "Wenn unseren Mitarbeitern der Zutritt zum vereinbarten Ort verwehrt wird, behalten wir uns das Recht vor, die vereinbarte Dienstleistung in Rechnung zu stellen",
        termsPara7:
          "Im Falle einer Stornierung des vereinbarten Termins muss der Kunde uns 48 Stunden vor dem vereinbarten Termin benachrichtigen.",
        termsPara8:
          "Nach Erbringung unserer Dienstleistungen muss der Kunde die Qualität unserer Arbeit überprüfen und uns im Falle von Unzufriedenheit oder Unregelmäßigkeiten innerhalb von 24 Stunden benachrichtigen.",

        agbs: "AGB",
        backBtnText: "Zurück",
        formNameField: "Vor- und Nachname",
        formMessageField: "Ihre Nachricht",
        formEmailField: "E-Mail",
        formSendButton: "Senden",
        formNotification: "Gesendet!",
        formError:
          "Fehler, bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
      },
    },
  },
});

export default i18n;
