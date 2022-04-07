(function(){
    const currentYear = new Date().getFullYear();
    const skillNodes = document.querySelectorAll('#skills li');

    let skillNode = null,
        yearFrom = null,
        yearTo = null,
        yearsDiff = null,
        timeNode = null,
        textContent = null;

    for (skillNode of skillNodes) {
        yearFrom = skillNode.dataset.hasOwnProperty('from') ? parseInt(skillNode.dataset.from, 10) : null;
        yearTo = skillNode.dataset.hasOwnProperty('to') ? parseInt(skillNode.dataset.to, 10) : currentYear;
        yearsDiff = yearTo - yearFrom;

        textContent = "(";
        textContent += yearsDiff;
        textContent += " year" + (yearsDiff > 1 ? "s" : "");
        textContent += ")";

        timeNode = document.createElement('span');
        timeNode.className = "experienceTime"
        timeNode.textContent = textContent;
        skillNode.append(timeNode);
    }
})();