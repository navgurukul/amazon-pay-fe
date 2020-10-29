git branch -f gh-pages

git checkout gh-pages

git reset --hard origin/main

cp public/ng.html public/index.html

cp src/UIComponents/NGComponents.js src/UIComponents/index.js

npm run build

cp -r build/* .

echo 'donate.navgurukul.org' > CNAME

git add -A .

git commit -a -m 'gh-pages update'

git push origin gh-pages --force

git checkout main