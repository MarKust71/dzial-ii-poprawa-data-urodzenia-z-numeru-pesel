# CodersCamp 2020 - JavaScript

#### Zasady wykonywania zadań praktycznych

Uwaga! Podczas realizacji zadania należy wykonać pracę jedynie w pliku podanym w treści.
Nie wolno zmieniać (commitować zmian) w plikach w katalogu `test`.
Wprowadzenie zmian w tych plikach będzie skutkować uzyskaniem 0 punktów za zadanie.
Twój czas wykonywania zadania to czas pomiędzy opublikowaniem na Discord linku do zadania a dokładną datą Twojego ostatniego commita w repozytorium z zadaniem.
Dlatego, kiedy uznasz zadanie za zakończone, już nic nie zmieniaj. Upewnij się także na GitHub, że wykonałeś push.

## 🧑‍🤝‍🧑 Zadanie praktyczne — Pełny rok z numeru PESEL

#### ⏰ Czas na wykonanie: 40 minut

W pliku `fullyearofbirth-from-pesel.js` uzupełnij implementację funkcji fullYearOfBirthFromPesel,
która będzie przyjmowała jeden parametr wejściowy.
Załóż, że podana do funkcji wartość zawsze będzie typu `string`.
Nie będziemy sprawdzać liczb, obiektów itp.

Do wykonania zadania wykorzystaj wiedzę domenową nt. numeru PESEL ze strony Gov.pl
Potrzebna treść strony została podana na końcu zadania.

### 🚀 Wyzwania stojące przed Tobą

Twój zespół realizuje projekt dla klienta.
W ramach tego projektu zostało Ci przypisane zadanie, którego kryteria akceptacji zostały spisane poniżej.
Każde z zadań zostało wycenione.
Im więcej zadań wykonasz — tym więcej zarobisz dla firmy i osiągniesz lepszą pozycję do negocjacji przyszłych podwyżek.

Niestety, w projektach informatycznych oprócz działania programu ważne są także ustalone terminy.
Pamiętaj, że umowa z klientem zobowiązuje nas do zmieszczenia się w wyznaczonym czasie (40 minut).
Za każdą rozpoczętą minutę opóźnienia otrzymamy jako zapłatę o $1 mniej.

1. Funkcja fullYearOfBirthFromPesel zwraca string zawierajct pełny rok urodzenia w formacie `"RRRR"`. **(Wycena: $15)**
2. Jeśli podany do funkcji fullYearOfBirthFromPesel parametr to nie **string zawierający 11 znaków**, wtedy należy rzucić wyjątek (Error).
   Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
   Sprawdzamy jedynie liczbę znaków w podanym stringu. Nie weryfikujemy czy cały PESEL jest poprawnie skonstruowany.
   **(Wycena: $10)**
3. Jeśli podany do funkcji fullYearOfBirthFromPesel parametr to **pusty string albo string zawierający jedynie spacje**, wtedy należy rzucić wyjątek (Error).
   Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
   **(Wycena: $5)**
4. Jeśli odkodowany z numeru PESEL numer miesiąca nie mieści się w zakresie 1 do 12, należy rzucić wyjątek (error).
   Treść wiadomości w wyjątku musi być następująca: `"There is an invalid month in PESEL: XXX"`. **(Wycena: 5$)**

**Całość**: $35 + opóźnienie (-$1 za każdą rozpoczętą minutę po czasie)

Przykłady działania funkcji:

```js
fullYearOfBirthFromPesel("89090132712") returns "1989"
fullYearOfBirthFromPesel("05301791241") returns "2005"
fullYearOfBirthFromPesel("123") throws Error("123 is not valid PESEL number!")
```

Powodzenia, twój zespół liczy na Ciebie!

## ℹ️ Czym jest numer PESEL

Źródło: https://www.gov.pl/web/gov/czym-jest-numer-pesel

(Zwróć szczególną uwagę "_Dlaczego osoby urodzone po 1999 roku mają inne oznaczenie miesiąca urodzenia_")

Numer PESEL to jedenastocyfrowy symbol numeryczny,
który pozwala na łatwą identyfikację osoby, która go posiada.
Numer PESEL zawiera datę urodzenia, numer porządkowy, oznaczenie płci oraz liczbę kontrolną.

### Co oznaczają cyfry w numerze PESEL

Każda z 11 cyfr w numerze PESEL ma swoje znaczenie. Można je podzielić następująco:

RRMMDDPPPPK

RR – to dwie ostanie cyfry roku urodzenia,

MM – to miesiąc urodzenia,

DD – to dzień urodzenia,

PPPP – to liczba porządkowa oznaczająca płeć.
U kobiety ostatnia cyfra tej liczby jest parzysta (0, 2, 4, 6, 8),
a u mężczyzny - nieparzysta (1, 3, 5, 7, 9),

K – to cyfra kontrolna.

Aby odróżnić od siebie numery PESEL z różnych stuleci, przyjęto następującą metodę oznaczania miesiąca urodzenia:

Dla stulecia 1900-1999 cyfry oznaczające miesiąc odpowiadają naturalnym numerom miesięcy - 01 styczeń, 02 luty itd.,
np. **710910**PPPPK to PESEL osoby urodzonej 10-09-1971.

Dla stulecia 2000-2099 do numeru miesiąca dodano liczbę 20, czyli dla tego stulecia 21 to styczeń, 22 luty itd.,
np. **112203**PPPPK to to PESEL osoby urodzonej 3-02-2000.

Dla stulecia 2100-2199 do numeru miesiąca dodano liczbę 40, czyli dla tego stulecia 41 to styczeń, 42 luty itd.

Podobnie ustalono sposób oznaczania miesiąca dla kolejnego stulecia, jednak naturalny numer miesiąca powiększony o 80
oznacza, że data urodzenia zawarta w numerze PESEL dotyczy stulecia 1800-1899,
np. **679205**PPPPK to to PESEL osoby urodzonej 5-12-1867.

Przykład: PESEL **112203**PPP**6**K należy do kobiety,
która urodziła się w 2011 roku,
a PESEL **761115**PPP**3**K - do mężczyzny,
który urodził w 1976 roku.
