import { defineQuery } from "next-sanity";

// fetch all startups
export const STARTUPS_QUERY =
  // filter documents with title, category or author name matches the search
  defineQuery(`*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt desc) {
  _id, 
  title, 
  slug, 
  _createdAt,
  author -> {
    _id, name, image, bio
  },
  views,
  description,
  category,
  image
}`);

// fetch startup based on the provided id
export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type=="startup" && _id == $id][0]{
  _id, 
  title, 
  slug, 
  _createdAt,
  author -> {
    _id, name, username, image, bio
  },
  views,
  description,
  category,
  image,
  pitch
}`);

// fetch views based on the provided id
export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, views
}`);

// check if an author or id exists
export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _id, 
    id,
    name,
    username,
    email,
    image,
    bio
  }
  `);

// fetch author by id
export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0] {
    _id, 
    id,
    name,
    username,
    email,
    image,
    bio
  }
  `);

// fetch all startups by author
export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type=="startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug, 
  _createdAt,
  author -> {
    _id, name, image, bio
  },
  views,
  description,
  category,
  image
}`);
