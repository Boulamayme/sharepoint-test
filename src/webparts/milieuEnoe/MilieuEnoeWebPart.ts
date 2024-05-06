

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



import styles from './MilieuEnoeWebPart.module.scss';
import * as strings from 'MilieuEnoeWebPartStrings';






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
      Stratégie  
      <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> du groupe enoé
    </h2>

    <div class="${styles.container2}">
      <div class="${styles.row}">
      <div class="${styles.square} ${styles.white}"><img src="${require('./assets/38_innovation 1.png')}" class="${styles.test0}" alt="Description de l'image"></div>
       
      <div class="${styles.square} ${styles.white}"><img src="${require('./assets/photo2.png')}" class="${styles.test0}" alt="Description de l'image"></div>
      <div class="${styles.square} ${styles.white}"><img src="${require('./assets/photo3.png')}" class="${styles.test0}" alt="Description de l'image"></div>
      </div>
    </div>

    

    <div class="${styles.container2}">
      <div class="${styles.left}>
        <h2 class="${styles.test5}" style="font-size: 24px !important; color: #0E376A; margin-bottom: 15px; font-weight: bold; margin-top:50px;">
        <span style="position: relative; font-weight: bold;">
        Valeurs  
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
        </span> du groupe enoé
        </h2>
        <div class="${styles.container2}">
          <div class="${styles.row}">
            <div class="${styles.square1} ${styles.white}">
              <h3 style="color:#003DA5;">Confiance</h3>
              <img src="${require('./assets/img1.png')}"  alt="Description de l'image">
              <p class="${styles.test1}">Notre expertise est un capital confiance auprès de nos clients et inves-tisseurs. Nos expériences passées, notre charte Agrinoé, les projets réalisés, sont aussi vecteur de constance et de réassurance. Valeurs primordiales pour vous accompagner sur le long terme, proximité, écoute, ouverture et concertation constituent les principes élémentaires de notre Groupe et sont générateurs de confiance</P>
            </div>
            
            <div class="${styles.square2} ${styles.white}">
              <h3 style="color:#003DA5;">ancrage</h3>
              <img src="${require('./assets/img2.png')}" class="${styles.test2}" alt="Description de l'image">
              <p class="${styles.test4}">Nos équipes s'engagent à chaque étape de développement du projet, caractérisant ainsi notre conception de déploiement de projets de territoire. Notre besoin de soutenir des valeurs sociétales et enviro-nnementales guide notre démarche pour atteindre la satisfaction des clients et contribuer à l'utilité collective.</P>
            </div>
            <div class="${styles.square1} ${styles.white}">
              <h3 style="color:#003DA5;">détermination</h3>
              <img src="${require('./assets/img3.png')}"  alt="Description de l'image">
              <p class="${styles.test1}">Nous sommes résolument déterminés à façonner un avenir énergétique durable. Cette volonté se manifeste dans notre engagement à surmonter les défis, à innover et à concrétiser nos ambitions. En offrant des solutions durables et en créant un impact positif sur notre société et notre environnement, nous souhaitons contribuer de manière significative à la transition énergétique.</P>
            </div>
          </div>
        </div>
      </div>
      <div class="${styles.right}>
        <h2 class="${styles.test5}" style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold; margin-top:50px;">
        <span style="position: relative; font-weight: bold;">
        Nos  
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
        </span> rayons de soleil
        </h2>
        <div>
        <div class="${styles.container3}">
          <div class="${styles.row2}">
          <div class="${styles.square3} ${styles.white}"><img src="${require('./assets/video1.png')}"  alt="Description de l'image"></div>
          <div class="${styles.square3} ${styles.white}"><img src="${require('./assets/video2.png')}"  alt="Description de l'image"></div>
          <div class="${styles.square3} ${styles.white}"><img src="${require('./assets/video3.png')}"  alt="Description de l'image"></div>
        </div>
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


