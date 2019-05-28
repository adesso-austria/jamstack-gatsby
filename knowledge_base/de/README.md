# JamStack

## Bevor du das liest

Das ist eine Einführung in den JamStack. Die Informationen die du hier liest wurden teilweise aus dem Englischen übersetzt und finden sich auf der offiziellen Webseite von [jamstack](https://jamstack.org), andere Teile dieses Textes wurden von mir erstellt.

## Einführung

Der JamStack ist eine moderne Web-Entwicklungs-Architektur basierend auf JavaScript (welches auf dem Client läuft), wiederverwendbaren APIs und bereits vorhandenem Markup.

### Was ist ein Stack?

Wenn wir heute über einen Stack sprechen, dann meinen wir nicht mehr ein Betriebssystem, spezifische Web-Server, Programmiersprachen im Backend oder Datenbanken. Wir sprechen über Methoden die uns in Summe gezielt zu einer Lösung führen.

## Kriterien

### Welche Kriterien muss ein JamStack Projekt erfüllen?

#### Javascript

Die dynamische Programmierung während des Anfrage- / Antwort-Zyklus wird von JavaScript durchgeführt, welches vollständig auf dem Client ausgeführt wird. Dies kann ein beliebiges Frontend-Framework, eine Bibliothek oder sogar Vanilla-JavaScript sein.

#### API

Alle serverseitigen Prozesse oder Datenbankaktionen werden in wiederverwendbare APIs abstrahiert, auf die über HTTPS mit JavaScript zugegriffen wird. Dies können maßgeschneiderte Dienste oder Dienste von Drittanbietern sein.

#### Markup

Markup-Vorlagen sollten zur Bereitstellungszeit vorab erstellt werden. In der Regel wird ein Site-Generator für Inhalts-Sites oder ein Build-Tool für Web-Apps verwendet.

### Wann ist eine Seite nicht JamStack konform?

Jedes Projekt, das auf einer engen Kopplung zwischen Client und Server basiert, wird nicht mit dem JamStack erstellt. Dies würde beinhalten:

- Eine Site, die mit einem serverseitigen CMS wie WordPress, Drupal, Joomla oder SquareSpace erstellt wurde.
- Eine App für eine einzelne Seite, die isomorphes Rendering verwendet, um zur Laufzeit Ansichten auf dem Server zu erstellen.
- Eine monolithische, server-gesteuerte Web-App, die auf Ruby, Node oder einer anderen Backend-Sprache basiert.

## Best practices

### Das fertige Projekt lebt auf einem Content-Delivery-Network (CDN)

Da JAMstack-Projekte nicht auf serverseitigem Code basieren, können sie verteilt werden, anstatt auf einem einzelnen Server zu leben. Direktes Serving über ein CDN sorgt für unübertroffene Geschwindigkeit und Leistung. Je mehr von deiner App Sie auf ein CDN laden kannst, desto besser ist das Benutzererlebnis für deine Endkunden.

### Dein Code lebt in Git

Mit einem JamStack-Projekt sollte jeder in der Lage sein, *git clone* durchzuführen, alle erforderlichen Abhängigkeiten mit einer Standardprozedur (wie z. B. npm install) zu installieren und das gesamte Projekt **lokal** auszuführen. Keine Datenbanken klonen, keine komplexen Installationen, denn am Ende des Tages reduziert das die Abhängigkeiten und vereinfacht das Staging und Testen von Workflows.

### Moderne Build Tools

Nutze die Welt der modernen Build-Tools. Du möchtest schon heute die Webstandards von morgen nutzen, ohne auf die Browser von morgen zu warten? Babel, PostCSS und Webpack sind für dich da.

### Automatisierte Builds

Da das JamStack-Markup vorkonfiguriert ist, werden Inhaltsänderungen erst nach Ausführung eines anderen Builds veröffentlicht. Die Automatisierung dieses Prozesses erspart dir viel Frust.

### Atomare Bereitstellungen

Da JamStack-Projekte sehr umfangreich werden, müssen für neue Änderungen möglicherweise Hunderte von Dateien erneut bereitgestellt werden. Das Hochladen dieser Dateien nacheinander kann zu einem inkonsistenten Status führen, bis der Vorgang abgeschlossen ist. Du kannst dies mit einem System vermeiden mit dem du "atomare Bereitstellungen" durchführen kannst, bei denen keine Änderungen live geschaltet werden, bis alle geänderten Dateien hochgeladen wurden.

## Vorteile für Entwickler

### Billigere, einfachere Skalierung

Wenn dein Projekt einen Stapel von Dateien umfasst, die überall bereitgestellt werden können, müssen diese Dateien bei der Skalierung an mehreren Stellen bereitgestellt werden. CDNs sind hierfür perfekt geeignet und enthalten häufig Möglichkeiten einer Skalierung.

### Bessere Entwicklungserfahrung

Die lose Kopplung und Trennung von Steuerelementen ermöglicht eine gezieltere Entwicklung und Fehlerbehebung, und die wachsende Auswahl an CMS-Optionen für Site-Generatoren macht die Verwaltung eines separaten Stacks für Inhalte und Marketing überflüssig. In unserem Live-Coding Beispiel verwenden wir dafür strapi.

### Höhere Security

Durch die Abstraktion serverseitiger Prozesse in MicroService-APIs wird die Angriffsfläche reduziert. Du kannst auch die Domain-Expertise spezialisierter Drittanbieter-Services nutzen.

### Bessere Performance

Warum sollten du warten bis deine Seiten generiert wurden, wenn du sie zur Bereitstellungszeit generieren kannst? Wenn es darum geht, die Zeit bis zum ersten Byte zu minimieren, geht nichts über vorgefertigte Dateien, die über ein CDN bereitgestellt werden.
