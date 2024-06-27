"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(value) {
    return (constructor) => {
        constructor.prototype.componentConfig = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertDom = function () {
            console.log("Inserting Component into DOM");
            let profileElements = document.querySelectorAll(value.selector);
            profileElements.forEach(profileElement => {
                profileElement.innerHTML = value.template;
                let styleEle = document.createElement("style");
                styleEle.innerText = value.style;
                document.head.appendChild(styleEle);
            });
        };
        document.addEventListener('DOMContentLoaded', (new constructor()).insertDom());
    };
}
let Profile = class Profile {
};
Profile = __decorate([
    Component({
        selector: "profile-component",
        template: "<h1> Profile Component </h1>",
        style: "h1 { color: dodgerblue}"
    })
], Profile);
let profile = new Profile();
console.log(profile);
