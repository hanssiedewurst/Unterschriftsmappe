# Unterschriftenmappe

Verträge auf dem iPad öffnen, mehrere PDFs zusammenfügen und vor Ort mit dem Apple Pencil unterschreiben lassen.
Die PDFs werden nur im Browser des iPads verarbeitet. Sie werden nie hochgeladen, auch nicht auf den Server, auf dem die App liegt.

**Adresse für die iPads:** https://hanssiedewurst.github.io/Unterschriftsmappe/

## Inhalt dieses Ordners

| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `sw.js` | Offline-Speicher: hält die App nach dem ersten Start auf dem iPad bereit |
| `manifest.webmanifest` | Name und Icon für den Home-Bildschirm |
| `icons/` | App-Icons |
| `README.md` | diese Anleitung |

---

## 1. Online stellen mit GitHub Pages (kostenlos, ca. 10 Minuten)

Für dieses Repository ist das bereits erledigt. Die Schritte braucht man nur, um die App in einem neuen Repository noch einmal aufzusetzen. Das geht am einfachsten am Mac oder PC.

1. Auf **github.com** ein kostenloses Konto anlegen (oder anmelden).
2. Oben rechts auf **+** und dann **New repository**.
   - Name: `unterschriftenmappe`
   - Sichtbarkeit: **Public**. Im kostenlosen Tarif geht GitHub Pages nur mit öffentlichen Repositories. Öffentlich ist nur der App-Code, nie ein Vertrag.
   - **Create repository** klicken.
3. Auf der leeren Repository-Seite auf den Link **uploading an existing file** klicken.
4. Den Inhalt dieses Ordners (alle Dateien **und** den Ordner `icons`) in das Browserfenster ziehen und unten **Commit changes** klicken.
   Wichtig: `index.html` muss direkt oben im Repository liegen, nicht in einem Unterordner.
5. Im Repository auf **Settings** → links **Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, Ordner **/ (root)** → **Save**
6. Nach ein bis zwei Minuten steht oben auf derselben Seite die Adresse, etwa:
   `https://DEIN-NAME.github.io/unterschriftenmappe/`

Diese Adresse gibst du an deine Kollegen weiter.

### Alternative ohne GitHub: Netlify Drop
Auf **app.netlify.com/drop** den ganzen Ordner ins Browserfenster ziehen. Die Seite ist sofort unter einer eigenen Adresse erreichbar. Lege ein kostenloses Konto an, damit sie dauerhaft bleibt.

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
3. Unterschriftsstellen sind gelb markiert („Hier unterschreiben“). Fehlt eine: **Stelle setzen** und auf die gewünschte Stelle tippen.
4. Auf das Fähnchen tippen, unterschreiben, **Übernehmen**. Sobald der Pencil erkannt ist, werden Finger und Handballen ignoriert.
5. **Speichern** → **Sichern oder teilen** → **In Dateien sichern** oder direkt per Mail verschicken.

Unter **Seiten ordnen** lässt sich die Reihenfolge ändern, und überflüssige Seiten lassen sich entfernen.

---

## 4. Updates einspielen

1. Die geänderten Dateien im Repository hochladen (**Add file** → **Upload files**). Vorhandene Dateien mit gleichem Namen werden ersetzt.
2. In `sw.js` die Zeile `const VERSION = 'v1';` hochzählen, also `'v2'`, `'v3'` …
   Ohne diesen Schritt behalten die iPads die alte Fassung im Offline-Speicher.
3. Die iPads holen die neue Version beim nächsten Öffnen mit Internet. Die App zeigt dann „Eine neue Version ist da“ mit dem Knopf **Neu laden**.

---

## 5. Datenschutz

- **Verträge und Unterschriften** verlassen das iPad nie. Es gibt keinen Server, der Dokumente empfängt.
- **GitHub** (bzw. Netlify) liefert nur die App-Dateien aus.
- **PDF-Bibliotheken:** Beim allerersten Start lädt die App zwei Open-Source-Bibliotheken (pdf.js von Mozilla, pdf-lib) einmalig von **cdnjs** (Cloudflare) und speichert sie danach auf dem iPad. Dabei werden keine Dokumente übertragen, technisch sieht Cloudflare aber die IP-Adresse des iPads.
- **Schriften:** Die App nutzt die Systemschrift des Geräts und lädt keine Schriften von Google oder anderen Anbietern.

### Optional: komplett ohne externe Anbieter
Wer auch den einmaligen Abruf bei cdnjs vermeiden möchte, legt im Repository einen Ordner `lib` an und lädt diese drei Dateien hinein (jeweils im Browser öffnen und mit „Speichern unter“ sichern):

- `pdf.min.js` von `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js`
- `pdf.worker.min.js` von `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`
- `pdf-lib.min.js` von `https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js`

Die App nimmt automatisch die Dateien aus `lib/`, wenn sie vorhanden sind. Danach `VERSION` in `sw.js` hochzählen.

---

## 6. Grenzen der aktuellen Version

- Ausfüllbare Textfelder im PDF (Name, Datum …) lassen sich hier noch nicht beschreiben. Bereits ausgefüllte Werte bleiben erhalten.
- Passwortgeschützte oder gegen Bearbeitung gesperrte PDFs werden abgelehnt.
- Die automatische Erkennung braucht echten Text im PDF. Bei eingescannten Verträgen die Stelle mit **Stelle setzen** festlegen.
- Rechtlich ist eine auf dem iPad gezeichnete Unterschrift eine *einfache elektronische Signatur*. Für Verträge mit gesetzlicher Schriftform (z. B. Kündigung eines Arbeitsverhältnisses, Befristungsabrede, Bürgschaft) reicht das nicht.
