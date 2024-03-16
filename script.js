function mettreAJourHeure() {
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    
    heure = (heure < 10) ? "0" + heure : heure;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    secondes = (secondes < 10) ? "0" + secondes : secondes;

    // Mise à jour du texte de chaque élément avec la classe '.h'
    const elementsH = document.querySelectorAll('.h');
    elementsH.forEach(function(element) {
        element.textContent = heure;
    });

    // Mise à jour du texte de chaque élément avec la classe '.m'
    const elementsM = document.querySelectorAll('.m');
    elementsM.forEach(function(element) {
        element.textContent = minutes;
    });

    // Mise à jour du texte de chaque élément avec la classe '.s'
    const elementsS = document.querySelectorAll('.s');
    elementsS.forEach(function(element) {
        element.textContent = secondes;
    });

    // Calcul de l'angle de rotation pour les secondes
    var degS = (secondes * 360) / 60 - 90;
    var degM = (minutes * 360) / 60 - 90;
    var degH = ((heure - 12) * 360) / 12 - 90;

    let oppositeDegS = (degS >= -90 && degS < 0) ? -degS : -degS;
    let oppositeDegM = (degM >= -90 && degM < 0) ? -degM : -degM;
    let oppositeDegH = (degH >= -90 && degH < 0) ? -degH : -degH;
    
    // Mise à jour de la rotation de l'élément '.secondes'
    const sec = document.querySelector('.secondes');
    const min = document.querySelector('.minutes');
    const heu = document.querySelector('.heures');
    sec.style.transform = `rotate(${degS}deg)`;
    min.style.transform = `rotate(${degM}deg)`;
    heu.style.transform = `rotate(${degH}deg)`;

    // Mise à jour de la rotation de chaque élément avec la classe '.elementsS'
    const elementsSec = document.querySelectorAll('.s');
    elementsSec.forEach(function(element) {
        element.style.transform = `rotate(${oppositeDegS}deg)`;
    });

    const elementsMin = document.querySelectorAll('.m');
    elementsMin.forEach(function(element) {
        element.style.transform = `rotate(${oppositeDegM}deg)`;
    });

    const elementsHeu = document.querySelectorAll('.h');
    elementsHeu.forEach(function(element) {
        element.style.transform = `rotate(${oppositeDegH}deg)`;
   });
}
mettreAJourHeure();
setInterval(mettreAJourHeure, 1000);
