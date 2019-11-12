const Search=props=>(
    <div>Arama {props.group} - {props.q} </div>
)
Search.getInitialProps=async ctx=>{
    return {
        group:ctx.query.slug,
        q:ctx.query.q
    }
}

export default Search;