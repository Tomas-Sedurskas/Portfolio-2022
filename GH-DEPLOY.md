How to deploy to gh pages

1. yarn build
2. git add dist -f
3. git commit -m "Add dist"
4. git subtree push --prefix dist origin gh-pages
