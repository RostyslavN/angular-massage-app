import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Parameters } from 'src/app/modules/shared/models/parameters.model';

import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Illness } from '../../models/illness.model';
import { IllnessesService } from '../../services/illnesses.service';

@Component({
  selector: 'app-illness-details',
  templateUrl: './illness-details.component.html',
  styleUrls: ['./illness-details.component.scss']
})
export class IllnessDetailsComponent implements OnInit {
  private params: Parameters = { currentId: '' };
  private illnessDetails: Illness | undefined = { diagnos: '', process: 'curing' };

  constructor(private illnessService: IllnessesService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getIllnessDetails(this.params.currentId);
  }

  getIllnessDetails(id: string): void {
    this.illnessService.getById(id).subscribe({
      next: illness => {
        this.illnessDetails = illness;
        console.log('Illness details were successfully received');
      },
      error: err => console.error('Error receiving illness details: ', err)
    })
  }
}
