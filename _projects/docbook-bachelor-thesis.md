---
layout: project
title: "DocBook Bachelor thesis"
type: ['School', 'Web Publishing']
date: 2019-03-24
language: 'sk'
---

## Zadanie

Zadanie 2: Transformácia vybraného dokumentu do formátu DocBook
Predmetom 2. zadania je spracovanie vybraného dokumentu (ideálne bakalárskeho projektu) z pôvodného ľubovoľného 
(Word, OpenOffice, LaTeX, …) formátu do formátu DocBook a vygenerovanie cieľového tvaru v PDF. Výsledný dokument 
bude mať rozsah minimálne 10 a maximálne 15 strán. Do rozsahu sa nezapočítavajú úvodné strany (obsah, zoznamy 
obrázkov a tabuliek), použitá literatúra a prílohy.

Požadované a kontrolné konštrukcie sú:

* štandardné členenie textu na kapitola, podkapitola, podpodkapitola, príloha, generovaný obsah,
* zvýraznenie slov, zvýraznenie členenia textu odrážkami alebo číslovaním,
* odkazy na iné časti vlastného dokumentu, prípadne odkazy na URL,
* poznámka pod čiarou,
* zoznam použitej literatúry a zdrojov vrátane ich citácie v texte,
* vloženie obrázku a tabuliek, odkazy na ne v texte; zoznam obrázkov a tabuliek v úvode alebo závere textu,
* vytvorenie registra pojmov (indexu) s pojmami hierarchicky usporiadanými do dvoch úrovni, napríklad „cykly, while“, 
„cykly, for“ (najmenej ako ukážku na 10-15 pojmoch na predvedenie práce s registrom).

Súčasťou požiadaviek na zadanie je vytvorenie správy o zadaní 2, ktorá bude súčasťou vašej stránky o Webovom 
publikovaní na GitHube. Správa o rozsahu 150-250 slov bude obsahovať informácie o použitých elementoch a 
atribútoch, prípadne ukážky XML/XSLT demonštrujúce vykonané prispôsobenie DocBook šablon (nepovinné).

Na transformáciu zo zdrojového formátu DocBook do PDF použite upravenú šablónu na základe šablóny od Jiřího 
Koska (obsahuje i ukážku).

Výsledok 2. zadania vložte do 24. 03. 23:59 do AISu ako jeden ZIP archív pomenovaný vaším AIS 
loginom (Z2-aislogin.zip). Archív musí obsahovať:

* zdrojové texty vo formáte DocBook a ďalšie súbory súvisiace s obsahom (napr. obrázky),
* skripty potrebné na preklad (dávkové súbory .bat)
* cieľový tvar súborov a pôvodný tvar textu bakalárskeho projektu (ideálne PDF),
* sprievodný textový súbor „_Z1-aislogin.txt“, ktorý obsahuje zoznam súborov obsiahnutých v archíve a spôsob 
prekladu (transformáciu) autorského textu v DocBook do cieľového formátu.
* archív obsahovať najviac dva súbory navyše: github.url, s url vášho projektu na GitHub-e

Archív nesmie obsahovať žiadne externé knižnice (saxon, …).

## Dokumentácia

Pri splnení zadania som sa riadil požadovanými bodmi. Ako text som použil moju bakalársku prácu napísanú 
pomocou technológie LaTex. Text som rozčlenil na kapitoly, podkapitoly podpodkapitoly a prílohu aby sa 
výstupný dokument čo najviac podobal na pôvodný dokument. Splnené požadované a kontrolné konštrukcie:

* Strana 10 obsahuje zvýraznený text (tag `emphasis`) a členenie odrážkami (tag `itemizedlist`), členenie sa nachádza 
ďalej na stranách 11, 13, 18 a 19.

* Odkazy (tag `xref` a `link`) na iné časti dokumentu sú na stranách 13 a 17.

* Poznámka pod čiarou (tag `footnote`) na strane 14 obsahujúca link na internetovú stránku.

* Strana 24 obsahuje bibliografiu (tag `bibliography`) s 3 literatúrami, ktoré sú citované (tag `xref`) v celom
dokumente.

* V súbore predlohy `thesis.xsl` sme upravili tag `<xsl:param name="generate.toc">`, aby predloha obsahovala 
zoznam obrázkov a tabuliek. Obrázky sú na stranách 11, 12 a tabuľky na stranách 9 a 16. Strana 11 obsahuje 
tag `xref` odkazujúci na obrázok `id="ex.cosine"`, strany 9 a 16 obsahuje tag `xref` odkazujúci na 
tabuľky `id="content-table"` a `id="usage-prediction-table"`.

* Pomocou tagu `index` sme vytvorili register pojmov, ktoré sú definované pomocou tagu `indexterm` v celom 
dokumente.

Mojím cieľom bolo demonštrovať, že dokážem ovládať tagy a princípy DocBook-u. Splnil som všetky hore uvedené 
požiadavky a snažil som sa aby výsledný dokument vyzeral čo najviac vierohodne.
