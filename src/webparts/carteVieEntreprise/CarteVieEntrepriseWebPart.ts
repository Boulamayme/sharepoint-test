


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

import styles from './CarteVieEntrepriseWebPart.module.scss';
import * as strings from 'CarteVieEntrepriseWebPartStrings';
export interface IHelloWorldWebPartProps {
  poste: string;
  nom: string;
  image: string;
  texte: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
  <div class="card" style="width:100%">
    <img class=" ${styles.taille}" src="${this.properties.image}" alt="Card image">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h4 class="card-title">${this.properties.nom}</h4>
      <a href="${this.properties.buttonLink}">
        <img src="https://img.icons8.com/?size=80&id=tJ7dbEW5F1yp&format=png" alt="Votre image cliquable" class="img-fluid" style="max-width: 20px;">
      </a>
    </div>
    <div class="card-body">
      <p class="card-text">${this.properties.texte}</p>
    </div>
  </div>`;

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
                PropertyPaneTextField('nom', {
                  label: 'Titre'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
                }),
                
                PropertyPaneTextField('texte', {
                  label: 'Texte'
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
