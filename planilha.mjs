const URL="https://docs.google.com/spreadsheets/d/1nNwXnq-Fkyr_9kyNjNASZ7vL98-IKioKWcYbN11eK7s/export?format=csv&gid=1659733778";
export default async()=>{try{const r=await fetch(URL);if(!r.ok)throw new Error();return new Response(await r.text(),{headers:{"content-type":"text/csv; charset=utf-8","cache-control":"no-store"}})}catch{return Response.json({erro:"Base indisponível"},{status:502})}};
