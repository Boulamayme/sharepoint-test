

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
import { escape } from '@microsoft/sp-lodash-subset';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './CarteAnnuaireWebPart.module.scss';
import * as strings from 'CarteAnnuaireWebPartStrings';
export interface IHelloWorldWebPartProps {
  poste: string;
  nom: string;
  image: string;
  text: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <div class="card ${styles.card1}">
      <div class="text-center">
        <img class=" ${styles.img} rounded-circle"  src="${escape(this.properties.image)}">
      </div>
      <div class=" ${styles.nom1} text-center">${this.properties.nom}</div>
      <div class=" ${styles.poste} text-center">${this.properties.poste}</div>
      <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
      <div style="style="text-align: left;">
      <button class="btn ${styles.button1}" style="width: auto;">Data</button>
      <button class="btn ${styles.button1}" style="width: auto;">Management</button>
      
      </div>
        <hr style="width: 100% !important; border: 1px solid #003DA5;">
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="${require('./assets/ph_user-bold.png')}" alt="Image 1" style="cursor: pointer; margin-right: 30px;" onclick="handleImageClick(1)">
            <div style="height: 30px; border-left: 2px solid #BACEF8;"></div>
            <img src="${require('./assets/fluent_organization-12-regular.png')}" alt="Image 2" style="cursor: pointer; margin-left: 30px;" onclick="handleImageClick(2)">
        </div>
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
                  label: 'Nom Prénom'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
                }),
                
                PropertyPaneTextField('poste', {
                  label: 'Poste'
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
