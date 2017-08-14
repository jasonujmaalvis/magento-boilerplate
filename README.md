#Magento Boilerplate

##Brief
Starting a Magento project the right way is a must for any developer. This project has many benefits and is the base framework for any new project I start. It adheres to the recommended Magento templating hierarchy and has been built from the ground up.<br /><br />
Note: This boilerplate is **NOT** complete, it is an ongoing project and it will take time to finish. The CSS has been written from scratch and I am slowly styling section by section as I go along, sit tight. If your expecting a fully fledged finished framework this is not for you.<br /><br />
A demo site will be added in due course.

##Goods

###Sass
The CSS has been written completely from scratch and is component based meaning each area is isolated making it highly re-useable. It is based of the [HTML5 boilerplate](http://html5boilerplate.com/) and also includes the latest version of [Normalize](https://necolas.github.io/normalize.css/).

###Removes default xml blocks
Magento by default bundles a handful of xml blocks that are rarely used and only causes bloat, so I removed them from within local.xml.<br /><br />
Note: They can be added back in if you need them by simply removing the line of code from local.xml.

###Removes unnecessary JS files that are rarely used
Magento by default bundles a handful of JS files that are rarely used and only causes bloat/performance issues, so I removed them from within local.xml.<br /><br />
Note: They can be added back in if you need them by simply removing the line of code from local.xml.

###Includes jQuery in no conflict mode
jQuery v1.10.2 minified in no conflict mode is included as default, you can change this to include a more up to date version if you wish. It gets included at the very bottom of the dom just like it should be.<br /><br />
This improves performance issues particularly on mobile devices as when a browser hits a script tag it actually waits for that entire asset to download before it proceeds, if it's in the head your going to block everything that renders visually on your page from starting.

###Grunt
Grunt is all setup and ready to go. It comes with the following tasks:

[Sprite Generation](https://github.com/Ensighten/grunt-spritesmith)
[LibSass](https://github.com/sindresorhus/grunt-sass)
[JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
[Concat](https://github.com/gruntjs/grunt-contrib-concat)
[Uglify](https://github.com/gruntjs/grunt-contrib-uglify)
[Watch](https://github.com/gruntjs/grunt-contrib-watch)

##Installation
Drop in the directories app and skin within your Magento hierarchy e.g:<br /><br />
magento > public_html > app<br />
magento > public_html > skin<br /><br />
Then you will need to change the package name in the admin panel to render the new package you have just installed (system > configuration > design > package).

##Using Grunt
First off I'm going to assume you have successfully installed Node.js and Grunt, if you haven't you need to do this first.
First install [Node.js](http://nodejs.org/download/) then install [Grunt](http://gruntjs.com/getting-started). Once you've done that proceed below.

cd into the skin theme directory like so

```shell
cd {site_path}/skin/frontend/magentoboilerplate/default
```

Install the project dependencies

```shell
npm install
```

Make changes to your files (sass and js) then you'll want to run grunt to initiate the tasks

```shell
grunt
```

Take it a step further and install the browser add-on [LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-). With LiveReload you won’t have to go back to your browser and refresh the page. Page refreshes happen automatically and in the case of CSS, new styles are injected without a page refresh.
