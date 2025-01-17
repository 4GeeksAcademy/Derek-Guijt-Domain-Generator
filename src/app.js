import "bootstrap";
import "./style.css";
import "./index.html";

function generateDomainNames() {
  let pronouns = ['the', 'our', 'my', 'how'];
  let adjectives = ['great', 'big', 'slimey', 'hairy'];
  let nouns = ['jogger', 'raccoon' , 'building', 'dog'];
  let ends = ['.com', '.net', 'org', 'us'];
  
  const domainNames = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const end of ends) {
          const domainName = `${pronoun}${adjective}${noun}${end}`;
          domainNames.push(domainName);
        }
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
    p.innerHTML = generateDomainNames().join("<marquee><i class=\"fa-solid fa-flag-checkered\" style=\"color: #511f1f;\"></i></marquee>");
  };
};