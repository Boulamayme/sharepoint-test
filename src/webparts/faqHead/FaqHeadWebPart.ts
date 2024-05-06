

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



import styles from './FaqHeadWebPart.module.scss';
import * as strings from 'FaqHeadWebPartStrings';







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
      <div class="${styles.titre}">
          <h3>FAQ enoé</h3>
      </div>
      <div class="${styles.row}">
          <div class="${styles.searchcontainer}">
              <form action="/action_page.php">
                  <input type="text" class="${styles.test}" placeholder="Rechercher une application" name="search">
                  <button  type="submit" class="${styles.test1}">Rechercher</button>
              </form>
          </div>

          <div class="${styles.style}">
              <a href="#" class="image-link"><img src="${require('./assets/Vector (1).png')}" alt="Image Cliquable"></a>
              <button  class="${styles.test2}">Filtrer les questions</button>
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


