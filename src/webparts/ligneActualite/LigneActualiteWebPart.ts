


import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import './scripts/customScript.js';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  IPropertyPaneField,
  PropertyPaneTextField,
  // PropertyPaneDropdown,
  // IPropertyPaneDropdownOption,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './LigneActualiteWebPart.module.scss';
import * as strings from 'LigneActualiteWebPartStrings';


export interface ITeamMember {
  name: string;
  surname: string;
  position: string;
  emailLink: string;
  teamsLink: string;
  image: string;
}

export interface IHelloWorldWebPartProps {
  teamMembers: ITeamMember[];
  selectedMember: number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  protected onInit(): Promise<void> {
    // Initialisation si nécessaire
    return Promise.resolve();
  }
  

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      // Initialise le composant SharePoint Framework
      this.domElement.innerHTML = `
      
      <div class="${styles.cardcontainer}">
        <div class="card" style="width:22%; background-color: #ffffff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);transition: transform 0.3s;">
        <img class="card-img-top" src="${require('./assets/image actu.png')}" alt="Card image" style="width:100%; height:170px">
        <div class="card-body">
         <div style="display: flex; align-items: center;">
          <div class="${styles.date} date-container"></div>
          <img src="${require('./assets/Component 2.png')}" alt="Card image" style="margin-left: auto;width: 20px;margin-top:0px;">
         </div>

          <p class="card-text"> Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
          <div style="display: flex;align-items: center;margin-bottom: 10px;">

          <div>
            <div class="${styles.creator}">
                <img style="width: 30px;height: 30px; border-radius: 50%; margin-right: 10px; "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO_kAsbtlkcEMFydwDYA_mBopdFxsXu4HTA&usqp=CAU" alt="Image du créateur">
                <div style="color:#1D458C; font-size: 12px;">Boulamayme Yassine</div>
            </div>
              <div style="display: flex; justify-content: space-between;align-items: center;position: absolute; bottom: 0;">
                <div style="display: flex; align-items: center;margin-right: 30px;">
                <img src="${require('./assets/ant-design_like-twotone.png')}" alt="Image" style="width: 20px;height:20px;">
                <p>154</p>
                </div>
                <div style="display: flex; align-items: center;margin-right: 30px;">
                <img src="${require('./assets/iconamoon_comment-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
                <p>154</p>
                </div>
                <div style="display: flex; align-items: center;">
                <img src="${require('./assets/lets-icons_view-alt-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
                <p>154</p>
                </div>
                
              </div>
            </div>
            </div>

          </div>
    </div>
        
      
    
    <div class="card" style="width:22%; background-color: #ffffff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);transition: transform 0.3s;">
    <img class="card-img-top" src="${require('./assets/image actu.png')}" alt="Card image" style="width:100%; height:170px">
    <div class="card-body">
      <div style="display: flex; align-items: center;">
        <div class="${styles.date} date-container"></div>
        <img src="${require('./assets/Component 2.png')}" alt="Card image" style="margin-left: auto;width: 20px;margin-top:0px;">
      </div>

      <p class="card-text"> Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
      <div style="display: flex;align-items: center;margin-bottom: 10px;">

      <div>
        <div class="${styles.creator}">
            <img style="width: 30px;height: 30px; border-radius: 50%; margin-right: 10px; "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO_kAsbtlkcEMFydwDYA_mBopdFxsXu4HTA&usqp=CAU" alt="Image du créateur">
            <div style="color:#1D458C; font-size: 12px;">Boulamayme Yassine</div>
        </div>
          <div style="display: flex; justify-content: space-between;align-items: center;position: absolute; bottom: 0;">
            <div style="display: flex; align-items: center;margin-right: 30px;">
            <img src="${require('./assets/ant-design_like-twotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            <div style="display: flex; align-items: center;margin-right: 30px;">
            <img src="${require('./assets/iconamoon_comment-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            <div style="display: flex; align-items: center;">
            <img src="${require('./assets/lets-icons_view-alt-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            
          </div>
        </div>
        </div>

      </div>
      </div>



      <div class="card" style="width:22%; background-color: #ffffff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);transition: transform 0.3s;">
    <img class="card-img-top" src="${require('./assets/image actu.png')}" alt="Card image" style="width:100%; height:170px">
    <div class="card-body">
      <div style="display: flex; align-items: center;">
        <div class="${styles.date} date-container"></div>
        <img src="${require('./assets/Component 2.png')}" alt="Card image" style="margin-left: auto;width: 20px;margin-top:0px;">
      </div>

      <p class="card-text"> Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
      <div style="display: flex;align-items: center;margin-bottom: 10px;">

      <div>
        <div class="${styles.creator}">
            <img style="width: 30px;height: 30px; border-radius: 50%; margin-right: 10px; "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO_kAsbtlkcEMFydwDYA_mBopdFxsXu4HTA&usqp=CAU" alt="Image du créateur">
            <div style="color:#1D458C; font-size: 12px;">Boulamayme Yassine</div>
        </div>
          <div style="display: flex; justify-content: space-between;align-items: center;position: absolute; bottom: 0;">
            <div style="display: flex; align-items: center;margin-right: 30px;">
            <img src="${require('./assets/ant-design_like-twotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            <div style="display: flex; align-items: center;margin-right: 30px;">
            <img src="${require('./assets/iconamoon_comment-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            <div style="display: flex; align-items: center;">
            <img src="${require('./assets/lets-icons_view-alt-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
            <p>154</p>
            </div>
            
          </div>
        </div>
        </div>

      </div>
      </div>





      <div class="card" style="width:22%; background-color: #ffffff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);transition: transform 0.3s;">
      <img class="card-img-top" src="${require('./assets/image actu.png')}" alt="Card image" style="width:100%; height:170px">
      <div class="card-body">
        <div style="display: flex; align-items: center;">
          <div class="${styles.date} date-container"></div>
          <img src="${require('./assets/Component 2.png')}" alt="Card image" style="margin-left: auto;width: 20px;margin-top:0px;">
        </div>
  
        <p class="card-text"> Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
        <div style="display: flex;align-items: center;margin-bottom: 10px;">
  
        <div>
          <div class="${styles.creator}">
              <img style="width: 30px;height: 30px; border-radius: 50%; margin-right: 10px; "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO_kAsbtlkcEMFydwDYA_mBopdFxsXu4HTA&usqp=CAU" alt="Image du créateur">
              <div style="color:#1D458C; font-size: 12px;">Boulamayme Yassine</div>
          </div>
            <div style="display: flex; justify-content: space-between;align-items: center;position: absolute; bottom: 0;">
              <div style="display: flex; align-items: center;margin-right: 30px;">
              <img src="${require('./assets/ant-design_like-twotone.png')}" alt="Image" style="width: 20px;height:20px;">
              <p>154</p>
              </div>
              <div style="display: flex; align-items: center;margin-right: 30px;">
              <img src="${require('./assets/iconamoon_comment-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
              <p>154</p>
              </div>
              <div style="display: flex; align-items: center;">
              <img src="${require('./assets/lets-icons_view-alt-duotone.png')}" alt="Image" style="width: 20px;height:20px;">
              <p>154</p>
              </div>
              
            </div>
          </div>
          </div>
  
        </div>
        </div>
      </div>
      
    


        <script>
        function toggleStar() {
          var star = document.getElementById('star');
          star.classList.toggle('empty');
          star.classList.toggle('full');
      }
      function likeButton(){
        let heart = document.querySelector('.heart');
        let likes = document.querySelector('.likes');
        if(heart.src.match("heart.png")){
            heart.src = "heart_red.png";
            likes.innerHTML = "5,490 likes";
        } else {
            heart.src = "heart.png";
            likes.innerHTML = "5,489 likes"
        }
    }
      </script>
      `;
 // Obtient la date actuelle et met à jour le conteneur de date
        const currentDate: Date = new Date();
        const dateContainer: Element | null = document.querySelector('.date-container');
        
