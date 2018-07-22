"use strict";

// emojify returns the corresponding emoji image
function emojify(name) {
    var out = `<img src="emojis/` + name + `.png">`;
    return out;
}

// cast returns a spell (function) that decorates the wizard
function cast(emoji) {
    var magic = emojify("magic");
	return function (wizard) {
		return wizard + " " + magic + " " + emoji + " " + magic;
	};
}
// vue components
Vue.component("harry", {
    template: `<p>${emojify("harry")}</p>`
});
Vue.component("ron", {
    template: `<p>${emojify("ron")}</p>`
});
Vue.component("hermione", {
    template: `<p>${emojify("hermione")}</p>`
});

// vue components with props (properties)
Vue.component("wizard", {
    props: ["name", "cast"],
    template: `<p v-html="cast(name)"><slot></slot></p>` //<slot></slot> to uderstand input between opening and closing component tag
});

var app = new Vue({
    el: "#app",
    data: {
		harry       : emojify("harry"      ),
		ron         : emojify("ron"        ),
		hermione    : emojify("hermione"   )
	},
    methods: {
		// oculus_reparo returns a spell (function) that repairs glasses		
		oculus_reparo: cast(emojify("oculus-reparo")),		
		// wingardium_leviosa returns a spell (function) that levitates an object
		wingardium_leviosa: cast(emojify("wingardium-leviosa")),
		// alohomora returns a spell (function) that unlocks a door
		alohomora: cast(emojify("alohomora"))
	}
});