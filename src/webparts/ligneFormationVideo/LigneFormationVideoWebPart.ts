

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
import { escape } from '@microsoft/sp-lodash-subset';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './LigneFormationVideoWebPart.module.scss';
import * as strings from 'LigneFormationVideoWebPartStrings';



export interface IHelloWorldWebPartProps {
  date: string;
  image: string;
  title: string;
  text: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `

      <div class="${styles.cardContainer}">
        <div class="card ${styles.card1}">
          <img class=" ${styles.img}"  src="${require('./assets/carte1.png')}">
          <div class="${styles.date1}">UI/UX Design</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class="${styles.text1}">UI/UX Design for Beginners</h3>
              <hr class="${styles.test3}">
              <div class="${styles.test2}">
                <div>
                  <img src="${require('./assets/time-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
                </div>
                <div class="">
                  <p class="${styles.marg1}">22hr 30min</p>
                </div>
                <div class="${styles.marg}">
                  <img src="${require('./assets/video-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
                </div>
                <div class="">
                  <p class="${styles.marg1}">34 Courses</p>
                </div>
              </div>
            </div>
            <div class="${styles.test}"><a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Rejoindre la formation</a></div>
            
          </div>
        </div>
        <div class="card ${styles.card1}">
          <img class=" ${styles.img}"  src="${require('./assets/carte2.png')}">
          <div class="${styles.date1}">UI/UX Design</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class="${styles.text1}">UI/UX Design for Beginners</h3>
              <hr class="${styles.test3}">
              <div class="${styles.test2}">
                <div>
                    <img src="${require('./assets/time-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
                </div>
                <div class="">
                    <p class="${styles.marg1}">22hr 30min</p>
                </div>
                <div class="${styles.marg}">
                  <img src="${require('./assets/video-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
              </div>
              <div class="">
                  <p class="${styles.marg1}">34 Courses</p>
              </div>
            </div>
            </div>
            <div class="${styles.test}"><a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Rejoindre la formation</a></div>
            
          </div>
        </div>
        <div class="card ${styles.card1}">
          <img class=" ${styles.img}"  src="${require('./assets/carte3.png')}">
          <div class="${styles.date1}">UI/UX Design</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class="${styles.text1}">UI/UX Design for Beginners</h3>
              <hr class="${styles.test3}">
              <div class="${styles.test2}">
                <div>
                    <img src="${require('./assets/time-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
                </div>
                <div class="">
                    <p class="${styles.marg1}">22hr 30min</p>
                </div>
                <div class="${styles.marg}">
                  <img src="${require('./assets/video-svgrepo-com 1.png')}" alt="Image" class="img-fluid">
              </div>
              <div class="">
                  <p class="${styles.marg1}">34 Courses</p>
              </div>
            </div>
            </div>
            <div class="${styles.test}"><a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Rejoindre la formation</a></div>
            
          </div>
        </div>
      </div>
      <div class="${styles.test}"><a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button2}">Voir tout</a></div>
      

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
                PropertyPaneTextField('date', {
                  label: 'Date'
                }),
                PropertyPaneTextField('image', {
                  label: 'Image URL'
                }),
                PropertyPaneTextField('title', {
                  label: 'Titre'
                }),
                PropertyPaneTextField('text', {
                  label: 'Texte'
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
