import { Component, OnInit } from '@angular/core';
import{scene}from '../scene'
import { SceneService } from '../scene.service';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
  styleUrls: ['./scene-list.component.css']
})
export class SceneListComponent implements OnInit {
  scenes: scene[] | undefined  ;
  
  constructor(private sceneService: SceneService) { }

  ngOnInit(): void {
    this.getSenes();
 
   
  }
  getSenes() {
    this.sceneService.getSceneList().subscribe(data =>{
      this.scenes=data;
    }
      )
  }

}
