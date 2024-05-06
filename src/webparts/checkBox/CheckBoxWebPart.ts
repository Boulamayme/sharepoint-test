

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
// import { escape } from '@microsoft/sp-lodash-subset';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './CheckBoxWebPart.module.scss';
import * as strings from 'CheckBoxWebPartStrings';


export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
  service: string;
  userColor: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      // const titre = this.properties.titre;

      

      this.domElement.innerHTML = `
      <div class="${styles.checkBox}">
        <input type="checkbox" id="acceptCheckbox">
        <label for="acceptCheckbox">J'accepte les conditions d'utilisation</label>
      </div>
      
      
`;

      // Add event listener to handle checkbox change
      const acceptCheckbox: HTMLInputElement | null = document.getElementById('acceptCheckbox') as HTMLInputElement;
      if (acceptCheckbox !== null) {
        acceptCheckbox.addEventListener('change', (event) => {
          if (acceptCheckbox.checked) {
            // Checkbox is checked
            console.log('Conditions d\'utilisation acceptées.');
            // You can perform further actions here
          } else {
            // Checkbox is unchecked
            console.log('Conditions d\'utilisation non acceptées.');
            // You can perform further actions here
      }
    });
    }
    }
  }

  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Contenu dynamique',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                
              ]
            }
          ]
        }
      ]
    };
  }
}


