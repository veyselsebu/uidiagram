import { Component } from '@angular/core';

declare var YUI: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angulardiagram';
declare degisken: any;
  ngOnInit(): void {

        const node = [ {name: 'Başlangıç' , type: 'start' , xy: [10 , 10] },
                    {name: 'Imzalama 0545' , type: 'IMZALAMA' , xy: [250 , 100]},
                    {name: 'Onaylama 455' , type: 'ONAYLAMA' , xy: [100 , 300]},
                    {name: 'Cevaplama 014' , type: 'CEVAPLAMA' , xy: [400 , 100]},
                    {name: 'Yonlendirme 012' , type: 'YONLENDIRME' , xy: [400 , 300]},
                    {name: 'Bitiş' , type: 'end' , xy: [600 , 10]},
                    ];

     const connect = [ {connector: { name: 'Link0' }, source: 'Başlangıç', target: 'Yonlendirme 012' },
                    {connector: { name: 'Link1' }, source: 'Yonlendirme 012', target: 'Cevaplama 014' },
                    {connector: { name: 'Link2' }, source: 'Cevaplama 014', target: 'Onaylama 455' },
                    {connector: { name: 'Link3' }, source: 'Onaylama 455', target: 'Imzalama 0545' },
                    {connector: { name: 'Link4' }, source: 'Imzalama 0545', target: 'Bitiş' }
                    ];
     const jsonData = this.deneme( node , connect);
     console.log('sonuc 0' + jsonData);
  }
  deneme(nodelar: any[] , connects: any[]) {
    let diagramBuilder;
    let jsonData;
    YUI({ filter: 'raw' }).use('aui-diagram-builder', function(Y) {
      const availableFields = [
          {
                type: 'CEVAPLAMA',
              label: 'Cevaplama',
              iconClass: 'diagram-node-task-icon'
          },
          {
              type: 'IMZALAMA',
              label: 'İmzalama',
              iconClass: 'diagram-node-state-icon'
          },
          {
              type: 'ONAYLAMA',
              label: 'Onaylama',
              iconClass: 'diagram-node-join-icon'
          },
          {
              type: 'YONLENDIRME',
              label: 'Yönlendirme',
              iconClass: 'diagram-node-fork-icon'
          },
      ];
      diagramBuilder = new Y.DiagramBuilder({
        availableFields: availableFields,
          boundingBox: '#diagramBuilder',
          fields: nodelar
      }).render();
     // console.log(nodelar);
      diagramBuilder.connectAll(connects);
      jsonData = diagramBuilder.toJSON();
      diagramBuilder.stopEditing();
      console.log(jsonData);
  });
    return jsonData;
  }





}


