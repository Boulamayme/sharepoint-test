

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
import styles from './LiensMarketWebPart.module.scss';
import * as strings from 'LiensMarketWebPartStrings';

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
      <div class="${styles.body}">
        <div class="${styles.fullwidth}">
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/Logo_Challenges 1.png')}" alt="Image 1">
              </a>
              <p> EnR dans actualité </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/france-agrivoltaisme-logo 2.png')}" alt="Image 2" style = "margin-left: 4px;">
              </a>
              <p> France Agrivoltaïsme </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/EDS_2lignes 1.png')}" alt="Image 3" style = "margin-left: 10px;" >
              </a>
              <p> L’écho du solaire </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/logo-ser 1.png')}" alt="Image 4" >
              </a>
              <p> La SER </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/logo_pv 1.png')}" alt="Image 5" >
              </a>
              <p> Centre  de ressources  photovoltaïques </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/Logo_GU_Grand 1.png')}" alt="Image 6" >
              </a>
              <p> GreenUnivers </p>
          </div>
          <div class="${styles.square}">
              <a href="#">
                  <img class="${styles.img}" src="${require('./assets/logo 1.png')}" alt="Image 6" >
              </a>
              <p> PV Magazine </p>
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