        if (dateContainer) {
          // Options de formatage pour afficher la date sous la forme "jour mois année"
          const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        
          // Met à jour le contenu du conteneur de date
          dateContainer.textContent = ` ${currentDate.toLocaleDateString(undefined, options)}`;
        }
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
            // ... autres groupes existants
            {
              groupName: 'Équipe de travail',
              groupFields: this.getTeamMembersFields()
            }
          ]
        }
      ]
    };
  }
  
  private getTeamMembersFields(): IPropertyPaneField<any>[] {
    const teamMembersFields: IPropertyPaneField<any>[] = [];
  
    for (let i = 0; i < 5; i++) { // Remplacez 5 par le nombre de membres souhaité
      teamMembersFields.push(
        PropertyPaneTextField(`teamMembers[${i}].name`, {
          label: `Membre ${i + 1} - Nom`,
          placeholder: 'Entrez le nom du membre'
        }),
        PropertyPaneTextField(`teamMembers[${i}].surname`, {
          label: `Membre ${i + 1} - Prénom`,
          placeholder: 'Entrez le prénom du membre'
        }),
        PropertyPaneTextField(`teamMembers[${i}].position`, {
          label: `Membre ${i + 1} - Poste`,
          placeholder: 'Entrez le poste du membre'
        }),
        PropertyPaneTextField(`teamMembers[${i}].emailLink`, {
          label: `Membre ${i + 1} - Lien de l'e-mail`,
          placeholder: 'Entrez le lien de l\'e-mail du membre'
        }),
        PropertyPaneTextField(`teamMembers[${i}].teamsLink`, {
          label: `Membre ${i + 1} - Lien Teams`,
          placeholder: 'Entrez le lien Teams du membre'
        }),
        PropertyPaneTextField(`teamMembers[${i}].image`, {
          label: `Membre ${i + 1} - Image URL`,
          placeholder: 'Entrez l\'URL de l\'image du membre'
        })
      );
    }
  
    return teamMembersFields;
  }
}
//   private getTeamMembersDropdownOptions(): IPropertyPaneDropdownOption[] {
//     return this.properties.teamMembers.map((member, index) => ({
//       key: index.toString(),
//       text: `Membre ${index + 1}`,
//     }));
//   }
// }
