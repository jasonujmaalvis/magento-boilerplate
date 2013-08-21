<h1>Magento Boilerplate</h1>

Author: Jason Alvis<br />
Author Email: hello@jasonalvis.co.uk<br />
Version: 1.0.1<br />
License: Free General Public License (GPL)<br />

<h2>Brief</h2>
Starting a Magento project the right way is a must for any developer. This project has many benefits and is the base framework for any new project I start. It adheres to the recommended Magento templating hierarchy and works staight out of the box. Plug, play and enjoy! Oh did I mention it's free to use as well?

<h2>Goods</h2>

<h3>Custom Templates</h3>
It includes custom templates for the home page, category, product and static pages. The category and product pages are already set in local.xml. You can set the home page and any CMS static pages to their corresponding custom template via the admin panel under CMS > Pages. Select the page in question and in the design tab select the layout from the drop down field.
<ul>
<li>Home = home.phtml</li>
<li>Static = static.phtml</li>
</ul>

<h3>Removes default xml blocks</h3>
Removes default xml blocks that are rarely used from within local.xml

<h3>HTML5/CSS3 Ready and includes Modernizr</h3>
Ready to use HTML5 tags and CSS3 selectors.

<h3>Includes jQuery in no conflict mode</h3>
jQuery 1.7.2 minified version in no conflict mode is included as default. You can change this to include the latest version of jQuery if you wish.

<h3>Custom JavaScript files per template and Plugins JavaScript File</h3>
Need a seperate .js file just for the home page? It's got that included as default, great for specifying JavaScript that is only to be rendered on certain pages.
<ul>
<li>common.js (included on every page)</li>
<li>home.js (included on the home page only)</li>
<li>category.js (included on the category page only)</li>
<li>product.js (included on the product page only)</li>
<li>static.js (included on the static page only)</li>
</ul>
There is also an all rounder plugin js file (plugins.all.min.js) whereby you can put in your various JavaScript plugins such as jQuery UI, Easing, MouseWheel etc.

<h3>LESS CSS Included</h3>
It includes LESS CSS as default, if your new to this I would highly recommend checking it out by visiting their website http://lesscss.org/. If you don't want to use LESS it can be removed very easily within local.xml and head.phtml

<h3>Normalize.css</h3>
Normalize.css is included making browsers render all elements more consistently. It is included via the import method in the styles.less file. For more information on normalize please head over to their website http://necolas.github.io/normalize.css/

<h2>Installation</h2>
Drop in the templates app, js and skin within your Magento hierarchy e.g:<br />
magento > public_html > app<br />
magento > public_html > js<br />
magento > public_html > skin<br /><br />
You will then need to rename the "mypackagename" to a name of your choice in both the app and skin directories. Then you will need to change the package name in the admin panel to render the new package you have just installed (system > configuration > design > package).
