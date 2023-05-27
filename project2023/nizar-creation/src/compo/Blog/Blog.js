import BlogCss from './Blog.module.css'
import {Data} from './Data'
import BlogCard  from './BlogCard';

function Blog(){

    let oneBlog=Data.map(function(item) {
     return <BlogCard key={item.id} title={item.title} img={item.image} paragraph={item.paragraph} />;
     })


    return(
        <div className={BlogCss.container}>
        <div className={BlogCss.blogs}>
            {oneBlog}
        </div>
        </div>
    )
}

export default Blog