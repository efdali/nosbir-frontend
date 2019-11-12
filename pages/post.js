const Post=(props)=>(
    <div>Postjs - {props.title}</div>
)
Post.getInitialProps=ctx=>{
    return {
        title:ctx.query.slug
    }
}

export default Post;