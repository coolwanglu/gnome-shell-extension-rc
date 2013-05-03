/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab filetype=javascript : */
/*
 * imports 
 * lexicographical
 */
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Main = imports.ui.main;
const Meta = imports.gi.Meta;

try{
  /*
   * Add a new path for the Run Dialog
   */
  let cur_p = GLib.getenv('PATH');
  let new_p = '/new/path/you/want/to/add';
  if((':'+cur_p+':').search(':'+new_p+':') == -1) {
    GLib.setenv('PATH', new_p+':'+cur_p, true);
  }
}catch(e){}

try{
  /*
   * Remove a11y
   * from the 'Remove Accessibility' extension
   */
  (Main.panel.statusArea || Main.panel._statusArea).a11y.actor.hide(); 
}catch(e){}

try{
  /*
   * Remove clock
   */
  (Main.panel._dateMenu || Main.panel.statusArea.dateMenu).actor.hide();
}catch(e){}

try{
  /*
   * Set clock format
   */
  let dm = Main.panel.statusArea.dateMenu; 
  dm._clock.connect('notify::clock', function(){
    dm._clockDisplay.set_text((new Date()).toLocaleFormat('%a %F %T'));
  });
}catch(e){}

try{
  /*
   * Add min & max buttons to the titlebar
   * from the 'default-min-max' extension
   */
  Meta.prefs_override_preference_schema('button-layout', 'org.gnome.desktop.wm.preferences');
}catch(e){}

