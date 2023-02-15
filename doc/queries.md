# Queries

## Get the list of Book Title, Author Name, and Book ISBN

`Book`s and `Author`s are in different tables. To join them together, we need to use two `INNER JOIN`s to create a `Book-BookAuthor-Author` connection.

This joins three tables.

```sql
SELECT book.title AS book_title, 
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
book.isbn AS book_isbn
FROM ((book
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id );
```

Which produces

```text
+---------------------------------+-----------------+---------------+
| book_title                      | author_name     | book_isbn     |
+---------------------------------+-----------------+---------------+
| The Girl with the Dragon Tattoo | Stieg Larsson   | 0307949486    |
| The Stand                       | Stephen King    | 0525616713    |
| War and Peace                   | Leo Tolstoy     | 1400079985    |
| The Hobbit                      | J.R.R. Tolkien  | 0618260307    |
| The Divine Comedy               | Dante Alighieri | 9798627115764 |
+---------------------------------+-----------------+---------------+
```

### Get a list of books by author

Let's try doing the inverse of what we did in that last section.

```sql
SELECT CONCAT(author.first_name, " ", author.last_name) AS author_name, 
book.title AS book_title,
book.isbn AS book_isbn
FROM ((author
INNER JOIN book_author ON author.id = book_author.author_id )
INNER JOIN book ON book_author.book_id = book.id );
```

```text
+-----------------+---------------------------------+---------------+
| author_name     | book_title                      | book_isbn     |
+-----------------+---------------------------------+---------------+
| Stieg Larsson   | The Girl with the Dragon Tattoo | 0307949486    |
| Stephen King    | The Stand                       | 0525616713    |
| Leo Tolstoy     | War and Peace                   | 1400079985    |
| J.R.R. Tolkien  | The Hobbit                      | 0618260307    |
| Dante Alighieri | The Divine Comedy               | 9798627115764 |
+-----------------+---------------------------------+---------------+
```

### Get Book Id and Book Title (for Book Links)

```sql
SELECT book.id, book.title AS book_title FROM book;
```

```text
+----+---------------------------------+
| id | book_title                      |
+----+---------------------------------+
| 1  | The Girl with the Dragon Tattoo |
| 2  | The Stand                       |
| 3  | War and Peace                   |
| 4  | The Hobbit                      |
| 5  | The Divine Comedy               |
+----+---------------------------------+
```

```javascript
const book_links = Object.entries(data).map(([book_id,book_title]) => {
    return `<a href="/book/${book_id}"><em>${book_title}</em></a>`
});
```

### Get Author Id and Author Name (for Author Links)

```sql
SELECT author.id, 
CONCAT(author.first_name," ",author.last_name) AS author_name
FROM author;
```

```text
+----+-----------------+
| id | author_name     |
+----+-----------------+
| 1  | Stieg Larsson   |
| 2  | Stephen King    |
| 3  | Leo Tolstoy     |
| 4  | J.R.R. Tolkien  |
| 5  | Dante Alighieri |
+----+-----------------+
```

```javascript
const author_links = Object.entries(data).map(([author_id,author_name]) => {
    return `<a href="/author/${author_id}">${author_name}</a>`
});
```

### ISBN Links

```sql
SELECT book.isbn AS book_isbn FROM book;
```

```text
+---------------+
| book_isbn     |
+---------------+
| 0307949486    |
| 0525616713    |
| 1400079985    |
| 0618260307    |
| 9798627115764 |
+---------------+
```

```javascript
const isbn_links = Object.entries(data).map(([book_isbn]) => {
    return `<a href="${book_isbn}">${book_isbn}</a>`;
});
```

### Get Book Covers

```javascript
const key="isbn";
const size="M";
const isbn_covers = Object.entries(data).map(([book_isbn]) => {
    return `<a href="${book_isbn}"><img alt="${book_isbn}" src="https://covers.openlibrary.org/b/${book_isbn}-${size}"></a>`;
});
```

