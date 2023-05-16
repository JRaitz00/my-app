const Book = ({ author, title, img, price, number }) => {
  const handleButtonClick = () => {
    // console.log(title + ' has been added to your cart!')
    alert(title + ' has been added to your cart!')
  }
  // const getSingleBook = () => {
  //   getBook(title)
  // }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>$ {price}</p>
      <span className="number">#{number}</span>
      <button onClick={handleButtonClick}>Add to Cart</button>
    </article>
  )
}

export default Book
