Documentation &raquo; Diagrams &raquo; Figure 3

---

# User Lists and Club Book Lists

```mermaid
erDiagram
    user {
        INT id PK "User ID; NN AI"
        VARCHAR name "username; NN U"
        VARCHAR email "user email; NN U"
        PASSWORD password "NN"
        BOOLEAN verified "User completed data verification"
        DATE record_created "When was this user created"
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
        DATE record_created "When was this book record created"
    }

    user_book_list {
        INT id PK "Book List ID; NN AI"
        VARCHAR name "Book List Name ;NN"
        VARCHAR description "Describe what this list is for"
        DATE record_created "When was this book list created"
        BOOLEAN is_public "Is this list public?"
        INT user_id FK "REF user(id)"
    }

    user_book_list_item {
        INT id PK "Book List Item ID; NN AI"
        INT user_book_list_id FK "REF user_book_list(id)"
        INT book_id FK "REF book(id)"
        DATE record_created "When was this book list item created"
    }

    user ||--o{ user_book_list : "Creates book lists"
    user_book_list ||--o{ user_book_list_item : "Contains a list of items"
    user_book_list_item }o--|| book : "Is part of book list"

    club {
        INT id PK "Club ID; NN AI"
        VARCHAR name "Name of the club; NN"
        VARCHAR description "Short description; NN"
        INT created_by FK "Who created this club; REF user(id)"
        DATE club_created "When was this club created"
        BOOLEAN is_public "Is this club public?"
    }

    club_book_list {
        INT id PK "Book List ID; NN AI"
        VARCHAR name "Book List Name ;NN"
        VARCHAR description "Describe what this list is for"
        DATE record_created "When was this book list created"
        INT created_by FK "Who created this book list; REF user(id)"
        BOOLEAN is_public "Is this list public?"
        INT user_id FK "REF user(id)"
    }

    club_book_list_item {
        INT id PK "Book List Item ID; NN AI"
        INT club_book_list_id FK "REF book(id)"
        INT book_id FK "REF book(id)"
        DATE record_created "When was this book list item created"
        INT suggested_by FK "Who suggested this book; REF user(id)"
    }

    
    user_club_list {
        INT id PK "Club ID; NN AI"
        VARCHAR name "Name of the user club list"
        BOOLEAN is_public "Is this list public?"
        DATE record_created "When was this user club list created"
        INT user_id FK "REF user(id)"
        
    }
    user_club_list_item {
        INT id PK "Club ID; NN AI"
        VARCHAR name "Name of the club"
        INT user_club_list_id FK "REF user_club_list(id)"
        DATE record_created "When was user club list item created"
        INT club_id FK "REF club(id)"        
    }
    
    user ||--o{ club : "Creates club"
    club ||--o{ club_book_list : "Creates a book list"
    club_book_list ||--o{ club_book_list_item : "Contains a list of items"
    user ||--o{ club_book_list_item : "Suggests a book to add to the list"    
    club_book_list_item }|--|| book : "Is part of book list"


    user ||--o{ user_club_list : "Creates a club list"
    user_club_list ||--o{ user_club_list_item : "Contains a list of items"
    user_club_list_item ||--|{ club : "Assigned to a list"
```