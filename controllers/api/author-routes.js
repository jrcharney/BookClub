import { Router } from 'express';
import Book from '../../models/main/Book';
import Author from '../../models/main/Author';
import Comment from '../../models/main/Comment';
import User from '../../models/main/User';
import withAuth from '../../utils/auth';

const authorRouter = new Router();

// Show the Books homepage
authorRouter.get('/author/', (req,res) => {
    // TODO: Show the authors page.
    // TODO: Show a featured author?
});

authorRouter.get('/author/list', (req,res) => {
    // TODO: List authors
})

// Show the page about a book
authorRouter.get('/author/:id', (req, res) => {
    // TODO: Display an author's page
    // TODO: List the books the author has written
    // TODO: Show comments about the books written by the author (requires Comment and User)
});

authorRouter.get('/author/:id/books', (req,res) => {
    // TODO: List all the books an author has written
});

authorRouter.get('/author/:id/tags', (req, res) => {
    // TODO: List all the tags associated with an author
});

/* Only users who are logged in and with permitted access can modify the database */

authorRouter.post('/author/', withAuth, (req,res) => {
    // TODO: Add a new author to the database
});

authorRouter.put('/author/:id', withAuth, (req,res) => {
    // TODO: Update an author's information
});

authorRouter.delete('/author/:id', withAuth, (req,res) => {
    // TODO: If an author is deleted from a database, the so should their books.
    // "There is no war in Ba Sing Se."
});

export default authorRouter;