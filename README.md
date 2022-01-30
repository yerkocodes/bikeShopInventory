## Import Database from sql file.

Create database:

```sql
CREATE DATABASE bikeshop;
```

Exit to the psql:

```sql
\q
```

Import sql file to database created:

```bash
psql -h localhost -U postgres -d bikeshop -f ...fileSQLroute
```
