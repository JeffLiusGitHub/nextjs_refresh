## File based routing

/pages
index.js=>mainpage(domain/)
about.js=>aboutpage(domain/about)

    /products
        index.js=>(domain/products)
        [id].js=>(domain/products/)

folder + index
folder + [id]
folder +[...id] multiple nested id

404 page at pages first level

SWITCH PAGE WHEN CLICK
router.push({
pathname: '/clients/[id]/[clientprojectid]',
query: { id: 'jeffliu', clientprojectid: 'projecta' },
});
// router.replace('/clients/jeffliu/projecta');
// replace cannot go back

    console.log(router.pathname);
    console.log(router.query);

LINK

 <Link
href={{ pathname: '/clients/[id]', query: { id: client.id } }} >
{client.name}
</Link>

## page pre rendering

static generation
server-side rendering

static generation
pre-generate a page with data prepared on server-side
getStaticProps
readFileSync block execution until it's done (other option should wait)

○ (Static) automatically rendered as static HTML (uses no initial props)
● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)
/ (ISR: 10 Seconds) incremental static regeneration (uses revalidate in getStaticProps)

if (!loadedProduct) {
return <p>loading..</p>;
}
return {
props: {
products: data.products,
},
**\*\***revalidate\*\*: 10,
};

    combo:getStaticProps
    if (!filtedProduct) {
    	return { notFound: true };
    }
    getStaticPaths
    fallback: true

    or
    fallback :false

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)