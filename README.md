# Unterschriftenmappe

Verträge auf dem iPad öffnen, mehrere PDFs zusammenfügen, Felder ausfüllen und vor Ort mit dem Apple Pencil unterschreiben lassen.
Die PDFs werden nur im Browser des iPads verarbeitet. Sie werden nie hochgeladen, auch nicht auf den Server, auf dem die App liegt.

**Adresse für die iPads:** https://hanssiedewurst.github.io/Unterschriftsmappe/

## Inhalt dieses Repositorys

| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `sw.js` | Offline-Speicher: hält die App nach dem ersten Start auf dem iPad bereit |
| `manifest.webmanifest` | Name und Icon für den Home-Bildschirm |
| `icons/` | App-Icons |
| `lib/` | PDF-Bibliotheken (pdf.js von Mozilla, pdf-lib) mit ihren Lizenzen |
| `README.md` | diese Anleitung |

---

## 1. Online stellen mit GitHub Pages

Für dieses Repository ist das bereits eingerichtet. Die Schritte braucht man nur, um die App in einem neuen Repository noch einmal aufzusetzen. Das geht am einfachsten am Mac oder PC.

1. Auf **github.com** ein kostenloses Konto anlegen (oder anmelden).
2. Oben rechts auf **+** und dann **New repository**.
   - Sichtbarkeit: **Public**. Im kostenlosen Tarif geht GitHub Pages nur mit öffentlichen Repositories. Öffentlich ist nur der App-Code, nie ein Vertrag.
3. Alle Dateien und Ordner dieses Repositorys hochladen (**Add file** → **Upload files**). `index.html` muss direkt oben liegen, nicht in einem Unterordner.
4. **Settings** → links **Pages** → Source **Deploy from a branch**, Branch **main**, Ordner **/ (root)** → **Save**.
5. Nach ein bis zwei Minuten steht oben auf derselben Seite die Adresse.

---

## 2. Auf dem iPad einrichten (jeder Kollege einmal)

1. Die Adresse in **Safari** öffnen. Dafür muss das iPad online sein.
2. Auf das **Teilen-Symbol** tippen → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Die App einmal **vom Home-Bildschirm aus** öffnen, solange Internet da ist, und warten, bis der Beispielvertrag erscheint.

Danach läuft die App auch ohne Netz, zum Beispiel beim Kunden im Funkloch.

---

## 3. Benutzen

1. Vertrag vorher in der Dateien-App ablegen (iCloud Drive oder „Auf meinem iPad“).
2. App öffnen → **PDF öffnen** → Vertrag auswählen. Weitere PDFs mit **PDF anhängen** hinten anfügen.
3. **Unterschreiben:** Unterschriftsstellen sind gelb markiert („Hier unterschreiben“). Antippen, unterschreiben, **Übernehmen**. Sobald der Pencil erkannt ist, werden Finger und Handballen ignoriert.
4. **Ausfüllen:** Ausfüllbare Felder, die schon im PDF stecken, sind blau gestrichelt umrandet. Antippen und Text eingeben, Kästchen werden per Antippen an- und ausgehakt.
5. **Eigene Felder:** **Hinzufügen** → Unterschrift, Textfeld, Datum oder Häkchen → auf die Stelle im Dokument tippen.
   - Ein Textfeld kann auch leer bleiben. Mit einer *Bezeichnung* (z. B. „Kontonummer (IBAN)“) steht dann ein Hinweis im Feld, der nicht mitgedruckt wird. So lässt sich ein Vertrag für den Kunden vorbereiten.
   - Eigene Felder lassen sich verschieben (ziehen) und über den blauen Punkt breiter machen. Nach dem Verschieben erscheinen **Bearbeiten** und **Entfernen**.
6. **Speichern** → **Sichern oder teilen** → **In Dateien sichern** oder direkt per Mail verschicken. Unterschriften und Feldinhalte werden dabei fest ins PDF übernommen.

Unter **Seiten ordnen** lässt sich die Reihenfolge ändern, und überflüssige Seiten lassen sich entfernen.

---

## 4. Mit OneDrive arbeiten

### Am Windows-PC: Angebote-Liste mit fester Ablage

Am PC zeigt die App links eine Liste aller Angebote aus einem OneDrive-Ordner. Ein Klick öffnet das Angebot, und **Speichern** legt das unterschriebene PDF direkt in einem zweiten Ordner ab. OneDrive synchronisiert es von dort wie gewohnt. Das funktioniert mit **Microsoft Edge** oder **Google Chrome**, Voraussetzung ist der normale OneDrive-Ordner im Explorer.

**Einmal einrichten:**

1. Die Adresse in Edge öffnen.
2. Als Programm installieren: **…** (oben rechts) → **Apps** → **Diese Website als App installieren**. Danach liegt die Unterschriftenmappe im Startmenü und kann an die Taskleiste angeheftet werden.
3. In der App auf **Angebote** → **Ordner wählen** und im OneDrive den Ordner mit den Angeboten auswählen.
4. Bei **Ablage für unterschriebene PDFs** den Zielordner wählen, z. B. `OneDrive › Unterschrieben`. Edge fragt einmal, ob die App dort speichern darf: **Dateien bearbeiten** bzw. **Zulassen**.
5. **Fertig**. Die Liste erscheint.

