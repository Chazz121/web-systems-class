import { Component, OnInit } from '@angular/core';
import { CommandExecutor } from 'selenium-webdriver/safari';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  getCords(event){
    var cordX = event.clientX
    var cordY = event.clientY
    var form = document.getElementById('form')
    var newContent = document.createElement('div')
    newContent.innerHTML = '<input type=\'text\' style=\'position:absolute;top:'+(cordY-15+window.scrollY)+'px;left:'+(cordX-120+window.scrollX)+'px\';></div>'
    form.append(newContent);
  }

  ngOnInit() {
  }

}
