import { Router } from 'express';
import Book from '../../models/main/Book';
import Author from '../../models/main/Author';
import Comment from '../../models/main/Comment';
import User from '../../models/main/User';
import withAuth from '../../utils/auth';

const bookRouter = new Router();

// Show the Books homepage
bookRouter.get('/book/', (req,res) => {
    // TODO: Show the books homepage
    // TODO: Possibly show a featured book?
});

bookRouter.get('/book/list', (req,res) => {
    // TODO: List the books
});

// Show the page about a book
bookRouter.get('/book/:id', (req, res) => {
    // TODO: Show information about a book
    // TODO: Link to the author(s)
    // TODO: Show Comments by Users
});

bookRouter.get('/book/:id/comments', (req, res) => {
    // TODO: Show a list of comments about the book
    // TODO: Show user names and link to public user profiles
});

/* Only users who are logged in and with permitted access can modify the database */

bookRouter.post('/book/', withAuth, (req,res) => {
    // TODO: Add a book to the database
    // TODO: A book has an author, check to see if the author of the book is in the database
    // TODO: If author is not in the database, consider creating a new author
    // TODO: If author is in the database, create a link to the author
});

bookRouter.put('/book/:id', withAuth, (req,res) => {
    // TODO: Update information about a book
    // TODO: Check to make sure author information is still relevant and change it if need be.
});

bookRouter.delete('/book/:id', withAuth, (req,res) => {
    // TODO: Remove a book from the database
    // TODO: Removing a book SHOULD NOT remove the author. Authors should be deleted separately.
});

export default bookRouter;