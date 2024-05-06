
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
import styles from './RubriqueMotresEquipeWebPart.module.scss';
import * as strings from 'RubriqueMotresEquipeWebPartStrings';


export interface ITeamMember {
  name: string;
  surname: string;
  position: string;
  emailLink: string;
  teamsLink: string;
  image: string;
  Service: string;
}

export interface IHelloWorldWebPartProps {
  teamMembers: ITeamMember[];
  selectedMember: number;
  equipeText: string; // Nouvelle propriété pour contenir le texte de l'équipe
  responsable: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  protected onInit(): Promise<void> {
    // Initialisation si nécessaire
    return Promise.resolve();
  }
  

  public render(): void {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      const teamMembers = this.properties.teamMembers || [];
      const teamsIconUrl = "https://img.icons8.com/?size=50&id=KWAHCC3qdIgL&format=png";
      const emailIconUrl = "https://img.icons8.com/?size=50&id=123847&format=png";
      const equipeText = this.properties.equipeText || "SI";
      const responsable = this.properties.responsable;

      this.domElement.innerHTML = `
      <div class="${styles.container1}">
        <div class="${styles.rightsection}" style="border-bottom: 1px solid rgba(109, 117, 128, 0.39);;margin-bottom:35px;width:80% !important; ">
          <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold;">
            <span style="position: relative; font-weight: bold;">
              
              <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
            </span> 
          </h2>
          <p style="text-align:center;margin-top:90px;">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte</p>
          <h2 style="text-align:center;">${responsable}</h2>
          <h6 style="text-align:center;">Directeur ${equipeText}</h6>
        </div>
        <div class="${styles.leftsection}">
          <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold;">
          <span style="position: relative; font-weight: bold;">
            Equipe
            <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
          </span> ${equipeText}
          </h2>
          <div class="container mt-5" style="background-color: #E5ECF6; margin-top: 20px; margin-bottom: 20px;">
            <section class="${styles.container}">
              ${teamMembers.map((member, index) => `
                <div class="${styles.teammember}">
                  <img src="${member.image}" alt="${member.name} ${member.surname}" class="${styles.teammemberimage}">
                  <div class="${styles.details}">
                    <div><strong>${member.name} ${member.surname}</strong></div>
                    <div class="${styles.coloredtext}">${member.position}</div>
                  </div>
                  <div class="${styles.icons}">
                    <a href="${member.teamsLink}" target="_blank" class="${styles.teamsicon}">
                      <img src="${teamsIconUrl}" alt="Teams" title="Ouvrir dans Teams" style="width: 25px; height: 25px;">
                    </a>
                    <a href="mailto:${member.emailLink}" target="_blank">
                      <img src="${emailIconUrl}" alt="Email" title="Envoyer un email" style="width: 25px; height: 25px;">
                    </a>
                  </div>
                </div>
              `).join('')}
            </section>
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
              groupName: 'Équipe de travail',
              groupFields: [
               
                ...this.getTeamMembersFields() // Autres champs pour les membres de l'équipe
              ]
            }
          ]
        }
      ]
    };
  }
  private getTeamMembersFields(): IPropertyPaneField<any>[] {
    const teamMembersFields: IPropertyPaneField<any>[] = [];
    teamMembersFields.push(
      PropertyPaneTextField(`equipeText`, {
        label: `Texte de l'équipe`,
        placeholder: 'Entrez le texte de l\'équipe'
      }),
      PropertyPaneTextField(`responsable`, {
        label: `Nom du responsable`,
        placeholder: 'Entrez le nom du responsable'
      })
      
    );
  
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