* See https://openlibrary.org/dev/docs/api/covers for details

## Get Comments on Books by Users

In this query, we will need to joing FIVE tables using FOUR `INNER JOIN`s.

Users will leave a Comment on a Book.

So we need to create `User-Comment-Book-BookAuthor-Author` connection, but it will list of Book Title, Author Name, User Name, when the User created the Comment, and the Comment Text.

```sql
SELECT  book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id );
```

This produces

```text
+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| book_title                      | author_name     | user_name | comment_ts          | comment_text                           |
+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| War and Peace                   | Leo Tolstoy     | Joe       | 2023-02-14 21:05:23 | I really enjoyed this book!            |
| The Girl with the Dragon Tattoo | Stieg Larsson   | Emily     | 2023-02-14 21:05:23 | this book was 4 out 5 stars for me     |
| The Hobbit                      | J.R.R. Tolkien  | Josh      | 2023-02-14 21:05:23 | That is so cool!                       |
| The Hobbit                      | J.R.R. Tolkien  | Sven      | 2023-02-14 21:05:23 | I would not recommend this book.       |
| The Divine Comedy               | Dante Alighieri | Jackie    | 2023-02-14 21:05:23 | Do you know how this book was written? |
| The Divine Comedy               | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.                   |
+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
```

### Get Comments on a Specific Book

Let show our `book.id` values.

```sql
SELECT  book.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id );
```

This produces

```text
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| id | book_title                      | author_name     | user_name | comment_timestamp   | comment_text                           |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| 3  | War and Peace                   | Leo Tolstoy     | Joe       | 2023-02-14 21:05:23 | I really enjoyed this book!            |
| 1  | The Girl with the Dragon Tattoo | Stieg Larsson   | Emily     | 2023-02-14 21:05:23 | this book was 4 out 5 stars for me     |
| 4  | The Hobbit                      | J.R.R. Tolkien  | Josh      | 2023-02-14 21:05:23 | That is so cool!                       |
| 4  | The Hobbit                      | J.R.R. Tolkien  | Sven      | 2023-02-14 21:05:23 | I would not recommend this book.       |
| 5  | The Divine Comedy               | Dante Alighieri | Jackie    | 2023-02-14 21:05:23 | Do you know how this book was written? |
| 5  | The Divine Comedy               | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.                   |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
```

Let's look for the reviews for *The Hobbit* (`book.id=4`)

```sql
SELECT  book.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id )
WHERE book.id = 4;
```

This gives us

```text
+----+------------+----------------+-----------+---------------------+----------------------------------+
| id | book_title | author_name    | user_name | comment_timestamp   | comment_text                     |
+----+------------+----------------+-----------+---------------------+----------------------------------+
| 4  | The Hobbit | J.R.R. Tolkien | Josh      | 2023-02-14 21:05:23 | That is so cool!                 |
| 4  | The Hobbit | J.R.R. Tolkien | Sven      | 2023-02-14 21:05:23 | I would not recommend this book. |
+----+------------+----------------+-----------+---------------------+----------------------------------+
```

Let's slim this down. Just get the comment data we need.

```sql
SELECT user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id )
WHERE book.id = 4;
```

Giving us

```text
+-----------+---------------------+----------------------------------+
| user_name | comment_timestamp   | comment_text                     |
+-----------+---------------------+----------------------------------+
| Josh      | 2023-02-14 21:05:23 | That is so cool!                 |
| Sven      | 2023-02-14 21:05:23 | I would not recommend this book. |
+-----------+---------------------+----------------------------------+
```

### Get Comments on Books by a Specific Author

Let's do what we did with the first query when we look for books with their IDs, but this time show the `author.id` instead of instead of the `book.id`.

```sql
SELECT author.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id );
```

