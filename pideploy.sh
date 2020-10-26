git branch -f gh-pages-pi

git checkout gh-pages-pi

git reset --hard origin/main

cp src/Config/peepulIndia.js src/Config/config.js

npm run build

cp -r build/* .

echo 'donate.peepulindia.org' > CNAME

git add -A .

git commit -a -m 'gh-pages-pi update'

git push origin gh-pages-pi --force

git checkout main