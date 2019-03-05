---
layout: project
title: "My Personal Page"
type: ['School', 'Web Publishing']
date: 2019-02-28
language: 'sk'
file: 'my_page.png'
---

#### Aké rozloženia stránok ste vytvorili, ich účel:
 * Home
 * Jobs & Education
 * Skills
 * Projects
 * Web publishing


#### Aké prvky ste použili v šablonách (premenné, kolekcie, … zo zoznamu vyššie):
Kolekcie:
{% for col in site.collections %} * {{ col.label }}
{% endfor %}


#### Aké štýly ste použili:

Style of the website was made in frontend library [Boostrap](https://getbootstrap.com/) with [BLK• Design System Theme/Template](https://www.creative-tim.com/product/blk-design-system#).

