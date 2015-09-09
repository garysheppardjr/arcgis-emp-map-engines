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
function arcgisMapEngine3d() {
  var engineInterface = emp.map.createEngineTemplate();
  
  /***********************************************************************
   * TODO everything following this (except the return statement) is for testing
   * and experimenting. So far, none of these methods seem to get called or have
   * an effect on EMP or CPCE.
   */
  
  engineInterface.implementation.displayName = "ArcGIS 3D";
  
  engineInterface.capabilities.mapType.type3D = true;
  engineInterface.capabilities.formats.ArcGIS = true;
  
  engineInterface.initialize.succeed = function (args) {
    console.log("success!");
  };
  
  engineInterface.initialize.fail = function (args) {
    console.log("failure");
  };
  
  engineInterface.status.get = function (transaction) {
    console.log("get");
  };
  
  engineInterface.state.reset = function (transaction) {
    console.log("reset");
  };
  
  engineInterface.state.destroy = function () {
    console.log("destroy");
  };
  
  engineInterface.visibility.set = function (transaction) {
    console.log("visibility.set");
  };
  
  engineInterface.overlay.add = function (transaction) {
    console.log("overlay.add");
  };
  
  engineInterface.overlay.remove = function (transaction) {
    console.log("overlay.remove");
  };
  
  engineInterface.overlay.update = function (transaction) {
    console.log("overlay.update");
  };
  
  engineInterface.overlay.clear = function (transaction) {
    console.log("overlay.clear");
  };
  
  engineInterface.navigation = engineInterface.navigation || {};
  engineInterface.navigation.enable = function(transaction) {
    console.log("navigation.enable");
  };
  
  /***********************************************************************/
  
  return engineInterface;
}