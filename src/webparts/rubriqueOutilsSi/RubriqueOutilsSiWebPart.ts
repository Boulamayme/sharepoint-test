

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
import styles from './RubriqueOutilsSiWebPart.module.scss';
import * as strings from 'RubriqueOutilsSiWebPartStrings';

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
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; ">
      <span style="position: relative; font-weight: bold;">
        Outils  
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> 
      </h2>
      
      </div>
    <div class="${styles.cardcontainer}">
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/Wrike.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} ">Wrike</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas lacus leo ipsum amet tincidunt quisque cursus sodales. Habitasse in senectus est gravida. Amet augue consectetur in in.</p>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
      
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/Hubspot.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1}">Hubspot</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas lacus leo ipsum amet tincidunt quisque cursus sodales. Habitasse in senectus est gravida. Amet augue consectetur in in.</p>
          <div class=" ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>

      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/Sitetracker.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1}">SiteTracker</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas lacus leo ipsum amet tincidunt quisque cursus sodales. Habitasse in senectus est gravida. Amet augue consectetur in in.</p>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
    
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/echoline.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1}">Echoline</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas lacus leo ipsum amet tincidunt quisque cursus sodales. Habitasse in senectus est gravida. Amet augue consectetur in in.</p>
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
