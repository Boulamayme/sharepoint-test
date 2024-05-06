






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



import styles from './DebutEnoeWebPart.module.scss';
import * as strings from 'DebutEnoeWebPartStrings';





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
      <div class="${styles.image}">
        <img src="${require('./assets/Ellipse 1853.png')}" alt="Description de l'image">
      </div>
      <div class="${styles.text}">
        <p>“Lorem ipsum dolor sit amet consectetur. Orci facilisi mauris nulla nunc mauris. Ridiculus congue nisl quam scelerisque non. Venenatis proin malesuada eu suspendisse. Massa sed eget in facilisi dolor lacus proin. Est tellus lectus vitae cras. Morbi turpis quis phasellus risus dui turpis massa tellus lectus.
        Eget a quam nam adipiscing mauris volutpat tellus. Aliquam pharetra rhoncus malesuada tristique suspendisse sapien tortor et tincidunt. Lectus tincidunt sit semper nisl. Morbi sagittis ac ullamcorper id ultrices. Integer sed mauris orci nisi.”</p>
        <h7 style="margin-left:20px"><strong>Marc Watrin</strong>, Président Enoé énergie</h7>
      </div>
    </div>

    <div class="${styles.ligne}"></div>


    <div class="${styles.container2}">
      <div class="${styles.row}">
        <div class="${styles.square} ${styles.green}">
          <h1 style="color:white;">2010</h1>
          <p class="${styles.test1}">Création de la société ecogreen</P>

        </div>
        <div class="${styles.square} ${styles.white}"></div>
        <div class="${styles.square} ${styles.green}">
          <h1 style="color:white;">2019</h1>
          <p class="${styles.test1}">Entrée de nouveaux actionnaires, création de la société Enoé</P>
        </div>
        <div class="${styles.square} ${styles.blue}">
          <h1 style="color:white;">2020</h1>
          <p class="${styles.test1}">700 projets toiture développés (100MWc)
          10 projets sol en développement (250 MWc)</P>
        </div>
        <div class="${styles.square} ${styles.white}"></div>
        <div class="${styles.square} ${styles.gray}"></div>
      </div>
      <div class="${styles.row}">
        <div class="${styles.square} ${styles.white}"><img src="${require('./assets/logo-ecogreen-groupe enoe-vert-bleu 1.png')}" class="${styles.test0}" alt="Description de l'image"></div>
        <div class="${styles.square} ${styles.blue}">
          <h1 style="color:white;">2018</h1>
          <p class="${styles.test1}">100 projets lauréats CRE pour une puissance de 30MWc</P>
        </div>
        <div class="${styles.square} ${styles.white}"><img src="${require('./assets/Logo enoé quadri 2023(1) 2.png')}" class="${styles.test0}" alt="Description de l'image"></div>
        <div class="${styles.square} ${styles.gray}"></div>
        <div class="${styles.square} ${styles.green}"><p class="${styles.test1}">Création Ouest Energie en partenariat avec LM Soleil
        18 MW de projets toiture</p> </div>
        <div class="${styles.square} ${styles.blue}">
          <h1 style="color:white;">2021</h1>
          <p class="${styles.test1}">Mise en service de la 1ère centrale au sol à Saint Julien (5 MWc)</P>
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


