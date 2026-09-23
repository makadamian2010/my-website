import * as T from 'three';

export function createLab(host, onReady, onHover) {
  const renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.65;
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(36, 1, .1, 100);
  camera.position.set(5.5, 3.1, 8.5); camera.lookAt(0, .25, 0);
  scene.add(new T.HemisphereLight(0xd0fff3, 0x142028, 3));
  const key = new T.DirectionalLight(0xe5f4ff, 5); key.position.set(3, 6, 4); scene.add(key);
  const rim = new T.DirectionalLight(0x72ffd2, 6); rim.position.set(-4, 2, -3); scene.add(rim);
  const fill = new T.PointLight(0x8f99ff, 35); fill.position.set(2, -1, 4); scene.add(fill);
  const steel = new T.MeshStandardMaterial({ color: 0x7e919d, metalness: .83, roughness: .25 });
  const white = new T.MeshStandardMaterial({ color: 0xcad5d8, metalness: .52, roughness: .24 });
  const dark = new T.MeshStandardMaterial({ color: 0x17282e, metalness: .65, roughness: .28 });
  const light = new T.MeshStandardMaterial({ color: 0x8df2d0, emissive: 0x53e7b6, emissiveIntensity: 1.4, metalness: .3, roughness: .25 });
  const wire = new T.MeshBasicMaterial({ color: 0x8df2d0, wireframe: true, transparent: true, opacity: .35 });
  const root = new T.Group(); scene.add(root);
  function mesh(geo, mat, parent, pos=[0,0,0], rot=[0,0,0]) { const m = new T.Mesh(geo,mat); m.position.set(...pos); m.rotation.set(...rot); parent.add(m); return m; }
  const box=(s,mat,parent,pos,rot)=>mesh(new T.BoxGeometry(...s),mat,parent,pos,rot);
  const cylinder=(r1,r2,h,mat,parent,pos,rot)=>mesh(new T.CylinderGeometry(r1,r2,h,48),mat,parent,pos,rot);
  const torus=(r,t,mat,parent,pos,rot)=>mesh(new T.TorusGeometry(r,t,10,80),mat,parent,pos,rot);
  function rod(a,b,r,mat,parent) { const from=new T.Vector3(...a), to=new T.Vector3(...b); const m=cylinder(r,r,from.distanceTo(to),mat,parent,from.clone().add(to).multiplyScalar(.5).toArray()); m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),to.sub(from).normalize()); return m; }
  const models=[];
  for(let i=0;i<6;i++){const g=new T.Group();g.visible=i===0;root.add(g);models.push(g);}
  // Articulated industrial arm: machined joints, paired structural links, hydraulic braces, gripper.
  const robot=models[0]; robot.position.y=-1.5;
  cylinder(.77,.94,.22,dark,robot,[0,0,0]);
  cylinder(.59,.7,.23,steel,robot,[0,.21,0]);
  cylinder(.56,.56,.055,light,robot,[0,.34,0]);
  cylinder(.4,.51,.5,white,robot,[0,.6,0]);
  const joints=[[0,.95,0],[-.85,2.15,0],[.36,3.0,0],[1.12,2.5,0]];
  joints.forEach((p,i)=>{cylinder(i===0?.37:.27,i===0?.37:.27,.55,dark,robot,p,[Math.PI/2,0,0]);cylinder(.2,.2,.6,steel,robot,p,[Math.PI/2,0,0]);torus(.16,.035,light,robot,[p[0],p[1],.315]);torus(.16,.035,light,robot,[p[0],p[1],-.315]);});
  for(let i=0;i<joints.length-1;i++){const a=joints[i],b=joints[i+1];[-.22,.22].forEach(z=>rod([a[0],a[1],z],[b[0],b[1],z],.115,white,robot));rod([a[0]+.15,a[1],.05],[b[0]+.15,b[1],.05],.045,steel,robot);}
  const grip=new T.Group();grip.position.set(1.12,2.5,0);grip.rotation.z=-.5;robot.add(grip);
  cylinder(.18,.23,.35,steel,grip,[0,-.2,0]);
  [-1,1].forEach(side=>{box([.10,.42,.2],dark,grip,[side*.23,-.53,0],[0,0,-side*.25]);box([.18,.09,.21],white,grip,[side*.13,-.76,0]);});
  // Neural structure: layered nodes with animated signal particles.
  const brain=models[1];const nodes=[];for(let layer=0;layer<5;layer++)for(let n=0;n<7;n++){let angle=n/7*Math.PI*2+layer*.2;let p=new T.Vector3((layer-2)*.63,Math.sin(angle)*(1.15-Math.abs(layer-2)*.19),Math.cos(angle)*.82);nodes.push(p);mesh(new T.SphereGeometry(.075,12,12),light,brain,p.toArray());}
  const edges=[];for(let i=0;i<28;i++)for(let k=0;k<2;k++){let j=(Math.floor(i/7)+1)*7+(i+k*3)%7;edges.push(nodes[i],nodes[j]);}
  const lineMat=new T.LineBasicMaterial({color:0xa5a0ff,transparent:true,opacity:.25});brain.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(edges),lineMat));
  const pulses=Array.from({length:10},(_,i)=>{let p=mesh(new T.SphereGeometry(.04,8,8),light,brain);return{mesh:p,a:edges[i*4],b:edges[i*4+1],offset:i/10};});
  torus(1.9,.012,light,brain,[0,0,0],[0,Math.PI/2,0]);
  // Floating software terminal stack.
  const software=models[2];for(let i=0;i<3;i++){const panel=new T.Group();panel.position.set((i-1)*.36,(i-1)*.25,-i*.65);panel.rotation.y=-.17;software.add(panel);box([3.4,2.05,.09],dark,panel);box([3.25,.04,.11],light,panel,[0,.83,.03]);for(let line=0;line<7;line++){box([.4+(line%4)*.34,.035,.025],line%3===0?light:steel,panel,[-.8+(line%2)*.18,.57-line*.18,.07]);}for(let n=0;n<3;n++)mesh(new T.SphereGeometry(.035,8,8),light,panel,[1.13+n*.13,.89,.07]);}
  // Security lock surrounded by encryption rings.
  const lock=models[3];box([1.8,1.5,.65],dark,lock,[0,-.35,0]);box([1.7,1.4,.67],steel,lock,[0,-.35,0]);mesh(new T.TorusGeometry(.62,.12,16,48,Math.PI),white,lock,[0,.5,0]);rod([-.62,.5,0],[-.62,.1,0],.12,white,lock);rod([.62,.5,0],[.62,.1,0],.12,white,lock);mesh(new T.SphereGeometry(.14,20,20),light,lock,[0,-.3,.37]);box([.09,.31,.06],light,lock,[0,-.46,.36]);torus(2,.018,light,lock,[0,0,0],[.6,.4,0]);torus(2.15,.012,light,lock,[0,0,0],[-.7,-.3,0]);
  // Exploded mechanical assembly.
  const blueprint=models[4];for(let i=0;i<3;i++){cylinder(.95,.95,.16,i===1?wire:steel,blueprint,[0,(i-1)*.85,0]);torus(.67,.08,light,blueprint,[0,(i-1)*.85+.1,0],[Math.PI/2,0,0]);for(let n=0;n<8;n++){let a=n/8*Math.PI*2;box([.23,.24,.23],white,blueprint,[Math.cos(a)*.97,(i-1)*.85,Math.sin(a)*.97],[0,-a,0]);}}rod([0,-1.5,0],[0,1.5,0],.13,dark,blueprint);mesh(new T.BoxGeometry(2.7,3.3,2.7),wire,blueprint);
  // Community globe and its connected points.
  const globe=models[5];mesh(new T.SphereGeometry(1.3,32,20),new T.MeshStandardMaterial({color:0x122b32,metalness:.6,roughness:.4}),globe);mesh(new T.SphereGeometry(1.32,24,14),wire,globe);const points=[];for(let i=0;i<18;i++){let y=1-(i/17)*2;let r=Math.sqrt(1-y*y);let a=i*2.39996;let p=new T.Vector3(Math.cos(a)*r,y,Math.sin(a)*r).multiplyScalar(1.36);points.push(p);mesh(new T.SphereGeometry(.05,10,10),light,globe,p.toArray());}for(let i=0;i<points.length-1;i++){const mid=points[i].clone().add(points[i+1]).normalize().multiplyScalar(1.85);const curve=new T.QuadraticBezierCurve3(points[i],mid,points[i+1]);globe.add(new T.Line(new T.BufferGeometry().setFromPoints(curve.getPoints(24)),new T.LineBasicMaterial({color:0xf3b4d3,transparent:true,opacity:.4})));}
  const platform=new T.Group();scene.add(platform);platform.position.y=-1.85;
  cylinder(2.1,2.25,.09,dark,platform);torus(2.06,.017,light,platform,[0,.06,0],[Math.PI/2,0,0]);torus(2.65,.008,light,platform,[0,-.06,0],[Math.PI/2,0,0]);
  const grid=new T.GridHelper(16,32,0x28423e,0x132826);grid.position.y=-1.96;scene.add(grid);
  const stars=[];for(let i=0;i<100;i++)stars.push(Math.sin(i*12.9)*9,Math.cos(i*4.7)*5,Math.sin(i*7.3)*7-4);
  const starGeo=new T.BufferGeometry();starGeo.setAttribute('position',new T.Float32BufferAttribute(stars,3));scene.add(new T.Points(starGeo,new T.PointsMaterial({color:0x86cbb9,size:.022,transparent:true,opacity:.6})));
  let index=0,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches, visible=true,disposed=false,frame,time=0,last=0,hovered=false;
  const pointer=new T.Vector2(),raycaster=new T.Raycaster();
  const move=e=>{const r=host.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObject(models[index],true).length>0;if(hit!==hovered){hovered=hit;onHover(hit);}};
  const leave=()=>{pointer.set(0,0);hovered=false;onHover(false);};host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;});intersection.observe(host);
  function animate(now){if(disposed)return;frame=requestAnimationFrame(animate);if(!visible||document.hidden)return;if(now-last<1000/40)return;const dt=Math.min((now-last)/1000,.05);last=now;if(!paused)time+=dt;root.rotation.y+=(Math.sin(time*.25)*.26+pointer.x*.15-root.rotation.y)*.045;root.position.y=paused?0:Math.sin(time*.8)*.055;root.rotation.x+=(-pointer.y*.07-root.rotation.x)*.035;const target=hovered?1.045:1;root.scale.lerp(new T.Vector3(target,target,target),.06);light.emissiveIntensity=hovered?2.5:1.4;if(!paused){pulses.forEach(p=>p.mesh.position.lerpVectors(p.a,p.b,(time*.3+p.offset)%1));models[5].rotation.y=time*.08;models[4].rotation.y=time*.07;}renderer.render(scene,camera);}
  frame=requestAnimationFrame(animate);onReady();
  return { select(i,color){index=i;models.forEach((m,n)=>m.visible=n===i);light.color.set(color);light.emissive.set(color);rim.color.set(color);wire.color.set(color);},pause(value){paused=value;},dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);const geos=new Set(),mats=new Set();scene.traverse(o=>{if(o.geometry)geos.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>mats.add(m));});geos.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();} };
}
