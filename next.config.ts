import type { NextConfig } from "next";
const config:NextConfig={poweredByHeader:false,reactStrictMode:true,async rewrites(){return {beforeFiles:[{source:"/",destination:"/sam-live-builder.html"}],afterFiles:[],fallback:[]};},async redirects(){return [
{source:"/about",destination:"/#about",permanent:true},
{source:"/contact",destination:"/#contact",permanent:true},
{source:"/security",destination:"/#security",permanent:true},
{source:"/work",destination:"/#work",permanent:true},
{source:"/work/:slug",destination:"/#work",permanent:true},
{source:"/experiments",destination:"/#creative",permanent:true},
{source:"/notes",destination:"/#field-notes",permanent:true},
{source:"/notes/:slug",destination:"/#field-notes",permanent:true}
];},async headers(){return[{source:"/(.*)",headers:[{key:"X-Content-Type-Options",value:"nosniff"},{key:"X-Frame-Options",value:"DENY"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},{key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"}]}];}};
export default config;
