## Blog Posts

### Blog Files

Blog posts should be saved as markdown files in the `/blog` folder. Name each blog post with the numerical date of creation `YYYY-mm-dd` followed by it's hyphenated title:

`2025-01-01-build-name.md`

Each blog post's front matter will require a `title` and `status`:

    ---
    title: Blog Post Name
    ---

> Because each blog post has a date in its file name, there is no need for a `date` key in the front matter.

## Builds

### Build Files

Builds should be saved as markdown files in the `/builds` folder. Name build files with the numerical date of creation `YYYY-mm-dd` followed by it's hyphenated title:

`2025-01-01-build-name.md`

### Front Matter

Each build's front matter will require a `title` and `status`:

    ---
    title: Build Name
    type: 
        - coaster
        - tool
        - flat ride
        - build
    ---

> Because each build has a date in its file name, there is no need for a `date` key in the front matter.