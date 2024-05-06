
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
import styles from './EquipeWebPart.module.scss';
import * as strings from 'EquipeWebPartStrings';


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
      const teamMembers = this.properties.teamMembers || [];
      const teamsIconUrl = "https://img.icons8.com/?size=50&id=KWAHCC3qdIgL&format=png";
      const emailIconUrl = "https://img.icons8.com/?size=50&id=123847&format=png";

      this.domElement.innerHTML = `
      <h2 style="font-size: 24px; color: #0E376A; margin-bottom: 15px; font-weight: bold;">
      <span style="position: relative; font-weight: bold;">
        Equipe
        <span style="position: absolute; left: 0; bottom: -5px; width: 100%; border-bottom: 2px solid #00965E;"></span>
      </span> SI
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
  </div>`;

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
