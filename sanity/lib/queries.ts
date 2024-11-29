import { defineQuery } from "next-sanity";

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
