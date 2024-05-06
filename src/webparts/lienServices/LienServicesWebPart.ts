
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scripts/customScript.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import * as $ from 'jquery';
import 'slick-carousel';
import styles from './LienServicesWebPart.module.scss';
import * as strings from 'LienServicesWebPartStrings';

export interface IHelloWorldWebPartProps {
  poste: string;
  nom: string;
  image: string;
  text: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <div class="${styles.body}">
        <div class="${styles.fullwidth}">
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/RH.aspx?csf=1&web=1&share=EdXKz2reQiNAqdcu2ceoTkEBZtFqw9DVHlvJLvCXj05rPw&e=ZUQVh7">
                  <img class="${styles.img}" src="${require('./assets/picto rh.png')}" alt="Image 1">
              </a>
              <p> RH </p>
          </div>
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Juridique.aspx?csf=1&web=1&share=Ef6TdGoXmGNEhQTUiBuWA9gB7tZIJnSOCYnW0gtiG9w2CQ&e=FxIEaQ">
                  <img class="${styles.img}" src="${require('./assets/picto juridique.png')}" alt="Image 2" style = "margin-left: 4px;">
              </a>
              <p> Juridique </p>
          </div>
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/DAF.aspx?csf=1&web=1&share=EWSo__oGybZCqObpsAVlfhgB3mCbX-D1LLrR6nPYj7Fraw&e=Yedwgy">
                  <img class="${styles.img}" src="${require('./assets/picto daf.png')}" alt="Image 3" style = "margin-left: 10px;" >
              </a>
              <p> DAF </p>
          </div>
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Home.aspx?csf=1&web=1&share=EUB7zEXK5VJGovSNvy4-5BsBn-Jkl4eS3SVv6zXJ1SK9Tw&e=0jwi8D">
                  <img class="${styles.img}" src="${require('./assets/picto SI.png')}" alt="Image 4" >
              </a>
              <p> SI </p>
          </div>
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Marketing-%26-Communication.aspx?csf=1&web=1&share=EWPvBwa6wNtOqbHLh6hPCOsB9XekKsvvCBh7Jfl49pOIhA&e=a6VNvH">
                  <img class="${styles.img}" src="${require('./assets/picto market.png')}" alt="Image 5" >
              </a>
              <p> Marketing </p>
          </div>
          <div class="${styles.square}">
              <a href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/QSE.aspx?csf=1&web=1&share=EXbPmZn6O7VJvmbTOwMNhtkBWVCN6ziHjJf48ZkBqFlCfw&e=2fUsjd">
                  <img class="${styles.img}" src="${require('./assets/picto qse.png')}" alt="Image 6" >
              </a>
              <p> QSE </p>
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
                PropertyPaneTextField('nom', {
                  label: 'Nom Prénom'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
                }),

                PropertyPaneTextField('poste', {
                  label: 'Poste'
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