```text
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| id | book_title                      | author_name     | user_name | comment_timestamp   | comment_text                           |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| 3  | War and Peace                   | Leo Tolstoy     | Joe       | 2023-02-14 21:05:23 | I really enjoyed this book!            |
| 1  | The Girl with the Dragon Tattoo | Stieg Larsson   | Emily     | 2023-02-14 21:05:23 | this book was 4 out 5 stars for me     |
| 4  | The Hobbit                      | J.R.R. Tolkien  | Josh      | 2023-02-14 21:05:23 | That is so cool!                       |
| 4  | The Hobbit                      | J.R.R. Tolkien  | Sven      | 2023-02-14 21:05:23 | I would not recommend this book.       |
| 5  | The Divine Comedy               | Dante Alighieri | Jackie    | 2023-02-14 21:05:23 | Do you know how this book was written? |
| 5  | The Divine Comedy               | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.                   |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
```

> TODO: We need more data to have a good example here.

Let's show the comments about Dante Alighieri (`author.id=5`).

```sql
SELECT  author.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id )
WHERE author.id = 5;
```

```text
+----+-------------------+-----------------+-----------+---------------------+----------------------------------------+
| id | book_title        | author_name     | user_name | comment_timestamp   | comment_text                           |
+----+-------------------+-----------------+-----------+---------------------+----------------------------------------+
| 5  | The Divine Comedy | Dante Alighieri | Jackie    | 2023-02-14 21:05:23 | Do you know how this book was written? |
| 5  | The Divine Comedy | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.                   |
+----+-------------------+-----------------+-----------+---------------------+----------------------------------------+
```

### Get Comments by a User

Some user have left multiple feedback.

```sql
SELECT user.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id );
```

```text
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| id | book_title                      | author_name     | user_name | comment_timestamp   | comment_text                           |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
| 1  | War and Peace                   | Leo Tolstoy     | Joe       | 2023-02-14 21:05:23 | I really enjoyed this book!            |
| 4  | The Girl with the Dragon Tattoo | Stieg Larsson   | Emily     | 2023-02-14 21:05:23 | this book was 4 out 5 stars for me     |
| 2  | The Hobbit                      | J.R.R. Tolkien  | Josh      | 2023-02-14 21:05:23 | That is so cool!                       |
| 3  | The Hobbit                      | J.R.R. Tolkien  | Sven      | 2023-02-14 21:05:23 | I would not recommend this book.       |
| 5  | The Divine Comedy               | Dante Alighieri | Jackie    | 2023-02-14 21:05:23 | Do you know how this book was written? |
| 4  | The Divine Comedy               | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.                   |
+----+---------------------------------+-----------------+-----------+---------------------+----------------------------------------+
```

Emily (`user.id=4`) has left a couple of reviews. If we have access to her public user profile, we can see all of her reviews.

> TODO: User Profiles

```sql
SELECT user.id, book.title AS book_title,
CONCAT(author.first_name, " ", author.last_name) AS author_name, 
user.username AS user_name,
comment.created_at AS comment_timestamp,
comment.comment_text AS comment_text
FROM (((( comment INNER JOIN user ON comment.user_id = user.id )
INNER JOIN book ON comment.book_id = book.id )
INNER JOIN book_author ON book.id = book_author.book_id )
INNER JOIN author ON book_author.author_id = author.id )
WHERE user.id = 4;
```

```text
+----+---------------------------------+-----------------+-----------+---------------------+------------------------------------+
| id | book_title                      | author_name     | user_name | comment_timestamp   | comment_text                       |
+----+---------------------------------+-----------------+-----------+---------------------+------------------------------------+
| 4  | The Girl with the Dragon Tattoo | Stieg Larsson   | Emily     | 2023-02-14 21:05:23 | this book was 4 out 5 stars for me |
| 4  | The Divine Comedy               | Dante Alighieri | Emily     | 2023-02-14 21:05:23 | This book is looong.               |
+----+---------------------------------+-----------------+-----------+---------------------+------------------------------------+
```
