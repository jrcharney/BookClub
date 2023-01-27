Documentation &raquo; Diagrams &raquo; ER Diagram Abbreviations

## ER Diagram Abbrevaitions

In an Entity Relationship Diagram we can indicate if a column is a primary key (`PK`) for foreign key (`FK`). However, due to the limitation of Mermaid we can't indicate the size of `VARCHAR` or `DECIMAL` values.

The ER Diagram structure also doesn't seem to have any place to indicate if values are required, unique, or where foregin keys are referenced.

To fix that problem, I (Jason) decided to make use of the fourth column, which is used for comments, so that those descriptions are part of the diagram.

| Abbreviation | Syntax           | Meaning |
|--------------|------------------|---------|
| `PK`         | `PRIMARY KEY`    |  |
| `FK`         | `FOREIGN KEY`    |  |
| `NN`         | `NOT NULL`       | this field cannot be unfilled |
| `AI`         | `AUTO_INCREMENT` | static unique value assigned to a record |
| `U`          | `UNIQUE`         | this value should be unique, no other records should have the same value |
| `REF table(col)` | `REFERENCE this_column FOREIGN KEY table(col)` | What should this foreign key reference? |