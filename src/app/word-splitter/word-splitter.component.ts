import { Component, OnInit } from '@angular/core';
import { SplitterService } from '../services/splitter.service';

@Component({
  selector: 'app-word-splitter',
  templateUrl: './word-splitter.component.html',
  styleUrls: ['./word-splitter.component.css']
})
export class WordSplitterComponent implements OnInit {

  inputWords:string = "";

  outputWords:string = "";

  constructor(private spliterService:SplitterService) { }

  ngOnInit(): void {
  }

  splitSentence(){
    this.spliterService.splitSentence(this.inputWords).subscribe( r => {
      console.log(r.msg);
      this.outputWords = r.msg;
    })
  }

}
