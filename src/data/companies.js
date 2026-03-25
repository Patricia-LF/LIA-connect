// Företagsdata för LIA-mingeleventet
// Hårdkodad info: storlek, fokus, konversationsstartare
// Fylls i på plats av företaget: contact (namn + mail), techStack
// conversationStarters       → för studenter på Webbutveckling
// conversationStartersDesign → för studenter på Digital design

export const companies = [
  {
    id: 1,
    name: "A2B Solutions",
    size: "~5 anställda",
    focus: ["Supply Chain", "Lagersystem", "IT-konsult"],
    description:
      "Specialister på att implementera lagersystem och automation som optimerar processer i lager, butiker och fabriker.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är den roligaste tekniska utmaningen ni löst nyligen?",
      "Hur ser er stack ut för att integrera mot externa system?",
      "Tar ni emot LIA-studenter inom frontend eller är det mer backend/system?",
    ],
    conversationStartersDesign: [
      "Hur ser gränssnittet ut för era lagersystem – finns det utrymme för bättre UX?",
      "Jobbar ni med någon designer idag, eller är det mest tekniker?",
      "Vad skulle en digital designer kunna bidra med hos er?",
    ],
  },
  {
    id: 2,
    name: "Aino",
    size: "~12 anställda",
    focus: ["E-handel", "Headless CMS", "Design", "Frontend"],
    description:
      "Litet, tight team i Göteborg med fokus på e-handel och headless-lösningar. Har både digitala designers och frontend-utvecklare som jobbar nära varandra.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Ni jobbar headless – vilket CMS brukar ni använda och varför?",
      "Hur ser samarbetet ut mellan designers och frontend-devs i ett så litet team?",
      "Vad är de vanligaste tekniska utmaningarna i era e-handelsprojekt?",
    ],
    conversationStartersDesign: [
      "Hur ser designprocessen ut hos er när ni jobbar headless – designar ni i Figma och handlar off direkt till frontend?",
      "Ni är ett litet team med både designers och devs – hur nära jobbar ni tillsammans dagligen?",
      "Vad är de roligaste designutmaningarna i e-handelsprojekt hos er?",
    ],
  },
  {
    id: 3,
    name: "Antura",
    size: "100–200 anställda",
    focus: ["SaaS", "Projektledning", "PPM", "Offentlig sektor"],
    description:
      "Sedan 2001 levererar Antura ett ledande PPM-verktyg (projekt- och portföljhantering) med 200 000+ användare i 50+ länder.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur jobbar ni med agila vs traditionella projektmodeller i er produkt?",
      "Vilka är de största UX-utmaningarna med ett komplext PPM-system?",
      "Hur hanterar ni stora datamängder och rapportering i realtid?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett PPM-system som är kraftfullt men ändå inte överväldigande?",
      "Ni har 200 000+ användare – hur arbetar ni med UX-research och användartester?",
      "Hur ser ert designsystem ut – jobbar ni med ett komponentbibliotek i Figma?",
    ],
  },
  {
    id: 4,
    name: "Avinode",
    size: "51–200 anställda",
    focus: ["Aviation Tech", "B2B Marketplace", "Fintech", "API"],
    description:
      "Världsledande marknadsplats för privat flygcharter, grundat i Göteborg av Chalmers-studenter 2002. Bygger mjukvara för ett globalt flygbolag-ekosystem.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur tänker ni kring API-design när ni kopplar ihop hundratals flygbolag globalt?",
      "Vad är de roligaste tekniska problemen i realtidsmarknadsplatser?",
      "Ni är ett Göteborg-bolag med global räckvidd – hur ser er dev-kultur ut?",
    ],
    conversationStartersDesign: [
      "Hur designar man en marknadsplats för privat flyg – vilka är de viktigaste användarflödena?",
      "Ni är B2B – hur skiljer sig UX-arbetet mot om ni hade slutkonsumenter?",
      "Hur ser er visuella identitet ut digitalt och vem äger den?",
    ],
  },
  {
    id: 5,
    name: "Boid",
    size: "~15 anställda",
    focus: ["Produktdesign", "UX/UI", "Research", "Digi-fysisk design"],
    description:
      "Forskningsnära produktdesignstudio på Chalmers Campus. Arbetar med UX, servicedesign och innovation för kunder som Saab, Essity och Gunnebo.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser samarbetet ut mellan designers och utvecklare i era projekt?",
      "Ni är kopplade till forskarvärlden – hur påverkar det er designprocess?",
      "Vad är skillnaden på att designa en digital vs en fysisk produkt?",
    ],
    conversationStartersDesign: [
      "Ni jobbar med digi-fysisk design – vad är det svåraste med att designa för båda världarna?",
      "Hur integrerar ni research i designprocessen och vilka metoder använder ni mest?",
      "Vad är den coolaste designutmaningen ni tagit er an?",
    ],
  },
  {
    id: 6,
    name: "Change the Agency",
    size: "10–50 anställda",
    focus: ["Kommunikationsbyrå", "Digital marknadsföring", "Varumärke"],
    description:
      "Kommunikations- och reklamfirma i Göteborg med fokus på strategisk varumärkeskommunikation och digital närvaro.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser samspelet ut mellan kreativa team och tech i era kampanjer?",
      "Vad innebär det att jobba med webbdev på en kommunikationsbyrå kontra en renodlad tech-byrå?",
      "Hur involveras webbutvecklare i kampanjarbetet hos er?",
    ],
    conversationStartersDesign: [
      "Hur ser er kreativa process ut – från brief till färdig kampanj?",
      "Jobbar ni med varumärkesidentitet och grafiska profiler, eller mer kampanjproduktion?",
      "Vilka designverktyg används mest i ert dagliga arbete?",
    ],
  },
  {
    id: 7,
    name: "CPAC Systems",
    size: "50–200 anställda",
    focus: ["Inbyggda system", "Automation", "Industri", "Fordonsbranschen"],
    description:
      "Utvecklar mjukvara och styrenheter för mobila maskiner och industri – specialister på inbyggda system och automation.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur kopplar ni samman inbyggda system med webbaserade gränssnitt?",
      "Vilka är de unika utmaningarna med att bygga UI för industrimaskiner?",
      "Rekryterar ni webbutvecklare till er stack eller är det mer embedded-fokus?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett gränssnitt för en maskinoperatör i en bullrig industrimiljö?",
      "Vilka tillgänglighets- och säkerhetskrav påverkar er UI-design?",
      "Jobbar ni med industriell UX och är det ett område ni vill utveckla?",
    ],
  },
  {
    id: 8,
    name: "Dear Friends",
    size: "10–50 anställda",
    focus: ["Digital byrå", "UX/UI", "Webbutveckling", "E-handel"],
    description:
      "Digital byrå i Göteborg som kombinerar strategi, design och teknik för att skapa digitala upplevelser.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur brukar en typisk projektresa se ut hos er – från brief till launch?",
      "Arbetar ni mest med egna produkter eller kunduppdrag?",
      "Vad värdesätter ni mest hos en LIA-student – nyfikenhet, teknik eller design?",
    ],
    conversationStartersDesign: [
      "Hur ser samarbetet ut mellan designers och utvecklare i era kundprojekt?",
      "Jobbar ni med designsystem eller skapar ni nytt för varje kund?",
      "Vilken del av designprocessen är ni mest stolta över hos er?",
    ],
  },
  {
    id: 9,
    name: "Decerno",
    size: "~140 anställda",
    focus: [
      "Systemutveckling",
      "AI/ML",
      "Offentlig sektor",
      "Hälso- och sjukvård",
    ],
    description:
      "Grundat 1984, specialister på skräddarsydda digitala lösningar. Jobbar med offentlig sektor, hälsovård och transport. Väljer aktivt bort projekt inom vapen, spel och tobak.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur arbetar ni med AI i era system för offentlig sektor?",
      "Vilka är de tuffaste tekniska kraven när man bygger system för vården?",
      "Ni har en tydlig etisk policy – hur påverkar det vilka projekt ni tar?",
    ],
    conversationStartersDesign: [
      "Hur designar man system för vård och offentlig sektor med tillgänglighet i fokus?",
      "Vilken roll har designers i era projekt – sitter de med från start?",
      "Ni väljer aktivt bort vissa branscher – hur påverkar det er identitet som bolag?",
    ],
  },
  {
    id: 10,
    name: "Eniac",
    size: "10–50 anställda",
    focus: ["Webbutveckling", "Digital byrå", "Systemutveckling"],
    description:
      "Digital byrå i Göteborg med fokus på skräddarsydda webblösningar och systemutveckling.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Jobbar ni mest med frontend, backend eller fullstack-lösningar?",
      "Hur ser onboarding ut för en ny LIA-student hos er?",
      "Vad är det roligaste projektet ni jobbat med de senaste åren?",
    ],
    conversationStartersDesign: [
      "Har ni designers inhouse eller köper ni in design från externa?",
      "Hur ser handoff-processen ut mellan design och utveckling hos er?",
      "Vad är det roligaste designprojektet ni jobbat med nyligen?",
    ],
  },
  {
    id: 11,
    name: "Elicit",
    size: "10–50 anställda",
    focus: ["Digital byrå", "E-handel", "UX", "Webbutveckling"],
    description:
      "Byrå i Göteborg med bred kompetens inom digital design, UX och webbutveckling.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser arbetsfördelningen ut mellan UX och frontend hos er?",
      "Jobbar ni agilt och med korta iterationer eller mer projektbaserat?",
      "Vad letar ni efter hos en LIA-student?",
    ],
    conversationStartersDesign: [
      "Hur integrerar ni UX-arbetet i era projekt – tidigt i processen eller parallellt?",
      "Jobbar ni med användartester och i så fall hur ofta?",
      "Vad är den viktigaste designkompetensen ni saknar idag?",
    ],
  },
  {
    id: 12,
    name: "Ericsson",
    size: "100 000+ anställda globalt, ~5 000 i Göteborg",
    focus: ["Telekommunikation", "5G/6G", "IoT", "Nätverksmjukvara"],
    description:
      "Globalt teknikbolag och världsledande inom telekomnätverk. Göteborg är ett av de viktigaste R&D-centren, med fokus på 5G, mjukvaruutveckling och AI.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad jobbar LIA-studenter typiskt med på ett så stort bolag – egna projekt eller stöd i team?",
      "Hur ser er tech-stack ut för webbaserade verktyg och interna system?",
      "Ni är jättestora – hur behåller man startup-känslan och innovationskraften?",
    ],
    conversationStartersDesign: [
      "Hur ser designorganisationen ut på Ericsson – finns det ett centralt designteam?",
      "Jobbar ni med designsystem i stor skala och hur hanterar man det globalt?",
      "Vad kan en LIA-student inom digital design faktiskt bidra med hos er?",
    ],
  },
  {
    id: 13,
    name: "Esgaia",
    size: "10–30 anställda",
    focus: ["ESG", "SaaS", "Fintech", "Hållbarhet"],
    description:
      "SaaS-plattform för investerare och kapitalförvaltare att hantera ESG-data och hållbarhetsrapportering.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur visualiserar ni komplex ESG-data på ett begripligt sätt?",
      "Vilka utmaningar finns det med att bygga datatunga dashboards?",
      "Hållbarhet + tech – hur ser ni på er roll i branschen?",
    ],
    conversationStartersDesign: [
      "Hur gör man komplex ESG-data visuellt begriplig utan att förenkla för mycket?",
      "Vilken roll spelar datavisualisering och infografik i er produkt?",
      "Hur balanserar ni estetik och funktionalitet i ett seriöst finansverktyg?",
    ],
  },
  {
    id: 14,
    name: "Carasent / Webdoc",
    size: "50–150 anställda",
    focus: ["HealthTech", "Journalsystem", "SaaS", "Digital vård"],
    description:
      "Bygger Webdoc – ett modernt journalsystem för privat och offentlig vård. Fokus på säker, användarvänlig digital hälsovård.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur tänker ni kring UX när målgruppen är läkare och sjuksköterskor?",
      "Vilka är de tuffaste säkerhets- och integritetskraven i sjukvårdssystem?",
      "Hur ser er process ut när ni tar in ny funktionalitet som måste uppfylla medicintekniska krav?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett journalsystem som läkare faktiskt vill använda under stressiga pass?",
      "Vilka tillgänglighets- och användbarhetskrav är viktigast i medicinsk mjukvara?",
      "Hur ser er designprocess ut – jobbar ni med verklig vårdpersonal i designfasen?",
    ],
  },
  {
    id: 15,
    name: "Fully Studios",
    size: "~10 anställda",
    focus: ["Digital byrå", "Webbutveckling", "Design", "Varumärke"],
    description:
      "Kreativ digital studio i Göteborg som skapar webbplatser och digitala upplevelser med stark design och teknisk precision.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser balansen ut mellan kreativt hantverk och teknisk leverans hos er?",
      "Jobbar ni mycket med animationer och interaktioner i frontend?",
      "Hur ser en LIA-period ut hos er – jobbar man direkt i kundprojekt?",
    ],
    conversationStartersDesign: [
      "Ni är en kreativ studio – var börjar ett nytt projekt, i designen eller strategin?",
      "Hur jobbar ni med rörlig grafik och animationer i era webbprojekt?",
      "Vad är ert favoritprojekt ni gjort och vad var den kreativa utmaningen?",
    ],
  },
  {
    id: 16,
    name: "Gothia Digital Solutions",
    size: "10–50 anställda",
    focus: ["Systemutveckling", "Digital transformation", "Offentlig sektor"],
    description:
      "IT- och systemutvecklingskonsulter med fokus på digitala lösningar för offentlig och privat sektor i Göteborgsregionen.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Jobbar ni mest mot offentlig sektor eller privata kunder?",
      "Hur ser ni på framtiden för digital transformation i Göteborg?",
      "Vilka tekniker är hetast i era projekt just nu?",
    ],
    conversationStartersDesign: [
      "Hur ser designbehovet ut i de projekt ni jobbar med?",
      "Finns det utrymme för digital design i offentliga digitaliseringsprojekt?",
      "Vad är det största UX-problemet ni stöter på hos era kunder?",
    ],
  },
  {
    id: 17,
    name: "Grebban",
    size: "~30–50 anställda",
    focus: ["E-handel", "Headless Commerce", "Branding", "Centra / Shopify"],
    description:
      "Världens #1 Centra-byrå och specialister på e-handel. Bygger headless e-handelslösningar för ambitiösa varumärken. Kunder inkl. Björn Borg, Djerf Avenue och Represent.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är skillnaden på att bygga headless e-handel jämfört med traditionellt?",
      "Ni jobbar med några av Sveriges häftigaste varumärken – hur påverkar det designbesluten?",
      "Hur ser er typiska frontend-stack ut i ett Centra-projekt?",
    ],
    conversationStartersDesign: [
      "Ni jobbar med Björn Borg och Djerf Avenue – hur ser designprocessen ut för ett varumärke med stark identitet?",
      "Vad är de viktigaste designprinciperna för att konvertera i e-handel?",
      "Hur hanterar ni branding kontra funktionalitet när ett varumärke har starka åsikter om estetik?",
    ],
  },
  {
    id: 18,
    name: "Hiber",
    size: "10–50 anställda",
    focus: ["IoT", "Satellitkommunikation", "Uppkoppling", "Hållbarhet"],
    description:
      "Bygger globala IoT-uppkopplingslösningar via satelliter – möjliggör uppkoppling för sensorer och enheter i de mest avlägsna platser på jorden.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur kommunicerar man med en IoT-enhet via satellit – och hur visualiserar man den datan?",
      "Vilken roll spelar webbutvecklare i ett hårdvarunära bolag som ert?",
      "Ni löser uppkoppling för hela planeten – vad är den svåraste tekniska nöten ni knäckt?",
    ],
    conversationStartersDesign: [
      "Hur visualiserar man IoT-data från sensorer runt om i hela världen?",
      "Ni har en stark mission – hur kommunicerar ni ert varumärke visuellt?",
      "Vad är de viktigaste UX-principerna för ett dashboard som övervakar globala sensorer?",
    ],
  },
  {
    id: 19,
    name: "HiQ",
    size: "~270 i Göteborg, ~1 500 totalt",
    focus: ["IT-konsult", "Systemutveckling", "Design", "AI/ML", "Fordon"],
    description:
      "Stort IT-konsultbolag med bred kompetens – från självkörande fordon till mobilappar. Göteborg-kontoret jobbar mycket mot fordonsindustrin och telekomsektorn.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vilka typer av projekt hamnar LIA-studenter i hos er?",
      "Ni jobbar med allt från 5G till bilar – vad är vanligast på Göteborg-kontoret?",
      "Hur fungerar det att vara konsult jämfört med att jobba inhouse?",
    ],
    conversationStartersDesign: [
      "Jobbar ni med UX och design som konsulttjänst, och hur ser det arbetet ut?",
      "Hur är det att vara designkonsult – varierar projekten mycket?",
      "Vad är den mest spännande designutmaningen ni jobbat med i fordonsbranschen?",
    ],
  },
  {
    id: 20,
    name: "Hoy",
    size: "~20–30 anställda",
    focus: ["Digital byrå", "Webb & App", "VR/AR", "UX/UI"],
    description:
      "Digital studio i Göteborg som skapar webbplatser, appar och VR/AR-upplevelser. Jobbar med kunder som SKF och Lantmännen.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Ni jobbar med VR och AR – när passar det bättre än en vanlig webbplats?",
      "Hur ser er process ut från idé till en färdig webbplats?",
      "Jobbar ni med Next.js/React eller egna CMS-lösningar som Sanity?",
    ],
    conversationStartersDesign: [
      "Hur designar man för VR och AR – vilka verktyg och principer gäller?",
      "Hur ser designprocessen ut hos er när ni skapar en ny digital upplevelse?",
      "Vad är det roligaste ni gjort visuellt de senaste åren?",
    ],
  },
  {
    id: 21,
    name: "Hypocampus",
    size: "10–30 anställda",
    focus: ["E-learning", "Digital utbildning", "Interaktiva upplevelser"],
    description:
      "Byrå med fokus på e-learning och digital utbildning – skapar interaktiva lärupplevelser och kursmaterial för organisationer.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur skiljer sig UX för utbildningsplattformar mot vanliga webbplatser?",
      "Vilka tekniker används för att göra e-learning mer interaktivt och engagerande?",
      "Hur mäter ni att en digital utbildning faktiskt fungerar?",
    ],
    conversationStartersDesign: [
      "Hur designar man interaktivt utbildningsmaterial som håller användarens uppmärksamhet?",
      "Vilken roll spelar illustration och animation i era e-learning-projekt?",
      "Hur skiljer sig designarbetet för utbildning från vanliga digitala produkter?",
    ],
  },
  {
    id: 22,
    name: "Humblebee",
    size: "~10 anställda",
    focus: ["Webbutveckling", "Design", "Digital byrå"],
    description:
      "Liten, driven digital byrå i Göteborg som skapar välgjorda webbplatser och digitala lösningar.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur är det att jobba på en liten byrå jämfört med ett stort konsultbolag?",
      "Vad är ert viktigaste kvalitetsmått när ni levererar en webbplats?",
      "Hur involveras LIA-studenter i riktiga kundprojekt hos er?",
    ],
    conversationStartersDesign: [
      "Hur ser design- och varumärkesarbetet ut hos er – gör ni allt inhouse?",
      "Vad är det bästa med att jobba på en liten studio som designer?",
      "Vilka projekt är ni extra stolta över att ha levererat?",
    ],
  },
  {
    id: 23,
    name: "ImBox",
    size: "20–50 anställda",
    focus: ["SaaS", "Kundservice", "Livechatt", "CRM"],
    description:
      "Bygger en livechatt- och kundserviceplattform som används av hundratals svenska företag – fokus på enkel integration och smidig kundkommunikation.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur bygger man en realtidschatt som är stabil och skalbar?",
      "Vilka är de viktigaste UX-principerna för en bra kundservice-widget?",
      "Jobbar ni med AI-funktioner för automatiserade svar eller chatbotar?",
    ],
    conversationStartersDesign: [
      "Hur designar man en chatt-widget som passar in oavsett vilken webbplats den sitter på?",
      "Vilka designutmaningar finns med att göra ett B2B SaaS-verktyg intuitivt?",
      "Hur arbetar ni med er visuella identitet och varumärkesprofil?",
    ],
  },
  {
    id: 24,
    name: "Iteam",
    size: "~30 anställda",
    focus: [
      "Systemutveckling",
      "Digital transformation",
      ".NET",
      "API",
      "Molntjänster",
    ],
    description:
      "Teknikbolag i Göteborg som bygger skräddarsydda digitala system med .NET och hjälper företag med digital transformation.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är den vanligaste typen av systemutvecklingsprojekt ni tar er an?",
      "Hur arbetar ni med arkitektur och tekniska beslut i ett nytt projekt?",
      "Vad letar ni efter hos en student som söker LIA?",
    ],
    conversationStartersDesign: [
      "Jobbar ni med UX och design inhouse eller samarbetar ni med externa designers?",
      "Hur ser designbehovet ut i era systemutvecklingsprojekt?",
      "Vad skulle en designer kunna bidra med i ett tech-fokuserat bolag som ert?",
    ],
  },
  {
    id: 25,
    name: "Itiden",
    size: "~13 anställda",
    focus: ["Webbutveckling", "Laravel", "React", ".NET", "Fullstack"],
    description:
      "Erfaret webbutvecklingsbolag sedan 1996. Bygger skräddarsydda webblösningar med Laravel, React och .NET. Teamet består av fullstack-utvecklare utan dedikerade designers.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Ni jobbar med Laravel, React och .NET – jobbar utvecklare med alla tre eller specialiserar man sig?",
      "Hur ser en typisk arbetsdag ut som fullstack-dev hos er?",
      "Ni är ett litet team – hur hanterar ni designarbetet utan dedikerade designers?",
    ],
    conversationStartersDesign: [
      "Ni har inga dedikerade designers – hur hanterar ni designbeslut och vem tar dem?",
      "Vad är de vanligaste designbehoven som uppstår i era projekt?",
      "Skulle ni vara intresserade av en LIA-student inom digital design, och vad skulle den personen jobba med?",
    ],
  },
  {
    id: 26,
    name: "Knowit Experience",
    size: "~50 anställda i Göteborg",
    focus: ["IT-konsult", "Frontend", "Backend", "UX/UI", "React", "C#"],
    description:
      "Konsultbolag med både designers och utvecklare. Jobbar agilt, antingen inhouse eller ute hos kund. Frontend-devs jobbar med React, backend med C#. Ingen PHP.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Jobbar man mest inhouse eller ute hos kund som konsult hos er?",
      "Frontend-devs jobbar med React – hur ser en typisk uppdragsvardag ut?",
      "Hur fungerar det agila arbetssättet i praktiken hos er – Scrum, Kanban eller eget upplägg?",
    ],
    conversationStartersDesign: [
      "Hur ser designkonsultrollen ut hos er – jobbar designers mest inhouse eller ute hos kund?",
      "Hur samarbetar designers och utvecklare i era uppdrag?",
      "Vad är den roligaste typen av designuppdrag ni brukar ta?",
    ],
  },
  {
    id: 27,
    name: "kolon.studio",
    size: "~5–15 anställda",
    focus: ["Digital design", "Grafisk profil", "Webbutveckling", "Branding"],
    description:
      "Designstudio i Göteborg med stark känsla för visuell identitet och digital design.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur arbetar ni med designsystem för att hålla konsistens över ett helt varumärke?",
      "Vad är gränsen mellan grafisk designer och webbutvecklare i era projekt?",
      "Vilka projekt är ni extra stolta över att ha gjort?",
    ],
    conversationStartersDesign: [
      "Hur ser er process ut när ni tar fram en ny grafisk identitet från grunden?",
      "Jobbar ni mest med digital design eller även tryckt kommunikation?",
      "Vad är den kreativa utmaningen ni trivs bäst med?",
    ],
  },
  {
    id: 28,
    name: "Lundgren+Lindqvist",
    size: "~10 anställda",
    focus: ["Grafisk design", "Typografi", "Identitet", "Digital design"],
    description:
      "Designbyrå med fokus på grafisk identitet, typografi och publicering. Känd för noggrann och distinkt visuell kommunikation.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser samarbetet ut mellan grafisk designer och frontendutvecklare hos er?",
      "Typografi är viktig för er – hur arbetar ni med det i digitala projekt?",
      "Vad är det roligaste med att arbeta med identitetsprojekt?",
    ],
    conversationStartersDesign: [
      "Ni är kända för er typografi – hur tänker ni kring typsnitt och läsbarhet i digitala medier?",
      "Hur ser en identitetsprocess ut hos er – från koncept till färdig grafisk manual?",
      "Vad är den viktigaste egenskapen hos en bra designer enligt er?",
    ],
  },
  {
    id: 29,
    name: "Mardi Gras Digital",
    size: "~10–30 anställda",
    focus: ["Digital marknadsföring", "Webbutveckling", "Innehållsproduktion"],
    description:
      "Digitalbyrå i Göteborg som hjälper företag med webb, SEO och digital kommunikation.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur hänger webbutveckling och digital marknadsföring ihop i era projekt?",
      "Jobbar ni mycket med WordPress eller mer skräddarsydda lösningar?",
      "Vad är en vanlig dag för en frontend-dev hos er?",
    ],
    conversationStartersDesign: [
      "Hur ser er innehållsproduktion ut – jobbar ni med grafisk design och foto/video?",
      "Vad är viktigast att tänka på som designer när man skapar för sociala medier?",
      "Hur integreras design i er process för digital marknadsföring?",
    ],
  },
  {
    id: 30,
    name: "Matic Tribe",
    size: "~10–20 anställda",
    focus: ["Webbutveckling", "E-handel", "Digital byrå"],
    description:
      "Webbyrå i Göteborg med fokus på moderna webbplatser och e-handelslösningar.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Jobbar ni med specifika plattformar som Shopify eller WooCommerce, eller bygger ni skräddarsytt?",
      "Hur ser arbetsflödet ut från design till färdig kod hos er?",
      "Vad är viktigast att ha koll på som webbutvecklare just nu?",
    ],
    conversationStartersDesign: [
      "Hur ser ert designarbete ut – har ni designers inhouse?",
      "Vad är de viktigaste designprinciperna för att lyckas med e-handel?",
      "Hur hanterar ni design-handoff till utvecklarna?",
    ],
  },
  {
    id: 31,
    name: "Mediaflow",
    size: "~20–50 anställda",
    focus: ["SaaS", "Digital Asset Management", "DAM", "Media", ".NET"],
    description:
      "Bygger en SaaS-plattform för Digital Asset Management – hjälper företag att organisera, distribuera och återanvända digitalt innehåll. Backend byggt med .NET.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är de svåraste tekniska problemen med att hantera stora mediafiler i molnet?",
      "Hur tänker ni kring UX för ett DAM-system som används av marknadsföringsteam?",
      "Ni är ett produktbolag – hur skiljer sig arbetet från att jobba på en byrå?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett DAM-system som marknadsförare faktiskt vill använda dagligen?",
      "Vad är de vanligaste UX-misstagen i verktyg för filhantering och mediabibliotek?",
      "Hur ser er designprocess ut för att iterera på produkten baserat på användarfeedback?",
    ],
  },
  {
    id: 32,
    name: "Monocl",
    size: "~20–50 anställda",
    focus: ["HealthTech", "Life Science", "Data & Analytics", "SaaS"],
    description:
      "Datadriven SaaS-plattform för life science-industrin – hjälper företag att förstå och engagera medicinska experter och beslutsfattare.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur arbetar ni med datavisualisering för komplex medicinsk data?",
      "Vad är de unika utmaningarna med att bygga produkter för life science-branschen?",
      "Hur ser er tech-stack ut för era analytics-funktioner?",
    ],
    conversationStartersDesign: [
      "Hur gör man komplex medicinsk data visuellt begriplig utan att förlora precision?",
      "Vilken roll har infografik och datavisualisering i er produkt?",
      "Hur designar man för en väldigt kompetent och tidspressad målgrupp som läkare?",
    ],
  },
  {
    id: 33,
    name: "Nodeark",
    size: "~5–15 anställda",
    focus: ["Webbutveckling", "React", "Node.js", "Systemutveckling"],
    description:
      "Teknikfokuserat bolag i Göteborg med spetskompetens inom modern webbutveckling.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Ni har 'Node' i namnet – är Node.js er huvudstack?",
      "Jobbar ni med fullstack-lösningar eller specialiserar ni er?",
      "Hur ser er kodgranskningsprocess ut – värdesätter ni pair programming?",
    ],
    conversationStartersDesign: [
      "Jobbar ni med designers inhouse eller samarbetar ni med externa studios?",
      "Hur ser design-handoff ut i ett tech-fokuserat bolag som ert?",
      "Vad önskar ni att designers förstod bättre om hur ni jobbar?",
    ],
  },
  {
    id: 34,
    name: "Pionate",
    size: "~10–30 anställda",
    focus: ["Digital byrå", "Strategi", "UX", "Webbutveckling"],
    description:
      "Digital byrå med kombinationen strategi, design och teknik för att skapa affärsnyttiga lösningar.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur balanserar ni strategiarbete med teknisk leverans?",
      "Vad är det roligaste med att arbeta på en byrå i Göteborg just nu?",
      "Vilka kunder jobbar ni typiskt med?",
    ],
    conversationStartersDesign: [
      "Hur ser designarbetet ut hos er – sitter designers med i strategifasen?",
      "Vad är er syn på relationen mellan UX och affärsstrategi?",
      "Vilka designprojekt är ni mest stolta över?",
    ],
  },
  {
    id: 35,
    name: "Plejd",
    size: "~100–200 anställda",
    focus: ["Smart Home", "IoT", "Hårdvara + Mjukvara", "Apputveckling"],
    description:
      "Göteborgsbolag som bygger smarta hem-produkter för belysningsstyrning. 1 miljon+ kunder. Kombinerar hårdvara, Bluetooth-mesh och apputveckling.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur jobbar mjukvaruteamet med en produkt som kopplar ihop app, hårdvara och moln?",
      "Vilka är de tekniska utmaningarna med Bluetooth mesh-nätverk?",
      "Ni har växt kraftigt – hur behåller man kvalitet i koden när bolaget skalerar?",
    ],
    conversationStartersDesign: [
      "Hur designar man en app för smart hem som fungerar lika bra för teknikentusiaster som för nybörjare?",
      "Hur ser designprocessen ut när man jobbar med både hårdvara och mjukvara?",
      "Ni har en miljon kunder – hur samlar ni in och agerar på designfeedback i den skalan?",
    ],
  },
  {
    id: 36,
    name: "Precisely",
    size: "~50–150 anställda",
    focus: ["LegalTech", "SaaS", "Avtal & Compliance", "AI"],
    description:
      "SaaS-plattform för avtalshantering och juridisk compliance. Hjälper bolag att digitalisera och automatisera juridiska processer med AI.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur använder ni AI för att förstå och analysera juridiska dokument?",
      "Vilka är de svåraste UX-utmaningarna i en legaltech-produkt?",
      "Hur ser er stack ut – jobbar ni med React i frontend?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett juridiskt verktyg som känns modernt utan att tappa seriositet?",
      "Vilka är de svåraste UX-utmaningarna när man digitaliserar komplexa juridiska processer?",
      "Hur kommunicerar ni ert varumärke visuellt i en ganska traditionell bransch?",
    ],
  },
  {
    id: 37,
    name: "Qualisys",
    size: "~50–100 anställda",
    focus: [
      "Motion Capture",
      "Biomechanics",
      "Hardware + Software",
      "Life Science",
    ],
    description:
      "Världsledande inom rörelseanalys med kunder inom sport, medicin och forskning. Kombinerar avancerad optik med mjukvaruutveckling.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur visualiserar man rörelsedata från 100 sensorer i realtid?",
      "Vilken roll spelar webbaserade gränssnitt i er produktsvit?",
      "Ni säljer globalt – hur hanterar man support och dokumentation för ett så tekniskt system?",
    ],
    conversationStartersDesign: [
      "Hur visualiserar man biomechanisk data på ett sätt som är användbart för forskare och idrottare?",
      "Hur ser er UI-design ut för motion capture-mjukvaran – vem äger den designen?",
      "Vad är de unika designutmaningarna med ett hårdvara+mjukvara-system?",
    ],
  },
  {
    id: 38,
    name: "QueensLab",
    size: "~10–30 anställda",
    focus: ["Digital byrå", "UX/UI", "Strategi", "Tjänstedesign"],
    description:
      "Byrå med fokus på tjänstedesign, digital strategi och UX – skapar lösningar med användaren i centrum.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är skillnaden på tjänstedesign och UX-design i praktiken?",
      "Hur involverar ni slutanvändare i designprocessen?",
      "Vilka branscher jobbar ni mest med?",
    ],
    conversationStartersDesign: [
      "Hur ser en typisk tjänstedesign-process ut hos er – vilka metoder använder ni?",
      "Hur visualiserar ni komplexa tjänster, t.ex. med service blueprints eller customer journeys?",
      "Vad är den coolaste designutmaningen ni jobbat med?",
    ],
  },
  {
    id: 39,
    name: "Raket",
    size: "~20–50 anställda",
    focus: ["Webbutveckling", "React", "WordPress", "Digital strategi"],
    description:
      "Webbyrå i Göteborg med fokus på moderna webbplatser och digitala strategier för growth.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Jobbar ni mer med React-baserade lösningar eller traditionella CMS?",
      "Vad är er process för att säkra kodkvalitet på en byrå?",
      "Hur ser en LIA-period ut praktiskt hos er?",
    ],
    conversationStartersDesign: [
      "Har ni designers inhouse eller jobbar ni med frilansare och externa studios?",
      "Hur ser design-handoff till era utvecklare ut?",
      "Vad är er approach till webbdesign – jobbar ni utifrån tydliga designsystem?",
    ],
  },
  {
    id: 40,
    name: "Rapid Images",
    size: "~20–50 anställda",
    focus: ["Digital Asset Management", "Bildhantering", "E-handel", "SaaS"],
    description:
      "SaaS-plattform för automatiserad bildhantering och optimering – hjälper e-handelsbolag att hantera produktbilder i stor skala.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur hanterar man automatisering av tusentals produktbilder på ett smart sätt?",
      "Vilka är de tekniska utmaningarna med bildkomprimering och formatkonvertering i realtid?",
      "Ni är ett produktbolag – jobbar man nära produktteamet som frontend-dev?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett verktyg för bildhantering som marknadsföringsteam vill använda?",
      "Vad är de viktigaste UX-principerna för ett administrativt bildverktyg?",
      "Hur kommunicerar ni ert eget varumärke visuellt – ni jobbar ju med bilder dagligen?",
    ],
  },
  {
    id: 41,
    name: "Scaffcalc",
    size: "~5–15 anställda",
    focus: ["ConstructionTech", "SaaS", "Byggbranschen", "Beräkningsverktyg"],
    description:
      "Digital beräkningsplattform för ställningsbranschen – hjälper ställningsbyggare att beräkna, planera och dokumentera projekt digitalt.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur digitaliserar man en hårt reglerad byggbransch som ställning?",
      "Vilka är de tekniska utmaningarna med avancerade beräkningsverktyg i webben?",
      "Ni löser ett väldigt specifikt problem – hur hittade ni den nischen?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett komplext beräkningsverktyg för proffs på byggarbetsplatser?",
      "Vad är de viktigaste UX-principerna i er produkt – vad måste aldrig gå fel?",
      "Hur kommunicerar ni ett ganska tekniskt SaaS-verktyg visuellt och i er marknadsföring?",
    ],
  },
  {
    id: 42,
    name: "Simma lugnt",
    size: "~5–15 anställda",
    focus: ["Webbutveckling", "Digital byrå", "Strategi"],
    description:
      "Webbyrå i Göteborg med pragmatisk approach – gör det som faktiskt behöver göras, utan onödig komplexitet.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Ert namn antyder en lugn approach – hur ser er projektkultur ut?",
      "Jobbar ni med specifika tekniker eller anpassar ni er efter kunden?",
      "Vad är den viktigaste lärdomen ni fått från att driva en liten byrå?",
    ],
    conversationStartersDesign: [
      "Ert namn och varumärke andas en tydlig personlighet – hur tog ni fram den identiteten?",
      "Hur ser designarbetet ut hos er – gör ni det inhouse eller samarbetar ni?",
      "Vad är er syn på att hålla saker enkla och pragmatiska i design?",
    ],
  },
  {
    id: 43,
    name: "Stendahls",
    size: "~50–100 anställda",
    focus: ["Kommunikationsbyrå", "Digital marknadsföring", "Film", "Design"],
    description:
      "En av Göteborgs mest etablerade kommunikationsbyråer med full service inom digital kommunikation, reklam och varumärkesstrategi.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur jobbar webbutvecklare och kreativa team ihop på en kommunikationsbyrå?",
      "Vad är de vanligaste tekniska utmaningarna i era kampanjleveranser?",
      "Hur har er tech-stack förändrats de senaste åren?",
    ],
    conversationStartersDesign: [
      "Ni är full service – hur ser er kreativa process ut från strategi till färdig produktion?",
      "Jobbar ni mycket med rörlig grafik och film i era kampanjer?",
      "Vad är den roligaste typen av uppdrag för era designers?",
    ],
  },
  {
    id: 44,
    name: "Techship",
    size: "~10–30 anställda",
    focus: ["Logistiktech", "API", "Frakt & Transport", "SaaS"],
    description:
      "SaaS-plattform som kopplar ihop e-handlare med fraktbolag via API – förenklar fraktbokning och spårning.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur designar man ett API som ska kommunicera med dussintals fraktbolag?",
      "Vilken är den svåraste integrationen ni gjort mot ett externt system?",
      "Hur ser er dashboard ut för att hantera logistikflöden – jobbar ni med React?",
    ],
    conversationStartersDesign: [
      "Hur designar man ett logistik-dashboard som gör komplex fraktdata enkel att förstå?",
      "Vad är de viktigaste UX-principerna för ett B2B-verktyg som används dagligen?",
      "Hur ser er visuella identitet ut och hur kommunicerar ni den?",
    ],
  },
  {
    id: 45,
    name: "Vaimo",
    size: "~650 anställda globalt, kontor i Göteborg",
    focus: ["E-handel", "Adobe Commerce / Magento", "Headless", "B2B / B2C"],
    description:
      "En av världens mest respekterade e-handelskonsulter. Global Magento Elite Partner med 15+ år av e-handelsprojekt för varumärken och återförsäljare globalt.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vad är den vanligaste missuppfattningen om headless e-handel?",
      "Hur ser karriärutvecklingen ut för en junior frontend-dev hos er?",
      "Ni jobbar globalt – innebär det att man kan jobba med projekt i andra länder?",
    ],
    conversationStartersDesign: [
      "Hur ser designarbetet ut i ett stort e-handelsprojekt – vad äger byrån vs kunden?",
      "Vad är de viktigaste designprinciperna för att öka konvertering i e-handel?",
      "Ni jobbar med kunder globalt – hur hanterar man design för olika kulturer och marknader?",
    ],
  },
  {
    id: 46,
    name: "Varvet",
    size: "~15–30 anställda",
    focus: ["Digital produktutveckling", "UX/UI", "React", "Strategi"],
    description:
      "Produktbyrå i Göteborg som bygger digitala produkter från idé till lansering – kombinerar affärsstrategi, design och teknik.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser produktutvecklingsprocessen ut hos er – från idé till launch?",
      "Jobbar ni mer med startups eller etablerade företag?",
      "Vad skiljer en produktbyrå från en vanlig webbyrå?",
    ],
    conversationStartersDesign: [
      "Hur integreras design i er produktutvecklingsprocess – sitter designers med från dag ett?",
      "Vad är skillnaden på att vara designer på en produktbyrå kontra en kommunikationsbyrå?",
      "Vilken typ av designuppdrag trivs ni bäst med?",
    ],
  },
  {
    id: 47,
    name: "Velory",
    size: "~20–50 anställda",
    focus: ["SaaS", "IT Asset Management", "HR-tech", "Automation"],
    description:
      "SaaS-plattform för IT asset management – hjälper företag att hålla koll på hårdvara, mjukvara och onboarding av personal.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur designar man UX för ett admin-verktyg som IT-avdelningar faktiskt vill använda?",
      "Vilka är de tekniska utmaningarna med realtidsuppdateringar i asset management?",
      "Jobbar ni med React i er frontend och hur ser er komponentarkitektur ut?",
    ],
    conversationStartersDesign: [
      "Hur gör man ett IT-admin-verktyg visuellt tilltalande utan att det känns överdrivet?",
      "Vad är de viktigaste UX-principerna i er produkt – vad måste aldrig gå snett?",
      "Hur ser er designprocess ut för att iterera på er SaaS-produkt?",
    ],
  },
  {
    id: 48,
    name: "Volvo Cars",
    size: "~40 000 anställda globalt",
    focus: [
      "Fordonsindustri",
      "Digital upplevelse",
      "Apputveckling",
      "Inbyggda system",
    ],
    description:
      "Ikoniskt göteborgsbolag. Utöver fordon bygger Volvo Cars digitala tjänster, mobilappar, kundportaler och connected car-upplevelser.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Vilka digitala produkter tar Volvo Cars in LIA-studenter för att jobba med?",
      "Hur är det att vara webbutvecklare på ett traditionellt tillverkningsföretag?",
      "Hur balanserar ni innovation och legacy-system i ett så stort bolag?",
    ],
    conversationStartersDesign: [
      "Hur ser designorganisationen ut på Volvo Cars – finns det ett globalt designspråk?",
      "Hur kopplar man ihop den fysiska bildesignen med den digitala upplevelsen i appen?",
      "Vad kan en LIA-student inom digital design faktiskt bidra med hos er?",
    ],
  },
  {
    id: 49,
    name: "Webmind",
    size: "~10–30 anställda",
    focus: ["Webbutveckling", "E-handel", "SEO", "Digital marknadsföring"],
    description:
      "Webbyrå i Göteborg med fokus på att bygga effektiva webbplatser och e-handelslösningar som driver affärer.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur hänger teknisk SEO ihop med webbutveckling i era projekt?",
      "Jobbar ni med WordPress/WooCommerce eller egenutvecklade lösningar?",
      "Vad är det roligaste projektet ni gjort den senaste månaden?",
    ],
    conversationStartersDesign: [
      "Hur integreras design i SEO-arbetet – finns det en koppling till visuell hierarki och layout?",
      "Har ni designers inhouse eller jobbar ni med externa?",
      "Vad är de vanligaste designmisstagen ni ser på de webbplatser kunder kommer till er med?",
    ],
  },
  {
    id: 50,
    name: "Welcom",
    size: "~10–30 anställda",
    focus: ["Digital kommunikation", "Webbutveckling", "Marknadsföring"],
    description:
      "Byrå i Göteborg som hjälper företag med digital kommunikation, webbplatser och marknadsföring.",
    contact: null,
    techStack: [],
    conversationStarters: [
      "Hur ser er mix ut mellan webbutveckling och kommunikation/design?",
      "Jobbar ni nära kunderna under projekten eller mer leveransbaserat?",
      "Vad letar ni efter när ni tar in en LIA-student?",
    ],
    conversationStartersDesign: [
      "Hur ser designarbetet ut hos er – är det en integrerad del av kommunikationsarbetet?",
      "Vad är de vanligaste designbehoven era kunder kommer till er med?",
      "Hur skulle en LIA-student inom digital design kunna bidra i era projekt?",
    ],
  },
];
