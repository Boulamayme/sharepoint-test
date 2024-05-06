

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
import styles from './AgendaWebPart.module.scss';
import * as strings from 'AgendaWebPartStrings';



export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
  service: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {

      const service = this.properties.service;
      this.domElement.innerHTML = `
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
      <div class="${styles.container}">
      <div class="${styles.aboverow}">
        
        <div class="title-container">
          <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold;">
            <span style="position: relative; font-weight: bold;">
              Agenda
              <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
            </span> ${service}
          </h2>
        </div>  
        <div class="${styles.searchcontainer}">
          <input type="text" placeholder="Recherche...">
        </div>
      </div>
    
      <div class="${styles.test}">
        <div class="${styles.left}">
          <div class="${styles.datepicker}" style="margin-left:30px;">
            <div class="${styles.datepickertop}">
              
              <div class="${styles.monthselector}">
                <button class="${styles.arrow} left"><i class="material-icons">chevron_left</i></button>
                <span class="${styles.monthname}">December 2020</span>
                <button class="${styles.arrow}"><i class="material-icons">chevron_right</i></button>
              </div>
            </div>
            <div class="${styles.datepickercalendar}">
              <span class="${styles.day}">Mo</span>
              <span class="${styles.day}">Tu</span>
              <span class="${styles.day}">We</span>
              <span class="${styles.day}">Th</span>
              <span class="${styles.day}">Fr</span>
              <span class="${styles.day}">Sa</span>
              <span class="${styles.day}">Su</span>
              <button class="${styles.date} ${styles.faded}">30</button>
              <button class="${styles.date}">1</button>
              <button class="${styles.date}">2</button>
              <button class="${styles.date}">3</button>
              <button class="${styles.date}">4</button>
              <button class="${styles.date}">5</button>
              <button class="${styles.date}">6</button>
              <button class="${styles.date}">7</button>
              <button class="${styles.date}">8</button>
              <button class="${styles.date} current-day">9</button>
              <button class="${styles.date}">10</button>
              <button class="${styles.date}">11</button>
              <button class="${styles.date}">12</button>
              <button class="${styles.date}">13</button>
              <button class="${styles.date}">14</button>
              <button class="${styles.date}">15</button>
              <button class="${styles.date}">16</button>
              <button class="${styles.date}">17</button>
              <button class="${styles.date}">18</button>
              <button class="${styles.date}">19</button>
              <button class="${styles.date}">20</button>
              <button class="${styles.date}">21</button>
              <button class="${styles.date}">22</button>
              <button class="${styles.date}">23</button>
              <button class="${styles.date}">24</button>
              <button class="${styles.date}">25</button>
              <button class="${styles.date}">26</button>
              <button class="${styles.date}">27</button>
              <button class="${styles.date}">28</button>
              <button class="${styles.date}">29</button>
              <button class="${styles.date}">30</button>
              <button class="${styles.date}">31</button>
              <button class="${styles.date} faded">1</button>
              <button class="${styles.date} faded">2</button>
              <button class="${styles.date} faded">3</button>
            </div>
          </div>
        </div>
        <div class="${styles.right}">
            <div class="${styles.row}">
                <div class="${styles.container1} ">
                  <div class="${styles.daterow}">08 août 2022</div>
                  <div class="${styles.titlerow}">Procédure de validation contractuelle</div>
                  <div class="${styles.textrow}">
                      <p class="${styles.color2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, odio eu aliquam vulputate.</p>
                  </div>
                  <div class="${styles.linkrow}">
                    <a href="#" class="image-link">
                        <span class="${styles.color}">Ajouter à mon agenda</span>
                        <img src="${require('./assets/material-symbols_calendar-add-on-outline.png')}" alt="Image cliquable">
                    </a>
                </div>
                <span style="position: absolute; left: 40%;margin-right:44px !important; width: 50%; border-bottom: 2px solid #D1D1D1;"></span>
                </div>
                <div class="${styles.container1} ">
                  <div class="${styles.daterow}">08 août 2022</div>
                  <div class="${styles.titlerow}">Procédure de validation contractuelle</div>
                  <div class="${styles.textrow}">
                      <p class="${styles.color2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, odio eu aliquam vulputate.</p>
                  </div>
                  <div class="${styles.linkrow}">
                    <a href="#" class="image-link">
                        <span class="${styles.color}">Ajouter à mon agenda</span>
                        <img src="${require('./assets/material-symbols_calendar-add-on-outline.png')}" alt="Image cliquable">
                    </a>
                </div>
                </div>
            </div>
            <div class="${styles.row}">
                <div class="${styles.container1}">
                  <div class="${styles.daterow}">08 août 2022</div>
                  <div class="${styles.titlerow}">Procédure de validation contractuelle</div>
                  <div class="${styles.textrow}">
                      <p class="${styles.color2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, odio eu aliquam vulputate.</p>
                  </div>
                  <div class="${styles.linkrow}">
                    <a href="#" class="image-link">
                        <span class="${styles.color}">Ajouter à mon agenda</span>
                        <img src="${require('./assets/material-symbols_calendar-add-on-outline.png')}" alt="Image cliquable">
                    </a>
                </div>
                </div>
                <div class="${styles.container1}">
                  <div class="${styles.daterow}">08 août 2022</div>
                  <div class="${styles.titlerow}">Procédure de validation contractuelle</div>
                  <div class="${styles.textrow}">
                      <p class="${styles.color2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, odio eu aliquam vulputate.</p>
                  </div>
                  <div class="${styles.linkrow}">
                    <a href="#" class="image-link">
                        <span class="${styles.color}">Ajouter à mon agenda</span>
                        <img src="${require('./assets/material-symbols_calendar-add-on-outline.png')}" alt="Image cliquable">
                    </a>
                </div>
                </div>
        </div>
      </div>
  </div>
`;
    }
  }
  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      const leftArrowButton = this.domElement.querySelector(".arrow.left");
      const rightArrowButton = this.domElement.querySelector(".arrow.right");
  
      if (leftArrowButton) {
        leftArrowButton.addEventListener("click", () => {
          // Logique pour aller au mois précédent
          const currentDate = new Date();
          const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
          this.updateCalendar(previousMonth);
        });
      }
  
      if (rightArrowButton) {
        rightArrowButton.addEventListener("click", () => {
          // Logique pour aller au mois suivant
        });
      }
    });
  }
  
  private updateCalendar(date: Date): void {
    const monthNameElement = this.domElement.querySelector(".month-name");
    if (monthNameElement) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      monthNameElement.textContent = `${month} ${year}`;
    }
    // Ajoutez ici la logique pour mettre à jour les jours du calendrier en fonction du mois passé en argument
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
                PropertyPaneTextField('service', {
                  label: 'Nom du service'
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

