# gfti v3

<!-- brew services start postgresql -->
<!-- Create a new db: createdb movie_junkies_dev -->
<!-- Check if db was created: psql -l -->
<!-- Connect to db: psql movie_junkies_dev -->
<!-- Quick postgres: \q -->

<!-- Manually creating a table:
CREATE TABLE movies (
  id serial,
  title text,
  duration integer,
  rating varchar(10),
  genre text,
  is_3d boolean NOT NULL,
  released_at timestamp with time zone,
  score numeric(3, 1)
); -->

<!-- Show tables: \dt -->
<!-- Display one table: \d movies -->

<!-- Creating a migration: knex migrate:make migration_name -->

<!-- Running seed: knex seed:run -->

<!-- Running migration on heroku: heroku run knex migrate:latest -->

<h3>Done</h3>

<h5>(06/02/2018)</h5>
- Send postcard to API ✓
- Send postcard from API to lob ✓
<h5>(06/03/2018)</h5>
- Use lob to verify address ✓
- Fix manual entering of address ✓
<h5>(06/04/2018)</h5>
- Make postcard message data bind to input fields so they update in real time ✓
- Confirm postcard still sends and troubleshoot if needed ✓
- Clear out postcard data when user starts flow from start ✓
- Create basic api template that accepts image ✓

<h3>Future Features</h3>
- Make postcard dimensions in front end the same aspect ratio as cards that are sent (3x4)
- Default formatting of postcard image should fill full postcard back
- Give user the ability to adjust the image position
- Save postcard message to postcard back
- Design postcard back
- Let the user pick the color of the postcard back
- Let the user specify a message on postcard front
- Stripe Payments gate before postcard send

<h3>Ongoing</h3>
- Better error detection and display relevant info to user
