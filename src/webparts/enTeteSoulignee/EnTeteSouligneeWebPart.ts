



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



// import styles from './EnTeteSouligneeWebPart.module.scss';
import * as strings from 'EnTeteSouligneeWebPartStrings';






export interface IHelloWorldWebPartProps {
  
  service1: string;
  image: string;
  buttonLink: string;
  service2: string;
  userColor: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      // const titre = this.properties.titre;
      const service1 = this.properties.service1;
      const service2 = this.properties.service2;
      
      this.domElement.innerHTML = `
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; ">
      <span style="position: relative; font-weight: bold;">
      ${service1}  
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> ${service2}
      </h2>



    
      
      
`;
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
                PropertyPaneTextField('service1', {
                  label: 'titre part1'
                }),
                PropertyPaneTextField('service2', {
                  label: 'titre part2'
                }),
                PropertyPaneTextField('buttonLink', {
                  label: 'Lien du bouton'
                }),
                PropertyPaneTextField('userColor', {
                  label: 'Couleur de l\'utilisateur',
                  description: 'Entrez une valeur hexadécimale de couleur (#RRGGBB)'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}


