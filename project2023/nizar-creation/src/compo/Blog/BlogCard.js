import BlogCss from './Blog.module.css'

function BlogCard(props){
    return(
<div className={BlogCss.clients}>
		<img className={BlogCss.img} src={props.img}/>
		<div className={BlogCss.txtClients}>
		<h2 className={BlogCss.heading}>{props.title}</h2>
		<p className={BlogCss.paragraph}>
		{props.paragraph}
		</p>
		</div>
	</div>

    )
}

export default BlogCard