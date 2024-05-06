
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
import styles from './BirthdayWebPart.module.scss';
import * as strings from 'BirthdayWebPartStrings';


export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <body>
    
  <div class="${styles.circlecontainer}">
        <div class="${styles.circletext}">
            <h2>Happy birthday !</h2>
        </div>
        <img src="${require('./assets/nuage souriant (1).png')}" alt="Image 1" class="${styles.circleimage} ${styles.image1}">
        <img src="${require('./assets/nuage souriant (1).png')}" alt="Image 2" class="${styles.circleimage} ${styles.image2}">
        <img src="${require('./assets/nuage souriant (1).png')}" alt="Image 3" class="${styles.circleimage} ${styles.image3}">
        <img src="${require('./assets/sapin.png')}" alt="Image 4" class="${styles.circleimage01} ${styles.image4}">
        <img src="${require('./assets/cadeau bleu.png')}" alt="Image 5" class="${styles.circleimage4} ${styles.image5}">
        <img src="${require('./assets/ballon coeur (1).png')}" alt="Image 6" class="${styles.circleimage} ${styles.image6}">
        <img src="${require('./assets/nuage souriant (1).png')}" alt="Image 7" class="${styles.circleimage2} ${styles.image7}">
        <img src="${require('./assets/ballon vert (1).png')}" alt="Image 8" class="${styles.circleimage} ${styles.image8}">
        <img src="${require('./assets/nuage souriant (2).png')}" alt="Image 9" class="${styles.circleimage2} ${styles.image9}">
        <img src="${require('./assets/cadeau vert.png')}" alt="Image 10" class="${styles.circleimage3} ${styles.image10}">
        <img src="${require('./assets/cadeau jaune.png')}" alt="Image 11" class="${styles.circleimage} ${styles.image11}">
    


      <div class="${styles.container}">
          <div class="${styles.content}">
            <img class="${styles.circleimage0}" src="data:image/jpeg;base64,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" alt="Image Left">
            <div>
                <h5 style="color: #52617B;">Boulamayme Yassine</h5>
                <h7>SI</h7>
                <p style="color: #E8B352;">18 janvier</p> 
            </div>
          </div>
          <div class="${styles.content}">
            <img class="${styles.circleimage0}" src="data:image/jpeg;base64,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" alt="Image Left">
            <div>
                <h5 style="color: #52617B;">Spezia Yannick</h5>
                <h7>SI</h7>
                <p style="color: #E8B352;">18 janvier</p> 
            </div>
          </div>
      </div>
      <div class="${styles.container}">
          <div class="${styles.content}">
            <img class="${styles.circleimage0}" src="data:image/jpeg;base64,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">
            <div>
                <h5 style="color: #52617B;">Berthe Déborah</h5>
                <h7>SI</h7>
                <p style="color: #E8B352;">18 janvier</p> 
            </div>
          </div>
          <div class="${styles.content}">
            <img class="${styles.circleimage0}" src="data:image/jpeg;base64,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" alt="Image Left">
            <div>
                <h5 style="color: #52617B;">Peng Tao</h5>
                <h7>SI</h7>
                <p style="color: #E8B352;">18 janvier</p> 
            </div>
          </div>
      </div>
    </body>
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

