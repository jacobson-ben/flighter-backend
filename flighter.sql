\echo 'Delete and recreate friender db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE flighter;
CREATE DATABASE flighter;
\connect flighter

\i flighter-schema.sql
\i flighter-seed.sql

\echo 'Delete and recreate flighter_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE flighter_test;
CREATE DATABASE flighter_test;
\connect flighter_test

\i flighter-schema.sql