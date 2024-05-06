
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
import styles from './ImageSiWebPart.module.scss';
import * as strings from 'ImageSiWebPartStrings';



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
      const service = this.properties.service;

      
      this.domElement.innerHTML = `
      <div class="${styles.container}">
    
      <img src="${require('./assets/reunion-travail-equipe-gens-affaires 1.png')}" alt="Votre Image" class="image">
      
      
      <div class="${styles.caption}" style="background-color: ${this.properties.userColor || '#'};">
        <div class="${styles.leftcolumn}"><span class="icon"><img src="${require('./assets/picto si (1).png')}" alt="pictogramme"></span> </div>
        <div class="${styles.rightcolumn}">Mon espace <br>${service}</div>
      </div>
      
    </div>
      
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
                PropertyPaneTextField('service', {
                  label: 'Nom du service'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
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


