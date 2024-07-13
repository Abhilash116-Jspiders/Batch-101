import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagSelectorComponent } from './selectors/tag-selector/tag-selector.component';
import { ClassSelectorComponent } from './selectors/class-selector/class-selector.component';
import { AttributeSelectorComponent } from './selectors/attribute-selector/attribute-selector.component';
import { EmulatedComponent } from './style-scoping/emulated/emulated.component';
import { ShadowDomComponent } from './style-scoping/shadow-dom/shadow-dom.component';
import { NoneComponent } from './style-scoping/none/none.component';
import { TextInterpolationComponent } from './bindings/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { AttributeBindingComponent } from './bindings/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './bindings/style-binding/style-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TagSelectorComponent, ClassSelectorComponent, 
    AttributeSelectorComponent, EmulatedComponent, ShadowDomComponent,
  NoneComponent, TextInterpolationComponent, PropertyBindingComponent,
  AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent,
  EventBindingComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components';
}
