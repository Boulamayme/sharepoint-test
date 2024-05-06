
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scripts/customScript.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// import * as $ from 'jquery';
import 'slick-carousel';
import styles from './LienUtileWebPart.module.scss';
import * as strings from 'LienUtileWebPartStrings';

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
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; margin-left: 170px;">
      <span style="position: relative; font-weight: bold;">
        Liens 
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> Utiles
      </h2>
      <div class="${styles.body}">
        <div class="${styles.fullwidth}">
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Eno%C3%A9-Edu.aspx?csf=1&web=1&e=sz4yeh">
                  <img class="${styles.img}" src="${require('./assets/picto enoe-edu.png')}" alt="Image 1">
              </a>
              <p> Enoé EDU </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/picto powerBI.png')}" alt="Image 2" >
              </a>
              <p> Rapport Power BI </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/picto plans action.png')}" alt="Image 3" >
              </a>
              <p> Plan d'action </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/picto annuaire.png')}" alt="Image 4" >
              </a>
              <p> Annuaire </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/picto comm internes.png')}" alt="Image 5" >
              </a>
              <p> Communication internes </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/picto carto appli.png')}" alt="Image 6" >
              </a>
              <p> Cartographie Aplicative </p>
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
