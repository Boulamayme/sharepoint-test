

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
import styles from './FooterWebPart.module.scss';
import * as strings from 'FooterWebPartStrings';

export interface IHelloWorldWebPartProps {
  
  titre: string;
  image: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    
      <title>Document</title>
    </head>
    <body class="${styles.body}>
      <div class="container-fluid mt-5">
        <div class="${styles.card} " style="background-color: #003DA5 !important;width:100% !important," >
          <div class="row mb-4">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <div class="footer-text pull-left">
                <div class="d-flex">
                  <img class="${styles.logo}" src="${require('./assets/Logo enoé blanc variante couleur 3 (1).png')}" alt="Description de l'image">
                </div>
                
              </div>
            </div>
            <!-- <div class="col-md-2 col-sm-2 col-xs-2"></div> -->
            <div class="col-md-3 col-sm-2 col-xs-2">
              <h5 class="${styles.h5}">MENU PRINCIPAL</h5>
              <ul>
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Home.aspx?csf=1&web=1&e=BIP9D1">Accueil</a></li>
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Actualit%C3%A9s.aspx?csf=1&web=1&e=Zf0MsZ">Actualités</a></li>
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Annuaire.aspx?csf=1&web=1&e=rezhmx">Organisation</a></li>
                <li><a class="${styles.a}" href="#">Espace documentaire</a></li>
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Eno%C3%A9.aspx?csf=1&web=1&e=orIcAz">Enoé</a></li>
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/Vie-d%27entreprise.aspx?csf=1&web=1&e=Ba4CQ4">Vie d'entreprise</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-2 col-xs-2">
              <h5 class="${styles.h5}">AIDE</h5>
              <ul class="card-text">
                <li><a class="${styles.a}" href="https://enoeenergie.sharepoint.com/:u:/r/sites/dev-test/SitePages/FAQ.aspx?csf=1&web=1&e=m8WsBa">FAQ</a></li>
                <li><a class="${styles.a}" href="#">Plan du site</a></li>
                <li><a class="${styles.a}" href="#">accessibilité</a></li>
                <li><a class="${styles.a}" href="#">Mentions légales</a></li>
                <li><a class="${styles.a}" href="#">Protection des données</a></li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
              <h5 class="${styles.h5}">Suivez-nous</h5>
              <div class="${styles.social} mt-2 mb-3"> <i class="fa fa-facebook-official fa-lg"></i> <i class="fa fa-twitter fa-lg"></i> <i class="fa fa-linkedin-square fa-lg"></i> <i class="fa fa-facebook"></i> </div>
            </div>
          </div>
          <div class="${styles.divider} mb-4"></div>
          <div class="row text-center" style="font-size:10px;">
            <div class="col">
              <p class="${styles.copy}"><i class="fa fa-copyright"></i>  Copyright 2023, Tous droits réservés - enoé</p>
            </div>
          </div>
        </div>
      </div>
    </body>`;
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

