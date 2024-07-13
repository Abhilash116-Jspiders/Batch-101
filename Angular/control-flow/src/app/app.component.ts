import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { IfBlockComponent } from './control-flow/if-block/if-block.component';
import { ForBlockComponent } from './control-flow/for-block/for-block.component';
import { SwitchBlockComponent } from './control-flow/switch-block/switch-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateReferenceVariableComponent,
    IfBlockComponent, ForBlockComponent, SwitchBlockComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-flow';
}
