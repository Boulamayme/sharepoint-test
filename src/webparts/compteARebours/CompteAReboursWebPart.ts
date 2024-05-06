
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './CompteAReboursWebPart.module.scss';
import * as strings from 'CompteAReboursWebPartStrings';

export interface IHelloWorldWebPartProps {
  
  webPartTitle: string;
  image: string;
  endDate: string; 
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private renderCountdownScript(endDateFormatted: string): void {
    const script = document.createElement('script');
    script.textContent = `
      // Fonction pour formater le temps restant en heures, minutes et secondes
      function formatTime(timeInSeconds) {
        const days = Math.floor(timeInSeconds / 86400);
        const hours = Math.floor((timeInSeconds % 86400) / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
      
        // Ajouter des zéros devant les unités de temps si elles sont inférieures à 10
        const formattedHours = hours < 10 ? '0' + hours : hours.toString();
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
      
        return days + 'j    ' + formattedHours + 'h    ' + formattedMinutes + 'm    ' + formattedSeconds + 's';
      }
      
      // Fonction pour mettre à jour le compte à rebours
      function updateCountdown() {
          const countdownElement = document.getElementById('countdown');
  
          if (countdownElement) {
              // Date de fin du compte à rebours (remplacez avec votre date)
              const endDate = new Date('${endDateFormatted}').getTime();
              // Temps restant en secondes
              const now = new Date().getTime();
              const timeRemaining = Math.max(0, Math.floor((endDate - now) / 1000));
  
              // Mettre à jour l'élément HTML
              countdownElement.textContent = formatTime(timeRemaining);
          }
      }
  
      // Mettre à jour le compte à rebours toutes les secondes
      setInterval(updateCountdown, 1000);
  
      // Initialiser le compte à rebours au chargement de la page
      updateCountdown();
    `;
    document.body.appendChild(script);
  }
  

  public render(): void {
    const { image, endDate, webPartTitle } = this.properties;
  
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      // Valider et formater la date de fin du compte à rebours
      const endDateObj = new Date(endDate);
      if (isNaN(endDateObj.getTime())) {
        console.error("Invalid date format. Please use the correct format (YYYY-MM-DDTHH:mm:ss).");
        return;
      }
      const endDateFormatted: string = endDateObj.toISOString();
  
      this.domElement.innerHTML = `
        <div class="${styles.fond}" style="background-image: url('${image}');">
          <div class="${styles.test1}">
            <div class="${styles.test2}">
              <h1 style="font-size: 24px; color: white; z-index: 1;">${webPartTitle}</h1>
              <div class="${styles.compte}" id="countdown"></div>
            </div>
          </div>
        </div>`;
  
      // Appel de la fonction pour inclure le script en passant la date de fin formatée
      this.renderCountdownScript(endDateFormatted);
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
                
                PropertyPaneTextField('image', {
                  label: 'Image URL'
                }),
                
                PropertyPaneTextField('endDate', {
                  label: 'Date de fin du compte à rebours',
                  description: 'Format: YYYY-MM-DDTHH:mm:ss (ex: 2024-03-31T23:59:59)',
                  multiline: false
                }),
                PropertyPaneTextField('webPartTitle', {
                  label: 'Titre de la web part',
                  multiline: false
                }),
              ]
            }
          ]
        }
      ]
    };
  }
  
}
