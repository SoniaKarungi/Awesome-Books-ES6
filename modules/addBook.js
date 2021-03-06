import displayBook from './displayBook.js';
import book from './createNewBook.js';
import {
  titleInput, authorInput, form, error,
} from './elements.js';

const addBook = () => {
  book.title = titleInput.value;
  book.author = titleInput.value;
  book.id = Date.now();
  const status = titleInput.value !== '' && authorInput.value !== '';
  if (status) {
    book.addBook();
    book.writeBooks();
    displayBook({
      title: titleInput.value,
      author: authorInput.value,
    });
    form.reset();
    error.style.display = 'none';
  }
  return status;
};

export default addBook;
