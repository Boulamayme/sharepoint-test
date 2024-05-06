

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
import styles from './BonnePratiquesWebPart.module.scss';
import * as strings from 'BonnePratiquesWebPartStrings';

export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <div class="${styles.titlecontainer}">
        <h2 class="${styles.title1}">
          <span>Bonnes
          <span class="${styles.underline}"></span></span>pratiques SI
        </h2>
        <button class="${styles.button}">Voir tout</button>
      </div>
      <div class="${styles.cardcontainer}">
        <div class="${styles.test1}">
          <img class="card-img-top" src="${require('./assets/pratique1.png')}"  alt="Card image">
          <div class="card-body ${styles.ligneparent}">
            <div class="d-flex flex-row justify-content-between align-items-center ${styles.ligne}">
                <h7 class="${styles.test3}">Maxence Laporte • 22 juin 2023</h7>
            </div>
          </div>

          
          <div class="card-body d-flex justify-content-between align-items-center">
            <h4 class="card-title">Prévention cybersécurité</h4>
            <a href="${this.properties.buttonLink}">
              <img src="https://img.icons8.com/?size=80&id=tJ7dbEW5F1yp&format=png" alt="Votre image cliquable" class="img-fluid" style="max-width: 20px;">
            </a>
          </div>
          <div>
            <p class="card-text">Lorsque nous utilisons notre PC, notre tablette ou notre smartphone, nous sommes exposé à l’évolution constante des menaces que représentent...</p>
          </div>
          
        </div>
        <div class="${styles.test1}">
          <img class="card-img-top" src="${require('./assets/pratique2.png')}"  alt="Card image">
          <div class="card-body ${styles.ligneparent}">
            <div class="d-flex flex-row justify-content-between align-items-center ${styles.ligne}">
                <h7 class="${styles.test3}">Christian Traguany • 03 octobre 2023</h7>
            </div>
          </div>

          
          <div class="card-body d-flex justify-content-between align-items-center">
            <h4 class="card-title">Chantage à la webcam</h4>
            <a href="${this.properties.buttonLink}">
              <img src="https://img.icons8.com/?size=80&id=tJ7dbEW5F1yp&format=png" alt="Votre image cliquable" class="img-fluid" style="max-width: 20px;">
            </a>
          </div>
          <div>
            <p class="card-text">En savoir plus</p>
          </div>
          
        </div>
        
        <div class="${styles.test1}">
          <img class="card-img-top" src="${require('./assets/pratique3.png')}"  alt="Card image">
          <div class="card-body ${styles.ligneparent}">
            <div class="d-flex flex-row justify-content-between align-items-center ${styles.ligne}">
                <h7 class="${styles.test3}">Christian Traguany • 03 octobre 2023</h7>
            </div>
          </div>

          
          <div class="card-body d-flex justify-content-between align-items-center">
            <h4 class="card-title">Les mots de passe</h4>
            <a href="${this.properties.buttonLink}">
              <img src="https://img.icons8.com/?size=80&id=tJ7dbEW5F1yp&format=png" alt="Votre image cliquable" class="img-fluid" style="max-width: 20px;">
            </a>
          </div>
          <div>
            <p class="card-text">en savoir plus</p>
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
                  label: 'Titre'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
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

