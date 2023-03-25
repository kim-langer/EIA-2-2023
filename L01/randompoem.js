var randompoem;
(function (randompoem) {
    /* Arrays nach grammatikalischer Struktur*/
    let subjects = ["Hans", "Peter", "Ron", "Philipp", "Kurt", "Herbert"];
    let predicates = ["fliegt", "ruft", "liebt", "baut", "mixt", "analysiert"];
    let objects = ["Harry", "den Garten", "Zwerge", "Gurken", "Tomaten", "die Nachbarn"];
    /* Schleife, die die Arrays durchläuft*/
    for (let i = 6; i >= 1; i--) {
        console.log(i);
    }
    function getVerse(_subjects, _predicates, _objects) {
        const subjectIndex = Math.floor(Math.random() * _subjects.length);
        const predicateIndex = Math.floor(Math.random() * _predicates.length);
        const objectIndex = Math.floor(Math.random() * _objects.length);
        const subject = _subjects[subjectIndex];
        const predicate = _predicates[predicateIndex];
        const object = _objects[objectIndex];
        return `${subject} ${predicate} ${object}.`;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=randompoem.js.map