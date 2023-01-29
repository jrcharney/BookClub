Documentation &raquo; Diagrams &raquo; Figure 2

---

# Users, Books, Authors, Clubs, Favorites, Tags, and Categories

## So what is the difference between a tag and a category?

A **tag** is pretty much a keyword that can be associated with a book.

A **category** (or genre) describes what the book is.

When you think of "category", we are talking about "Fiction" vs "Nonfiction".

Mystery, Romance, Horror, Science Fiction, Fantasy, all of these can be categories. They can also be tags too, though when you look for things by category it is more inline with a specific genre than a specific keyword.

In the realm of non-fiction, think about the [Library of Congress](https://www.loc.gov/catdir/cpso/lcco/) (LOC) Classification Outline or [Dewey Classification System](https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf) where books are sorted by subject.

Tags can be assigned to books and authors, but categories can only be assigned to books as authors are not limited to just one category.

## ER Diagram

> NOTE: Thanks to Nathan Sebhastian for [explaining how the timestamps work in sequelize](https://sebhastian.com/sequelize-timestamps/).
> Thanks to him, we now can use `timestamps: true`, `createdAt: true`, and `updatedAt: true` to add timestamps to our data objects.

```mermaid
erDiagram
    user {
        INT id PK "User ID; NN AI"
        VARCHAR name "username; NN U"
        VARCHAR email "user email; NN U"
        PASSWORD password "NN"
        BOOLEAN verified "User completed data verification"
        DATETIME createdAt "When was this record created"
        DATETIME updatedAt "When was this record updated"
    }

    category {
        INT id PK "Category ID; NN AI"
        VARCHAR name "A unique category name; NN U"
        VARCHAR description "A short description about this category"
        DATETIME createdAt "When was this record created"
        DATETIME updatedAt "When was this record updated"
    }

    tag {
        INT id PK "Tag ID; NN AI"
        VARCHAR name "A unique tag name; NN U"
        VARCHAR description "A short description about this tag"
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

    author_tag {
        INT id PK "Author Tag ID; NN AI"
        INT author_id FK "REF author(id)"
        INT tag_id FK "REF tag(id)"
    }

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

    book_author {
        INT id PK "BookAuthor ID; NN AI"
        INT author_id FK "REF author(id)"
        INT book_id FK "REF book(id)"
    }

    book_tag {
        INT id PK "Book Tag ID; NN AI"
        INT book_id FK "REF book(id)"
        INT tag_id FK "REF tag(id)"
    }

    book_category {
        INT id PK "Book Category ID; NN AI"
        INT book_id FK "REF book(id)"
        INT category_id FK "REF category(id)"
    }

    user_favorite_book {
        INT id PK "Fav. Book ID; NN AI"
        INT user_id FK "REF user(id)"
        INT book_id FK "REF book(id)"
        
    }

    user_favorite_author {
        INT id PK "Fav. Author ID; NN AI"
        INT user_id FK "REF user(id)"
        INT author_id FK "REF author(id)"
    }

    user ||--o{ user_favorite_book : "User has favorite books"
    user_favorite_book }o--|| book : "A book could be have many fans"
    user ||--o{ user_favorite_author : "User has favorite authors"
    user_favorite_author }o--|| author : "An author could have many fans"
    book ||--o{ book_author : "A book could be written by many authors"
    author ||--o{ book_author : "An author could write many books"

    book_tag }|--|| tag : "A tag could be associated with many books"
    author_tag }|--|| tag : "A tag cold be associated with many authors"
    book   ||--o{ book_tag : "A book could have many tags"
    author ||--o{ author_tag : "An author could have many tags"

    book   ||--o{ book_category : "A book could have many category"
    category   ||--o{ book_category : "A book could have many category"
    
    club {
        INT id PK "Club ID; NN AI"
        VARCHAR name "Name of the club; NN"
        VARCHAR description "Short description; NN"
        INT created_by FK "Who created this club; REF user(id)"
        DATE club_created "When was this club created"
        BOOLEAN is_public "Is this club public?"
    }
    user   ||--o{ club : "Creates club"

    book_club {
        INT id PK "Book ID; NN AI"
        INT club_id FK "REF club(id)"
        INT book_id FK "REF book(id)"
    }
    book_club }o--|| book : "This book has fans"

    author_club {
        INT id PK "Book ID; NN AI"
        INT club_id FK "REF club(id)"
        INT author_id FK "REF author(id)"
    }
    author_club }o--|| author : "This author has fans"

    club ||--|{ book_club : "A club for a book"
    club ||--|{ author_club : "A club for an author"

    user_favorite_club {
        INT id PK "Fav. Club ID; NN AI"
        INT user_id FK "REF user(id)"
        INT club_id FK "REF author(id)"
    }
    user   ||--o{ user_favorite_club    : "Has a favorite club"
    user_favorite_club    }o--||  club  : "Has a club fan"

    user_favorite_tag {
        INT id PK "Fav. Tag ID; NN AI"
        INT user_id FK "REF user(id)"
        INT tag_id FK "REF tag(id)"
    }
    user   ||--o{ user_favorite_tag    : "Has a favorite tag"
    user_favorite_tag    }o--||  tag  : "Is of user interest"

    category_echelon {
        INT id PK "Fav. Tag ID; NN AI"
        int parent_category_id FK "REF category(id)"
        int child_category_id FK "REF category(id)"
    }
    category_echelon ||--o{ category: "parent categories have child categories"
```
