



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


import styles from './MisAjourWrikeWebPart.module.scss';
import * as strings from 'MisAjourWrikeWebPartStrings';






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
        <div class="${styles.content}">
            <p>
              <h3 style="color:#757575">01 février 2024</h3>
              <p style="margin-left:20px;">Lorem ipsum dolor sit amet consectetur. Rutrum euismod sed facilisis facilisis purus. Enim posuere tellus vestibulum mauris cras. 
              Varius enim in amet volutpat turpis. Nulla fermentum aliquam nullam faucibus id mattis eu. Odio aliquam diam quam sollicitudin. Pulvinar varius cursus ultrices ullamcorper vitae pharetra feugiat vestibulum neque. Duis tincidunt mattis morbi aenean nibh sed.</p>
            </p>
            <p>
              <h3 style="color:#757575">24 janvier 2024</h3>
              <p style="margin-left:20px;">Lorem ipsum dolor sit amet consectetur. Rutrum euismod sed facilisis facilisis purus. Enim posuere tellus vestibulum mauris cras. 
              Varius enim in amet volutpat turpis. Nulla fermentum aliquam nullam faucibus id mattis eu. Odio aliquam diam quam sollicitudin. Pulvinar varius cursus ultrices ullamcorper vitae pharetra feugiat vestibulum neque. Duis tincidunt mattis morbi aenean nibh sed.</p>
            </p>
            <p>
              <h3 style="color:#757575">15 janvier 2024</h3>
              <p style="margin-left:20px;">Lorem ipsum dolor sit amet consectetur. Rutrum euismod sed facilisis facilisis purus. Enim posuere tellus vestibulum mauris cras. 
              Varius enim in amet volutpat turpis. Nulla fermentum aliquam nullam faucibus id mattis eu. Odio aliquam diam quam sollicitudin. Pulvinar varius cursus ultrices ullamcorper vitae pharetra feugiat vestibulum neque. Duis tincidunt mattis morbi aenean nibh sed.</p>
            </p>
            <p>
              <h3 style="color:#757575">01 février 2024</h3>
              <p style="margin-left:20px;">Lorem ipsum dolor sit amet consectetur. Rutrum euismod sed facilisis facilisis purus. Enim posuere tellus vestibulum mauris cras. 
              Varius enim in amet volutpat turpis. Nulla fermentum aliquam nullam faucibus id mattis eu. Odio aliquam diam quam sollicitudin. Pulvinar varius cursus ultrices ullamcorper vitae pharetra feugiat vestibulum neque. Duis tincidunt mattis morbi aenean nibh sed.</p>
            </p>
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


