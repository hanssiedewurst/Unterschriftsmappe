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

## 4. Aus anderen Apps „zur Unterschrift“ schicken

Web-Apps können sich auf dem iPad leider nicht selbst ins Teilen-Menü eintragen, das geht nur mit einer App aus dem App Store. Ein Kurzbefehl kommt aber nahe heran: Er legt das PDF in einem festen Ordner ab und öffnet die Unterschriftenmappe.

**Einmal einrichten** (App **Kurzbefehle**, Bezeichnungen können je nach iPadOS-Version leicht abweichen):

1. **+** → neuer Kurzbefehl, Name **Zur Unterschrift**.
2. Oben auf das Info-Symbol bzw. die Details → **Im Share-Sheet anzeigen** einschalten. Als Eingabe **PDFs** bzw. **Dateien** wählen.
3. Aktion **Datei sichern** hinzufügen: Eingabe = *Kurzbefehleingabe*, Ziel = ein Ordner, z. B. *iCloud Drive › Zur Unterschrift*. **Nach Speicherort fragen** ausschalten, **Überschreiben** einschalten.
4. Aktion **URL öffnen** hinzufügen mit `https://hanssiedewurst.github.io/Unterschriftsmappe/`.

**Benutzen:** Im PDF (Mail, Dateien, Vorschau …) auf **Teilen** → **Zur Unterschrift** tippen. In der Unterschriftenmappe dann **PDF öffnen** → Ordner *Zur Unterschrift*. Die Dateiauswahl merkt sich den zuletzt benutzten Ordner, beim nächsten Mal ist es also nur noch ein Tipp.

---

## 5. Updates einspielen

1. Die geänderten Dateien im Repository hochladen (**Add file** → **Upload files**). Vorhandene Dateien mit gleichem Namen werden ersetzt.
2. In `sw.js` die Zeile `const VERSION = 'v…';` hochzählen.
   Ohne diesen Schritt behalten die iPads die alte Fassung im Offline-Speicher.
3. Die iPads holen die neue Version beim nächsten Öffnen mit Internet. Die App zeigt dann „Eine neue Version ist da“ mit dem Knopf **Neu laden**.

---

## 6. Datenschutz

- **Verträge, Feldinhalte und Unterschriften** verlassen das iPad nie. Es gibt keinen Server, der Dokumente empfängt.
- **GitHub** liefert nur die App-Dateien aus.
- **Keine externen Anbieter:** Die PDF-Bibliotheken liegen in diesem Repository (`lib/`), Schriften kommen vom Gerät selbst. Es werden keine Dateien von Google, Cloudflare oder anderen Diensten nachgeladen.

---

## 7. Fehlersuche auf dem iPad

Wenn die App eine Unterschriftsstelle nicht erkennt, zeigt der Diagnose-Modus, was sie im PDF gefunden hat:

- **In Safari:** die Adresse mit `#diagnose` am Ende öffnen, also `https://hanssiedewurst.github.io/Unterschriftsmappe/#diagnose`.
- **In der App vom Home-Bildschirm:** fünfmal schnell auf den blauen Schriftzug „UNTERSCHRIFTENMAPPE“ oben links tippen.

Danach das Beispiel oder ein eigenes PDF öffnen. Unten erscheint ein Bericht. Mit **Text kopieren** lässt er sich in eine Nachricht einfügen.

---

## 8. Grenzen der aktuellen Version

- Passwortgeschützte oder gegen Bearbeitung gesperrte PDFs werden abgelehnt.
- Die automatische Erkennung braucht echten Text im PDF. Bei eingescannten Verträgen die Stelle über **Hinzufügen** → **Unterschrift** festlegen.
- Textfelder sind einzeilig. Zu langer Text wird automatisch kleiner gesetzt.
- Rechtlich ist eine auf dem iPad gezeichnete Unterschrift eine *einfache elektronische Signatur*. Für Verträge mit gesetzlicher Schriftform (z. B. Kündigung eines Arbeitsverhältnisses, Befristungsabrede, Bürgschaft) reicht das nicht.
