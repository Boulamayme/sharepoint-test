



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
import styles from './EnoeSagranditWebPart.module.scss';
import * as strings from 'EnoeSagranditWebPartStrings';

export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <div class="${styles.circlecontainer}">
      <div class="${styles.circletext}">
          <h2>Enoé s'agrandit !</h2>
      </div>
      <img src="${require('./assets/nuage souriant 2.png')}" alt="Image 1" class="${styles.circleimage} ${styles.image1}">
      <img src="${require('./assets/Star 7.png')}" alt="Image 2" class="${styles.circleimage3} ${styles.image2}">
      <img src="${require('./assets/nuage souriant petit.png')}" alt="Image 3" class="${styles.circleimage} ${styles.image3}">
      <img src="${require('./assets/mouton-petit.png')}" alt="Image 4" class="${styles.circleimage0} ${styles.image4}">
      <img src="${require('./assets/mouton.png')}" alt="Image 5" class="${styles.circleimage2} ${styles.image5}">
      <img src="${require('./assets/ballon bleu.png')}" alt="Image 6" class="${styles.circleimage} ${styles.image6}">
      <img src="${require('./assets/nuage double.png')}" alt="Image 7" class="${styles.circleimage2} ${styles.image7}">
      <img src="${require('./assets/ballon jaune.png')}" alt="Image 8" class="${styles.circleimage} ${styles.image8}">
      <img src="${require('./assets/nuage souriant.png')}" alt="Image 9" class="${styles.circleimage2} ${styles.image9}">
      <img src="${require('./assets/Star 7.png')}" alt="Image 10" class="${styles.circleimage3} ${styles.image10}">
    </div>
  
  
    <div class="${styles.circlecontent} ${styles.content}">
      <img src="data:image/jpeg;base64,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" alt="Image Left">
      <div>
          <h5 style="color: #52617B;">Boulamayme Yassine</h5>
          <h7>Web Developer</h7>
          <p style="color: #9B9B9B;">Anniversaire: 04 octobre <br> Centre d'interet: menuiserie, kendo</p> 
      </div>
    </div>
  
    <div class="${styles.circlecontent2} ${styles.content}">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS1fA_J_5ZleHKfrqSsRkD_ggWQaU8uATIw&usqp=CAU" alt="Image Left">
      <div>
          <h5 style="color: #52617B;">Berthe Déborah</h3>
          <h7>Designer</h7>
          <p style="color: #9B9B9B;">Anniversaire: 04 octobre <br> Centre d'interet: menuiserie, kendo</p>
      </div>
    </div>
  </div>`;
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

