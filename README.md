# CodersCamp 2020 - JavaScript

#### Zasady wykonywania zadań praktycznych

Uwaga! Podczas realizacji zadania należy wykonać pracę jedynie w pliku podanym w treści.
Nie wolno zmieniać (commitować zmian) w plikach w katalogu `test`.
Wprowadzenie zmian w tych plikach będzie skutkować uzyskaniem 0 punktów za zadanie.
Twój czas wykonywania zadania to czas pomiędzy opublikowaniem na Discord linku do zadania a dokładną datą Twojego ostatniego commita w repozytorium z zadaniem.
Dlatego, kiedy uznasz zadanie za zakończone, już nic nie zmieniaj. Upewnij się także na GitHub, że wykonałeś push.

## 🧑‍🤝‍🧑 Zadanie praktyczne — Pełnoletność z numeru PESEL

#### ⏰ Czas na wykonanie: 40 minut

W pliku `dateofbirth-from-pesel.js` uzupełnij implementację funkcji dateOfBirthFromPesel,
która będzie przyjmowała jeden parametr wejściowy.
Załóż, że podana do funkcji wartość zawsze będzie typu `string`.
Nie będziemy sprawdzać liczb, obiektów itp.

Do wykonania zadania wykorzystaj wiedzę domenową nt. numeru pesel ze strony Gov.pl
Potrzebna treść strony została podana na końcu zadania.

### 🚀 Wyzwania stojące przed Tobą

Twój zespół realizuje projekt dla klienta.
W ramach tego projektu zostało Ci przypisane zadanie, którego kryteria akceptacji zostały spisane poniżej.
Każde z zadań zostało wycenione.
Im więcej zadań wykonasz — tym więcej zarobisz dla firmy i osiągniesz lepszą pozycję do negocjacji przyszłych podwyżek.

Niestety, w projektach informatycznych oprócz działania programu ważne są także ustalone terminy.
Pamiętaj, że umowa z klientem zobowiązuje nas do zmieszczenia się w wyznaczonym czasie (40 minut).
Za każdą rozpoczętą minutę opóźnienia otrzymamy jako zapłatę o 1$ mniej.

1. Funkcja dateofbirthFromPesel zwraca string zawierajct datę urodzenia w formacie `"RRRR-MM-DD"`. **(Wycena: 15$)**
2. Jeśli podany do funkcji dateofbirthFromPesel parametr to nie **string zawierający 11 znaków**, wtedy należy rzucić wyjątek (Error).
   Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
   Sprawdzamy jedynie liczbę znaków w podanym stringu. Nie weryfikujemy czy cały PESEL jest poprawnie skonstruowany.
   **(Wycena: 10$)**
3. Jeśli podany do funkcji dateofbirthFromPesel parametr to nie **pusty string albo string zawierający jedynie spacje**, wtedy należy rzucić wyjątek (Error).
   Treść wiadomości w wyjątku musi być następująca `"XXX is not valid PESEL number!"`, gdzie XXX to podany na wejściu do funkcji niepoprawny PESEL
   **(Wycena: 5$)**
4. Jeśli odkodowany z numeru PESEL numer miesiąca nie mieści się w zakresie 1 do 12, należy rzucić wyjątek (error).
   Treść wiadomości w wyjątku musi być następująca: `"There is an invalid month in PESEL: XXX`. **(Wycena: 5$)**

**Całość**: 35$ + opóźnienie (-1$ \* każda rozpoczęta minuta po czasie)

Przykłady działania funkcji:

```js
dateOfBirthFromPesel("89090132712") returns "1989-09-01"
dateOfBirthFromPesel("05301791241") returns "2005-10-17"
dateOfBirthFromPesel("123") throws Error("123 is not valid PESEL number!")
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

RR – to 2 ostanie cyfry roku urodzenia,

MM – to miesiąc urodzenia,

DD – to dzień urodzenia,

PPPP – to liczba porządkowa oznaczająca płeć.
U kobiety ostatnia cyfra tej liczby jest parzysta (0, 2, 4, 6, 8),
a u mężczyzny - nieparzysta (1, 3, 5, 7, 9),

K – to cyfra kontrolna.

Przykład: PESEL **11220**3PPP**6**K należy do kobiety,
która urodziła się 3 lutego 2011 roku,
a PESEL **761115**PPP**3**K - do mężczyzny,
który urodził się 15 listopada 1976 roku.
