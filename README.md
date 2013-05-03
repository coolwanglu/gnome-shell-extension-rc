This extension allows you add handy stuffs in ~/.gnomeshellrc.js

###Why

GNOME-Shell is powerful for its extension system, for example you can easily remove the a11y icon by install an extension.

But isn't that weird that you have to install an extension for this? Why does the author have to write (and pack) an extension when this can be achieved by a one liner (see the example below).
 
Consider this *one-liner* extension as Stylish or GreaseMonkey for GNOME-Shell, except that there is no repository.

Happy hacking!

###Examples

```javascript
/*
 * Add a new path for the Run Dialog
 */
let cur_p = GLib.getenv('PATH');
let new_p = '/new/path/you/want/to/add';
if((':'+cur_p+':').search(':'+new_p+':') == -1) {
    GLib.setenv('PATH', new_p+':'+cur_p, true);
}

/*
 * One liner to remove a11y
 */
(Main.panel.statusArea||Main.panel._statusArea).a11y.actor.hide(); 
```

###How to install
- Create a zip of everything
- Install through gnome-tweak-tool
