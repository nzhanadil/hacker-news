export const NewsCard = ({url, author, title = "Title not found"}) => {
    return <li>
        <a href={url} target="_blank">{title}</a>
        <p>Author: {author ?? "Author not found"}</p>
    </li>
}