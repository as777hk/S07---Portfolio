import type { NextConfig } from "next";
const config:NextConfig={poweredByHeader:false,reactStrictMode:true,async rewrites(){return {beforeFiles:[{source:"/",destination:"/index.html"}],afterFiles:[],fallback:[]};},async redirects(){return [
{source:"/sam-live-builder.html",destination:"/",permanent:true},
{source:"/index.html",destination:"/",permanent:true},
{source:"/about",destination:"/",permanent:true},
{source:"/contact",destination:"/",permanent:true},
{source:"/security",destination:"/",permanent:true},
{source:"/work",destination:"/",permanent:true},
{source:"/work/:slug",destination:"/",permanent:true},
{source:"/experiments",destination:"/",permanent:true},
{source:"/notes",destination:"/",permanent:true},
{source:"/notes/:slug",destination:"/",permanent:true}
];},async headers(){return[{source:"/(.*)",headers:[{key:"X-Content-Type-Options",value:"nosniff"},{key:"X-Frame-Options",value:"DENY"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},{key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"}]}];}};
export default config;
