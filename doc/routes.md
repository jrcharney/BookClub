Documentation &raquo; Routes

---

# Routes

Each section in this list will list the number of routes proposed.

## User (9)

| Request  | Route                     | Action |
|----------|---------------------------|--------|
| `POST`   | `/api/user/new`           | Create a new user |
| `GET`    | `/api/user/search/:query` | User search |
| `GET`    | `/api/user/:id`           | Get a user |
| `PUT`    | `/api/user/:id`           | Update a user |
| `DELETE` | `/api/user/:id`           | Delete a user |
| `GET`    | `/api/user/:id/profile`   | Get a user's profiles |
| `PUT`    | `/api/user/:id/profile`   | Update user's profile |
| `GET`    | `/api/user/:id/settings`  | Get a user's settings |
| `PUT`    | `/api/user/:id/settings`  | Update user's settings |

## Family (8)

| Request  | Route                           | Action |
|----------|---------------------------------|--------|
| `POST`   | `/api/family/new`               | Create a new family |
| `GET`    | `/api/family/:family_id`        | Get a family and list of family members |
| `PUT`    | `/api/family/:family_id`        | Update a family |
| `DELETE` | `/api/family/:family_id`        | Delete a family |
| `POST`   | `/api/family/:family_id/new`    | Add a family member |
| `GET`    | `/api/family/:family_id/:fm_id` | Get a family member |
| `PUT`    | `/api/family/:family_id/:fm_id` | Update a family member |
| `DELETE` | `/api/family/:family_id/:fm_id` | Remove a family member |

## Book (5)

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/book/search/:query` | Search for a book |
| `POST`   | `/api/book/new`           | Create a new book |
| `GET`    | `/api/book/:id`           | Get a book by ID  |
| `PUT`    | `/api/book/:id`           | Update a book's information |
| `DELETE` | `/api/book/:id`           | Delete a book |

## Author (6)

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/author/search/:query`    | Search for an author |
| `POST`   | `/api/author/new`              | Create a new author  |
| `GET`    | `/api/author/:id`              | Get an author by ID  |
| `GET`    | `/api/author/:id/bibliography` | Get a list of the author's books |
| `PUT`    | `/api/author/:id`              | Update an author's information   |
| `DELETE` | `/api/author/:id`              | Delete an author |

## User Favorites (9)

| Request  | Route                     | Action |
|----------|---------------------------|--------|
| `GET`    | `/api/user/:id/favorite/books` | Get a list of the user's favorite books |
| `POST`   | `/api/user/:id/favorite/books` | Add a book to a user's favorite books |
| `DELETE` | `/api/user/:id/favorite/books` | Remove a book from a user's favorite books |
| `GET`    | `/api/user/:id/favorite/authors` | Get a list of the user's favorite authors |
| `POST`   | `/api/user/:id/favorite/authors` | Add a book to a user's favorite authors |
| `DELETE` | `/api/user/:id/favorite/authors` | Remove a book from a user's favorite authors |
| `GET`    | `/api/user/:id/favorite/clubs` | Get a list of the user's favorite clubs |
| `POST`   | `/api/user/:id/favorite/clubs` | Add a club to a user's favorite clubs |
| `DELETE` | `/api/user/:id/favorite/clubs` | Remove a club from a user's favorite clubs |

## User Club (6)

> Note: Some of these routes might not be developed due to time constraints on this project

| Request  | Route                     | Action |
|----------|---------------------------|--------|
| `GET`    | `/api/user/:id/clubs`          | Get a list of clubs the user is part of, regardless of position |
| `GET`    | `/api/user/:id/clubs/member`        | Get a list of clubs the user is part of as a club member |
| `GET`    | `/api/user/:id/clubs/moderator`     | Get a list of clubs the user is part of as a club moderator |
| `GET`    | `/api/user/:id/clubs/administrator` | Get a list of clubs the user is part of as an club administrator |
| `GET`    | `/api/user/:id/club_lists`     | Get a list of the user's club lists |
| `GET`    | `/api/user/:id/book_lists`     | Get a list of the user's book lists |

