import { Component, OnInit } from '@angular/core';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { IllnessesService } from '../../services/illnesses.service';

@Component({
  selector: 'app-delete-illness',
  templateUrl: './delete-illness.component.html',
  styleUrls: ['./delete-illness.component.scss']
})
export class DeleteIllnessComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private illnessService: IllnessesService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.deleteIllness(this.params.currentId);
  }

  deleteIllness(id: string): void {
    this.illnessService.delete(id)
      .then(() => console.log('Illness successfully deleted'))
      .catch(error => console.error('Error deleting illness: ', error));
  }
}
