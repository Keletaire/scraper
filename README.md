# Scraper
Scraper is a simple webscraper built using [node.js](http://nodejs.org/),
[phantomjs](http://phantomjs.org/), and
[phantom](https://github.com/alexscheelmeyer/node-phantom).

Scraper is based on code found in the tutorial
[Screen Scraping with Node.js](http://code.tutsplus.com/tutorials/web-scraping-with-node-js--net-25560),
which provides some background to web scraping and essentially
explains the foundations of the code line by line.  Definitely give it a read
before getting started.

Basically, the best way to scrape a dynamic internet built with javascript is
by using tools built in javascript that can imitate the way web browsers render
the content of an increasing number of dynamic pages.

After you get node installed, just run these commands.

```bash
$ git clone git@github.com:selbyk/scraper.git
$ cd scraper
$ npm install
$ node app.js
```

Install and/or debug until you get this output instead of a sea of errors:
```bash
$ node app.js
opened site?  success
{ h2: [ 'Article 1', 'Article 2', 'Article 3' ],
  p:
   [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
     'Ut sed nulla turpis, in faucibus ante. Vivamus ut malesuada est. Curabitur vel enim eget purus pharetra tempor id in tellus.',
     'Curabitur euismod hendrerit quam ut euismod. Ut leo sem, viverra nec gravida nec, tristique nec arcu.' ] }
$
```

Don't know where this project is going, but I have some ideas if you're open to collaboration.
You can find me in #sentiment on chat.freenode.net, by e-mail, or can stalk me down any other way.

Just don't show up at my apartment at 3 AM.  Not cool, bro.

-[Selby Kendrick](http://selby.io/)
