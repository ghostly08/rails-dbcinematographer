// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"


Rails.start()
Turbolinks.start()

// Import External Libreries
import "@fortawesome/fontawesome-free/js/all";
require("jquery")
require ("jquery_ujs")

// import "bootstrap-sprockets";
import "bootstrap";
// import "../stylesheets/application";

console.log("hello from applicaton js")

// Import components
import { openPopup } from "./banner.js"
import { closePopup } from "./banner.js"
