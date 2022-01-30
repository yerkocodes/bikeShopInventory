## Import Database from sql file.

```sql
// Create database
CREATE DATABASE bikeshop;

// Exit to the psql
\q

// Import sql file to database created
psql -h localhost -U postgres -d bikeshop -f ...fileSQLroute

```
