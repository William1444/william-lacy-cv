# william-lacy-cv
## run

install node & npm

npm install

node app.js

## deploy to heroku

### config
heroku config:set ADMIN_EMAIL_ADDRESS=<email_to_use_as_smtp_server>
heroku config:set ADMIN_EMAIL_PASS=<password>
heroku config:set SMTP_SERVER=<smtp server> (optional, defaults to smtp.gmail.com)
