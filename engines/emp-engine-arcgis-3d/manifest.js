/**
 * Copyright 2015 Esri
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 **/
emp.map.engines.loadResources({
  resourceList: [
    "//js.arcgis.com/4.0beta1/esri/css/esri.css",
    "//js.arcgis.com/4.0beta1/",
    "/emp-engine-arcgis-3d/arcgis-map-engine-3d.js",
  ],
  callback: function (args) {
    var engine = arcgisMapEngine3d();

    emp.map.engine = engine;

    setTimeout(function () {
      var map, view;
      require([
        "esri/Map",
        "esri/views/SceneView",
        "dojo/domReady!"
      ],
      function(Map, SceneView) {
        map = new Map({
          basemap: "satellite"
        });
        view = new SceneView({
          container: emp.map.container.get(),
          map: map,
          scale: 123456789
        });
      });
    }, 1000);
  }
});