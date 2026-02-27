import { Component, inject, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { MatButtonModule } from '@angular/material/button';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dynamic-screen',
  standalone: true,
  imports: [
    CommonModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatButtonModule
  ],
  templateUrl: './dynamic-screen-component.html',
  styleUrl: './dynamic-screen-component.css'
})
export class DynamicScreenComponent {

  renderers = angularMaterialRenderers;
  data: any = {};
  schema: any = null;
  uiSchema: any = null;

  private configService = inject(ConfigService);
  private ngZone = inject(NgZone);

  ngOnInit() {
    this.configService.getConfig().subscribe({
      next: (config) => {
        this.ngZone.run(() => {
          console.log("Loaded config:", config);
          this.schema = config.schema;
          this.uiSchema = config.uischema;
        });
      },
      error: (err) => {
        console.error('Failed to load form config:', err);
      }
    });
  }

  onDataChange(event: any) {
    // JSON Forms passes the data object directly
    this.data = event.data ?? event; 
  }

  submit() {
    console.log('Form submitted with data:', this.data);
  }
}