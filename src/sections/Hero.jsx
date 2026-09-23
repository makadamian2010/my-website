import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Code2, Shield, Cog, Globe2, Bot, Pause, Play } from 'lucide-react';
import LabScene from '../components/LabScene';
import { domains } from '../data/domains';
const icons=[Bot,Cpu,Code2,Shield,Cog,Globe2];
export default function Hero({ paused, setPaused, onNavigate }) {
  const [active,setActive]=useState(0);
  const d=domains[active];
  return <section id="lab" className="hero" style={{'--domain':d.color}}>
    <div className="hero-topline"><span><i className="status-dot"/> A PERSONAL INNOVATION LAB</span><span>IMAGINE / BUILD / ITERATE</span></div>
    <div className="hero-stage">
      <div className="hero-copy"><p className="eyebrow">SHABBUR KHAN <span>— CO-FOUNDER & STUDENT ENGINEER</span></p><h1>Curiosity.<br/>Engineered<br/>into <em>reality.</em></h1><p className="hero-description">At the intersection of robotics, intelligence, and human possibility. I build, research, and explore what comes next.</p><button className="primary-link" onClick={()=>onNavigate?.('Work')}>Explore my work <ArrowUpRight size={18}/></button><button className="quiet-link" onClick={()=>onNavigate?.('Experience')}>My experience <span>↗</span></button></div>
      <div className="hero-visual"><LabScene index={active} color={d.color} paused={paused}/><div className="object-label"><span className="eyebrow">{d.code} / INTERACTIVE STUDY</span><strong>{d.label}</strong><span>Concept model · explore the story below</span></div><button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?<Play size={13}/>:<Pause size={13}/>} {paused?'Resume motion':'Pause motion'}</button></div>
    </div>
    <div className="explorer"><div className="explorer-label"><span className="eyebrow">CHOOSE YOUR CURIOSITY</span><span>06 interconnected disciplines</span></div><div className="domain-tabs" role="tablist" aria-label="Explore a discipline">{domains.map((item,i)=>{const Icon=icons[i];return <button key={item.id} role="tab" id={`tab-${item.id}`} aria-selected={active===i} aria-controls="domain-story" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{let next;if(e.key==='ArrowRight')next=(i+1)%6;if(e.key==='ArrowLeft')next=(i+5)%6;if(e.key==='Home')next=0;if(e.key==='End')next=5;if(next!==undefined){e.preventDefault();setActive(next);document.getElementById(`tab-${domains[next].id}`).focus();}}}><Icon size={19}/><span>{item.label}</span><small>0{i+1}</small></button>;})}</div>
      <div id="domain-story" className="domain-story" role="tabpanel" aria-labelledby={`tab-${d.id}`} tabIndex={0}><div><p className="eyebrow">{d.subtitle}</p><h2>{d.title}</h2></div><div><p>{d.description}</p><button className="domain-action" onClick={()=>onNavigate?.('Work')}>{d.action}<ArrowUpRight size={16}/></button></div><div className="domain-skills">{d.skills.map(s=><span key={s}>{s}</span>)}</div></div>
    </div><button className="scroll-cue" onClick={()=>onNavigate?.('About Me')}><ArrowDown size={15}/> DISCOVER MORE <span>ABOUT ME</span></button>
  </section>;
}
