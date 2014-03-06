<h1>Magento Boilerplate</h1>

Author: Jason Alvis<br />
Author Email: hello@jasonalvis.co.uk<br />
Version: 1.0.5<br />
License: Free General Public License (GPL)<br />

<h2>Brief</h2>
Starting a Magento project the right way is a must for any developer. This project has many benefits and is the base framework for any new project I start. It adheres to the recommended Magento templating hierarchy and works staight out of the box. Plug, play and enjoy! Oh did I mention it's free to use as well?

<h2>Goods</h2>

<h3>Grunt or Standard</h3>
There are two themes that come with the boilerplate in the skin directory. The first being default which is targeted to the Grunt setup and the second being default-standard which is targeted to the standard SASS setup. You get to decide which one to go with depending on what your familiar with. Just delete the one you aren't going to use.

<a href="http://gruntjs.com/" target="_blank">Grunt</a><br />
<a href="http://sass-lang.com/" target="_blank">SASS</a><br />
<a href="http://compass-style.org/" target="_blank">Compass</a>

<h3>Custom templates</h3>
It includes custom templates for the home page, category, product and static pages. The category and product pages are already set in local.xml. You can set the home page and any CMS static pages to their corresponding custom template via the admin panel under CMS > Pages. Select the page in question and in the design tab select the layout from the drop down field.
<ul>
<li>Home = home.phtml</li>
<li>Category = category.phtml</li>
<li>Product = product.phtml</li>
<li>Static = static.phtml</li>
</ul>

<h3>Removes default xml blocks</h3>
Magento by default bundles a handful of xml blocks that are rarely used and only causes bloat, so I removed them from within local.xml.<br />
Note: They can be added back in if you need them by simply removing the line of code from local.xml.

<h3>Removes unnecessary JS files that are rarely used</h3>
Magento by default bundles a handful of JS files that are rarely used and only causes bloat/performance issues, so I removed them from within local.xml.<br />
Note: They can be added back in if you need them by simply removing the line of code from local.xml.

<h3>Includes jQuery in no conflict mode</h3>
jQuery v1.10.2 minified in no conflict mode is included as default, you can change this to include a more up to date version if you wish. It gets included at the very bottom of the dom just like it should be.<br /><br />
This improves performance issues particularly on mobile devices as when a browser hits a script tag it actually waits for that entire asset to download before it proceeds, if it's in the head your going to block everything that renders visually on your page from starting.

<h3>Optional custom jQuery files per template</h3>
Within local.xml it has the ability to include a specific JS file for a particular page, great for specifying JavaScript that is only to be rendered on certain pages.
<ul>
<li>jquery.home.js (optional - included on the home page only)</li>
<li>jquery.category.js (optional - included on the category page only)</li>
<li>jquery.product.js (optional - included on the product page only)</li>
</ul>

<h3>HTML5 / CSS3 / Media queries ready</h3>
Ready to use HTML5 tags, CSS3 selectors and media queries. Modernizr is included by default. If later than IE9 html5shiv.js, respond.min.js and selectivizr.min.js gets included.

<a href="http://code.google.com/p/html5shiv/" target="_blank">Html5shiv</a><br />
<a href="https://github.com/scottjehl/Respond" target="_blank">Respond</a><br />
<a href="http://selectivizr.com/" target="_blank">Selectivizr</a>

<h2>Installation</h2>
Drop in the directories app and skin within your Magento hierarchy e.g:<br /><br />
magento > public_html > app<br />
magento > public_html > skin<br /><br />
You will then need to rename the "mypackagename" to a name of your choice in both the app and skin directories. Then you will need to change the package name in the admin panel to render the new package you have just installed (system > configuration > design > package).

<h2>Using Grunt</h2>
First off I'm going to assume you have successfully installed Node.js and Grunt, if you haven't you need to do this first.
First install <a href="http://nodejs.org/download/" target="_blank">Node.js</a> then install <a href="http://gruntjs.com/getting-started" target="_blank">Grunt</a>. Once you've done that proceed below.

1. cd into the skin theme directory like so

```shell
cd /Applications/MAMP/htdocs/yoursite/skin/frontend/mypackagename/default
```

2. Install the project dependencies

```shell
npm install
```

3. Make changes to your files (sass and js) then you'll want to run grunt to initiate the tasks

```shell
grunt
```

4. To save you running grunt each time you change something simply run the watch task and it will automatically detect changes on the fly

```shell
grunt dev
```

5. Take it a step further and install the browser add-on <a href="http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-" target="_blank">LiveReload</a>. With LiveReload you won’t have to go back to your browser and refresh the page. Page refreshes happen automatically and in the case of CSS, new styles are injected without a page refresh.

6.  Enjoy it!
