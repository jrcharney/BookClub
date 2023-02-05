import { Router } from "express";
import Book from "../../models/Book";
import Author from "../../models/Author";
import Tag from "../../models/Tag";
import Category from "../../models/Category";
import BookAuthor from "../../models/BookAuthor";
import withAuth from "../../utils/auth";
const router = Router();

// We shouldn't need to login to browse
router.get("/book", (req,res) => {
    Book.findAll({
        // where: {},
        include: [
            {
                model: BookAuthor,
                where: {

                },
                include: {
                    model: Author,
                    where: {
                        author
                    }
                }
            }
        ]
    }).then().catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // TODO: When we find books, we should find the authors of the books.
    // TODO: Join the Book table with the BookAuthor table with the Author table.
    // TODO: How should we handle multiple authors?
});

// router.get("/query/:tag")

// We shouldn't need to login to look at books
router.get("/book/:id", (req,res) => {
    // TODO: We should be able to use `findByPk(req.params.id)` instead of `findOne({where: {id: req.params.id}})`
    Book.findAll({
        where: {
            id: req.params.id
        }
    }).then().catch((err) => res.status(404).json(err));
    // TODO: When we find a book, we need to find the author of the book
    // TODO: When we find books, we should find the authors of the books.
    // TODO: Join the Book table with the BookAuthor table with the Author table.
    // TODO: How should we handle multiple authors?
});

// TODO: Need to limit editing the database to whoever has permission to do so.
router.post("/book/", withAuth, (req, res) => {
    Book.create().then({
        // TODO: Count the number of Authors
        // TODO: For each Author
            // TODO: Search for author
            // If Author not found, create Author then associate this Book with that Author via BookAuthor
            // If Author exists, associate this Book with that Author via BookAuthor
    }).catch((err) => {});
    // TODO: Other things would be created (Tags, Categories)
});

// TODO: Need to limit editing the database to whoever has permission to do so.
router.put("/book/:id", withAuth, (req, res) => {
    Book.update({
        // TODO: Some action needs to go here.
    },{where: {book_id: req.params.id}}).then(
       //Author.update({},{where: })
    ).catch((err) => {})
});

// TODO: Need to limit editing the database to whoever has permission to do so.
router.delete("/book/:id",withAuth, (req,res) => {
    Book.destroy({
        where: { id: req.params.id }
    }).then((bookData) => {
        if(!bookData){
            res.status(404).json({ message: "Sorry, we never had that book." });
            return;
        }
        res.json(bookData);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});