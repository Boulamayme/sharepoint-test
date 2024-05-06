

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


import styles from './HeaderEnoeEduWebPart.module.scss';
import * as strings from 'HeaderEnoeEduWebPartStrings';






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
          <div class="input-group rounded ${styles.marg}" >
            <input type="search" class="form-control rounded ${styles.test}" placeholder="Rechercher un document" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div class="${styles.marg}">
            <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold;">
            <span style="position: relative; font-weight: bold;">
              Top
              <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
            </span> formations
            </h2>
          </div>
          <div class="${styles.buttoncontainer}">
            <button class="${styles.but1}">All Programme</button>
            <button >ui/ux design </button>
            <button >program  design </button>
            <button >program  design </button>
            <button >program  design</button>
            <button >program  design</button>
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


