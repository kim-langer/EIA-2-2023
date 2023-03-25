namespace randompoem {
//* Arrays nach grammatikalischer Struktur*//

    let subjects: string[] = ["Hans", "Peter", "Ron", "Philipp", "Kurt", "Herbert"]
    let predicates: string[] = ["fliegt", "ruft", "liebt", "baut", "mixt", "analysiert"]
    let objects: string[] = ["Harry", "den Garten", "Zwerge", "Gurken", "Tomaten", "die Nachbarn"]

//* Schleife, die die Arrays durchläuft*//
for (let i = 6; i >= 1; i--) {
    let verse: string = getVerse(subjects, predicates, objects);
    console.log(verse);
}

//* Funktion für die Verse, um zufällige Werte auszuwählen*//

function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
    let newverse: string = "";

    // Funktion wählt jetzt zufällige Textbausteine aus
    let randomSubjectIndex: number = Math.floor(Math.random() * _subjects.length);
    let randomSubject: string = _subjects.splice(randomSubjectIndex, 1)[0];
    newverse += randomSubject + " ";

    let randomPredicateIndex: number = Math.floor(Math.random() * _predicates.length);
    let randomPredicate: string = _predicates.splice(randomPredicateIndex, 1)[0];
    newverse += randomPredicate + " ";

    let randomObjectIndex: number = Math.floor(Math.random() * _objects.length);
    let randomObject: string = _objects.splice(randomObjectIndex, 1)[0];
    newverse += randomObject;

    return newverse;
}
}

