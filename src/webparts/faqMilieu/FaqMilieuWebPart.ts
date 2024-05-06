

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


import styles from './FaqMilieuWebPart.module.scss';
import * as strings from 'FaqMilieuWebPartStrings';






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

      <div class="${styles.test0}">
        <div class="${styles.test}">
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">What is Webflow and why is it the best website builder?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
    
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">What is your favorite template from BRIX Templates?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
    
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">How do you clone a Webflow Template from the Showcase?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Contenu du titre 3.</p>
            </div>
          </div>
    
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">Why is BRIX Templates the best Webflow agency out there?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Contenu du titre 4.</p>
            </div>
          </div>
    
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">Why is BRIX Templates the best Webflow agency out there?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Contenu du titre 4.</p>
            </div>
          </div>
    
          <div class="${styles.titrecontainer}">
            <h1 class="${styles.titre}">Why is BRIX Templates the best Webflow agency out there?<span class="chevron">&#128316;</span></h1>
            <div class="${styles.contenu}" style="display: none;">
              <p>Contenu du titre 4.</p>
            </div>
          </div>
        </div> 
      </div>
    <script src="./scripts/customScript.js"></script>
  
      
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