**Im Alltag:**

- Die Liste zeigt neueste Angebote oben. Unterordner (z. B. pro Kunde) werden mit durchsucht.
- **Offen** blendet bereits unterschriebene Angebote aus, **Alle** zeigt sie mit dem Vermerk „unterschrieben“. Als unterschrieben gilt ein Angebot, sobald im Zielordner eine Datei *Angebotsname_unterschrieben_…pdf* liegt.
- Nach einem Neustart fragt Edge eventuell einmal nach, ob die App wieder auf die Ordner zugreifen darf: **Zugriff erlauben**. In der installierten App lässt sich das meist dauerhaft erlauben.
- Gibt es den Dateinamen im Zielordner schon, wird nichts überschrieben, die neue Datei bekommt eine Nummer angehängt.
- Die Ordnerwahl gilt nur für diesen PC und diesen Browser. Andere Kollegen richten sie bei sich einmal selbst ein.

### Auf dem iPad: OneDrive in der Dateiauswahl

Auf dem iPad gibt es diese Liste nicht, Safari erlaubt keinen dauerhaften Ordnerzugriff. Mit der **OneDrive-App** geht es trotzdem bequem:

1. OneDrive-App aus dem App Store installieren und anmelden.
2. In der App **Dateien** → **…** → **Bearbeiten** → **OneDrive** einschalten.
3. In der Unterschriftenmappe **PDF öffnen** → **OneDrive** → Ordner *Angebote*. Die Dateiauswahl merkt sich den zuletzt benutzten Ordner.
4. Nach dem Unterschreiben: **Speichern** → **Sichern oder teilen** → **In Dateien sichern** → **OneDrive** → *Unterschrieben*.

---

## 5. Kunden und Provision (am PC)

Im Ordnermodus liest die App alle PDFs aus dem Ablageordner für Unterschriebene aus, also auch die vom iPad, sobald sie dort liegen.

**Kunden-Ordner:** In der Seitenleiste unter **Kunden** steht jeder Kunde mit seinen Verträgen: *Kunde › Angebot › Provision & Status / PDF ansehen*. Kunde, Kundennummer, Adresse, Angebotsnummer, Datum, Laufzeit und alle Positionen kommen direkt aus dem Angebots-PDF. Die Kundennummer nimmt die App aus „Kunden Nr.“ im PDF, sonst aus der Zahl vor dem „_“ in der Angebotsnummer (1006213_4216 → 1006213). Verträge mit derselben Kundennummer landen beim selben Kunden. In der Kundenübersicht steht die Kundennummer oben rechts mit einem Knopf **Kopieren**. Passen beide Nummern nicht zusammen, wird der Vertrag mit „prüfen“ markiert.

**Provision:** Der Knopf **Provision** oben öffnet die Übersicht:

- Summen für das Jahr, Monatsgruppen nach Unterschriftsdatum
- pro Vertrag: Provision, **Faktor** (zum Eintragen, sobald er bekannt ist), Auszahlung = Provision × Faktor
- Häkchen **Installiert** und **Abgerechnet** (mit Datum)
- Vermerk *Faktor offen*, und *prüfen*, wenn die gelesenen Positionen nicht zur Gesamtsumme im Angebot passen
- **Als CSV exportieren** öffnet sich direkt in Excel

In der Vertragsansicht stehen alle Positionen mit angewandter Regel und Provision, dazu ein Notizfeld. Mit dem Schalter **Nach Regeln / Manuell / Keine** setzt du die Provision eines Vertrags auf einen eigenen Betrag oder auf 0 €. In der Übersicht steht dann „manuell“ bzw. „keine Provision“.

**KI-Bundle:** Steht im Angebot eine Zeile wie „Paket L & KI-Bundle“, rechnet die App den KI-Anteil (99, 199 oder 499 €) aus dem Paketpreis heraus: das Paket mit 6 ×, den KI-Anteil mit 4 ×. Die Stufe erkennt sie an der Variante im Angebot (voreingestellt: HalloPetra „Einzelkämpfer“ = 99 €, „Betriebe“ = 199 €, „Mittelstand“ = 499 €; anpassbar unter **Regeln**). Ist sie nicht erkennbar, nimmt die App die kleinste Stufe und markiert den Vertrag mit „prüfen“. Im Vertrag lässt sich die Stufe von Hand wählen. Ein einzeln verkauftes KI-Bundle läuft direkt über die Regel „KI-Bundle“.

**Regeln:** Über **Provision → Regeln**. Pro Regel: Bereich (monatlich, einmalig, Dienstleistung), ein Textstück aus dem Positionsnamen (leer = alle übrigen), Berechnung (Vielfaches des Betrags, Festbetrag, keine). Es gilt die erste passende Regel von oben. Voreingestellt:

