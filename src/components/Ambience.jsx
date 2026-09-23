import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
export default function Ambience() {
  const engine = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => () => { engine.current?.context.close(); }, []);
  async function toggle() {
    try {
      if (enabled) { await engine.current.context.suspend(); setEnabled(false); return; }
      if (!engine.current) {
        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) throw new Error('Audio unavailable');
        const context = new Audio();
        const gain = context.createGain(); gain.gain.value = .015; gain.connect(context.destination);
        [55, 82.41, 110.2].forEach(f => { const oscillator = context.createOscillator(); oscillator.type='sine'; oscillator.frequency.value=f; oscillator.connect(gain); oscillator.start(); });
        engine.current = { context };
      }
      await engine.current.context.resume(); setEnabled(true);
    } catch { setError(true); }
  }
  useEffect(() => {
    const quiet = () => { if (document.hidden && engine.current) { engine.current.context.suspend(); setEnabled(false); } };
    const chirp = e => { if (!enabled || !e.target.closest('button,a')) return; const c=engine.current.context;const o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(550,c.currentTime);o.frequency.exponentialRampToValueAtTime(330,c.currentTime+.09);g.gain.setValueAtTime(.018,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.12);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.13); };
    document.addEventListener('visibilitychange',quiet);document.addEventListener('click',chirp);
    return () => {document.removeEventListener('visibilitychange',quiet);document.removeEventListener('click',chirp);};
  }, [enabled]);
  return <button className="utility" onClick={toggle} aria-pressed={enabled} aria-label={enabled?'Mute ambient sound':'Enable ambient sound'} disabled={error}>{enabled?<Volume2 size={15}/>:<VolumeX size={15}/>}<span>{error?'Audio unavailable':`Sound ${enabled?'on':'off'}`}</span></button>;
}
