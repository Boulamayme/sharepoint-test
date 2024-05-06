
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';



// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)




// import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  // PropertyPaneButton,
  // PropertyPaneCheckbox,
  // PropertyPaneDropdown,
  // PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';



// import { escape } from '@microsoft/sp-lodash-subset';

import styles from './WeatherMultipleWebPart.module.scss';
import * as strings from 'WeatherMultipleWebPartStrings';
// import {
//   SPHttpClient,
//   SPHttpClientResponse
// } from '@microsoft/sp-http';

export interface IHelloWorldWebPartProps {
  cityName: string;
  cityName1: string;
  cityName2: string;
  cityName3: string;
  imageUrl: string;
  cardTitle: string;
  cardMessage: string;
  learnMoreButtonText: string;
  stylesPath: string;
  cardDescription: string; 
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}


export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  // private _isDarkTheme: boolean = false;
  // private _environmentMessage: string = '';
 
  protected onInit(): Promise<void> {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      return this._getEnvironmentMessage().then(message => {
        // this._environmentMessage = message;
      });
    } else {
      // Le composant est en cours d'exécution dans un autre environnement (local, Teams, etc.)
      return Promise.resolve();
    }
  }
  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      const { cityName1, cityName2, cityName3 } = this.properties;
      const cities: string[] = [cityName1, cityName2, cityName3].filter(Boolean);
  
      const cityWeatherCards = cities.map(city => `<div class="col-4">${this.renderCityCard(city)}</div>`).join('');
  
      this.domElement.innerHTML = `
        <section class="card" style="color: #4B515D; border-radius: 35px; width: 100%;background: linear-gradient(to right, #E1F5FE, #90CAF9);">
          <div class="container" style="width: 100%;">
            <div class="row">
              ${cityWeatherCards}
            </div>
          </div>
        </section>`;
  
      cities.forEach((city: string) => this.getWeather(city));
    }
  }
  

  
  private renderCityCard(cityName: string): string {
    const idPrefix = cityName.replace(/\s+/g, '_'); // Remplacer les espaces par des traits de soulignement
    return `
        <div class="card-body p-4">
            <h6 class="text-center mb-4" style="font-size: 1.5em;color: #436292;" id="cityName_${idPrefix}">${cityName}</h6>
            <h6 id="currentTime_${idPrefix}" style="color: #436292;">${this.getCurrentTime()}</h6>
            <div class="d-flex justify-content-center align-items-center mb-4">
                <img id="weatherImage_${idPrefix}" src="" width="70px">
                <div class="text-center ms-3">
                    <h6 class="display-4 mb-0 font-weight-bold ${styles.boldTemperature}" style="color: #436292;" id="temperature_${idPrefix}">Loading...</h6>
                    <span class="small" style="color: #436292" id="weatherDescription_${idPrefix}">Loading...</span>
                </div>
            </div>
            <div class="${styles.verticalline}"></div> <!-- Ajout du trait vertical -->
            <div class="d-flex justify-content-between mt-4">
                <div class="text-center" style="flex-grow: 1;">
                    <div><img src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png" alt="Vitesse du vent" width="20px"> <span class="ms-1" id="windSpeed_${idPrefix}">Loading...</span></div>
                </div>
                <div class="text-center" style="flex-grow: 1;">
                    <div><img src="https://cdn-icons-png.flaticon.com/128/5747/5747303.png" alt="Humidité" width="20px"> <span class="ms-1" id="humidity_${idPrefix}">Loading...</span></div>
                </div>
                <div class="text-center" style="flex-grow: 1;">
                    <div><img src="https://cdn-icons-png.flaticon.com/128/2392/2392531.png" alt="Durée d'ensoleillement" width="20px"> <span class="ms-1" id="sunshineDuration_${idPrefix}">Loading...</span></div>
                </div>
            </div>
        </div>`;
  }
  
  


  


  
  
  
  
  

  


  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    // this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('cityName1', {
                  label: 'City Name 1'
                }),
                PropertyPaneTextField('cityName2', {
                  label: 'City Name 2'
                }),
                PropertyPaneTextField('cityName3', {
                  label: 'City Name 3'
                }),
                
                // ... autres champs ici
              ]
            }
          ]
        }
      ]
    };
  }
  
  
  private getWeather(city: string): void {
    if (city) {
      const langage = "fr";
      const clef = "234838fc5b67c3a8dff1967d34801283";
      const apiLien = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${clef}&lang=${langage}&units=metric`;
  
      fetch(apiLien)
        .then(response => response.json())
        .then(data => {
          const idPrefix = city.replace(/\s+/g, '_'); // Utiliser le même préfixe que dans renderCityCard
  
          const temperatureElement = document.getElementById(`temperature_${idPrefix}`);
          const weatherDescriptionElement = document.getElementById(`weatherDescription_${idPrefix}`);
          const windSpeedElement = document.getElementById(`windSpeed_${idPrefix}`);
          const humidityElement = document.getElementById(`humidity_${idPrefix}`);
          const sunshineDurationElement = document.getElementById(`sunshineDuration_${idPrefix}`);
          const weatherImageElement = document.getElementById(`weatherImage_${idPrefix}`);
  
          if (temperatureElement && weatherDescriptionElement && windSpeedElement && humidityElement && sunshineDurationElement && weatherImageElement) {
            // Utilisez Math.floor() pour arrondir à l'entier le plus proche
            temperatureElement.innerText = `${Math.ceil(data.main.temp)}°C`;
            weatherDescriptionElement.innerText = data.weather[0].description;
            windSpeedElement.innerText = `${data.wind.speed} km/h`;
            humidityElement.innerText = `${data.main.humidity}%`;
  
            const sunrise = new Date(data.sys.sunrise * 1000);
            const sunriseFraction = `${sunrise.getHours()}:${sunrise.getMinutes().toString().padStart(2, '0')}`;
            sunshineDurationElement.innerText = sunriseFraction;
  
            const weatherIcon = data.weather[0].icon;
            const weatherImageSrc = this.getWeatherImageSrc(weatherIcon);
            weatherImageElement.setAttribute('src', weatherImageSrc);
          }
        })
        .catch(error => console.error('Erreur lors de la récupération des données météo :', error));
    }
  }
  






  
  private getWeatherImageSrc(weatherIcon: string): string {
    // Déterminer quelle image afficher en fonction de l'icône météo
    // Vous devrez peut-être ajuster ces conditions en fonction des icônes fournies par l'API météo
    if (weatherIcon.includes('01')) {
      // Ciel dégagé (ensoleillé)
      return 'https://cdn-icons-png.flaticon.com/128/1420/1420668.png';
    } else if (weatherIcon.includes('02') || weatherIcon.includes('03') || weatherIcon.includes('04')) {
      // Nuageux
      return 'https://cdn-icons-png.flaticon.com/128/5043/5043069.png';
    } else if (weatherIcon.includes('09') || weatherIcon.includes('10') || weatherIcon.includes('11')) {
      // Pluie
      return 'https://cdn-icons-png.flaticon.com/128/1163/1163657.png';
    } else {
      // Par défaut
      return 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp';
    }
  }
  

  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  
  
  
  
}