







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
import styles from './Actualite2WebPart.module.scss';
import * as strings from 'Actualite2WebPartStrings';






export interface IHelloWorldWebPartProps {
  
  service: string;
  image: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {


      const service = this.properties.service;
      this.domElement.innerHTML = `
      
      <div class="${styles.titlecontainer}">
    <h2 class="${styles.title1}">
      <span>Actualités</span>
      <span class="${styles.underline}"></span> ${service}
    </h2>
    <button class="${styles.button}">Voir tout</button>
  </div>
  <div class="${styles.container}">
    <div class="${styles.left}">
      <!-- Div de gauche -->
      <img src="${require('./assets/actu1si.png')}" alt="Image Haut">
        <h7 style="color: #0E376A !important;">Christian Traguany • 03 octobre 2023</h7>
        <div class="${styles.title}">Déploiement du gestionnaire de mots de passe Bitwarden </div>
        <div class="${styles.text}">Face à l'évolution constante des menaces en ligne, il est impératif de renforcer notre vigilance, surtout en matière de protection des mots de passe.</div>
    </div>
    <div class="${styles.right}">
      <!-- Div de droite, réparti verticalement -->
      <div class="${styles.righttop}">
        <!-- Div du haut -->
        <div class="${styles.image}">
          <img class="${styles.img1}" src="${require('./assets/actu2si.png')}" alt="Image Haut">
        </div>
        <div class="${styles.content}">
          <h7 style="color: #0E376A !important;">Monica Geller • 18 Janvier 2023</h7>
          <div class="${styles.title}">Installation nouvelle connexion internet marseille </div>
          <div class="${styles.text}">La mise en place de notre nouvelle connexion internet va avoir lieu ce... </div>
        </div>
      </div>
      <div class="${styles.rightbottom}">
        <!-- Div du bas -->
        <div class="${styles.image}">
          <img class="${styles.img2}" src="${require('./assets/actu3si.png')}" alt="Image Haut">
        </div>
        <div class="${styles.content}">
          <h7 style="color: #0E376A !important;">Monica Geller • 18 Janvier 2023</h7>
          <div class="${styles.title}">title goes here title goes here </div>
          <div class="${styles.text}">Omnis sunt eveniet aliquid deserunt minus possimus et rerum quae. </div>
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
                PropertyPaneTextField('service', {
                  label: 'Nom du service'
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
