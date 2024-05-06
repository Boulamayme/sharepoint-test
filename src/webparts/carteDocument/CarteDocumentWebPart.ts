
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
import styles from './CarteDocumentWebPart.module.scss';
import * as strings from 'CarteDocumentWebPartStrings';

export interface IHelloWorldWebPartProps {
  
  service: string;
  genre: string;
  buttonLink: string;
  titre: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {

      const service = this.properties.service;
      const genre = this.properties.genre;
      this.domElement.innerHTML = `
      <div class="${styles.titlecontainer}">
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; ">
      <span style="position: relative; font-weight: bold;">
        ${genre}  
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> ${service}
      </h2>
      
      </div>
    <div class="${styles.cardcontainer}">
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/document1.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">${this.properties.titre}</h3>
          <div class=" ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
      
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/document2.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Plan de continuité des activités</h3>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
    
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/document3.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Politique de sécurité informatique</h3>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
      
  </div>
    <div class="text-align: center" style="margin-top:50px;">  
      <button class="${styles.button}">Voir tout</button>
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
                PropertyPaneTextField('titre', {
                  label: 'Titre'
                }),
                PropertyPaneTextField('genre', {
                  label: 'Genre'
                }),
                PropertyPaneTextField('buttonLink', {
                  label: 'Lien du bouton'
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