## Club Routes

> Note: Some of these routes might not be developed due to time constraints on this project

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/club/search/:query` | Search for a list of book clubs |
| `POST`   | `/api/club/new`           | Create a new book club |
| `GET`    | `/api/club/:id`           | Show a book club by ID |
| `GET`    | `/api/club/:name`         | Show a book club by it's name |
| `PUT`    | `/api/club/:id`           | Update a book club |
| `DELETE` | `/api/club/:id`           | Delete a book club |
| `GET`    | `/api/club/:id/members`   | Get a list of club members |
| `GET`    | `/api/club/:id/members/search/:query` | Search for members in a club |
| `GET`    | `/api/club/:id/members/members`       | Get a list of club members who are just regular members (not moderator or administrators) |
| `GET`    | `/api/club/:id/members/moderators`    | Get a list of club members who are club moderators |
| `GET`    | `/api/club/:id/members/administrators` | Get a list of club members who are club administrators |
| `POST`   | `/api/club/:id/join`      | Join a book club by ID |
| `POST`   | `/api/club/:name/join`    | Join a book club by name |
| `POST`   | `/api/club/:id/leave`     | Leave a book club by ID (This will delete them from the user roster) |
| `POST`   | `/api/club/:name/leave`   | Leave a book club by name (This will delete them from the user roster) |

## Book List Routes (5)

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/user/:id/book_lists`       | Get a list of the user's book lists (I posted this earlier) |
| `GET`    | `/api/user/:id/book_lists/search/:query` | Search a user's book lists |
| `POST`   | `/api/user/:id/book_list/new`    | Create a new book list |
| `GET`    | `/api/user/:id/book_list/:bl_id` | Get a user's book list |
| `PUT`    | `/api/user/:id/book_list/:bl_id` | Update a user's book list (add or remove a book on a list) |
| `DELETE` | `/api/user/:id/book_list/:bl_id` | Delete a user's book list |

## Club List Routes (5)

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/user/:id/club_lists`       | Get a list of the user's club lists (I posted this earlier) |
| `GET`    | `/api/user/:id/club_lists/search/:query` | Search a user's club lists |
| `POST`   | `/api/user/:id/club_list/new`    | Create a new club list |
| `GET`    | `/api/user/:id/club_list/:cl_id` | Get a user's club list |
| `PUT`    | `/api/user/:id/club_list/:cl_id` | Update a user's club list (add or remove a club on a list) |
| `DELETE` | `/api/user/:id/club_list/:cl_id` | Delete a user's club list |

## Club Book List Routes (5)

| Request  | Route | Action |
|----------|-------|--------|
| `GET`    | `/api/club/:id/book_lists`       | Get a list of a club's book lists |
| `GET`    | `/api/club/:id/book_lists/search/:query` | Search a club's book lists |
| `POST`   | `/api/club/:id/book_list/new`    | Create a new club book list |
| `GET`    | `/api/club/:id/book_list/:bl_id` | Get a club's book list |
| `PUT`    | `/api/club/:id/book_list/:bl_id` | Update a club's book list (add or remove a book on a list) |
| `DELETE` | `/api/club/:id/book_list/:bl_id` | Delete a club's book list |

## Club Boards

Club Boards are meant to group Club Topics together.

| Request  | Route | Action | Notes |
|----------|-------|--------|-------|
| `GET`    | `/api/club/:id/boards`               | Get a list of a club's message boards |
| `GET`    | `/api/club/:id/boards/search/:query` | Find a message boards | Probably useless because there aren't that many |
| `POST`   | `/api/club/:id/boards/new` | Create a new message board | Only club admins. can do this |
| `GET`    | `/api/club/:id/boards/:b_id` | Show a specific club message board |
| `PUT`    | `/api/club/:id/boards/:b_id` | Modify a specific club message board | Only club admins. can do this |
| `DELETE` | `/api/club/:id/boards/:b_id` | Delete a specific club message board | Only club admins. can do this |

## Club Topics

Club Topics (or Club Threads) are the message board threads. These are sorted in order by which 

## Notes

### Features