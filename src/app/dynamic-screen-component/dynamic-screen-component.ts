import { Component } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic-screen',
  standalone: true,
  imports: [JsonFormsModule, MatButtonModule],
  templateUrl: './dynamic-screen-component.html',
})
export class DynamicScreenComponent {
  renderers = angularMaterialRenderers;
  data: any = {};

  schema = {
    type: 'object',
    properties: {
      personalInfo: {
        type: 'object',
        properties: {
          firstName: { type: 'string', title: 'First Name' },
          lastName: { type: 'string', title: 'Last Name' },
          birthDate: { type: 'string', format: 'date', title: 'Date of Birth' },
          gender: {
            type: 'string',
            title: 'Gender',
            enum: ['Male', 'Female', 'Other', 'Prefer not to say']
          }
        },
        required: ['firstName', 'lastName']
      },
      professionalInfo: {
        type: 'object',
        properties: {
          jobRole: { type: 'string', title: 'Desired Job Role' },
          startDate: { type: 'string', format: 'date', title: 'Available Start Date' },
          experienceLevel: {
            type: 'string',
            title: 'Experience Level',
            enum: ['Junior', 'Mid-level', 'Senior', 'Lead']
          },
          bio: { type: 'string', title: 'Short Bio', description: 'Tell us about yourself' }
        }
      },
      preferences: {
        type: 'object',
        properties: {
          remoteWork: { type: 'boolean', title: 'Interested in remote work?' },
          newsletter: { type: 'boolean', title: 'Receive weekly updates?' }
        }
      }
    }
  };

  uischema = {
    type: 'Categorization',
    elements: [
      {
        type: 'Category',
        label: 'Basic Profile',
        elements: [
          {
            type: 'HorizontalLayout',
            elements: [
              { type: 'Control', scope: '#/properties/personalInfo/properties/firstName' },
              { type: 'Control', scope: '#/properties/personalInfo/properties/lastName' }
            ]
          },
          {
            type: 'HorizontalLayout',
            elements: [
              { type: 'Control', scope: '#/properties/personalInfo/properties/birthDate' },
              { type: 'Control', scope: '#/properties/personalInfo/properties/gender' }
            ]
          }
        ]
      },
      {
        type: 'Category',
        label: 'Work Preferences',
        elements: [
          {
            type: 'VerticalLayout',
            elements: [
              { type: 'Control', scope: '#/properties/professionalInfo/properties/jobRole' },
              {
                type: 'HorizontalLayout',
                elements: [
                  { type: 'Control', scope: '#/properties/professionalInfo/properties/startDate' },
                  { type: 'Control', scope: '#/properties/professionalInfo/properties/experienceLevel' }
                ]
              },
              { 
                type: 'Control', 
                scope: '#/properties/professionalInfo/properties/bio',
                options: { multi: true } // Renders as a Textarea
              }
            ]
          }
        ]
      },
      {
        type: 'Category',
        label: 'Settings',
        elements: [
          { type: 'Control', scope: '#/properties/preferences/properties/remoteWork' },
          { type: 'Control', scope: '#/properties/preferences/properties/newsletter' }
        ]
      }
    ]
  };

  onDataChange(event: any) {
    this.data = event.data;
  }

  submit() {
    console.log('Onboarding Complete:', this.data);
  }
}