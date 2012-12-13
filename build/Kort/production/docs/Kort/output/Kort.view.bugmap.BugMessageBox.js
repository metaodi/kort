Ext.data.JsonP.Kort_view_bugmap_BugMessageBox({"tagname":"class","name":"Kort.view.bugmap.BugMessageBox","extends":"Ext.MessageBox","mixins":[],"alternateClassNames":[],"aliases":{"widget":["bugmessagebox"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.view.bugmap.BugMessageBox","code_type":"ext_define","members":{"cfg":[{"name":"cls","tagname":"cfg","owner":"Kort.view.bugmap.BugMessageBox","meta":{"private":true},"id":"cfg-cls"},{"name":"zIndex","tagname":"cfg","owner":"Kort.view.bugmap.BugMessageBox","meta":{"private":true},"id":"cfg-zIndex"}],"property":[],"method":[{"name":"confirm","tagname":"method","owner":"Kort.view.bugmap.BugMessageBox","meta":{},"id":"method-confirm"},{"name":"getCls","tagname":"method","owner":"Kort.view.bugmap.BugMessageBox","meta":{},"id":"method-getCls"},{"name":"getZIndex","tagname":"method","owner":"Kort.view.bugmap.BugMessageBox","meta":{},"id":"method-getZIndex"},{"name":"setCls","tagname":"method","owner":"Kort.view.bugmap.BugMessageBox","meta":{},"id":"method-setCls"},{"name":"setZIndex","tagname":"method","owner":"Kort.view.bugmap.BugMessageBox","meta":{},"id":"method-setZIndex"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"BugMessageBox.js","href":"BugMessageBox.html#Kort-view-bugmap-BugMessageBox"}],"html_meta":{},"statics":{"cfg":[],"property":[{"name":"YESNO","tagname":"property","owner":"Kort.view.bugmap.BugMessageBox","meta":{"private":true,"static":true},"id":"property-YESNO"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.MessageBox"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.MessageBox<div class='subclass '><strong>Kort.view.bugmap.BugMessageBox</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox' target='_blank'>BugMessageBox.js</a></div></pre><div class='doc-contents'><p>Message box which shows bug details</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-cfg-cls' class='name expandable'>cls</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'bugMessageBox'</code></p></div></div></div><div id='cfg-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-cfg-zIndex' class='name not-expandable'>zIndex</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-YESNO' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-property-YESNO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-property-YESNO' class='name not-expandable'>YESNO</a><span> : Object</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-confirm' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-method-confirm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-method-confirm' class='name expandable'>confirm</a>( <span class='pre'>title, message, fn, scope</span> )</div><div class='description'><div class='short'>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: use own yes/no labels ...</div><div class='long'><p>OVERRIDEN SENCHA TOUCH FUNCTION\nCHANGE: use own yes/no labels</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-method-getCls' class='name expandable'>getCls</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of cls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.bugmap.BugMessageBox-cfg-cls\" rel=\"Kort.view.bugmap.BugMessageBox-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-method-getZIndex' class='name expandable'>getZIndex</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of zIndex. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.view.bugmap.BugMessageBox-cfg-zIndex\" rel=\"Kort.view.bugmap.BugMessageBox-cfg-zIndex\" class=\"docClass\">zIndex</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-method-setCls' class='name expandable'>setCls</a>( <span class='pre'>cls</span> )</div><div class='description'><div class='short'>Sets the value of cls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.bugmap.BugMessageBox-cfg-cls\" rel=\"Kort.view.bugmap.BugMessageBox-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.view.bugmap.BugMessageBox'>Kort.view.bugmap.BugMessageBox</span><br/><a href='source/BugMessageBox.html#Kort-view-bugmap-BugMessageBox-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.view.bugmap.BugMessageBox-method-setZIndex' class='name expandable'>setZIndex</a>( <span class='pre'>zIndex</span> )</div><div class='description'><div class='short'>Sets the value of zIndex. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.view.bugmap.BugMessageBox-cfg-zIndex\" rel=\"Kort.view.bugmap.BugMessageBox-cfg-zIndex\" class=\"docClass\">zIndex</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});