
Ext.define("Ext.locale", {
    statics: {
        translate: function(text) {
            var base = parent.langArray || {};
            var p_pattern = ['\\.\\.\\.$','\\.$',':$',' \\?$','\\?$',' $'];
            var p_match = null;
            p_pattern.forEach(function(pattern) {
                if (!p_match) {
                    var regex = new RegExp(pattern);
                    p_match = text.match(regex);
                    if (p_match) {
                        var new_text = text.replace(regex, '');
                        if (base.hasOwnProperty(new_text)) {
                            text = base[new_text]+p_match;
                        }
                    }
                }
            });
            return (base.hasOwnProperty(text)) ? base[text] : text;
        }
    }
});
