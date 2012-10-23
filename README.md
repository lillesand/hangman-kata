# Hangman kata!

Oppgaven er å implementere hangman i JavaScript. Fokuser på å bygge bittesmå inkrementer og holde testene grønne. **Husk: det er ikke om å bli først ferdig!**

Oppsettet er lagd for å gjøre utvikling i Cloud9 IDE (c9.io). For å sette opp prosjektet i Cloud9:
  1. Gå til [c9.io](http://c9.io)
  1. Registrer deg med github-kontoen din
  1. Fork [dette prosjektet](https://github.com/lillesand/hangman-kata) til din egen konto på GitHub
  1. Prosjektet skal nå ha kommet opp under "Projects on Github" i dashboardet på Cloud9 IDE
  1. Velg prosjektet i dashboardet og trykk clone to edit
  1. Følg instruksjonene under for å installere Jasmine!

For å komme i gang:
  1. Installér jasmine-node via kommandolinja nederst i vinduet på Cloud9 IDE:
    `npm install node-jasmine`
  1. Kjør testfilen en gang for å verfisere at det virker:
    `jasmine-node specs`. **NB: Testfilene dine må slutte på `.spec.js` for at jasmine skal finne dem!**
  1. Sett opp jasmine-node til å kjøre testene dine automatisk:
    `jasmine-node specs --autotest`