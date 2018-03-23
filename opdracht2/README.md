# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 2 - 1, 2, 3 Feature Detectie
//Wat laat je zien als een browser of gebruiker 'enhancement' niet kan tonen of zien? Hoe doe je Feature Detection en wat doe je als een techniek niet werkt?

Werk 2 componenten uit in een demo. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Gebruik [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

- Per feature: Zoek uit hoe je deze kunt testen. Verzamel uitleg en artikelen. Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk). Test de feature (en fallback) op verschillende browsers en het Device Lab. Let op: Gebruik van polyfills is niet toegestaan.
- Post je 2 demo’s op GitHub met uitleg in een README file. Wat is de feature? Welke browsers/devices ondersteunen deze wel/niet? Hoe zorg je dat de fallback nuttig is?

Beoordelingscriteria
- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
  -	Een beschrijving van de feature.
  - Bronnen van uitleg en gebruikte artikelen.
  -	Welke browsers/devices ondersteunen deze wel/niet.
  -	Een beschrijving hoe de fallback werkt.


## Opdracht: Feature Detectie

### Carousel

[Link naar de live demo](https://nourbayard.github.io/browser-technologies/opdracht2/demo1)

Voor de tweede demo heb ik een carousel gemaakt. Hierin komen een aantal aankondigingen (met tekst en links) in te staan.

#### Schetsen

#### Device lab

#### Fallback
Wanneer de JS uit staat/niet werkt, komt er bovenaan de pagina een melding (d.m.v. de <noscript> tag) tevoorschijn waarin staat dat je JS gedisabled is. Tot nu toe, als de JS uit staat, komen alle meldingen onder elkaar te staan.

### FAQ lijst

[Link naar de live demo](https://nourbayard.github.io/browser-technologies/opdracht2/demo2)


Voor de eerste demo heb ik een FAQ lijst gemaakt met vragen en antwoorden over de minor.

#### Schetsen

#### Device lab

#### Fallback
Wanneer de JS uit staat/niet werkt, komt er bovenaan de pagina een melding (d.m.v. de <noscript> tag) tevoorschijn waarin staat dat je JS gedisabled is.
