import '../Styles/categories.css'
const Categories = () => {
    let categories=[

        {link:"All"},
        {link:"Sports"},
        {link:"Travel"},
        {link:"Movies"},
        {link:"Nature"},
        {link:"Comedy"},
        {link:"Action"},
        {link:"Kids"},
        {link:"Food"},
        {link:"Recently Uploaded"}
    
    ]
    return (
        <div className="categories">
            <ul>
              
              {categories.map((data)=>{
               
               return(

                  <li><a href="">{data.link}</a></li>
                  
               )

              })}

            </ul>
        </div>
    );
}
 
export default Categories;