import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeTab: 'old' | 'pretosi' = 'old';
  maxPossibleRecords = 128; 
  records = Array.from({ length: this.maxPossibleRecords }, (_, i) => i + 1);

  handleImageError(event: any) {
    const item = event.target.closest('.data-item');
    if (item) {
      item.style.display = 'none';
    }
  }
  setTab(tab: 'old' | 'pretosi') {
    this.activeTab = tab;
  }

  old_msg: string = "DOBRÝ DEN MAPO vzhledem k tomu ze se discordama a postama a podobnyma kanalama siri informace jak nejlepsi aliance na svete LOW dostava totalne na boudu od druhe nejlepsi aliance OS je na case zacit evidovat zaznamy primo v nasem popisu samozrejme, tady je mensi ukazka genialnich a naprosto preciznich a neprekonatelnich utoku a vyplodu DRUHE nejlepsi aliance OS (prvni je LOW samozrejme) najdete tady vysledek dokonale neprekonatelne kombinace a ukazku toho co se stane kdyz se v OS krizi seniorství (nic proti dedkum) + neprekonatelne nahorazne giganticky bohaststvi (snad jsem to napsal spravne) tak velke ze oni muzou dokoupit kazdy utok kde nedaji ani 1:1 a stupidity (nic proti nekomu holt nebylo postesteno), v tomto archivu samozrejme nebudou vsechny zaznamy to by ani neslo stihat budou zde jen ty DOBRE zaznamy stejne jako to delaji urednici v OS jen s tim rozdilem ze u nas ZADNE SPATNE ZAZNAMY NEMAME TAKZE SE NENECHTE ZMAST (to byl vtip samoozrejme jen se kochejte)"
  pretosi_msg: string = "pRETOŠE seru zaznamy budou pak ty jsou mozna jeste vice retardovany nez to os"
}