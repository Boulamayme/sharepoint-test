

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
import styles from './LigneCartesFormationCategorieWebPart.module.scss';
import * as strings from 'LigneCartesFormationCategorieWebPartStrings';





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
      <div class="${styles.container}">
        <div class="container">
          <div class="card ${styles.shadow}" style="width:200px">
            <img class="${styles.image}" src="${require('./assets/Frame 20.png')}" alt="Card image">
            <div class="card-body">
              <h4 class="card-title ${styles.style}">Marketing</h4>
              <p class="card-text ${styles.style2}"> One powerful online software suite that combines</p>
              <div class="${styles.centrebtn}">
                <a href="#" class="btn ${styles.boutton}">Voir détail</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card ${styles.shadow}" style="width:200px">
            <img class="${styles.image}" src="${require('./assets/Shadow.png')}" alt="Card image">
            <div class="card-body">
              <h4 class="card-title ${styles.style}">IT</h4>
              <p class="card-text ${styles.style2}">One powerful online software suite that combines</p>
              <div class="${styles.centrebtn}">
                <a href="#" class="btn ${styles.boutton}">Voir détail</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card ${styles.shadow}" style="width:200px">
            <img class="${styles.image}" src="${require('./assets/030-3.png')}" alt="Card image">
            <div class="card-body">
              <h4 class="card-title ${styles.style}">Scrum master</h4>
              <p class="card-text ${styles.style2}">One powerful online software suite that combines</p>
              <div class="${styles.centrebtn}">
                <a href="#" class="btn ${styles.boutton}">Voir détail</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card ${styles.shadow}" style="width:200px">
            <img class="${styles.image}" src="${require('./assets/031-4.png')}" alt="Card image">
            <div class="card-body">
              <h4 class="card-title ${styles.style}">Finance</h4>
              <p class="card-text ${styles.style2}">One powerful online software suite that combines</p>
              <div class="${styles.centrebtn}">
                <a href="#" class="btn ${styles.boutton}">Voir détail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="${styles.centrebtn}" style="margin-top:50px;">
        <a href="#" class="btn ${styles.boutton}">Voir Tout</a>
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


