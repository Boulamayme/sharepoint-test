
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
  PropertyPaneButton,
  // PropertyPaneCheckbox,
  // PropertyPaneDropdown,
  // PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';



// import { escape } from '@microsoft/sp-lodash-subset';

import styles from './WeatherWebPart.module.scss';
import * as strings from 'WeatherWebPartStrings';

// import {
//   SPHttpClient,
//   SPHttpClientResponse
// } from '@microsoft/sp-http';

export interface IHelloWorldWebPartProps {
  cityName: string;
  
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
        this.domElement.innerHTML = `
        <section class="my-2 h-100 d-flex align-items-center justify-content-center" style="background-color: #ffffff;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card" style="color: #4B515D; border-radius: 35px; width: 100%; max-width: 400px;background: linear-gradient(to right, #E1F5FE, #90CAF9);">
                            <div class="card-body p-4">
                                <h6 class="text-center mb-4" style="font-size: 1.5em;color: #436292;" id="cityName">${this.properties.cityName}</h6>
                                <h6 id="currentTime" style="color: #436292;">${this.getCurrentTime()}</h6>
                                <div class="d-flex ">
                                    <div style="margin-left: 50px; margin-top: -20px;"> <!-- Ajout des styles ici -->
                                        <img id="weatherImage" src="" width="100px">
                                    </div>
                                    <div class="">
                                        <h6 class="display-4 mb-0 font-weight-bold ${styles.boldTemperature}" style="color: #436292;margin-left: 60px;" id="temperature">Loading...</h6>
                                        <span class="small" style="color: #436292" id="weatherDescription">Loading...</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between mt-4">
                                    <div class="text-center" style="flex-grow: 1;">
                                        <div><img src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png" alt="Vitesse du vent" width="20px"> <span class="ms-1" id="windSpeed">Loading...</span></div>
                                    </div>
                                    <div class="text-center" style="flex-grow: 1;">
                                        <div><img src="https://cdn-icons-png.flaticon.com/128/5747/5747303.png" alt="Humidité" width="20px"> <span class="ms-1" id="humidity">Loading...</span></div>
                                    </div>
                                    <div class="text-center" style="flex-grow: 1;">
                                        <div><img src="https://cdn-icons-png.flaticon.com/128/2392/2392531.png" alt="Durée d'ensoleillement" width="20px"> <span class="ms-1" id="sunshineDuration">Loading...</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

        // L'appel de getWeather est déplacé ici pour qu'il soit appelé au moment du rendu
        this.getWeather()
    }
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

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('cityName', {
                  label: 'City Name'
                }),
                PropertyPaneButton('getWeatherButton', {
                  text: 'Get Weather',
                  onClick: this.getWeather.bind(this)
                }),
                // ... vos autres propriétés ici
              ]
            }
          ]
        }
      ]
    };
  }
  
  private getWeather(): void {
    const cityName: string = this.properties.cityName;

    if (cityName) {
        const langage = "fr";
        const clef = "234838fc5b67c3a8dff1967d34801283";
        const apiLien = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${clef}&lang=${langage}&units=metric`;

        fetch(apiLien)
            .then(response => response.json())
            .then(data => {
                const temperatureElement = document.getElementById('temperature');
                const weatherDescriptionElement = document.getElementById('weatherDescription');
                const windSpeedElement = document.getElementById('windSpeed');
                const humidityElement = document.getElementById('humidity');
                const sunshineDurationElement = document.getElementById('sunshineDuration');
                const weatherImageElement = document.getElementById('weatherImage');

                if (temperatureElement && weatherDescriptionElement && windSpeedElement && humidityElement && sunshineDurationElement && weatherImageElement) {
                    temperatureElement.innerText = `${Math.ceil(data.main.temp)}°C`;
                    weatherDescriptionElement.innerText = data.weather[0].description;
                    windSpeedElement.innerText = `${data.wind.speed} km/h`;
                    humidityElement.innerText = `${data.main.humidity}%`;

                    // Calcul de la fraction pour la durée d'ensoleillement
                    // Calcul de la fraction pour la durée d'ensoleillement
                    const sunrise = new Date(data.sys.sunrise * 1000); // Convertir le timestamp en millisecondes
                    const sunriseFraction = `${sunrise.getHours()}:${sunrise.getMinutes().toString().padStart(2, '0')}`;
                    sunshineDurationElement.innerText = sunriseFraction;


                    // Utiliser la description de la météo pour déterminer quelle image afficher
                    const weatherIcon = data.weather[0].icon;
                    const weatherImageSrc = this.getWeatherImageSrc(weatherIcon);
                    weatherImageElement.setAttribute('src', weatherImageSrc);
                }
            })
            .catch(error => console.error('Erreur lors de la récupération des données météo :', error));
    } else {
        alert('Veuillez entrer un nom de ville.');
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