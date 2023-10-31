/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



function generateDomainNames() {
  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'raccoon'];
  
  const domainNames = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        const domainName = `${pronoun}${adjective}${noun}.com`;
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
}
console.log(generateDomainNames());

window.onload = () => {
  const button = document.querySelector("#domainbutton");
  const p = document.querySelector("#domain");
  button.onclick = () => {
    p.innerHTML = generateDomainNames();
  };
};
