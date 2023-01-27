# About these model

I (Jason) took in a tall order here. Note that any model that is empty will eventually be worked on.

## Things I need to remember

- Use SINGULAR nouns. (Not "Books", just "Book".)
  - I need to correct my grammer in some of the places where I left plurals where there shouldn't be.
- The Chain Link Emoji (🔗) represents a Link table/model

## Phase I: The Basics

- [ ] **User**
  - [ ] TODO: We should think about an age verification table so that we can do that when users sign up.
- [ ] **Book**
- [ ] **Author**
- [ ] **Category**
- [ ] **Tag**
- [ ] UserProfile
  - Borrows some properites from User
- [ ] UserSettings
  - OK, this one CAN be plural.
  - Borrows some properties from User
- [ ] BookList (assuming we can do inheritance) 🔗
  - This would probably make a good starter link table
- [ ] UserBookList 🔗
- [ ] UserBookListItem 🔗

## Phase II: The more Book-ish parts of Book Club

- [ ] Link Tables (all those tables that link all the primary tables together)
  - Some of these might be moved into Phase I.
  - [ ] AuthorTag 🔗
  - [ ] BookAuthor 🔗
  - [ ] BookTag 🔗
  - [ ] BookCategory 🔗
  - [ ] 
- [ ] Favorites
  - [ ] UserFavoriteBook 🔗
  - [ ] UserFavoriteAuthor 🔗
  - [ ] UserFavoriteCategory 🔗
  - [ ] UserFavoriteTag 🔗
- [ ] Follows
  - Demote this to Phase V

## Phase III: Family Stuff

> "Family." --Vin Desel

- [ ] Family
- [ ] FamilyUser

## Phase IV: A Few More of My "Favorite Things"

> Note: This might be bumped up to Phase II. Some of this might be bumped down to Phase V.

- [ ] UserFavoriteClub 🔗
  - This might be done in Phase V.
- [ ] UserFavoriteBoard 🔗
- [ ] UserFavoriteTopic 🔗
- [ ] UserFavoritePost 🔗
- [ ] UserFollowClub 🔗
- [ ] UserFollowBoard 🔗
- [ ] UserFollowTopic 🔗
- [ ] UserFollowCategory 🔗
- [ ] UserFollowTag 🔗

### Things I didn't get around to

- [ ] Email system for follows

## Phase V: In The Club! (The more Club-ish parts of Book Club)

- [ ] **Club**
- [ ] **BookClub** 🔗
- [ ] **AuthorClub** 🔗
- [x] ~~ClubSandwich~~ (just kidding)
- [ ] ClubAdministrator
- [ ] ClubAdministratorSupervisor 🔗
- [ ] ClubModerator
- [ ] ClubModeratorSupervisor 🔗
- [ ] ClubMember
- [ ] ClubMemberAdvisor 🔗
- [ ] ClubBoardModerator 🔗
- [ ] **ClubBoard**
- [ ] ClubBoardModerator 🔗
- [ ] **ClubTopic**
- [ ] **ClubPost**
- [ ] **ClubReply** 🔗
- [ ] **ClubPoll**
- [ ] **ClubPollItem**
- [ ] ClubBookList
- [ ] ClubBookListItem

### Things I didn't get around to

- [ ] ClubMemberRequest - A Request/Invite
- [ ] ClubMemberMute
- [ ] ClubMemberBan

## Phase VI: Project Mayhem 😉

Nah...just kidding. This isn't the Marvel Cinematic Universe...there should be nothing after this. Just an app.