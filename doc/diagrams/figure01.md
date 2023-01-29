Documentation &raquo; Diagrams &raquo; Figure 1

---

# User, User Profile, User Settings, and Families

This diagram describes the relationship between a `user` and two other tables `user_profile` and `user_settings`, as well as `family` and `family_user`

> TODO: Make sure all the fields we wrote in our classes are used here. Do likewise with the other diagrams if necessary.

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

    user_profile {
        INT id PK "User Profile; NN AI"
        VARCHAR first_name "NN"
        VARCHAR last_name "NN"
        DATE dob "Date of birth;NN"
        VARCHAR location "Where is the user?"
        TEXT about "A short autobiography"
        INT user_id FK "REF user(id)"
    }

    user_settings {
        INT id PK "User Settings; NN AI"
        INT age_restriction "Enable a level of age restriction"
        BOOLEAN show_fav_books "Are user favorite books are public?"
        BOOLEAN show_fav_authors "Are user favorite authors public?"
        BOOLEAN show_fav_clubs "Are user favorite clubs public?"
        BOOLEAN show_book_lists "Are user book lists public?"
        BOOLEAN show_club_lists "Are user club lists public?"
        BOOLEAN show_clubs "Are you club memberships public?"
        BOOLEAN show_real_name "Show real name with user name?"
        BOOLEAN show_birthday "Show user's birthday?"
        BOOLEAN show_location "Show user's location?"
        BOOLEAN show_about "Show user's bio?"
        INT user_id FK "REF user(id)"
    }

    user ||--|{ user_profile : "User has a profile"
    user ||--|{ user_settings : "User has a list of settings"
    user ||--|{ family : "User creates a family account"

    family {
        INT id PK "Family ID; NN AI"
        VARCHAR family_name "Add a family name (optional)"
        INT user_id FK "Family Admin.; REF user(id)"
        DATE record_created "When was this family created" 
    }

    family_user {
        INT id PK "Family User ID; NN AI"
        INT family_id FK "REF family(id)"
        INT age_restriction "Enable a level of age restriction"
        INT user_id FK "REF user(id)"
        DATE record_created "When was this family_user created"
        BOOLEAN emancipated "Did this user request emancipation?"
        DATE emancipation "When did they request emancipation?"
    }

    family ||--o{ family_user : "A family has other users administered by the family administrator"
    family_user ||--o{ user : ""
```
