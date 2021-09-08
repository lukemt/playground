# Mittwoch

## Topics

- fetch()
- objects and arrays
- createElement

## Quiz Plan

- const cardData in js
  - Statt die Fragen und Antworten in das HTML zu schreiben
  - Schreiben wir ein array mit objekten
  - ähnlich wie weasleys
  - Bsp.
  [{
    question: 'Age of Arthur',
    answer: '42',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social']
  }]

- eine funktion schreiben, die ein array-objekt in das html rendert
  - main-element holen
  - alles leeren
    - Hint: use `.innerHTML = ''`
  - daten in das main-element bringen
    - createElement() für jedes html-element
      - Bsp: document.createElement('section')
    - appendChild()

- Seiten-Aufrufe implementiern
  - Hint: use eventListener!
  - Bei Klick auf Home und beim Laden:
    - renderCards(cardData)
  - Bei Klick auf Bookmarks
    - define cardDataOnlyBookmarked using cardData.filter()
    - renderCards(cardDataOnlyBookmarked)

- Bookmark-Klick
  - Orginal-Array verändern
  - neu rendern

- showAnswer
  - Orginal-Array verändern
  - neu rendern

- CreateAnswer Formular (Neue Cards hinzufügen)
  - Orginal-Array verändern
  - neu rendern

- Implementation von Persistenz mit LocalStorage
  - Bei Klick auf Bookmark
    - alles Speichern
  - Beim Laden der App
    - Alle Daten wiederherstellen
