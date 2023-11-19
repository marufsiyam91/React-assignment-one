import Article from '../../Components/Article/Article'
import './Articles.css'

const Articles = () => {
    const Articles = [
        {
          "title": "The Adventures of Sherlock Holmes",
          "author": "Arthur Conan Doyle",
          "publicationDate": "1892-07-18",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "publicationDate": "1813-01-28",
          "content": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However, it is not every woman who wants to be married, and some women are even willing to sacrifice their own happiness for the sake of their family.",
        },
        {
          "title": "The Lord of the Rings",
          "author": "J.R.R. Tolkien",
          "publicationDate": "1954-07-29",
          "content": "One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them.",
        },
        {
          "title": "The Hitchhiker's Guide to the Galaxy",
          "author": "Douglas Adams",
          "publicationDate": "1979-10-12",
          "content": "Don't Panic! Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          "title": "Harry Potter and the Sorcerer's Stone",
          "author": "J.K. Rowling",
          "publicationDate": "1997-06-26",
          "content": "Harry Potter lives an ordinary life until he learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child by his parents' friend Albus ",
        },
        {
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "publicationDate": "1951-07-16",
          "content": "The story follows Holden Caulfield, a 16-year-old boy who is expelled from Pencey Prep, a prestigious boarding school in New York City. Holden is a sensitive and introspective boy who is disillusioned with the phoniness and hypocrisy he sees in the adult world. After his expulsion, Holden wanders around New York .",
        },
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "publicationDate": "1925-04-10",
          "content": "The story is set in the mid-1920s in the West Egg district of Long Island, New York, where Jay Gatsby, a young millionaire, throws extravagant parties at his mansion. Gatsby is secretly in love with Daisy Buchanan, a beautiful woman who is married to Tom Buchanan, a wealthy and powerful man. Gatsby's parties are a way for him"
        }
        ]
      
  return (
    <div className='article_container'>
      {
        Articles.map((article, index) => <Article key={index} Article = {article} />)
      }
    </div>
  )
}

export default Articles