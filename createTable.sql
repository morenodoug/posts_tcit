CREATE TABLE posts
(
  id serial NOT NULL,
  name character varying,
  description character varying,
  created_at timestamp(0) without time zone DEFAULT now(),
  CONSTRAINT posts_pkey PRIMARY KEY (id)
)