const server = Bun.serve({
    port:process.env.PORT || 8080,
    fetch(req) {
        // return new Response("Hello Jhon!")
        //Basic Rounting 
        const url=new URL(req.url)
        if(url.pathname==="/") return new Response('Home Page!')
        if(url.pathname==="/about") return new Response('About Page!')
        return new Response("404 page!")
    },
})

console.log(`server is running on ${server.port}`)