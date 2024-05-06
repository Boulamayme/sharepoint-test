







import './scripts/customScript.js';
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
import * as $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Carousel2WebPart.module.scss';
import * as strings from 'Carousel2WebPartStrings';



export interface IHelloWorldWebPartProps {
  poste: string;
  nom: string;
  image: string;
  text: string;
  buttonLink: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private _intervalId: number;

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.domElement.innerHTML = `
      
      <script src="chemin/vers/jquery.min.js"></script>
      <script src="chemin/vers/slick.min.js"></script>
      <script src="chemin/vers/votre-script.js"></script>
 
      <div class="slider ${styles.test}">
          <div class="${styles.slide} ${styles.image}" data-caption="Légende de la première image" style="width: 100%;">
            <div class="${styles['navigation-chevron']} ${styles['left-chevron']}">&lt;</div>
            <img class="${styles.image}" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF5c2FnZXxlbnwwfDB8MHx8fDA%3D" alt="La forêt de peupliers">
            <div class="${styles['image-caption']} ${styles.legende}">
              <h3 class="${styles.titre}"> Les photos du séminaire en Camargue sont arrivées ! </h3>
              <div class="${styles.texte}">
                <p > Revivez ces bons moments uniques avec les clichés pris par tous les collaborateurs.</p>
              </div>
              <div class="${styles.buttonContainer}">
                <button class="${styles.customButton}">Voir les photos</button>
              </div>
            </div>
            <div class="${styles['navigation-chevron']} ${styles['right-chevron']}">&gt;</div>
          </div>
          <div class="${styles.slide}" data-caption="Légende de la deuxième image">
            <div class="${styles['navigation-chevron']} ${styles['left-chevron']}">&lt;</div>
            <img class="${styles.image}" src="https://images.unsplash.com/photo-1705798269847-2fc6c5c36009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Description de la deuxième image">
            <div class="${styles['image-caption']} ${styles.legende}">
              <h3 class="${styles.titre}"> Les photos du séminaire en Camargue sont arrivées ! </h3>
              <div class="${styles.texte}">
                <p > Revivez ces bons moments uniques avec les clichés pris par tous les collaborateurs.</p>
              </div>
              <div class="${styles.buttonContainer}">
                <button class="${styles.customButton}">Voir les photos</button>
              </div>
            </div>
            <div class="${styles['navigation-chevron']} ${styles['right-chevron']}">&gt;</div>
          </div>
          <div class="${styles.slide}" data-caption="Légende de la troisième image">
            <div class="${styles['navigation-chevron']} ${styles['left-chevron']}">&lt;</div>
            <img class="${styles.image}" src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Description de la troisième image">
            <div class="${styles['image-caption']} ${styles.legende}">
            <h3 class="${styles.titre}"> Les photos du séminaire en Camargue sont arrivées ! </h3>
            <div class="${styles.texte}">
                <p > Revivez ces bons moments uniques avec les clichés pris par tous les collaborateurs.</p>
            </div>
            <div class="${styles.buttonContainer}">
              <button class="${styles.customButton}">Voir les photos</button>
            </div>
          </div>
            <div class="${styles['navigation-chevron']} ${styles['right-chevron']}">&gt;</div>
          </div>
          
        </div>
        <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function() {
          // Supprimer les marges de la page SharePoint
          var pageContent = document.getElementById("s4-workspace");
          if (pageContent !== null) {
            pageContent.style.margin = "0";
    }
});
</script>
`;

      // Initialiser le carrousel avec les options souhaitées
      $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

      // Attacher des gestionnaires d'événements au clic sur les chevrons
      this.domElement.querySelectorAll(`.${styles['left-chevron']}`).forEach(element => {
        element.addEventListener('click', () => this.changeSlide(-1));
      });

      this.domElement.querySelectorAll(`.${styles['right-chevron']}`).forEach(element => {
        element.addEventListener('click', () => this.changeSlide(1));
      });

      // Démarrer le changement automatique d'image
      this._intervalId = setInterval(() => {
        $('.slider').slick('slickNext');
      }, 5000); // Changer toutes les 5 secondes (ajustez si nécessaire)
    }
  }

  // Déclaration de la fonction changeSlide
  private changeSlide(direction: number): void {
    // Utilisez la fonction slickGoTo avec le nouvel index
    $('.slider').slick('slickNext');
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

  protected onDispose(): void {
    // Arrêter le changement automatique d'image lorsqu'il se dispose
    clearInterval(this._intervalId);
    super.onDispose();
  }
}
