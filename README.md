This extension allows you add handy stuffs in ~/.gnomeshellrc.js

E.g.

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
