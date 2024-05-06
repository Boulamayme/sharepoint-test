





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
import styles from './LigneCarteFormationWebPart.module.scss';
import * as strings from 'LigneCarteFormationWebPartStrings';


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
          <img class="card-img-top ${styles.img}"  src="${escape(this.properties.image)}">
          <div class="${styles.date1}">${this.properties.date}</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class=" ${styles.text1}">${escape(this.properties.title)}</h3>
              <p class="card-text">${escape(this.properties.text)}</p>
            </div>
            <a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Voir Plus</a>
          </div>
        </div>
        <div class="card ${styles.card1}">
          <img class="card-img-top ${styles.img}"  src="${escape(this.properties.image)}">
          <div class="${styles.date1}">${this.properties.date}</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class=" ${styles.text1}">${escape(this.properties.title)}</h3>
              <p class="card-text">${escape(this.properties.text)}</p>
            </div>
            <a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Voir Plus</a>
          </div>
        </div>
        <div class="card ${styles.card1}">
          <img class="card-img-top ${styles.img}"  src="${escape(this.properties.image)}">
          <div class="${styles.date1}">${this.properties.date}</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class=" ${styles.text1}">${escape(this.properties.title)}</h3>
              <p class="card-text">${escape(this.properties.text)}</p>
            </div>
            <a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Voir Plus</a>
          </div>
        </div>
        <div class="card ${styles.card1}">
          <img class="card-img-top ${styles.img}"  src="${escape(this.properties.image)}">
          <div class="${styles.date1}">${this.properties.date}</div>
          <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 class=" ${styles.text1}">${escape(this.properties.title)}</h3>
              <p class="card-text">${escape(this.properties.text)}</p>
            </div>
            <a href="${escape(this.properties.buttonLink)}" class="btn ${styles.button1}">Voir Plus</a>
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
