---
layout: project
title: "XML Transformation"
type: ['School', 'Web Publishing']
date: 2019-04-25
language: 'sk'
---

# XML Transformation - Presentation

## Zadanie

Analyzujte možnosti zápisu jednoduchej prezentácie v jazyku XML. Identifikujte základné súčasti 
prezentácie a navrhnite XML elementy pre ich označkovanie (metadátové, štrukturálne, inline). Dbajte na 
znovupoužiteľnosť a vyvarujte sa redundancií. Návrh elementov zrealizujte opísaním typu dokumentu pomocou 
vybraného jazyka (DTD, XSD, RELAX NG) spolu s vysvetlením účelu jednotlivých elementov. Vo vami navhrnutom 
jazyku vytvorte ukážkovú prezentáciu, ktorá bude demonštrovať možnosti tvorby prezentácií podľa definície 
typu dokumentu.

Navrhnite a vytvorte XSLT šablóny pre konverziu prezentácie z XML do XHTML+CSS a pre konverziu prezentácie z XML 
do PDF. Klaďte dôraz na znovupoužitie jednotlivých šablon pre viaceré výstupné formáty. Umožnite zadávanie parametrov 
transformácií.

Súčasťou požiadaviek na zadanie je vytvorenie správy o zadaní 3, v ktorej zdokumentujete splenie jednotlivých bodov 
zadania. Správa bude súčasťou vašej stránky o Webovom publikovaní na GitHube.


## Dokumentácia

### Opis typu dokumentu a účelu navrhnutých elementov

Navrhli sme XML dokument (Dostupný [TU](/assets/xml-project/present.xml).), ktorý reprezentuje dátový obsah prezetenácie. Koreňový prvok je `Presentation`, ktorý 
obsahuje globálne informácie v tagu `info` a `slides`, ktorý obsahuje jednotlivé snímky prezentácie. Každý 
snímok prezentácie môže obsahovať nasledujúce prvky:

* title - titulok snímky
* paragraph - jeden odstavec 
* list - zoznam
* picture - obrázok

Aby dokument dodržiaval nami navrhnutú schemu, navrhli sme aj validačnú schému pomocou DTD.

### Ukážková prezentácia

Pre účely demnštrácie nášho dokumentu a transformačných dokumentov sme vytvorili ukážkovú prezentáciu. Prezentácia
obsahuje nasledujúce snímky:

* Úvod - snímka s väčším červeným nadpisom a obrázkom k problematike
* Personalizované Odporúčanie - snímok zobrazujúci dva odstavce textu a zoznam textu
* Vizualizacia odporúčania - obrázok s popisom
* O Odporúčaní - zoznam textu
* Koniec - záverečný snímok s poďakovaním a nadpisom

V pätičke kazďej snímky sa nachádza počítadlo aktuálneho snímku voči všetkým snímkom v prezentácii.

### Základný návrh XSL transformácií, ich vhodnosť, parametrizácia (max 3 body)

Pre účely zadania sme vytvorili dve XSL transformácie do formátov XHTML+CSS a PDF. Obidva transformačné dokumenty 
obsahujú rozdelenie na menšie časti `template`, kde každý `tag` má svoj vlastný `template`. Transformácie sú si
viditelne veľmi podobné, no hlavný rozdiel je v tagoch, ktoré spôsobujú vizualizáciu vo výslednom dokumente. Ako
príklad slúži html tag `<p>`, ktorému je veľmi podobný tag `<fo:block>`, ktorý sa využíva vo formáte PDF. Takýmito
spôsobom by sme dokázali napamovať viacej tagov/zhlukov tagov. XHTML transformácia využíva HTML tagy, zatiaľ čo PDF 
využíva XSL-FO (format object) tagy.

Pre účely parametrizácie sme si vytvorili dokument `config.xml`, ktorý obsahúje nastavenia správania transformácii.
Tento dokument je iba ukážkový a preto obsahuje iba globálne nastavenia farby a veľkosti písma pre `title`, `paragraph`
a `list`. Takýmto spôsobom sme chceli demoštrovať, že v prípade poteby dokážeme zmeniť dané prvky v celom výslednom 
dokumente.

Tieto globálne nastavenia sa dajú prekonať lokálnym nastavením priamo v zdrojovom dokumente pomocou atributov 
`fontSize` a `fontColor`. Medzi ďalšie atribúty v dokumente patria `center` pre tag `picture`, ktorý vycentruje obrázok,
a atribút `type` pre tag `slide`, ktorý prepína medzi dvoma typmi snímku: základným a vycentrovaným.

#### XML -> XHTML+CSS
Pre vytvorenie štýlu sme využili CSS knižnicu [Bootstrap](https://getbootstrap.com/). Výsledná 
prezentáciá v XHTML+CSS je dostupná [TU](/assets/xml-project/slides/slide-id-1.html).

#### XML -> PDF
Výsledná prezentáciá v PDF je dostupná [TU](/assets/xml-project/output.pdf).
