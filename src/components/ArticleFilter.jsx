import { useState } from "react"

import "../styles/global.css"

export default function ArticleFilter ({articles}) {
    const [category, setCategory] = useState ("all")

    const filteredArticles =
        category === "all"
        ? articles
        : articles.filter(
            (article) => article.data.category === category
        )
    return (
        <>

         <div>
      {/* Dropdown */}
      <div className="filterContainer">
        <select
         className="filters"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="football">Fútbol</option>
          <option value="basketball">Baloncesto</option>
          <option value="tennis">Tenis</option>
        </select>
      </div>

      {/* Artículos */}
      <section className="articlesContainer">
        {filteredArticles.map((article) => (
          <div className="articleContainer" key={article.slug}>
            <a href={`/articles/${article.slug}`}>
              <article className="articlePreview">
                <img
                  className="articleImgPreview"
                  src={article.data.image}
                />
                <h2 className="articleTitlePreview">
                  "{article.data.title}"
                </h2>
                <p className="articleAuthorPreview">
                  Autor: {article.data.author}
                </p>
              </article>
            </a>
          </div>
        ))}
      </section>
    </div>

        </>
    )
}