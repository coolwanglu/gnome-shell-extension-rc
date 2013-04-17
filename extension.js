const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

const RC_FILENAME = '.gnomeshellrc.js';

function init() { }

function enable() {
    try{
        eval(Gio.file_new_for_path(GLib.getenv('HOME') + '/' + RC_FILENAME).load_contents(null)[1].toString());
    }
    catch(e){ }
}

function disable() { }
