<h1>Magento Boilerplate</h1>

Author: Jason Alvis<br />
Author Email: hello@jasonalvis.co.uk<br />
Version: 1.0.5<br />
License: Free General Public License (GPL)<br />

<h2>Brief</h2>
Starting a Magento project the right way is a must for any developer. This project has many benefits and is the base framework for any new project I start. It adheres to the recommended Magento templating hierarchy and works staight out of the box. Plug, play and enjoy! Oh did I mention it's free to use as well?

<h2>Goods</h2>

<h3>Grunt or Standard</h3>
This can optionally be used, I would highly recommend you use it, it must be a localhost setup to benefit the advantages. If your new to it please checkout the links below.<br /><br />
Theres a whole bunch on compilers available, all down to personal preference, they will save you heaps of work, I would recommend Mac users to take a look at Codekit or for Windows users have a look at Prepros.<br /><br />
Explaining how to set this up is beyond the scope of this readme, please refer to the compilers documentation, each one is different.<br /><br />
SASS: http://sass-lang.com/<br />
Compass: http://compass-style.org/

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
jQuery 1.7.2 minified in no conflict mode is included as default, you can change this to include the latest version of jQuery if you wish. It gets included at the very bottom of the dom just like it should be.<br /><br />
This improves performance issues particularly on mobile devices as when a browser hits a script tag it actually waits for that entire asset to download before it proceeds, if it's in the head your going to block everything that renders visually on your page from starting.

<h3>Optional custom jQuery files per template</h3>
The boilerplate comes with jquery.run.min.js which is where you should put all your custom jQuery. Optionally within local.xml it has the ability to include a specific JS file for a particular page, great for specifying jQuery that is only to be rendered on certain pages.
<ul>
<li>jquery.run.min.js (included on every page)</li>
<li>jquery.home.js (optional - included on the home page only)</li>
<li>jquery.category.js (optional - included on the category page only)</li>
<li>jquery.product.js (optional - included on the product page only)</li>
<li>jquery.static.js (optional - included on the static page only)</li>
</ul>

<h3>HTML5 / CSS3 / Media queries ready</h3>
Ready to use HTML5 tags, CSS3 selectors and media queries. Modernizr is included by default. If later than IE9 html5shiv.js, respond.min.js and selectivizr.min.js gets included.<br /><br />
Html5shiv: http://code.google.com/p/html5shiv/<br />
Respond: https://github.com/scottjehl/Respond<br />
Selectivizr: http://selectivizr.com/

<h2>Installation</h2>
Drop in the directories app and skin within your Magento hierarchy e.g:<br /><br />
magento > public_html > app<br />
magento > public_html > skin<br /><br />
You will then need to rename the "mypackagename" to a name of your choice in both the app and skin directories. Then you will need to change the package name in the admin panel to render the new package you have just installed (system > configuration > design > package).
