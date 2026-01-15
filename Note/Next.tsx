/*
1. CSS Module -> app/globals.css

2. Routes (file structure determines) -> app/page.tsx
   Note: page.tsx return HTML/UI

3. Rule of App Router
  - app/<route>/page.tsx -> Webpage
  - app/<route>/[id] -> dynamic route: part of the URL is a variable parameter, so one page can match many URLs. 
                        e.g. /cars/[id] (matches /cars/1, /cars/2, …)

4. default react component
   // export default: the single “main” value a module exports
   export default function Home() {
       return <h1>hi mom</h1>
}

5. API directory -> app/api/<endpoint>/route.ts
   Note1: route.ts return Response/JSON
   Note2: API directory is the folder that define backend API endpoints (server-only routes) that return data (e.g., JSON) 

6. public: static assets folder
           can be accessed directly via a URL, without writing server code 
           commonly includes images, icons, fonts, and static JSON for practice
           public/<path>

7. Server-side data fetching: Fetching data on the server before rendering the page, then sending the fully rendered result to the browser.
   Client-side data fetching: Fetching data in the browser after the page loads, then updating the UI with the retrieved data.

8. SSG(static site generation): Render all pages at build time
                                The page HTML is generated at build time, then served as a static file for every request.
                                Data may become stale & Hard to scale to many pages
   SSR(server side rendering):  Generate each page at request time
                                The page HTML is generated on each request by the server, so it can be up-to-date per request.
                                Slower & Inefficient data caching

9. Three-part setup for SSG dynamic routes (Next.js App Router):
   - export const dynamic = 'force-static'
     Declares that this route should be statically generated (SSG).
   - export async function generateStaticParams()
     Tells Next.js which [id] values to pre-render at build time.
     { cache: 'force-cache' }
   - export default async function Page({ params }) {...}
     Receives one specific id via params, fetches the corresponding data, and renders the page.
     { cache: 'force-cache' }

9.1 export const dynamic = ... 
   - page-level configuration
   - the page should be treated as static or dynamic
   - export const dynamic = 'force-static' -> Prefer static generation (SSG) for this page

9.2 function generateStaticParams()
    - return an array of params objects matching the dynamic segment name [id]

9.3 export default async function Page({ params }) {params: Promise<...>}
    - export default: the “main export” of a file, and a file can have only one default export
                      Next automatically uses the default export as the page component to render for that route
    - async: when your function must await an async result (a Promise)
             including fetch(), res.json(), file IO, Data base queries
    - {params}: destructures params from the function argument
    - {params: Promise<...>}: is a TS type meaning params is a Promise, must await params to get { id: string }.

10. await 'x': after 'x' is completed, present the final result.

11. const res = await fetch('link', { cache: 'force-cache' })
    - res: Response object
    - fetch(...): starts the request and returns a Promise, get a JSON list
    - {cache: 'force-cache'}: allows caching, aligns with SSG
      cashing: store the result so the next time you need the same thing, you can reuse it without recomputing or refetching.

12. const data = await res.json()
    - res.json(): parses the response body into a JS object
    - data: the array you can map

13. newArray = oldArray.map(item => transformedItem))

14. const url = 'base/${id}.json'
    - inserts id into the URL
    - e.g. `http://localhost:3000/data/${id}.json`

15. nullish coalescing operator ??
    - {car.brand ?? car.id}: If car.brand is null or undefined, fall back to car.id

16. const {id} = await params
    - object destructing
    - await params get an object like { id: "ford" }, get id from this object using object destructing 

17. <div></div>
    - an HTML container
    - mainly used to: group elements together, apply layout/styling easily, provide a single “root element” to return in React

18. Two-part setup for SSR dynamic routes (Next.js App Router):
   - export const dynamic = 'force-dynamic'
     Declares that this route should be server side rendering (SSR).
   - export default async function Page({ params }) {...}
     Receives one specific id via params, fetches the corresponding data, and renders the page.
   - Note: { cache: "no-store" } means “do not cache (do not store)”. Every request fetches fresh data and the result is not saved for reuse.


*/