
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




import styles from './FinEnoeWebPart.module.scss';
import * as strings from 'FinEnoeWebPartStrings';






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
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; margin-top:50px;">
      <span style="position: relative; font-weight: bold;">
      Présentations  
      <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> corporate
      </h2>
      <div class="${styles.cardcontainer}">
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/1.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Présentation corporate Dec. 2023</h3>
          <div class=" ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
      
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/2.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Présentation Sol 2022</h3>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
    
      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/2.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Solutions AgriPV 2022</h3>
          <div class="text-align: center; ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>

      <div class="${styles.card1}">
        <div class="${styles.img2}">
          <img class="${styles.image}" src="${require('./assets/3.png')}" alt="Aperçu du document">
        </div>
        <div class="${styles.content}">
          <h3 class="${styles.text1} text-align: center">Présentation Hynoé 2023</h3>
          <div class=" ${styles.test1}" >
            <a class="${styles.btn}" href="${this.properties.buttonLink}" target="_blank">Voir le document</a>
          </div>
        </div>
      </div>
      
  </div>
    <div class="text-align: center" style="margin-top:50px;">  
      <button class="${styles.button}">Voir tout</button>
    </div> 





    <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; margin-top:50px;">
    <span style="position: relative; font-weight: bold;">
    Agences  
    <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
    </span> 
    </h2>
    <div class="${styles.container2}">
         
          <div class="${styles.row}">
            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/notre dame marseille.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Marseille</p>
              <p class="${styles.test0}">Enoé Energie
              10.2 Les Docks10 Place de la Joliette, 13002</P>
            </div>
            
            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/notre dame marseille.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Marseille</p>
              <p class="${styles.test0}">Enoé Développement
              113 rue de la République, 13002</P>
            </div>
            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/rocher biarritz.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Biarritz</p>
              <p class="${styles.test0}">Enoé Développement
              Le Connecteur 45 Av. du Président Kennedy, 64200</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/basilique le mans.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Le Mans</p>
              <p class="${styles.test0}">Enoé Développement
              La tribu co-working
              10 rue Docteur Leroy, 72000</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/basilique lyon.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Lyon</p>
              <p class="${styles.test0}">Enoé Développement
              Flex-O Tête d’Or
              3 rue Genève, 69006</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/Calque_3.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Bordeaux</p>
              <p class="${styles.test0}">Enoé Développement
              Flex-O Bordeaux Euratlantique
              43-45 rue d’Armagnac, 33800</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/tour eiffel.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Paris</p>
              <p class="${styles.test0}">Enoé Développement
              Coworking Republic
              59 rue de Bretagne, 75003</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/chateau vallieres.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Centre</p>
              <p class="${styles.test0}">Enoé Développement
              2 route de Montrichard, 41400 Vallières-les-Grandes</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/basilique toulouse.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Toulouse</p>
              <p class="${styles.test0}">Enoé Développement
              Bureaux & Co Verdier
              48 allée Forain François Verdier, 31000</P>
            </div>

            <div class="${styles.square1} ${styles.white}">
              <img src="${require('./assets/chateau nantes.png')}" style="width:45px;height:45px;" alt="Description de l'image">
              <p style="font-size: 16px;">Nantes</p>
              <p class="${styles.test0}">Vacouva - Gare Sud
              43 quai de Malakoff, 44000</P>
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


