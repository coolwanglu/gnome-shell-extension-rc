This extension allows you add handy stuffs in ~/.gnomeshellrc.js

E.g.

```javascript
let p='/extra/path/for/run/dialog';
GLib.setenv('PATH', p+':'+GLib.getenv('PATH'), true);
```
