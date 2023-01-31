# Relationships between Models

It occured to me that some of my relationships may have been incorrect.

So here's a quick review.

> Note: In this diagram we are just showing what the SYMBOLS mean

```mermaid
erDiagram
    A |o--o| B : "zero or one"
    C ||--|| D : "exactly one"
    E }o--o{ F : "zero to many"
    G }|--|{ H : "one to many"
```

| Value (left) | Value (right) | Meaning |
|--------------|---------------|---------|
| `\|o` | `o\|` | Zero or one |
| `\|\|` | `\|\|` | Exactly one |
| `}o` | `o{` | Zero or more (no upper limit) |
| `}\|` | `\|{` | One or more (no upper limit) |

We will have four types of relations

```mermaid
erDiagram
    A ||--|| B : "one-to-one"
    C ||--|{ D : "one-to-many"
    E }|--|| F : "many-to-one"
    G }|--|{ H : "many-to-many"
```

| Relationship | Value      | Meaning | Example |
|--------------|------------|---------|---------|
| `A \|\|--\|\| B` | one-to-one | One record in Table A is related to one record in Table B.  | A User has exactly one Password |
| `A \|\|--\|{ B` | one-to-many | One record in Table A is related to one or more records in Table B.  | A Class has many Students |
| `B }\|--\|\| A` | many-to-one | Many records in Table B are related to one record in Table A.  | Many Students have the same Class |
| `A }\|--\|{ B` | many-to-many | Many records in Table A are related to many records in Table B.  | many Books have many Authors |

A Link Table can bridge at least two other tables together.

With Link tables our relationship between `book`s and `author`s has a `book_author`

```mermaid
erDiagram
    book {
        INT id PK "Book ID; NN AI"
        VARCHAR title "Book Title; NN"
        VARCHAR isbn "ISBN number; NN"
        VARCHAR loc "Library of congress ID"
        VARCHAR dewey "Dewey Decimal ID"
        VARCHAR edition "Edition of the book"
        YEAR pub_year "Year the book was published"
        TEXT description "Short description"
        INT age_group "Set age group for readers"
        DATETIME createdAt "When was this record created"
        DATETIME updatedAt "When was this record updated"
    }

    author {
        INT id PK "Author ID; NN AI"
        VARCHAR first_name "NN"
        VARCHAR last_name "NN"
        VARCHAR pen_name "Does this author have a nom de plume?"
        DATE dob "Date of birth"
        DATE dod "Date of death"
        TEXT author_info "A short biography of the author"
        DATETIME createdAt "When was this record created"
        DATETIME updatedAt "When was this record updated"
    }

    book_author {
        INT id PK "BookAuthor ID; NN AI"
        INT author_id FK "REF author(id)"
        INT book_id FK "REF book(id)"
    }

    book }|--|| book_author : ""
    book_author ||--|{ author : ""
```
