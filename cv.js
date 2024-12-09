async function monFicherXml(CV) {
    try {
        const raiponce = await fetch(CV);
        console.log(raiponce);
        if (!raiponce.ok) 'throw new Error (`le fichier XML n a pas pu être trouvé`)';
const xmlTest = await raiponce.text();
/* console.log(xmlTest); */
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlTest,'text/xml');
console.log(xmlDoc);
const affiherTousLesNoeuds = xmlDoc.getElementsByTagName("*");
console.log(affiherTousLesNoeuds)
const elementDiv = document.getElementById("maDiv");

for (let i = 0; 1 < affiherTousLesNoeuds.length; i++){
    const noeud = affiherTousLesNoeuds[i];
    console.log(noeud);
    const nom = noeud.nodeName;
    const valeur = noeud.textContent.trim();
    console.log("nom: " + nom + " | valeur: " + valeur);
    const p = document.createElement('p');
    p.textContent = `${nom} : ${valeur}`;
    elementDiv.appendChild(p);
}

    }
    catch (error) {
        console.log(error);
    }
}
monFicherXml('CV.xml');