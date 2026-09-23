import { useEffect, useRef, useState } from 'react';

export default function LabScene({ index, color, paused }) {
  const host = useRef(null), api = useRef(null);
  const [status, setStatus] = useState('loading');
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    let cancelled = false;
    import('../scene/createLab').then(({ createLab }) => {
      if (cancelled) return;
      try { api.current = createLab(host.current, () => setStatus('ready'), setHovered); }
      catch { setStatus('fallback'); }
    }).catch(() => setStatus('fallback'));
    return () => { cancelled = true; api.current?.dispose(); api.current = null; };
  }, []);
  useEffect(() => { api.current?.select(index, color); }, [index, color, status]);
  useEffect(() => { api.current?.pause(paused); }, [paused, status]);
  return <div className={`scene ${hovered ? 'scene-hover' : ''}`}>
    <div className="scene-canvas" ref={host} />
    {status !== 'ready' && <div className="scene-fallback"><div className="orbital-core"/><span>{status === 'loading' ? 'Initializing the lab' : 'Explore the lab using the controls below'}</span></div>}
    <span className="scene-coordinate top">SK / EXPERIMENTAL ENVIRONMENT</span>
    <span className="scene-coordinate bottom">{hovered ? 'OBJECT DETECTED · EXPLORE BELOW' : 'MOVE TO EXPLORE · SELECT A DISCIPLINE'}</span>
    <span className="scene-mark">+</span>
  </div>;
}
