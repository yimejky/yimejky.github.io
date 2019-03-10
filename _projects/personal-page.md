---
layout: project
title: "My Personal Page"
type: ['School', 'Web Publishing']
date: 2019-02-28
language: 'sk'
file: 'my_page.png'
---


## Zadanie

Vytvorte webovú prezentáciu (webové sídlo) o sebe. Zamerajte sa jednak na vaše profesné záujmy (napr. projekty, ktoré 
riešite/riešili ste, čo vás v informatike najviac baví, fascinuje = váš developerský profil) a jednak vaše osobné 
záujmy, hobby.

V rámci developerského profilu vytvorte sekciu Webové publikovanie, kde budete publikovať všetky tri vaše vypracované 
zadania z predmetu.

Využite pritom technológie Git + GitHub Pages + Jekyll + Markdown. Využite potenciál statického generátora Jekyll a 
jeho templatovacích možností.
    
<br>

## Dokumentácia

### Aké rozloženia stránok ste vytvorili, ich účel

Sídlo pozostáva z 3 rozložení:
 * **default** - obsahuje iba zakladne časti stránky - html hlavičku, navigačnú lištu (navbar), spodnú lištu (footer) 
  a miesto kde sa ma vkladať obsah každej stránky
 * **main_section** - predstavuje rozšírenie default stránky, obsahuje `section` a `container`, ktoré používa väčšina 
 stránok
 * **project** - obsahuje rozloženie, ktoré sa používa pri zobrazovaní jednotlivých projektov
 
Podstránky:
 * **Home** - úvodná stránka
 * **Jobs & Education** - prehľad môjho študijného a karierného života
 * **Skills** - prehľad mojích schopností developera
 * **Projects** - ukážky a dokumentácie mojích predchádzajúcich projektov a výtvorov
 * **Web Publishing** - dokumentácie k predmetu Webové publikovanie

### Aké prvky ste použili v šablonách (premenné, kolekcie, ...)

#### Kolekcie
Stránka využíva nasledujúce kolekcie:
 * **jobs** - Predstavuje moje predchádzajúce pracovné skúsenosti. Použité na stránke 
 [Jobs & Education](/jobs_and_education).
 * **schools** - Predstavuje moje predchádzajúce pracovné skúsenosti. Použité na stránke 
 [Jobs & Education](/jobs_and_education).
 * **skills** - Zoznam mojich zručnosti, ktoré sú rozdelené do troch typov `frontend`, `backend` a `database`.
 * **projects** - Kolekcia obsahuje moje portfólio a projekty z minulosti, ktoré by mali preukázať moje skúsenosti. 
 Využíva sa na stránkach.
 [Projects](/projects) a [Web Publishing](/wpub_projects).

#### Využitie premien

Podstránky su tvorené obsahom, ktoré sú tvorené pomocou premených.

Každá kolekcia sa skladá z viacerých atribútov, ktoré som následne použil pri vizualizácii kolekcií:
 * **jobs** - názov firmy/práce/zamestnania, typ práce, dátum začiatku zamestnania a dátum konca zamestnania
 * **schools** - názov, typ školy, dátum začiatku štúdia a dátum konca štúdia 
 * **skills** - názov, percento na koľko zručnosť ovládam a typ zručnosti
 * **projects** - názov, typ projektu, dátum zverejnenia, jazyk v ktorom je projekt popísaný a názov súboru s obrázkom 
 o projekte
Niektoré atribúty su pri vizualizácii podmienené podmienkou. Napríklad projekt môže mať obrázok ale nemusí. To isté 
platí aj pre dátum konca štúdia alebo dátum ukonečenia zamestnania. V prípade, že prvky v kolekcii tieto dátumy 
 
V rámci premených som využil aj premené zadefinované v súbore `_config.yml`: `name_short`, `facebook_link` 
                                                                         

#### Filtre

Na celom sídles me použili viacere filtre, zväčša pre filtrovanie kolekcií. Využili sme zoradenie podľa 
dátumu, zoradenie v opačnom poradí.

Stránka [Web Publishing](/wpub_projects) zobrazuje z kolekcie `projects` iba projekty, ktoré sú označené 
typom `'Web Publishing'`

[Skills](/skills) je rozdelená do troch katégorií `frontend`, `backend` a `database` a obsahuje tlačidlá, ktoré
menia obsah stránky podľa zvolenej kategórie. Pri zobrazovaní sa využíva filtrovanie kolekcie `skills`.

#### Tagy

Základné rozloženie `default` sme si rozdelili na menšie časti (`footer`, `header` a `scripts`), ktoré následne 
importujeme pomocou tagu `include`.

#### Plugin

Pre vylepšenie výzoru som použil plugin [jemoji](https://github.com/jekyll/jemoji), ktorý využíva 
[emotikonov](https://www.webfx.com/tools/emoji-cheat-sheet/)


### Aké štýly ste použili

Štýl stránky bol vytvorený pomocou frontend knižnice [Boostrap](https://getbootstrap.com/) 
spolu so systémom [BLK• Design System](https://www.creative-tim.com/product/blk-design-system#), ktorý je použitý 
kvôli zmene výzoru.

