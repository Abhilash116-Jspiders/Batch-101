/* function Component(constructor: Function) {
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDom = function() {
        console.log("Inserting Component into DOM");
    }
} */
type ComponentConfig = {
    selector: string, 
    template: string,
    style: string
}

function Component(value: ComponentConfig) {
    return (constructor: Function) => {
        constructor.prototype.componentConfig = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertDom = function() {
            console.log("Inserting Component into DOM");
           let profileElements =  document.querySelectorAll(value.selector);
           profileElements.forEach(profileElement => {
                profileElement.innerHTML = value.template;
                let styleEle = document.createElement("style");
                styleEle.innerText = value.style;
                document.head.appendChild(styleEle);
           })
        }
        document.addEventListener('DOMContentLoaded', (new (constructor as any)()).insertDom());
    }
}

@Component({
    selector: "profile-component",
    template: "<h1> Profile Component </h1>",
    style: "h1 { color: dodgerblue}"
})
class Profile {

}

let profile = new Profile();
console.log(profile);