

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

import styles from './SearchBarActualiteWebPart.module.scss';
import * as strings from 'SearchBarActualiteWebPartStrings';




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

      <!-- Inclure le fichier CSS de Font Awesome -->
      <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css">
      
      <!-- Inclure le fichier JavaScript de Font Awesome (si nécessaire) -->
      <script src="node_modules/@fortawesome/fontawesome-free/js/all.min.js"></script>
      

      <div class="${styles.container}">
        <div class="input-group rounded ${styles.test}">
          <input type="search" class="form-control rounded ${styles.test}" placeholder="Rechercher un article, une actualité..." aria-label="Search" aria-describedby="search-addon" />
          
        </div>
        <div class="${styles.buttons}">
          <div class="${styles.child}">
            <a href="#" class="image-link"><img src="${require('./assets/uim_favorite.png')}" alt="Image Cliquable"></a>
            <div class="${styles.content}">
              <p style="color:#202020; margin-right:20px;margin-top:10px;">Mes articles favoris</p>
            </div>
          </div>
          <div class="${styles.child}">
            <a href="#" class="image-link"><img src="${require('./assets/Vector.png')}" alt="Image Cliquable"></a>
            <div class="${styles.content}">
              <p style="color:#202020; margin-right:20px;margin-top:10px;">Filtrer les articles</p>
            </div>
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


