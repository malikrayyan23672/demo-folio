"use strict";(self.webpackChunkdemo_folio=self.webpackChunkdemo_folio||[]).push([[656],{656:(o,e,i)=>{i.d(e,{Collider:()=>u});var s=i(4409);const t=.5,n=10,d=0;function a(o,e,i,a,l,c){const r=(0,s.qE)(o.options.collisions.absorb.speed*l.factor/n,d,a);o.size.value+=r*t,i.size.value-=r,a<=c&&(i.size.value=0,i.destroy())}const l=o=>{void 0===o.collisionMaxSpeed&&(o.collisionMaxSpeed=(0,s.VG)(o.options.collisions.maxSpeed)),o.velocity.length>o.collisionMaxSpeed&&(o.velocity.length=o.collisionMaxSpeed)};function c(o,e){(0,s.pE)((0,s.Tg)(o),(0,s.Tg)(e)),l(o),l(e)}function r(o,e,i,s){switch(o.options.collisions.mode){case"absorb":!function(o,e,i,s){const t=o.getRadius(),n=e.getRadius();void 0===t&&void 0!==n?o.destroy():void 0!==t&&void 0===n?e.destroy():void 0!==t&&void 0!==n&&(t>=n?a(o,0,e,n,i,s):a(e,0,o,t,i,s))}(o,e,i,s);break;case"bounce":c(o,e);break;case"destroy":!function(o,e){o.unbreakable||e.unbreakable||c(o,e),void 0===o.getRadius()&&void 0!==e.getRadius()?o.destroy():void 0!==o.getRadius()&&void 0===e.getRadius()?e.destroy():void 0!==o.getRadius()&&void 0!==e.getRadius()&&(o.getRadius()>=e.getRadius()?e:o).destroy()}(o,e)}}class u extends s.U4{constructor(o){super(o)}clear(){}init(){}interact(o,e){if(o.destroyed||o.spawning)return;const i=this.container,t=o.getPosition(),n=o.getRadius(),d=i.particles.quadTree.queryCircle(t,2*n);for(const a of d){if(o===a||!a.options.collisions.enable||o.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const d=a.getPosition(),l=a.getRadius();if(Math.abs(Math.round(t.z)-Math.round(d.z))>n+l)continue;(0,s.Yf)(t,d)>n+l||r(o,a,e,i.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=656.102a1ba9.chunk.js.map