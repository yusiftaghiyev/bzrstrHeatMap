(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let s,a,l;function d(){s=new google.maps.Map(document.getElementById("map"),{center:{lat:39.23,lng:-105.73},zoom:8,mapId:"a3efe1c035bad51b"}),a=s.getFeatureLayer("ADMINISTRATIVE_AREA_LEVEL_2"),a.addListener("click",p),l=new google.maps.InfoWindow({}),u()}function p(n){let t=n.features[0];if(console.log(n),!t.placeId)return;u(t.placeId);let r='<span style="font-size:small">Display name: '+t.displayName+"<br/> Place ID: "+t.placeId+"<br/> Feature type: "+t.featureType+"</span>";m(r,n.latLng)}const f={strokeColor:"#810FCB",strokeOpacity:1,strokeWeight:2,fillColor:"white",fillOpacity:.1},y={...f,fillColor:"#810FCB",fillOpacity:.5};function u(n){a.style=t=>n&&t.feature.placeId==n?y:f}function m(n,t){l.setContent(n),l.setPosition(t),l.open({map:s,shouldFocus:!1})}window.initMap=d;