import React from "react";

export default function CyberAtlas() {
  return (
    <div className="atlas-shell" aria-label="Abstract interactive security network visualization">
      <svg className="atlas-svg" viewBox="0 0 720 720" role="img" aria-hidden="true">
        <defs>
          <radialGradient id="atlasCore">
            <stop offset="0%" stopColor="#ff5868" stopOpacity=".42" />
            <stop offset="42%" stopColor="#ff5868" stopOpacity=".1" />
            <stop offset="100%" stopColor="#ff5868" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="atlasStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5366" stopOpacity=".88" />
            <stop offset="48%" stopColor="#a4d9df" stopOpacity=".46" />
            <stop offset="100%" stopColor="#8b9cba" stopOpacity=".12" />
          </linearGradient>
          <filter id="atlasGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <pattern id="atlasGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#9bb6c3" strokeOpacity=".11" strokeWidth="1" />
          </pattern>
        </defs>
        <circle cx="360" cy="360" r="304" fill="url(#atlasCore)" />
        <circle className="atlas-orbit atlas-orbit-a" cx="360" cy="360" r="276" />
        <circle className="atlas-orbit atlas-orbit-b" cx="360" cy="360" r="226" />
        <ellipse className="atlas-orbit atlas-orbit-c" cx="360" cy="360" rx="310" ry="132" transform="rotate(-28 360 360)" />
        <ellipse className="atlas-orbit atlas-orbit-d" cx="360" cy="360" rx="306" ry="118" transform="rotate(52 360 360)" />
        <circle cx="360" cy="360" r="196" fill="url(#atlasGrid)" opacity=".55" />
        <g className="atlas-spin">
          <path className="atlas-poly" d="M360 94 552 205 552 427 360 538 168 427 168 205Z" />
          <path className="atlas-poly atlas-poly-inner" d="M360 143 508 229 508 401 360 487 212 401 212 229Z" />
          <path className="atlas-cut" d="M360 94V538M168 205 552 427M552 205 168 427" />
          <path className="atlas-cut" d="M262 151 458 569M458 151 262 569" />
          <path className="atlas-dash" d="M360 94 552 205 552 427 360 538 168 427 168 205Z" />
        </g>
        <g className="atlas-links">
          <path d="M360 360 360 94M360 360 552 205M360 360 552 427M360 360 360 538M360 360 168 427M360 360 168 205" />
          <path d="M262 151 458 569M458 151 262 569M168 205 458 569M552 205 262 569" />
          <path d="M262 151 552 427M458 151 168 427" />
          <path d="M360 94 262 151 168 205M360 94 458 151 552 205" />
          <path d="M168 427 262 487 360 538 458 487 552 427" />
        </g>
        <g className="atlas-nodes">
          <circle cx="360" cy="94" r="5" /><circle cx="552" cy="205" r="5" />
          <circle cx="552" cy="427" r="4" /><circle cx="360" cy="538" r="5" />
          <circle cx="168" cy="427" r="4" /><circle cx="168" cy="205" r="5" />
          <circle cx="262" cy="151" r="3" /><circle cx="458" cy="151" r="3" />
          <circle cx="262" cy="487" r="3" /><circle cx="458" cy="487" r="3" />
          <circle cx="508" cy="315" r="4" /><circle cx="212" cy="315" r="4" />
        </g>
        <g className="atlas-hotspots" filter="url(#atlasGlow)">
          <circle className="atlas-hotspot hotspot-a" cx="552" cy="205" r="8" />
          <circle className="atlas-hotspot hotspot-b" cx="168" cy="427" r="7" />
          <circle className="atlas-hotspot hotspot-c" cx="458" cy="487" r="6" />
        </g>
        <g className="atlas-centre">
          <circle cx="360" cy="360" r="108" fill="#080a10" fillOpacity=".74" stroke="#ff5b6d" strokeOpacity=".42" />
          <circle className="atlas-core-pulse" cx="360" cy="360" r="83" fill="url(#atlasCore)" />
          <path d="M360 286 424 323V397L360 434 296 397V323Z" fill="none" stroke="url(#atlasStroke)" strokeWidth="1.5" />
          <path d="M360 311 402 335V385L360 409 318 385V335Z" fill="none" stroke="#f0f2f4" strokeOpacity=".46" />
          <path d="M338 360 354 376 385 341" fill="none" stroke="#f3f5f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="360" cy="360" r="123" fill="none" stroke="#ff5b6d" strokeOpacity=".3" strokeDasharray="2 12" />
        </g>
        <g className="atlas-packets">
          <path d="M360 94 552 205 552 427" />
          <path d="M168 427 360 538 458 487" />
          <path d="M168 205 360 360 508 315" />
        </g>
      </svg>
      <span className="atlas-label atlas-label-one"><i /> TRUST BOUNDARY / 01</span>
      <span className="atlas-label atlas-label-two">ATTACK SURFACE / MAPPED</span>
      <span className="atlas-label atlas-label-three">OBSERVE → UNDERSTAND → DEFEND</span>
      <span className="atlas-index">S / 001</span>
      <span className="atlas-cross atlas-cross-a" />
      <span className="atlas-cross atlas-cross-b" />
    </div>
  );
}