| Bereich | Position enthält | Provision |
|---|---|---|
| Monatlich | App aktive Mitarbeiter | keine |
| Monatlich | PersonalManager aktive Mitarbeiter | keine |
| Monatlich | App Grundgebühr | 395 € einmalig |
| Monatlich | PersonalManager Grundgebühr | 395 € einmalig |
| Monatlich | KI-Bundle | 4 × KI-Anteil |
| Monatlich | alle übrigen (inkl. Cloud) | 6 × Monatsbeitrag |
| Einmalig, Dienstleistung | alle | keine |

Unten auf der Regel-Seite steht jede Position aus deinen Verträgen mit der Regel, die für sie gilt. So sieht man sofort, wenn ein neues Produkt eine eigene Regel braucht.

**Wo die Daten liegen:** Faktoren, Häkchen, Notizen und Regeln speichert die App in der Datei `_Unterschriftenmappe-Daten.json` im Ablageordner. OneDrive sichert und synchronisiert sie mit. Bitte nicht löschen, sonst sind die eingetragenen Faktoren weg.

---

## 6. Aus anderen Apps „zur Unterschrift“ schicken

Web-Apps können sich auf dem iPad leider nicht selbst ins Teilen-Menü eintragen, das geht nur mit einer App aus dem App Store. Ein Kurzbefehl kommt aber nahe heran: Er legt das PDF in einem festen Ordner ab und öffnet die Unterschriftenmappe.

**Einmal einrichten** (App **Kurzbefehle**, Bezeichnungen können je nach iPadOS-Version leicht abweichen):

1. **+** → neuer Kurzbefehl, Name **Zur Unterschrift**.
2. Oben auf das Info-Symbol bzw. die Details → **Im Share-Sheet anzeigen** einschalten. Als Eingabe **PDFs** bzw. **Dateien** wählen.
3. Aktion **Datei sichern** hinzufügen: Eingabe = *Kurzbefehleingabe*, Ziel = ein Ordner, z. B. *iCloud Drive › Zur Unterschrift*. **Nach Speicherort fragen** ausschalten, **Überschreiben** einschalten.
4. Aktion **URL öffnen** hinzufügen mit `https://hanssiedewurst.github.io/Unterschriftsmappe/`.

**Benutzen:** Im PDF (Mail, Dateien, Vorschau …) auf **Teilen** → **Zur Unterschrift** tippen. In der Unterschriftenmappe dann **PDF öffnen** → Ordner *Zur Unterschrift*. Die Dateiauswahl merkt sich den zuletzt benutzten Ordner, beim nächsten Mal ist es also nur noch ein Tipp.

---

## 7. Updates einspielen

1. Die geänderten Dateien im Repository hochladen (**Add file** → **Upload files**). Vorhandene Dateien mit gleichem Namen werden ersetzt.
2. In `sw.js` die Zeile `const VERSION = 'v…';` hochzählen.
   Ohne diesen Schritt behalten die iPads die alte Fassung im Offline-Speicher.
3. Die iPads holen die neue Version beim nächsten Öffnen mit Internet. Die App zeigt dann „Eine neue Version ist da“ mit dem Knopf **Neu laden**.

---

## 8. Datenschutz

- **Verträge, Feldinhalte, Unterschriften und Provisionsdaten** werden nur auf dem Gerät verarbeitet. Es gibt keinen Server der App, der Dokumente empfängt. Im OneDrive landen sie nur dort, wo du selbst speicherst.
- **GitHub** liefert nur die App-Dateien aus.
- **Keine externen Anbieter:** Die PDF-Bibliotheken liegen in diesem Repository (`lib/`), Schriften kommen vom Gerät selbst. Es werden keine Dateien von Google, Cloudflare oder anderen Diensten nachgeladen.

---

## 9. Fehlersuche auf dem iPad

Wenn die App eine Unterschriftsstelle nicht erkennt, zeigt der Diagnose-Modus, was sie im PDF gefunden hat:

- **In Safari:** die Adresse mit `#diagnose` am Ende öffnen, also `https://hanssiedewurst.github.io/Unterschriftsmappe/#diagnose`.
- **In der App vom Home-Bildschirm:** fünfmal schnell auf den blauen Schriftzug „UNTERSCHRIFTENMAPPE“ oben links tippen.

Danach das Beispiel oder ein eigenes PDF öffnen. Unten erscheint ein Bericht. Mit **Text kopieren** lässt er sich in eine Nachricht einfügen.

---

## 10. Grenzen der aktuellen Version

- Passwortgeschützte oder gegen Bearbeitung gesperrte PDFs werden abgelehnt.
- Die automatische Erkennung braucht echten Text im PDF. Bei eingescannten Verträgen die Stelle über **Hinzufügen** → **Unterschrift** festlegen.
- Textfelder sind einzeilig. Zu langer Text wird automatisch kleiner gesetzt.
- Rechtlich ist eine auf dem iPad gezeichnete Unterschrift eine *einfache elektronische Signatur*. Für Verträge mit gesetzlicher Schriftform (z. B. Kündigung eines Arbeitsverhältnisses, Befristungsabrede, Bürgschaft) reicht das nicht.
