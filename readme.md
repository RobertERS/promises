Prosta aplikacja pobiera dane zadanego użytkownika z dwóch adresów API i po pomyślnym odebraniu obiektów JSON, wyświetla dane dokumencie HTML.
 
[Demo aplikacji](http://eternes.pl/demo/promises/)

[Repozytorium na github](https://github.com/RobertERS/promises)

Użyte narzędzia i technologie:

 - ES6
 - XHR
 - Promise
 - Gulp 

Pliki źródłowe są w katalogu src a najważniejsze z nich to:
 - app.es6 - główny plik z metodami,
 - load-content.es6 - serwis z obiektem Promise.

--------------------
Instalacja:
npm install
W projekcie znajduje się skonfigurowany gulp dla ES6 oraz Sass. Wystarczy uruchomić za pomoca komendy: 
gulp

