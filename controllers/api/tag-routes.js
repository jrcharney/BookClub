import { Router } from "express";
import Book from "../../models/Book";
import Author from "../../models/Author";
import Tag from "../../models/Tag";
import Category from "../../models/Category";
import BookAuthor from "../../models/BookAuthor";
import withAuth from "../../utils/auth";
const router = Router();

// Get a list of all tags
router.get("/tag", (req,res) => {
    Tag
        .findAll()
        .then()
        .catch();
});

// Get a tag by ID
router.get("/tag/:id", (req, res) => {});

// Get records based on a tag name
routes.get("/tag/name/:name", (req, res) => {});

