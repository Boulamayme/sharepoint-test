

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
import styles from './BandeVieEntrepriseWebPart.module.scss';
import * as strings from 'BandeVieEntrepriseWebPartStrings';





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
      

      
      this.domElement.innerHTML = `
      <div class="${styles.container}">
        <div class="${styles.child1}">
          <a href="#" class="image-link"><img src="${require('./assets/Calque_1.png')}" alt="Image Cliquable"></a>
          <div class="${styles.content}">
            <p><strong>Date</strong> : 13 au 17 juin 2022</p>
          </div>
        </div>
        <div class="${styles.child2}">
          <a href="#" class="image-link"><img src="${require('./assets/Calque_1 (1).png')}" alt="Image Cliquable"></a>
          <div class="${styles.content}">
            <p><strong>Lieu</strong> : Camargue</p>
          </div>
        </div>
        <div class="${styles.child3}">
          <a href="#" class="image-link"><img src="${require('./assets/Calque_1 (2).png')}" alt="Image Cliquable"></a>
          <div class="${styles.content}">
            <p><strong>Description</strong> : dolor sit amet consectetur. Ut eget tellus lacus nulla.</p>
          </div>
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
                PropertyPaneTextField('titre', {
                  label: 'titre'
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


