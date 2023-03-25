var randompoem;
(function (randompoem) {
    //* Arrays nach grammatikalischer Struktur*//
    let subjects = ["Hans", "Peter", "Ron", "Philipp", "Kurt", "Herbert"];
    let predicates = ["fliegt", "ruft", "liebt", "baut", "mixt", "analysiert"];
    let objects = ["Harry", "den Garten", "Zwerge", "Gurken", "Tomaten", "die Nachbarn"];
    //* Schleife, die die Arrays durchläuft*//
    for (let i = 6; i >= 1; i--) {
        let verse = getVerse(subjects, predicates, objects);
        console.log(verse);
    }
    //* Funktion für die Verse, um zufällige Werte auszuwählen*//
    function getVerse(_subjects, _predicates, _objects) {
        let newverse = "";
        // Funktion wählt jetzt zufällige Textbausteine aus
        let randomSubjectIndex = Math.floor(Math.random() * _subjects.length);
        let randomSubject = _subjects.splice(randomSubjectIndex, 1)[0];
        newverse += randomSubject + " ";
        let randomPredicateIndex = Math.floor(Math.random() * _predicates.length);
        let randomPredicate = _predicates.splice(randomPredicateIndex, 1)[0];
        newverse += randomPredicate + " ";
        let randomObjectIndex = Math.floor(Math.random() * _objects.length);
        let randomObject = _objects.splice(randomObjectIndex, 1)[0];
        newverse += randomObject;
        return newverse;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=randompoem.js.map